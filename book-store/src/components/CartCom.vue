<template>
  <div>
    <div class="cart w-72">
      <!-- cart image -->
      <img class="mx-auto mt-2 w-24 h-32" :src="`/src/assets/images/books/${book.imgUrl}`" />

      <!-- cart-content -->
      <div class="text-center space-y-1">
        <h2 class="font-bold text-xs lg:text-sm mt-2">{{ book.name }}</h2>
        <p class="font-bold text-gray-700 text-xs lg:text-sm">{{ book.author }}</p>
        <div>
          <span v-for="i in 5" :key="i">
            <StarFilled v-if="i <= book.starRate" class="text-yellow-500 text-xs lg:text-base" />

            <StarOutlined v-else class="text-yellow-500 text-xs lg:text-base" />
          </span>
          <span class="lg:ml-2 font-bold text-xs lg:text-lg">{{ book.price }} ₺</span>
        </div>

        <p class="line-clamp-2 text-xs lg:text-sm">
          {{ book.description }}
        </p>

        <button
          class="px-3 text-xs lg:text-sm lg:px-6 py-1 bg-yellow-500 font-bold text-purple mx-3 hover:bg-yellow-400 duration-300 rounded-lg"
          @click="handleAddBasket(book)"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarFilled, StarOutlined } from '@ant-design/icons-vue'
import basketServices from '../services/basketServices'

defineProps<{
  book: any
}>()

const handleAddBasket = async (book_item: any) => {
  await basketServices.addBasket(book_item)
  alert('Ürün sepete eklendi')
}
</script>

<style scoped></style>
