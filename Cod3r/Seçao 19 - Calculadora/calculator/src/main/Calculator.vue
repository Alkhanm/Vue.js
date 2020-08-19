<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" @userClick="clearMemory()" triple />
    <Button label="/" @userClick="setOperation($event)" operation />
    <Button label="7" @userClick="addDigit($event)" />
    <Button label="8" @userClick="addDigit($event)" />
    <Button label="9" @userClick="addDigit($event)" />
    <Button label="*" @userClick="addDigit($event)" operation />
    <Button label="4" @userClick="addDigit($event)" />
    <Button label="5" @userClick="addDigit($event)" />
    <Button label="6" @userClick="addDigit($event)" />
    <Button label="-" @userClick="addDigit($event)" operation />
    <Button label="1" @userClick="addDigit($event)" />
    <Button label="2" @userClick="addDigit($event)" />
    <Button label="3" @userClick="addDigit($event)" />
    <Button label="+" @userClick="addDigit($event)" operation />
    <Button label="0" @userClick="addDigit($event)" double />
    <Button label="." @userClick="addDigit($event)" />
    <Button label="=" @userClick="setOperation($event)" operation />
  </div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";
export default {
  components: {
    Display,
    Button,
  },
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    };
  },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperations = this.operation;
        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperations} ${this.values[1]}`
          );
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0;
        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = true;
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return;
      }

      const clearDisplay = this.displayValue === "0" || this.clearDisplay;

      const currentValue = clearDisplay ? "" : this.displayValue;

      const displayValue = currentValue + n;

      this.displayValue = displayValue;
      this.clearDisplay = false;
      this.values[this.current] = displayValue;
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 335px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>