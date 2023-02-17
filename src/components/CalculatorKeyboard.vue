<script setup lang="ts">
import type { IButton } from "@/interfaces/IButton";
import CalculatorButton from "./CalculatorButton.vue";

const buttons: IButton[] = [
  { type: "tertiary", value: "CE", icon: null },
  { type: "primary", value: "C", icon: null },
  { type: "primary", value: "%", icon: null },
  { type: "secondary", value: "/", icon: null },
  { type: "primary", value: "1", icon: null },
  { type: "primary", value: "2", icon: null },
  { type: "primary", value: "3", icon: null },
  { type: "secondary", value: "*", icon: "multiply" },
  { type: "primary", value: "4", icon: null },
  { type: "primary", value: "5", icon: null },
  { type: "primary", value: "6", icon: null },
  { type: "secondary", value: "+", icon: "plus" },
  { type: "primary", value: "7", icon: null },
  { type: "primary", value: "8", icon: null },
  { type: "primary", value: "9", icon: null },
  { type: "secondary", value: "-", icon: "minus" },
  { type: "primary", value: "+/-", icon: "plus-minus" },
  { type: "primary", value: "0", icon: null },
  { type: "primary", value: ",", icon: null },
  { type: "quaternary", value: "=", icon: "equals" },
];

const emit = defineEmits<{
  (event: "click", ...args: any[]): void;
}>();

const onClick = (value: string): void => {
  emit("click", value);
};
</script>

<template>
  <div class="calculator-keyboard">
    <CalculatorButton
      v-for="button in buttons"
      :key="button.value"
      :type="button.type"
      :value="button.value"
      :icon="button.icon"
      @click="onClick(button.value)"
    />
  </div>
</template>

<style scoped>
.calculator-keyboard {
  padding: 26px 32px 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
</style>
