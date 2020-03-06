<template>
  <div class="home">
    <Top wallet="E-Wallet" />

    <cardstack />
    <button v-on:click="navigate">ADD A NEW CARD</button>
    <app-card />
  </div>
</template>

<script>
// @ is an alias to /src

import Top from "../components/Top";

import Cardstack from "../components/Cardstack";
export default {
  name: "Home",
  components: {
    Top,

    Cardstack
  },
  methods: {
    navigate: function() {
      this.$router.push({ path: "/addcard" });
    }
  }
};
</script>

<style>
.home {
  display: grid;
  grid-template-columns: repeat(3, 382px);
  grid-template-rows: 2rem 241px 241px 7rem 6rem;
  grid-row-gap: 2rem;
  justify-content: center;
}

button {
  grid-row: 5;
  grid-column: 2;
  width: 382px;
  height: 80px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 22px;
}
</style>
