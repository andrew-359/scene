export interface UseScene {
    mount: (canvas: HTMLCanvasElement) => void;
    dispose: () => void;
    toggleAmbientLight: () => void;
    toggleEyeLight: () => void;
    moveCube: (direction: string) => void;
    teleportCube: () => void;
    setDoorSize: ({ width, height }: { width: number, height: number }) => void;
  }
  
  // Тип для конфига куба
  type CubeConfig = {
    size: number;
    position: [number, number, number];
  }
  
  type EnvironmentConfig = {
    type: 'environment';
    groundColor: string;
    groundSize: number;
  }
  
  export interface SceneConfig {
    cube: CubeConfig;
    background?: string;
    environment: EnvironmentConfig;
  }

  export type CubeMovementLimits = {
    groundSize: number;
    cubeSize: number;
    sphereCenter: { x: number; y: number; z: number };
    minDistance: number;
    maxDistance: number;
  };