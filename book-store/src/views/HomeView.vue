<template>
  <!-- content -->
  <div class="container">
    <div class="flex justify-center">
      <img src="../assets/images/slide.png" alt="" />
    </div>

    <div class="space-x-1 lg:space-x-6 mt-6 lg:mt-16 flex">
      <!-- en çok beğenilenler -->
      <div class="lg:basis-2/3 border-2 shadow-lg flex flex-wrap justify-center relative">
        <div class="absolute -top-3 left-0 w-24 lg:w-48">
          <img src="../assets/images/best.svg" alt="" />
        </div>
        <div v-for="book in best_books" :key="book.id">
          <CartCom :book="book"></CartCom>
        </div>
      </div>
      <!-- yeni çıkanlar -->
      <div class="basis-1/3 border-2 shadow-lg flex-wrap justify-center relative hidden md:flex">
        <div class="absolute -top-3 left-0"><img src="../assets/images/new.png" alt="" /></div>
        <div v-for="book in new_books" :key="book.id">
          <CartCom :book="book"></CartCom>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import bookServices from '@/services/bookServices'

import CartCom from '@/components/CartCom.vue'

import { onMounted, ref } from 'vue'
const books = ref()
const best_books = ref()
const new_books = ref()

onMounted(async () => {
  await loadData()
})
//en çok beğenilenler
const loadData = async () => {
  books.value = await bookServices.getBooks()
  best_books.value = books.value.filter((i: any) => i.starRate > 4)
  new_books.value = books.value.filter((i: any) => i.stock < 4)
}
</script>
