<script setup lang="ts">
import { ref } from 'vue'

const row = ref(0)
const column = ref(0)
const data = ref(null)
let rowFirst = ref(null)
let topSide = ref([])
let rightSide = ref([])
let bottomSide = ref([])
let leftSide = ref([])


function onSubmit() {
  const query = `row=${row.value}&column=${column.value}`;
  fetch(`http://127.0.0.1:5048/elevation/square?${query}`)
    .then((response) => response.json())
    .then((responseData) => {
      data.value = responseData;

      topSide = data.value[1][0];
      rightSide = data.value[1][1];
      bottomSide = data.value[1][2];
      leftSide = data.value[1][3];
      rowFirst = data.value[0];
    });
}


</script>
<template>
  <section class="input">
    <div class="select">
      <input type="number" v-model="row" id="row" placeholder="Row">
      <label for="row">행의 갯수</label>
      <input type="number" v-model="column" id="column" placeholder="Column">
      <label for="column">열의 갯수</label>
      <button @click="onSubmit">Submit</button>
    </div>
  </section>

  <section class="show_blocks">
    <div v-if="data">
      <h2>데이터:</h2>
      <div v-for="(subarray, rowIndex) in data" :key="rowIndex">
        <ul>
          <li v-if="rowIndex === 0" v-for="(value, columnIndex) in subarray" :key="columnIndex">{{ value }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="numbers">
    <h3>보이는 블록갯수 (윗면부터 시계방향으로 진행)</h3>
    <div>윗면 {{ topSide }}</div>
    <div>오른쪽 옆면 {{ rightSide }}</div>
    <div>아래쪽 {{ bottomSide }}</div>
    <div>왼쪽 옆면 {{ leftSide }}</div>
  </section>
</template>

<style scoped>
.input {
  margin: 50px;
}
</style>