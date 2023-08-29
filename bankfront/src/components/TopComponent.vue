<template>
  <div class="wrapper">
    <div class="logo">
      ФИНБАНК
    </div>
    <div class="profile">
      <p>Михаил</p>
      <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/user-male-circle.png" alt="user-male-circle"/>
    </div>
  </div>

</template>

<script>
export default {
  name: "TopComponent"
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 8px 24px;
}
.logo{
  font-family: Montserrat,sans-serif;
  font-weight: 1000;
  font-size: 30px;

}
.profile{
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  gap: 10px;
}
</style>