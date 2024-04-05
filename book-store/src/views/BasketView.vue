<template>
  <div class="border shadow-md w-full lg:w-3/4 mx-auto p-10 text-xs lg:text-base">
    <h1 class="font-bold mb-4 text-purple">Sepetim</h1>
    <h1 class="font-bold text-purple text-center" v-if="basketItem.length == 0">
      Sepette Ürün Bulunmamaktadır !
    </h1>
    <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs uppercase bg-gray-50 text-purple">
          <tr>
            <th scope="col" class="px-10 py-3">
              <span class="sr-only">Image</span>
            </th>
            <th scope="col" class="px-6 py-3">Ürün</th>
            <th scope="col" class="px-6 py-3">Mİktar</th>
            <th scope="col" class="px-6 py-3">Fİyat</th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="basket in basketItem" :key="basket" class="bg-white border-b text-black">
            <!-- ürün resmi -->
            <td class="p-4">
              <img
                :src="`/src/assets/images/books/${basket.imgUrl}`"
                class="w-8 md:w-16 max-w-full max-h-full h-auto"
                alt="Apple Watch"
              />
            </td>
            <!-- ürün adı -->
            <td class="px-6 py-4 font-semibold text-gray-900">{{ basket.name }}</td>
            <!-- Miktar -->
            <td class="px-6 py-4">
              <div class="flex items-center">
                <button
                  class="inline-flex items-center justify-center h-6 w-6 p-1 me-3 text-sm font-medium text-purple bg-white border border-purple rounded-full focus:outline-none focus:ring-4 focus:ring-gray-200"
                  type="button"
                  @click="basket.amount--"
                >
                  <span class="sr-only">Quantity button</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <div>
                  <input
                    type="number"
                    id="first_product"
                    class="w-14 border border-purple text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 text-purple placeholder:text-purple"
                    required
                    :value="basket.amount"
                    v-bind:change="handdleChangeAmount(basket, basket.amount)"
                  />
                </div>

                <button
                  class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-purple bg-white border border-purple rounded-full focus:outline-none focus:ring-4 focus:ring-gray-200"
                  type="button"
                  @click="basket.amount++"
                >
                  <span class="sr-only">Quantity button</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
            <!-- fiyat -->
            <td class="px-6 py-4 font-semibold text-gray-900 e">
              {{ basket.price * basket.amount }} ₺
            </td>
            <!-- sil -->
            <td class="px-6 py-4">
              <button @click="handdleRemove(basket)">Sil</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-purple font-bold text-end mt-4">Toplam Tutar : {{ booksTotalPrice }} ₺</p>
      <button
        class="px-3 text-xs lg:text-sm lg:px-6 py-1 bg-yellow-500 font-bold text-purple mx-3 hover:bg-yellow-400 duration-300 rounded-lg mb-4"
      >
        Sepeti Onayla
      </button>
    </div>

    <!-- <a-table style="font-size: 12px" :dataSource="basketItem" :columns="columns" />
    <a-layout-footer class="flex justify-end">
      <p class="mt-3">Toplam Tutar : 444</p>

      <a-button type="" class="bg-purple text-white w-40 ml-14 mt-3" html-type="submit"
        >Siparişi Tamamla</a-button
      >
    </a-layout-footer> -->
  </div>
</template>

<script setup lang="ts">
import basketServices from '@/services/basketServices'
import { computed, onMounted, ref } from 'vue'
// import AuthServices from '@/services/authServices'
// const basket.amount = ref()

// const cikar = (amount) => {
//   amount.value--
//   return amount
// }

onMounted(async () => {
  await loadBasket()
})

const basketItem = ref([])

const handdleRemove = async (basket: any) => {
  await basketServices.deleteBasket(basket)
  await loadBasket()
}

const loadBasket = async () => {
  basketItem.value = await basketServices.getBasket()
  console.log('Template-basket_item:', basketItem.value)
}
const handdleChangeAmount = async (basket: any, amount: any) => {
  await basketServices.updateBasket(basket, amount)

  // amount.value = '0'
}

const booksTotalPrice = computed(() => {
  return basketServices.booksTotalPrice(basketItem.value)
})
</script>

<style scoped></style>

<!-- @click="handdleChangeAmount(basket, amount)" -->
<!-- @click="handdleChangeAmount(basket, basket.amount)" -->
