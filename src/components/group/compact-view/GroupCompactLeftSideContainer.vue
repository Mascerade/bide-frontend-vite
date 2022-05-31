<template>
  <div
    class="xl:w-[22rem] xl:min-h-[calc(100vh-4rem)] xl:max-h-[calc(100vh-3.5rem)] xl:p-4"
  >
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.thin-scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.thin-scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #2ff376;
}
.thin-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}
.thin-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
.thin-scroll::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0.9);
}
</style>
