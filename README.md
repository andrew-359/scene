# Vue ThreeJS Scene Demo

## Описание

Интерактивная 3D-сцена на Vue 3 + three.js с кубом, дверью, светящимся глазом, землёй и управляемым освещением.

## Структура проекта

```
src/
  main.ts                — точка входа Vue-приложения
  App.vue                — корневой компонент
  scene/
    Scene.vue            — основной компонент 3D-сцены
    SceneHints.vue       — подсказки по управлению
    Loader.vue           — индикатор загрузки
    useScene.ts          — логика инициализации и управления сценой
    constants.ts         — все общие константы 
    hooks/
      useCube.ts         — логика куба
      useDoor.ts         — логика двери 
      useEyeLight.ts     — логика светящегося глаза/сферы
      useGround.ts       — логика земли
      useLighting.ts     — управление основным светом
      useSky.ts          — небо
      useCoreSceneObjects.ts — базовые объекты three.js
  assets/
    box.png              — текстура для куба
```

## Технологии
- Vue 3, Vite, TypeScript
- three.js
- PrimeVue, TailwindCSS
- ESLint, TypeScript ESLint

## Как запустить

1. Установите зависимости:
   ```
   npm install
   ```
2. Запустите проект:
   ```
   npm run dev
   ```
## Управление
- **Стрелки** — перемещение куба по земле
- **Колесо мыши** — приближение/отдаление камеры
- **Кнопки** — включение/выключение света, телепорт куба

## Расширение
- Для новых объектов или логики — создавайте хуки в `src/scene/hooks/`.
