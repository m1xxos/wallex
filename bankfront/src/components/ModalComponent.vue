<template>

<div class="wrapper">
  <div class="closeButton">
    <button @click="close">
      х
    </button>
  </div>

  <selector-component></selector-component>
</div>
</template>

<script>
import SelectorComponent from "@/components/SelectorComponent";

export default {
  name: "ModalComponent",
  components: {SelectorComponent},

  emits: ["close"],
  methods: {
    close(){
      this.$emit('close');
    }
  }
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

  border-radius: 24px;
  justify-items: center;
  align-items: center;
  text-align: center;
  justify-content: center;

  position: fixed;
  bottom:40%;
  left: 30%;
  flex-direction: column;
  width: max-content;

}
.closeButton{
  display: flex;
  width:100%;
  justify-content: right;

}
button{
  background-color: transparent;
  border: none;
  padding: 8px 16px;
}
</style>