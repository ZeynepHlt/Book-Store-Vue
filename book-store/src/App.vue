<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderCom from './components/HeaderCom.vue'
import FooterCom from './components/FooterCom.vue'
</script>

<template>
  <HeaderCom></HeaderCom>
  <RouterView />
  <FooterCom></FooterCom>
</template>

<style scoped></style>
