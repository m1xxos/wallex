<template>
  <div class="top">
    <top-component></top-component>
  </div>
  <div class="list">
    <div  class="tab"  v-for="tab in tabs">
      <tab-component :text=tab.text :background-color=tab.backgroundColor :color-text="tab.colorText" :image="tab.image" @click="clickTab(tab.index)"></tab-component>
    </div>
  </div>
  <router-view/>
</template>

<script>

import TabComponent from "@/components/TabComponent";
import HomeView from "@/views/HomeView";
import PaymentView from "@/views/PaymentView";
import TopComponent from "@/components/TopComponent";


export default {
  name: 'App',
  components: {
    PaymentView,
    HomeView,
    TabComponent,
    TopComponent
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
      homePage: true,
      paymentPage: false,
    }
  },
  methods: {
    clickTab(i){
      if(i===0){
       this.$router.push('/')
      }
      else if(i===1){
        this.$router.push('payments')
      }
      console.log('click')
    }
  }
}
</script>
<style lang="scss">
body{
  margin: 0;

}
#app {
  font-family: Inter, sans-serif;
  background: rgb(83,76,200);
  background: linear-gradient(144deg, rgba(83,76,200,0.8476731757155987) 0%, rgba(160,160,227,0.8672810188528537) 35%, rgba(255,215,108,0.6263846603094363) 63%, rgba(240,235,129,0.8000541280965512) 100%) no-repeat;
  background-size: 100% ;
  height: 100vh;
}
.list{
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom:0;
  width: 100%;
  background-color: #f9eb9e;
}
.tab{
  width: 50%;
}


</style>
