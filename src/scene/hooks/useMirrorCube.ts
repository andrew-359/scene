import { BoxGeometry, Mesh, MeshPhysicalMaterial, Group, CubeCamera, WebGLRenderer, Scene, WebGLCubeRenderTarget } from 'three';

export const useMirrorCube = () => {
  let group: Group | null = null;
  let cube: Mesh | null = null;
  let cubeCamera: CubeCamera | null = null;
  let update: ((renderer: WebGLRenderer, scene: Scene) => void) | null = null;

  const create = (position: [number, number, number], size = 1) => {
    if (group) return;
    const renderTarget = new WebGLCubeRenderTarget(256);
    cubeCamera = new CubeCamera(0.1, 100, renderTarget);
    cubeCamera.position.set(...position);
    const mirrorMaterial = new MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
      reflectivity: 1,
      envMap: cubeCamera.renderTarget.texture,
      envMapIntensity: 1,
    });
    const geometry = new BoxGeometry(size, size, size);
    cube = new Mesh(geometry, mirrorMaterial);
    cube.position.set(...position);
    cube.castShadow = true;
    cube.receiveShadow = true;
    group = new Group();
    group.add(cube);
    group.add(cubeCamera);
    update = (renderer: WebGLRenderer, scene: Scene) => {
      if (!cube || !cubeCamera) return;
      cube.visible = false;
      cubeCamera.update(renderer, scene);
      cube.visible = true;
    };
  };

  const getGroup = () => group;
  const getCamera = () => cubeCamera;
  const getUpdate = () => update;

  const dispose = () => {
    if (group) group.clear();
    if (cube) {
      cube.geometry.dispose();
      if (Array.isArray(cube.material)) {
        cube.material.forEach(m => m.dispose());
      } else {
        cube.material.dispose();
      }
    }
    group = null;
    cube = null;
    cubeCamera = null;
    update = null;
  };

  return {
    create,
    getGroup,
    getCamera,
    getUpdate,
    dispose,
  };
}; 