<template>
  <div class="list">
    <div  class="tab"  v-for="tab in tabs">
      <tab-component :text=tab.text :background-color=tab.backgroundColor :color-text="tab.colorText" :image="tab.image" @click="clickTab(tab.index)"></tab-component>
    </div>
  </div>
</template>

<script>
import TabComponent from "@/components/TabComponent";

export default {
  name: "TabListComponent",
  components: {
    TabComponent
  },
  data(){
    return {
      tabs: [{
        text: 'Главная',
        backgroundColor: '',
        colorText: 'black',
        image:"https://img.icons8.com/pulsar-line/48/home.png",
        index: 0
      },
        {
          text: 'Платежи',
          backgroundColor: '',
          colorText: 'black',
          image: "https://img.icons8.com/pulsar-line/48/money.png",
          index: 1
        }],
      home: true,
      payments: false
    }
  },
  methods: {
    clickTab(i){
      if(i===0){
        this.home = true
        this.payments = false
      }
      else {
        this.home = false
        this.payments = true
      }

    }
  }

}
</script>

<style scoped>
.list{
  display: flex;
  flex-direction: row;
}


</style>