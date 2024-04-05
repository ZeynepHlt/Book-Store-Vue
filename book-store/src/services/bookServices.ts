import axios from 'axios'

export default {
  async getBooks() {
   try {
      const response = await axios.get('http://localhost:3000/books')
     return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
