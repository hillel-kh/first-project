<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<style scoped>
.layout {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>