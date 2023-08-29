<template>
  <div>
    <option-component>
      <p>Пополнить счёт</p>
    </option-component>
    <option-component>
      <p>Перевести на иностранную карту</p>
    </option-component>
    <option-component @click="createCard">
      <p>Создать карту в иностранном банке</p>
    </option-component>
    <div class="create" v-if="create">
      <p>Введите название счёта:</p>
      <input id='titlePayment' v-model="title" type="text" autofocus>
      <p>Выберите валюту:</p>
      <select v-model="currency">
        <option disabled selected="selected">
          Не выбрано
        </option>
        <option>
          Рупии
        </option>
        <option>
          Юани
        </option>
      </select>
  <button>
    <p>Готово</p>
  </button>
    </div>
  </div>
</template>

<script>
import OptionComponent from "@/components/OptionComponent";

export default {
  name: "WallexSelectorComponent",
  components: {OptionComponent},
  data(){
    return{
      create: false,
      currency: '',
      title: ''
    }
  },
  methods: {
    createCard(){
      this.create = true;

    }
  }
}
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.create{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 4px;
  background-color: lightgrey;
  justify-content: center;
  border-radius: 0 0 24px 24px ;
}
#titlePayment{
  background-color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  width: 50%;
  margin: 0 auto;
  cursor: text;
}
select{
  width: 50%;
  margin: 0 auto;
}
button{
  width: 50%;
  margin: 0 auto;
  background-color: white;

}
</style>