<template>
  <div id="app">
    <router-view class="wallet" />
  </div>
</template>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
#app {
  display: grid;
  justify-content: center;
  text-align: center;
  height: 110vh;
}
.wallet {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 55rem;
  background: #ffffff;
  margin: 1rem;
}
</style>