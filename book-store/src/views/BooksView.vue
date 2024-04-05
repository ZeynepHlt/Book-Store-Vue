<template>
  <h1 class="text-center uppercase font-bold text-purple text-sm">{{ title }}</h1>
  <hr class="mt-2" />
  <div class="flex flex-wrap justify-center">
    <a-spin v-if="loading" tip="Loading..."></a-spin>
    <div v-for="book in filter_books" :key="book.book_id">
      <CartCom :book="book"></CartCom>
    </div>
  </div>
</template>

<script setup lang="ts">
// import axios from 'axios'
import bookServices from '@/services/bookServices'
import { onMounted, ref, watch } from 'vue'
import CartCom from '@/components/CartCom.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const books = ref()
const filter_books = ref()
const loading = ref(true)
const title = ref<string>()

onMounted(async () => {
  await loadData()
})
//route değişirken konrol et her değiştiğinde datayı yenile
watch(
  () => route.params.id,
  async () => await loadData()
)
//kitapları yükle
const loadData = async () => {
  loading.value = true //yüklenmeden
  books.value = await bookServices.getBooks()
  filter_books.value = books.value.filter((i: any) => i.category_id == route.params.id)
  // if (route.params.id == '1') {
  //   filter_books.value = books.value
  // }

  switch (route.params.id) {
    case '1':
      filter_books.value = books.value
      title.value = 'Tüm Kİtaplar'
      break
    case '2':
      title.value = 'Tarİh Kİtapları'
      break

    case '3':
      title.value = 'Fİnans Kİtapları'
      break
    case '4':
      title.value = 'Çocuk Kİtapları'

      break
    case '5':
      title.value = 'Kİşİsel Gelİşİm Kİtapları'

      break
    case '6':
      title.value = 'Romanlar'
      break
    case '7':
      title.value = 'Bİlİm Kİtapları'
      break
    default:
    // code block
  }

  loading.value = false //yüklenince
}

// const getProducts = async () => {}
</script>

<style scoped></style>
