<template>
  <div class="wrapper">
    <section @input="cardInfo">
      <label
        for="cardinputNumber"
        v-if="cardInput.validVendor === false"
        class="labelInput"
      >CARD NUMBER</label>
      <input
        v-if="cardInput.validVendor === false"
        v-model="input.inputNumber"
        @input="validateNumber"
        type="text"
        id="cardinputNumber"
        maxlength="16"
      />
      <label
        for="CardinputName"
        v-if="cardInput.validVendor === false"
        class="labelInput"
      >CARDHOLDER NAME</label>
      <input
        v-if="cardInput.validVendor === false"
        v-model="input.inputName"
        @input="validateName"
        type="text"
        id="CardinputName"
        maxlength="22"
      />
      <section class="sides">
        <div class="leftSide">
          <label
            for="inputValid"
            v-if="cardInput.validVendor === false"
            class="smallLabel"
          >VALID THRU</label>

          <input
            v-if="cardInput.validVendor === false"
            v-model="input.inputValid"
            @input="validateValid"
            type="text"
            id="inputValid"
            maxlength="5"
          />
        </div>
        <div class="rightSide">
          <label for="cvcInput" v-if="cardInput.validVendor === false" class="smallLabel">CVC</label>

          <input
            v-if="cardInput.validVendor === false"
            v-model="input.cvcInput"
            @input="validateCvc"
            type="text"
            id="cvcInput"
            maxlength="3"
          />
          <label for="vendor" class="labelInput">VENDOR</label>
          <select name id="vendor" v-model="input.inputVendor" @input="validateVendor">
            <option value="bitcoin">BITCOIN INC</option>
            <option value="ninja">NINJA BANK</option>
            <option value="blockchain">BLOCK CHAIN INC</option>
            <option value="evil">EVIL CORP</option>
          </select>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      input: {
        inputNumber: "",
        inputName: "",
        inputValid: "",
        cvcInput: "",
        inputVendor: "",
        isValid: false
      },
      cardInput: {
        validNumber: false,
        validName: false,
        validValid: false,
        validCvc: false,
        validVendor: true
      }
    };
  },
  methods: {
    cardInfo() {
      let isTrue = Object.keys(this.cardInput).every(
        k => this.cardInput[k] == false
      );
      if (isTrue == true) {
        let isEmpty = Object.keys(this.input).some(k => this.input[k] === "");
        if (isEmpty == false) {
          this.input.isValid = true;
        }
      }
      this.$emit("cardInfo", this.input);
    },
    validateNumber() {
      if (
        this.checkNumber(this.input.inputNumber) == true ||
        this.input.inputNumber === ""
      ) {
        this.cardInput.validNumber = false;
      } else {
        this.cardInput.validNumber = true;
      }
    },
    validateName() {
      if (this.checkName(this.input.inputName) == true) {
        this.cardInput.validName = false;
      } else {
        this.cardInput.validName = true;
      }
    },
    validateValid() {
      if (this.checkValid(this.input.inputValid) == true) {
        this.cardInput.validValid = false;
      } else {
        this.cardInput.validValid = true;
      }
    },
    validateCvc() {
      if (this.checkCvc(this.input.cvcInput) == true) {
        this.cardInput.validCvc = false;
      } else {
        this.cardInput.validCvc = true;
      }
    },
    validateVendor() {
      this.cardInput.validVendor = false;
    },
    checkNumber(inputNumber) {
      const pattern = /^[0-9]{16}/;
      return pattern.test(inputNumber);
    },
    checkName(inputName) {
      const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
      return pattern.test(inputName);
    },
    checkValid(inputValid) {
      const pattern = /^(0[1-9]|1[012])\/\d{2}$/;
      return pattern.test(inputValid);
    },
    checkCvc(cvcInput) {
      const pattern = /^[0-9]{3}/;
      return pattern.test(cvcInput);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
}

.labelInput {
  display: flex;
  width: 24rem;
  font-size: 0.75rem;
}
#cardinputNumber,
#CardinputName {
  display: flex;
  border-radius: 0.5rem;
  margin: 0 0 1rem;
  width: 24rem;
  height: 3.5rem;
  border: 1px solid black;
  font-size: 1rem;
}

#vendor {
  display: flex;
  border-radius: 0.5rem;
  margin: 0 0 1rem 0;
  width: 24rem;
  height: 3.5rem;
  border: 1px solid black;
  font-size: 1rem;
}
#inputValid,
#cvcInput {
  height: 3.5rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  font-size: 1rem;
}
.smallLabel {
  width: 10rem;
  text-align: left;
  font-size: 0.75rem;
}
.sides {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 10rem 10rem;
  margin: 0 0 1rem;
}
.leftSide,
.rightSide {
  display: flex;
  flex-direction: column;
}
.addBtn {
  color: #ffffff;
  background-color: black;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0rem 0rem 0rem;
  width: 92%;
  min-height: 20rem;

  input,
  select {
    width: 100%;
    border-radius: 7px;
    border: 1px solid black;
  }
  select {
    margin: 1rem 0rem;
  }
  label {
    color: black;
    margin: 1rem 0rem 0.3rem 0rem;
    font-size: 0.7rem;
  }
  .validInfo {
    display: grid;
    grid-template-columns: auto auto;
    article {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 90%;

      &:nth-child(2) {
        justify-self: flex-end;
      }
    }
  }
  button {
    background: black;
    color: #ffffff;
    margin-top: 0rem;
  }
}
</style>