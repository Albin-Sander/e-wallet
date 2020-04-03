<template>
  <section>
    <article :class="['cards', vendor]">
      <div id="chipVendor">
        <img :src="require(`../assets/chip-${chip}.svg`)" />
        <img class="img" v-bind:src="require(`../assets/vendor-${vendor}.svg`)" />
      </div>
      <p id="inputName1">{{inputNumber}}</p>
      <section class="nameandinfo">
        <div class="name">
          <p class="cardInfo">Cardholder name</p>
          <p id="name">{{inputName}}</p>
        </div>
        <div class="valid">
          <p class="cardInfo">valid thru</p>
          <p id="validThru">{{inputValid}}</p>
        </div>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: { input: Object },
  data: () => {
    return { defaultImg: "brackets", defaultChip: "light" };
  },
  computed: {
    inputNumber() {
      if (!this.input.inputNumber) {
        let unSet = "";
        return unSet;
      } else {
        let inputNumber = this.input.inputNumber;
        inputNumber = inputNumber.match(/.{1,4}/g);
        return inputNumber.join(" ");
      }
    },
    inputName() {
      if (!this.input.inputName) {
        let unSet = "";
        return unSet;
      } else {
        return this.input.inputName;
      }
    },
    inputValid() {
      if (!this.input.inputValid) {
        let unSet = "";
        return unSet;
      } else {
        return this.input.inputValid;
      }
    },
    vendor() {
      if (!this.input.inputVendor) {
        return this.defaultImg;
      } else {
        let vendor = this.input.inputVendor;
        return vendor;
      }
    },
    chip() {
      if (
        this.input.inputVendor == "ninja" ||
        this.input.inputVendor == "evil" ||
        this.input.inputVendor == "blockchain"
      ) {
        return this.defaultChip;
      } else {
        return "dark";
      }
    }
  }
};
</script>
<style scoped lang="scss">
.cards {
  margin: 1rem;
  width: 25rem;
  height: 15rem;
  border-radius: 0.5rem;
}
.bitcoin {
  background: #ffae34;
  color: black;
}
.ninja {
  background: #222222;
  color: white;
}
.blockchain {
  background: #8b58f9;
  color: white;
}
.evil {
  background: #f33355;
  color: white;
}

#chipVendor {
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.img {
  max-height: 2.5rem;
  max-width: 2.5rem;
}
.numbers {
  line-height: 2rem;
  font-size: 1.7rem;
  margin: 1rem;
}
.nameandinfo {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 3.5rem;
}
.name {
  text-align: left;
}
.valid {
  text-align: right;
  width: 5rem;
}
.cardInfo {
  font-size: 0.75rem;
}
#inputName {
  font-size: 1.125rem;
  width: 15rem;
}
#validThru {
  font-size: 1.12rem;
  background: none;
  border: none;
  outline: none;
}

//mycard
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

#inputName1 {
  grid-row: 2;
  grid-column: 1;
  font-size: 2rem;
  margin-left: 0.5rem;
}

bitcoin {
  background: #ffae34;
  color: black;
}
.ninja {
  background: #222222;
  color: white;
}
.blockchain {
  background: #8b58f9;
  color: white;
}
.evil {
  background: #f33355;
  color: white;
}

#inputName2 {
  grid-row: 2;
  grid-column: 2;
  font-size: 2rem;
}

#inputName3 {
  grid-row: 2;
  grid-column: 3;
  font-size: 2rem;
}

#inputName4 {
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

#inputValid {
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