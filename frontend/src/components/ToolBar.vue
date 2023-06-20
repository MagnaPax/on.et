<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="header">
        <img src="../assets/channels4_profile.jpg" alt="on.et" class="logo">
    </div>
</template>
  
<style scoped>
.header {
    background-color: #42b883;
    color: white;
    padding: 8px 8px 8px 25px;
    display: flex;
    align-items: center;
}

.header a:visited {
    color: white;
}

.header a:active {
    color: #35495e;
}

.fixed {
    position: fixed;
    width: 100%;
    z-index: 999;
}

.logo {
    width: 30px;
    margin-right: 18px;
}

a {
    margin: 0 5px;
}
</style>