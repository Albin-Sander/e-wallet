<template>
  <div id="cardform">
    <form id="formnumber">
      <label for="hname">CARD NUMBER:</label>
      <input v-model="cardnumber" type="text" id="fname" name="fname" />
    </form>
    <form id="formname">
      <label for="cname">CARDHOLDERS NAME:</label>
      <input type="text" id="cname" name="fname" />
    </form>
    <div id="smallforms">
      <form id="validform">
        <label for="valid">VALID THRU:</label>
        <input type="text" id="valid2" name="fname" />
      </form>
      <form id="ccvform">
        <label for="ccv">CCV:</label>
        <input type="text" id="ccv" name="fname" />
      </form>
    </div>
    <form id="vendorform">
      <label for="vendorvalid">VENDOR:</label>
      <select id="vendorselect">
        <option value="bitcoin">BITCOIN INC</option>
        <option value="ninja">NINJA BANK</option>
        <option value="blockchain">BLOCK CHAIN INC</option>
        <option value="evil">EVIL CORP</option>
      </select>
    </form>
    <p>Number is {{ cardnumber }}</p>
  </div>
</template>

<script>
export default {
  name: "Cardform",
  data() {
    return {};
  },
  props: { cardnumber: String },
  methods: {},

  watch: {
    cardnumber: function(value) {
      console.log(value);
      this.$emit("cardnumber", this.cardnumber);
    }
  }
};
</script>

<style>
#cardform {
  display: grid;
  grid-row: 3/7;
  grid-column: 2;
  align-content: space-evenly;
}

#formnumber {
  width: 382px;
  height: 56px;
  margin-top: 30px;
}

#fname {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
}

#formname {
  width: 382px;
  height: 56px;
  margin-top: 30px;
}

#cname {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
}

#smallforms {
  display: flex;
  justify-content: space-between;
}

#validform {
  width: 175px;
  height: 56px;
  margin-top: 30px;
}

#valid2 {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
}

#ccvform {
  width: 175px;
  height: 56px;
  margin-top: 30px;
}

#ccv {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
}

#vendorform {
  width: 382px;
  height: 56px;
  margin-top: 30px;
}

#vendorselect {
  height: 100%;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
}
</style>