<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  previous: string;
  current: string;
}>();
</script>

<template>
  <div class="calculator-display">
    <div class="calculator-display--previous">{{ props.previous }}</div>
    <div class="calculator-display--current">
      <img src="@/assets/equals.svg" alt="equals" />
      <span>{{ props.current }}</span>
    </div>
  </div>
</template>

<style scoped>
.calculator-display {
  padding-top: 54px;
  padding-inline: 54px;
}
.calculator-display--previous {
  font-size: 20px;
  line-height: 140%;
  text-align: right;
  color: #6b6b6b;
}
.calculator-display--current {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
.calculator-display--current span {
  font-size: 36px;
  line-height: 140%;
  text-align: right;
  color: #ebebeb;
}
.calculator-display--current span::after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 1.5rem;
  margin-left: 0.2rem;
  background: #fff;
  animation: blink 1s infinite;
}
.calculator-display--current span::after {
  animation: blink 1s infinite;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
