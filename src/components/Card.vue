<template>
  <div id="card">
    <img id="chip" src="../assets/chip-light.svg" />
    <img id="vendor" src="../assets/vendor-bitcoin.svg" />
    <p id="cardnumber1">{{value}}</p>
    <p id="chn">CARDHOLDER NAME</p>
    <p id="name">ALBIN SANDER</p>
    <p id="valid">VALID THRU</p>
    <p id="date">12/22</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      value: ""
    };
  },
  components: {},
  props: { method: { type: Function } },

  mounted() {
    this.method(this.value);
  }
};
</script>

<style>
#card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 6rem 4rem 2rem 5rem;
  grid-row: 2;
  grid-column: 2;
  align-self: center;
  width: 382px;
  height: 241px;
  background: #ffae34;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
}

#chip {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 1rem;
}

#vendor {
  grid-column: 4;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  justify-self: end;
  margin-top: 1rem;
  margin-right: 1rem;
}

#cardnumber1 {
  grid-row: 2;
  grid-column: 1;
  font-size: 2rem;
  margin-left: 0.5rem;
}

#cardnumber2 {
  grid-row: 2;
  grid-column: 2;
  font-size: 2rem;
}

#cardnumber3 {
  grid-row: 2;
  grid-column: 3;
  font-size: 2rem;
}

#cardnumber4 {
  grid-row: 2;
  grid-column: 4;
  font-size: 2rem;
}

#chn {
  grid-row: 3;
  font-size: 0.5rem;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-left: 0.5rem;
}

#name {
  grid-row: 4;
  grid-column: 1/3;
  margin-left: 0.5rem;
}

#valid {
  grid-row: 3;
  grid-column: 4;
  font-size: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
}

#date {
  grid-row: 4;
  grid-column: 4;
  display: flex;
  flex-direction: row;
  justify-self: center;
}
</style>
