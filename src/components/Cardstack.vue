<template>
  <div id="cardstack">
    <card />
    <card />
    <card />
    <card />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Cardstack",
  components: {
    Card
  }
};
</script>

<style scoped>
/*#card:not(:first-child) {
  transform: translate(0px, -80%);
  background-color: #f33355;
}*/

#card:nth-child(2) {
  transform: translate(0px, -80%);
  background-color: #222222;
}

#card:nth-child(3) {
  transform: translate(0px, -160%);
  background-color: #8b58f9;
}

#card:nth-child(4) {
  transform: translate(0px, -240%);
  background-color: #f33355;
}

#cardstack {
  grid-row: 3;
  grid-column: 2;
}

ul {
  grid-row: 3/4;
  grid-column: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 2rem;
}
</style>
