<template>
  <div id="cardform">
    <form id="formnumber">
      <label for="hname">CARD NUMBER:</label>
      <input v-model="fullCard.cardnumber" type="text" id="fname" name="fname" />
    </form>
    <form id="formname">
      <label for="cname">CARDHOLDERS NAME:</label>
      <input v-model="cardname" type="text" id="cname" name="fname" />
    </form>
    <div id="smallforms">
      <form id="validform">
        <label for="valid">VALID THRU:</label>
        <input v-model="valid" type="text" id="valid2" name="fname" />
      </form>
      <form id="ccvform">
        <label for="ccv">CCV:</label>
        <input type="text" id="ccv" name="fname" />
      </form>
    </div>
    <form id="vendorform">
      <label for="vendorvalid">VENDOR:</label>
      <select v-model="selected" id="vendorselect">
        <option v-on:click="changeColor()" value="bitcoin">BITCOIN INC</option>
        <option v-on:click="changeColor()" value="ninja">NINJA BANK</option>
        <option v-on:click="changeColor()" value="blockchain">BLOCK CHAIN INC</option>
        <option v-on:click="changeColor()" value="evil">EVIL CORP</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "Cardform",
  data() {
    return {
      fullCard: {
        cardnumber: "",
        cardname: "",
        valid: "",
        selected: ""
      }
    };
  },
  props: {},
  methods: {
    changeColor: function() {
      if (this.selected === "bitcoin") {
        document.getElementById("card").style.background = "#FFAE34";
        document.getElementById("vendor").src =
          "/img/vendor-bitcoin.6d450848.svg";
        document.getElementById("chip").src = "/img/chip-light.5bf3177c.svg";
        localStorage.setItem("Card", JSON.stringify(this.fullCard));
      } else if (this.selected === "ninja") {
        document.getElementById("card").style.background = "#222222";
        document.getElementById("vendor").src =
          "/img/vendor-ninja.046254ea.svg";
      } else if (this.selected === "blockchain") {
        document.getElementById("card").style.background = "#8B58F9";
        document.getElementById("vendor").src =
          "/img/vendor-blockchain.a2171465.svg";
      } else if (this.selected === "evil") {
        document.getElementById("card").style.background = "#F33355";
        document.getElementById("vendor").src = "/img/vendor-evil.1c4415c7.svg";
      }
      if (this.cardnumber.length < 16) {
        alert("Card number must contain 16 numbers!");
      } else if (this.cardnumber.length > 16) {
        alert("Card number must contain exactly 16 numbers!");
      }
    }
  },

  watch: {
    cardnumber: function(value) {
      console.log(value);
      this.$emit("cardnumber", this.cardnumber);
    },
    cardname: function(value) {
      console.log(value);
      this.$emit("cardname", this.cardname);
    },
    valid: function(value) {
      console.log(value);
      this.$emit("valid", this.valid);
    },
    selected: function(value) {
      console.log(value);
      this.$emit("selected", this.selected);
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
