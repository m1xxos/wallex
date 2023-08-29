<template>
  <div class="wrapper">
    <div>
      <p class="bank">{{ bankName }}</p>
      <p class="balance">Баланс: {{ balance }} руб.</p>
    </div>
    <button @click="interact"><u>действия</u></button>

  </div>
</template>

<script>
export default {
  name: "WallexCard",
  emits: ['interact'],
  data(){
    return{
      bankName: 'Wallex',
      balance: '10000'
    }
  },
  methods: {
    interact(){
      this.$emit('interact')
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
  margin: 24px;
  border-radius: 24px;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 16px;
}
p{
  margin: 0;
  padding: 0;
  line-height: 30px;
}
.bank{
  font-weight: bold;
}
button{
  background-color: transparent;
  border: none;
  font-size: 15px;


}
</style>