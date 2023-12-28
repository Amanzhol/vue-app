<script setup>
import { ref } from 'vue'
let val = ref("One Time")
let msg = ref(val)
let rawHtml = ref("<span style=\"color: red\">This should be red.</span>")
</script>

<template>
  <h1 v-once>{{msg}}</h1>
  <p>Двойные фигурные скобки: {{ rawHtml }}</p>
  <p>Директива v-html: <span v-html="rawHtml"></span></p>
</template>

<style scoped>

</style>
