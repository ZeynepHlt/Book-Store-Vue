<template>
  <div class="border shadow-md w-3/4 lg:w-1/2 mx-auto p-10">
    <h1 class="text-center font-bold mb-4 text-purple">Üye Ol</h1>
    <a-form
      :model="userDataSing"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 10 }"
      autocomplete="off"
    >
      <a-form-item
        label="Adınız"
        name="name"
        :rules="[{ required: true, message: 'Lütfen adınızı giriniz..' }]"
      >
        <a-input v-model:value="userDataSing.name" />
      </a-form-item>
      <a-form-item
        label="Soy Adınız"
        name="name"
        :rules="[{ required: true, message: 'Lütfen soyadınızı giriniz..' }]"
      >
        <a-input v-model:value="userDataSing.surname" />
      </a-form-item>
      <a-form-item
        label="E-Posta"
        name="username"
        :rules="[{ required: true, message: 'Lütfen kullanıcı adınızı giriniz..' }]"
      >
        <a-input v-model:value="userDataSing.username" />
      </a-form-item>

      <a-form-item
        label="Şifre"
        name="password"
        :rules="[{ required: true, message: 'Lütfen şifrenizi giriniz..' }]"
      >
        <a-input-password v-model:value="userDataSing.password" />
      </a-form-item>

      <a-form-item class="flex justify-center lg:pl-9">
        <a-button
          type=""
          class="bg-purple text-white w-48 lg:w-60"
          html-type="submit"
          @click="onSave"
          >Üye Ol</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import AuthServices from '@/services/authServices'

// interface FormState {
//   surname: string
//   name: string
//   username: string
//   password: string
//   remember: boolean
// }
const userDataSing = reactive({
  name: '',
  surname: '',
  username: '',
  password: '',
  remember: true
})

const onSave = async () => {
  await AuthServices.signUp(userDataSing)
  alert('Üyelik işleminiz gerçekleştirildi..')
  location.href = '/login'
}
</script>

<style scoped></style>
