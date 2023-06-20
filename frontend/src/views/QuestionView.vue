<script setup lang="ts">
import { ref } from 'vue'

const row = ref(0)
const column = ref(0)
const EventBus = new Vue();

function onSubmit() {
    const query = `row=${row.value}&column=${column.value}`;
    fetch(`http://127.0.0.1:5048/elevation/square?${query}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            EventBus.$emit('data-received', data);
        });
}


</script>
<template>
    <section class="selection">
        <form class="select">
            <input type="number" v-model="row" id="row" placeholder="Row">
            <label for="row">행의 갯수</label>
            <input type="number" v-model="column" id="column" placeholder="Column">
            <label for="column">열의 갯수</label>
            <button @click="onSubmit">Submit</button>
        </form>
    </section>
</template>