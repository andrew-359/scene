import { BoxGeometry, Mesh, MeshPhysicalMaterial, Group, CubeCamera, WebGLRenderer, Scene, WebGLCubeRenderTarget } from 'three';

export interface MirrorCube {
  group: Group;
  cubeCamera: CubeCamera;
  update: (renderer: WebGLRenderer, scene: Scene) => void;
}

export const useMirrorCube = () => {
  const createMirrorCube = (position: [number, number, number] = [-2, 0.5, -2], size = 1): MirrorCube => {
    // CubeCamera для динамического отражения
    const renderTarget = new WebGLCubeRenderTarget(256);
    const cubeCamera = new CubeCamera(0.1, 100, renderTarget);
    cubeCamera.position.set(...position);
    // Максимально зеркальный материал
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
    // Основной куб
    const geometry = new BoxGeometry(size, size, size);
    const cube = new Mesh(geometry, mirrorMaterial);
    cube.position.set(...position);
    cube.castShadow = true;
    cube.receiveShadow = true;
    // Группа
    const group = new Group();
    group.add(cube);
    group.add(cubeCamera);
    // Функция обновления отражения
    const update = (renderer: WebGLRenderer, scene: Scene) => {
      cube.visible = false;
      cubeCamera.update(renderer, scene);
      cube.visible = true;
    };
    return { group, cubeCamera, update };
  };

  return {
    createMirrorCube,
  };
}; 