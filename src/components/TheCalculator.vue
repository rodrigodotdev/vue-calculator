<script setup lang="ts">
import { ref } from "vue";
import CalculatorDisplay from "./CalculatorDisplay.vue";
import CalculatorKeyboard from "./CalculatorKeyboard.vue";

const displayPrevious = ref("");
const displayCurrent = ref("0");

const currentValue = ref();
const previousValue = ref();
const operation = ref();

function handleAction(value: string): void {
  if (value === "C") {
    clear();
  } else if (value === "CE") {
    displayCurrent.value = "0";
  } else if (value === "=") {
    if (currentValue.value && previousValue.value && operation.value) {
      handleCalculation();
      resetValues();
    }
  } else if (value === "+/-") {
    displayCurrent.value = (parseFloat(displayCurrent.value) * -1).toString();
  } else if (value === "%") {
    displayCurrent.value = (parseFloat(displayCurrent.value) / 100).toString();
  } else if (value === ",") {
    if (!displayCurrent.value.includes(",")) {
      displayCurrent.value = `${displayCurrent.value},`;
    }
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    if (currentValue.value && previousValue.value && operation.value) {
      handleCalculation();
      resetValues();
    }
    previousValue.value = parseFloat(displayCurrent.value);
    operation.value = value;
    displayPrevious.value = `${previousValue.value} ${operation.value}`;
    displayCurrent.value = "0";
  } else {
    if (displayCurrent.value === "0") {
      displayCurrent.value = value;
    } else {
      displayCurrent.value = `${displayCurrent.value}${value}`;
    }
    currentValue.value = parseFloat(displayCurrent.value);
  }
}

function handleCalculation(): void {
  displayPrevious.value = `${previousValue.value} ${operation.value} ${currentValue.value}`;
  displayCurrent.value = eval(
    `${previousValue.value} ${operation.value} ${currentValue.value}`
  );
}

function clear(): void {
  displayCurrent.value = "0";
  displayPrevious.value = "";
  currentValue.value = undefined;
  previousValue.value = undefined;
  operation.value = undefined;
}

function resetValues(): void {
  currentValue.value = undefined;
  previousValue.value = undefined;
  operation.value = undefined;
}

function parseFloat(value: string): number {
  return Number(value.replace(",", "."));
}
</script>

<template>
  <div class="calculator">
    <CalculatorDisplay :previous="displayPrevious" :current="displayCurrent" />
    <CalculatorKeyboard @click="handleAction" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

* {
  font-family: "Rubik", sans-serif;
  letter-spacing: -0.02em;
}

.calculator {
  width: 356px;
  height: 566px;
  border-radius: 48px;
  background: #2d2a37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);
}
</style>
