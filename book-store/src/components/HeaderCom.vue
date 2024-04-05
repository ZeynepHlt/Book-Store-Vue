<template>
  <div class="flex justify-center">
    <img src="../assets/images/Group 3.png" alt="" />
  </div>
  <header
    class="header flex px-16 h-20 lg:h-36 items-center uppercase font-Alata font-bold text-sm"
  >
    <div class="lg:basis-1/4 mb-3 justify-center">
      <img src="../assets/images/Book Store.svg" alt="" />
    </div>

    <ul class="basis-2/4 space-x-8 justify-center hidden md:flex">
      <li class="hover:text-yellow-500 duration-300"><router-link to="/">Anasayfa</router-link></li>
      <li class="hover:text-yellow-500 duration-300">
        <router-link to="/about">Hakkımızda</router-link>
      </li>
      <li class="hover:text-yellow-500 duration-300">
        <a-dropdown class="flex justify-center items-center">
          <a
            class="ant-dropdown-link font-bold text-purple mx-3 hover:text-yellow-500 duration-300 rounded-lg items-center"
            @click.prevent
          >
             <p class="text-sm">KİTAPLAR</p>
          </a>

          <template #overlay>
            <a-menu>
              <a-menu-item v-for="cat in category" :key="cat.category_id">
                <router-link :to="'/books/' + cat.category_id"
                  ><a href="javascript:;">{{ cat.category_name }}</a></router-link
                >
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;"></a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </li>
      <li class="hover:text-yellow-500 duration-300">
        <router-link to="/contact">İletİşİm</router-link>
      </li>
    </ul>
    <div class="relative hidden md:flex">
      <input
        type="text"
        class="border-2 w-58 border-yellow-200 rounded-lg py-1 placeholder:text-xs placeholder:text-gray-600 placeholder:font-light focus:outline-yellow-500"
        placeholder="   Aradığınız ürünü yazınız.."
      /><SearchOutlined class="absolute right-4 top-2 text-purple1" />
    </div>

    <div class="basis-1/4 justify-center items-center hidden md:flex">
      <a-dropdown class="flex justify-center items-center">
        <a
          class="ant-dropdown-link font-bold text-purple mx-3 hover:text-yellow-500 duration-300 rounded-lg capitalize items-center"
          @click.prevent
        >
          <UserOutlined class="mr-1 mb-0.5" />
          <p class="text-sm capitalize" v-if="girisypn_user !== 'null'">
            Hoşgeldin {{ girisypn_user.user_name }}..
          </p>
          <router-link v-if="girisypn_user == 'null'" to="/login">Giriş Yap</router-link>
        </a>

        <template #overlay>
          <a-menu>
            <a-menu-item v-if="girisypn_user == 'null'">
              <router-link to="/login"><a href="javascript:;">Giriş Yap</a></router-link>
            </a-menu-item>
            <a-menu-item v-if="girisypn_user == 'null'">
              <router-link to="/signup"><a href="javascript:;">Üye Ol</a></router-link>
            </a-menu-item>
            <a-menu-item class="mt-0">
              <a href="javascript:;" v-if="girisypn_user !== 'null'" @click="logOut">Çıkış Yap</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

      <button class="hover:text-yellow-500 duration-300 flex items-center justify-between">
        <!-- <ShoppingCartOutlined class="" /> -->
        <ShoppingOutlined class="mr-1 mb-0.5" />
        <router-link to="/basket"> <p class="text-sm text-purple">Sepetim</p></router-link>
      </button>
    </div>

    <!-- mobile menü -->
    <div class="block md:hidden pr-4 ml-4">
      <div class="space-y-1 cursor-pointer">
        <div class="w-8 h-1 bg-purple rounded-full"></div>
        <div class="w-8 h-1 bg-purple rounded-full"></div>
        <div class="w-8 h-1 bg-purple rounded-full"></div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { UserOutlined, ShoppingOutlined } from '@ant-design/icons-vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import AuthServices from '../services/authServices'
import bookServices from '../services/bookServices'

import axios from 'axios'
import { onMounted, ref } from 'vue'

// const keyword = ref()
const books = ref()
const category = ref()
const girisypn_user = ref()

onMounted(async () => {
  await getCategories()
  books.value = await bookServices.getBooks()
})

girisypn_user.value = AuthServices.getUser()

const getCategories = async () => {
  try {
    const response = await axios.get('http://localhost:3000/category')
    category.value = response.data
    // console.log(category.value)
  } catch (error) {
    console.log(error)
  }
}

const logOut = () => {
  AuthServices.logout()
  location.href = '/login'
}
</script>

<style scoped></style>
