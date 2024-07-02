<template>
  <div id="app">
    <h1>Calculadora Aritmética</h1>
    <div class="calculator">
      <input type="number" v-model.number="number1" placeholder="Digite o primeiro número" />
      <select v-model="operation">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" v-model.number="number2" placeholder="Digite o segundo número" />
      <div class="result">
        <h2>Resultado: {{ result }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const number1 = ref(0);
const number2 = ref(0);
const operation = ref('add');
const result = ref(0);

const calculate = () => {
  switch (operation.value) {
    case 'add':
      result.value = number1.value + number2.value;
      break;
    case 'subtract':
      result.value = number1.value - number2.value;
      break;
    case 'multiply':
      result.value = number1.value * number2.value;
      break;
    case 'divide':
      result.value = number1.value / number2.value;
      break;
  }
};

watchEffect(() => {
  calculate();
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.calculator {
  display: inline-block;
  margin: auto;
}
input, select {
  margin: 5px;
}
.result {
  margin-top: 20px;
}
</style>
