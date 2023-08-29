<template>
<card-component>
  <p>Перевод между счетами Финбанка</p>
</card-component>
  <card-component>
    <p>Оплата по QR-коду</p>
  </card-component>
  <card-component>
    <p>Перевод на карту другого банка</p>
  </card-component>
</template>

<script>
import CardComponent from "@/components/CardComponent";

export default {
  name: "PaymentView",
  components: {CardComponent}

}
</script>

<style scoped>
p{
  font-size: 18px;
  font-weight: 500;
}
</style>