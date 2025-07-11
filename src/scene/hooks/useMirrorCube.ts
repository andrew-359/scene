import { BoxGeometry, Mesh, MeshStandardMaterial, MeshBasicMaterial, Group, CubeCamera, WebGLRenderer, Scene, WebGLCubeRenderTarget } from 'three';

export interface MirrorCube {
  group: Group;
  cubeCamera: CubeCamera;
  update: (renderer: WebGLRenderer, scene: Scene) => void;
}

export const useMirrorCube = () => {
  const createMirrorCube = (position: [number, number, number] = [0, 0.5, -2], size = 1): MirrorCube => {
    // CubeCamera для динамического отражения
    const renderTarget = new WebGLCubeRenderTarget(128);
    const cubeCamera = new CubeCamera(0.1, 100, renderTarget);
    cubeCamera.position.set(...position);
    // Материал зеркальный
    const mirrorMaterial = new MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.05,
      envMap: cubeCamera.renderTarget.texture,
      envMapIntensity: 1,
    });
    // Wireframe
    const wireframeMaterial = new MeshBasicMaterial({ color: 0x000000, wireframe: true });
    // Основной куб
    const geometry = new BoxGeometry(size, size, size);
    const cube = new Mesh(geometry, mirrorMaterial);
    cube.position.set(...position);
    cube.castShadow = true;
    cube.receiveShadow = true;
    // Wireframe поверх
    const wireframe = new Mesh(geometry, wireframeMaterial);
    wireframe.position.copy(cube.position);
    // Группа
    const group = new Group();
    group.add(cube);
    group.add(wireframe);
    group.add(cubeCamera);
    // Функция обновления отражения
    const update = (renderer: WebGLRenderer, scene: Scene) => {
      cube.visible = false;
      wireframe.visible = false;
      cubeCamera.update(renderer, scene);
      cube.visible = true;
      wireframe.visible = true;
    };
    return { group, cubeCamera, update };
  };

  return {
    createMirrorCube,
  };
}; 