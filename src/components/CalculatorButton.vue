<script setup lang="ts">
import type {
  IButtonIcon,
  IButtonType,
  IButtonValue,
} from "@/interfaces/IButton";
import { defineProps } from "vue";

defineProps<{
  type: IButtonType;
  value: IButtonValue;
  icon: IButtonIcon;
}>();
</script>

<template>
  <button :class="`calculator-button calculator-button--${type}`">
    <img v-if="icon" :src="`/src/assets/keyboard/${icon}.svg`" :alt="value" />
    <span v-else>{{ value }}</span>
  </button>
</template>

<style scoped>
.calculator-button {
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  width: 64px;
  height: 64px;
  border-radius: 999px;

  font-size: 24px;
  line-height: 28px;
  color: #ebebeb;

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #2d2a37;

  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);
}
.calculator-button--secondary {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0.01%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #462878;
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);
}
.calculator-button--tertiary {
  color: #975dfa;
}
.calculator-button--quaternary {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #7f45e2;
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);
}
.calculator-button--primary:hover,
.calculator-button--tertiary:hover {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #3d3a47;
}
.calculator-button--secondary:hover {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0.01%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #5a2e9a;
}
.calculator-button--quaternary:hover {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #8f4ff0;
}
.calculator-button--primary:active,
.calculator-button--tertiary:active {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #2d2a37;
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);
}
</style>
