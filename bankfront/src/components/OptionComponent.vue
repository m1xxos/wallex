<template>
<div class="wrapper" @click="click">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "OptionComponent",
  methods: {
    click(){
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.wrapper:hover{
  background-color: lightgrey;
  z-index: -100;

  border-radius: 24px 24px 0 0 ;
}
.wrapper{
  line-height: 30px;
  padding: 16px;
}
</style>