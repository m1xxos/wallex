<template>
<div>
  <option-component>
    <p>Детали счёта</p>
  </option-component>
  <option-component>
    <p>Пополнить счёт</p>
  </option-component>
  <option-component>
    <p>Удалить карту</p>
  </option-component>
</div>
</template>

<script>
import OptionComponent from "@/components/OptionComponent";

export default {
  name: "SelectorComponent",
  components: {OptionComponent}

}
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
</style>