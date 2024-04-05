import axios from 'axios'
import { ref } from 'vue'

const user = ref()
const allUser = ref()
class AuthServices {
  //üye ol
  async signUp(userDataSing: any) {
    try {
      await axios.post('http://localhost:3000/users', {
        user_name: userDataSing.name,
        user_surname: userDataSing.surname,
        user_mail: userDataSing.username,
        user_password: userDataSing.password
      })
    } catch (error) {
      console.log(error)
    }
  }
  //giriş
  async login(userDataLogin: any) {
    try {
      const response = await axios.get('http://localhost:3000/users')
      allUser.value = response.data
    } catch (error) {
      console.log(error)
    }
    allUser.value.forEach((user_item: any) => {
      if (
        userDataLogin.username == user_item.user_mail &&
        userDataLogin.password == user_item.user_password
      ) {
        user.value = user_item
        localStorage.setItem('user', JSON.stringify(user_item))
        localStorage.setItem('isAuth', JSON.stringify(true))
      }
    })

    console.log('giriş yapan:', userDataLogin)
    console.log('eşleşen:', user.value)
  }

  //çıkış
  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuth')
  }

  //kullanıcı bilgilerini getir
  getUser() {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    } else {
      return 'null'
    }
  }

  //giriş varmı
  isAuth(): boolean {
    return JSON.parse(localStorage.getItem('isAuth') || 'false')
  }
}

export default new AuthServices()
