<template>
  <div id="addcard">
    <Top wallet="ADD A NEW BANK CARD" />
    <card />
    <cardform />
    <button v-on:click="navigate">ADD A NEW CARD</button>
    <p>hello {{ cardnumber }}</p>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import Cardform from "../components/Cardform";
export default {
  name: "Addcard",
  components: {
    Top,
    Card,
    Cardform
  },
  methods: {
    navigate: function() {
      this.$router.push({ path: "/" });
    }
  },
  data: function() {
    return {
      cardnumber: ""
    };
  }
};
</script>

<style>
#addcard {
  display: grid;
  grid-template-columns: repeat(3, 382px);
  grid-template-rows: 6rem 241px 12rem 7rem 6rem;
  grid-row-gap: 2rem;
  justify-content: center;
}

#top {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#card {
  background-color: #d0d0d0;
}

button {
  grid-row: 7;
  grid-column: 2;
  width: 382px;
  height: 80px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 22px;
}
</style>