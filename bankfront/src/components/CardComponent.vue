<template>
  <div class="wrapper">
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: "CardComponent"
}
</script>

<style scoped>
.wrapper{
  display: flex;
  background: rgba(255, 253, 237, 0.55);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 253, 237, 0.3);
  margin: 24px;
  border-radius: 24px;
  justify-items: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 8px;
}
</style>