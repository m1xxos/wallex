<template>
<div class="wrapper">
  <img :src=currency alt="">
  <div>
    <p class="bank">{{ bankName }}</p>
    <p class="balance">Баланс: {{ balance }}</p>

  </div>

</div>

</template>

<script>
export default {
  name: "PaymentCard",
  props: {
    currency: '',
    bankName: '',
    balance: '',
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  cursor: pointer;
  background: rgba(255, 253, 237, 0.55);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 253, 237, 0.3);
    margin: 24px;
  border-radius: 24px;
  justify-items: center;
  align-items: center;
  gap: 16px;
  padding: 16px 8px;
}
img{
  width: 50px;
  height: 50px;
}
p{
  margin: 0;
  padding: 0;
  line-height: 30px;
}
.bank{
  font-weight: bold;
}
</style>