<template>
  <div id="addcard">
    <Top wallet="ADD A NEW BANK CARD" />
    <card :card="cardNumber" :name="cardName" :valid="valid" :selected="selected" />
    <cardform
      @cardnumber="handleCardNumber($event)"
      @cardname="handleCardName($event)"
      @valid="handleValid($event)"
      @selected="handleSelected($event)"
    />
    <button @click="navigate()">ADD A NEW CARD</button>
  </div>
</template>

<script>
//Gör en metod för att att ta emot cardnumber från cardform och skicka sedan som prop till card.
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
  data() {
    return {
      cardNumber: "",
      cardName: "",
      valid: "",
      selected: ""
    };
  },
  props: [],

  methods: {
    navigate: function() {
      this.$router.push({ path: "/" });
    },
    handleCardNumber: function(updatedCard) {
      this.cardNumber = updatedCard;
    },
    handleCardName: function(updatedName) {
      this.cardName = updatedName;
    },
    handleValid: function(updatedValid) {
      this.valid = updatedValid;
    },
    handleSelected: function(updatedSelected) {
      this.selected = updatedSelected;
    }
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