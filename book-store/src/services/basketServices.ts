import axios from 'axios'
import AuthServices from './authServices'
import { ref } from 'vue'
import bookServices from './bookServices'
// import { toFixed } from 'ant-design-vue/es/input-number/src/utils/MiniDecimal'

const user = AuthServices.getUser()

const books = ref()
books.value = await bookServices.getBooks()

const basket = ref()
const basket_item = ref([])

export default {
  async addBasket(book_item: any) {
    try {
      await axios.post('http://localhost:3000/basket', {
        book_id: book_item.book_id,
        user_id: user.user_id,
        amount: 1
      })
    } catch (error) {
      console.log(error)
    }
  },

  async deleteBasket(basket: any) {
    try {
      await axios.delete(`http://localhost:3000/basket/${basket.book_id}`, {
        data: user
      })
    } catch (err) {
      console.log(err)
    }
  },

  async getBasket() {
    try {
      const response = await axios.get('http://localhost:3000/basket')
      basket.value = response.data
      basket_item.value = []
      basket.value.forEach((element: any) => {
        if (element.user_id == user.user_id) {
          books.value.forEach((book: any) => {
            if (element.book_id == book.book_id) {
              book.amount = element.amount
              basket_item.value.push(book)
            }
          })
        }
      })
      return basket_item.value
    } catch (error) {
      console.log(error)
    }
  },

  async updateBasket(book: any, amount: any) {
    try {
      await axios.put(`http://localhost:3000/basket`, {
        user_id: user.user_id,
        book_id: book.book_id,
        amount: amount
      })
    } catch (err) {
      console.log(err)
    }
  },

  booksTotalPrice(basketItem: any[]) {
    const total = ref(0)
    basketItem?.forEach((i) => {
      if (i.amount > 0) {
        total.value += i.amount * i.price
        total.value = Number(total.value.toFixed(3))
      }
    })

    return total.value
    // const total = ref(0)
    // basketItem.forEach((item: any) => {
    //   console.log(item)
    //   // if (item.amount > 0) {
    //   //   total.value += item.price
    //   //   console.log(total)
    //   // }
    // })
  }
}
