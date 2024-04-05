//*Yönlendirmelerin yapıldığı yer
import express from "express";
//controller daki fonksiyonları içe aktar
import {
  showBooks,
  createBooks,
  showBookById,
  showCategory,
  addUser,
  getAllUser,
  addBasket,
  getAllBasket,
  updateBasket,
  deleteBaskett,
} from "../controller/book.js";

//express router ı başlat
const router = express.Router();

//!tüm kitapları getir
router.get("/books", showBooks);
//!tek kitabı getir
router.get("/books/:id", showBookById);
//!kitap ekle
router.post("/books", createBooks);
//!user ekle
router.post("/users", addUser);
//!user getir
router.get("/users", getAllUser);
//!Kategorileri getir
router.get("/category", showCategory);
//!sepete kitap ekle
router.post("/basket", addBasket);
//!sepetteki tüm ürünleri getir
router.get("/basket", getAllBasket);
//!sepeti güncelle
router.put("/basket", updateBasket);
//!ürün sil
router.delete("/basket/:id", deleteBaskett);

export default router;
