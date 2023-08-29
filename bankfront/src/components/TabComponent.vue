<template>
  <div class="wrapper">
    <button>
      <img width="48" height="48" :src=image alt="money"/>
      {{this.text}}
    </button>
  </div>

</template>

<script>
export default {
  name: "TabComponent",
  props: {
    text: '',
    backgroundColor: '',
    colorText: '',
    image: ''
  }
}
</script>

<style scoped>
  button {
    width: 100%;
    height: 80px;
    color: v-bind(colorText);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: v-bind(backgroundColor);
    border: none;
  }
  img{
    width: 40px;
    height: 40px;
  }
</style>