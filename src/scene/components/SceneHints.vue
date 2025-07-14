<template>
  <div class="scene-hints">
    <div class="hint-title">Управление кубом:</div>
    <ul class="hint-list">
      <li>⬅️ ⬆️ ⬇️ ➡️ — перемещение куба по земле</li>
      <li>Колесо мыши — приближение/отдаление камеры</li>
    </ul>
  </div>
</template>

<style scoped>
.scene-hints {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 16px auto;
  background: #181e2a;
  color: #fff;
  border-radius: 10px;
  padding: 16px 24px;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.hint-title {
  font-weight: bold;
  margin-bottom: 6px;
}
.hint-list {
  margin: 0;
  padding-left: 18px;
}
.hint-list li {
  margin-bottom: 2px;
}
</style> 