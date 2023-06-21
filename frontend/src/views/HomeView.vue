<script setup lang="ts">
import { ref } from 'vue'
import { watchEffect } from 'vue';

const row = ref(0)
const column = ref(0)
const data = ref([])
let rowFirst = ref(null)
let topSide = ref([])
let rightSide = ref([])
let bottomSide = ref([])
let leftSide = ref([])


// function onSubmit() {
//   const query = `row=${row.value}&column=${column.value}`;
//   fetch(`https://port-0-on-et-dihik2mlj4m7swv.sel4.cloudtype.app/elevation/square?${query}`)
//     .then((response) => response.json())
//     .then((responseData) => {
//       data.value = responseData;

//       topSide = data.value[1][0];
//       rightSide = data.value[1][1];
//       bottomSide = data.value[1][2];
//       leftSide = data.value[1][3];
//       rowFirst = data.value[0];
//     });
// }


function onSubmit() {
  const query = `row=${row.value}&column=${column.value}`;
  fetch(`https://port-0-on-et-dihik2mlj4m7swv.sel4.cloudtype.app/elevation/square?${query}`)
    .then((response) => response.json())
    .then((responseData) => {
      data.value = responseData;

      topSide.value = data.value[1][0];
      rightSide.value = data.value[1][1];
      bottomSide.value = data.value[1][2].reverse();
      leftSide.value = data.value[1][3].reverse();
      rowFirst.value = data.value[0];
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

  <div class="outer-cube">
    <div class="cube">
      <div class="row" v-for="(subArr, rowIndex) in data[0]" :key="rowIndex">
        <div class="box" v-for="(num, colIndex) in subArr" :key="colIndex">{{ num }}</div>
      </div>
    </div>
  </div>

  <section id="numbers">
    <h3>보이는 블록갯수</h3>
    <div>윗면 {{ topSide }}</div>
    <div>오른쪽 옆면 {{ rightSide }}</div>
    <div>아랫면 {{ bottomSide }} </div>
    <div>왼쪽 옆면 {{ leftSide }}</div>
  </section>
</template>


<style scoped>
.input {
  margin: 50px;
}

.top {
  display: flex;
  flex-direction: row;

}

.box {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cube {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  height: max-content;
  border: 1px solid black;
  /* 검은 테두리 추가 */
  padding: 10px;
  /* 박스와 테두리 사이 간격 추가 */
}

.row {
  display: flex;
}

.box {
  flex: 1;
  text-align: center;
  border: 1px solid black;
  /* 검은 테두리 추가 */
  padding: 10px;
  /* 각 박스 사이 간격 추가 */
}

.outer-row {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  /* 바깥 테두리와의 간격 추가 */
}

.outer-box {
  flex: 1;
  text-align: center;
  border: 1px solid black;
  /* 검은 테두리 추가 */
  padding: 10px;
  /* 각 박스 사이 간격 추가 */
}

.outer-cube {
  margin: 30px;
}
</style>
