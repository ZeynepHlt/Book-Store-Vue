<template>
  <div class="border shadow-md w-3/4 lg:w-1/2 mx-auto p-10">
    <h1 class="text-center font-bold mb-4 text-purple">Giriş Yap</h1>
    <a-form
      :model="userDataLogin"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 10 }"
      autocomplete="off"
    >
      <a-form-item
        label="E-Posta"
        name="username"
        :rules="[{ required: true, message: 'Lütfen kullanıcı adınızı giriniz..' }]"
      >
        <a-input v-model:value="userDataLogin.username" />
      </a-form-item>

      <a-form-item
        label="Şifre"
        name="password"
        :rules="[{ required: true, message: 'Lütfen şifrenizi giriniz..' }]"
      >
        <a-input-password v-model:value="userDataLogin.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="userDataLogin.remember">Beni Hatırla</a-checkbox>
      </a-form-item>

      <a-form-item class="flex justify-center lg:pl-9">
        <a-button
          type=""
          class="bg-purple text-white w-48 lg:w-60"
          html-type="submit"
          @click="onSave"
          >Giriş</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import AuthServices from '@/services/authServices'

const userDataLogin = reactive({
  username: '',
  password: '',
  remember: true
})

const onSave = async () => {
  await AuthServices.login(userDataLogin)
  const isAuth = AuthServices.isAuth()
  if (isAuth) {
    location.href = '/'
  } else {
    alert('Kullanıcı bulunamadı...')
  }
}
</script>

<style scoped></style>
