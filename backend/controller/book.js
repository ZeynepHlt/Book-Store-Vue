//*istek ve cevapların yönetildiği yer
//burada yazılan fonksiyonları sayfalarda kullanmak için response ve request
import {
  getBooks,
  getBookById,
  insertBook,
  getCategories,
  insertUser,
  getUser,
  insertBasket,
  getBasket,
  updateBasketById,
  deleteBasket,
} from "../modules/bookModel.js";

//!tüm kitapları getir

export const showBooks = (req, res) => {
  getBooks((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); //veriyi json şeklinde döndür
    }
  });
};

//!tek bir ürünü getir
export const showBookById = (req, res) => {
  //istenilen ürünün id sini de gönder
  getBookById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); //veriyi json şeklinde döndür
    }
  });
};

//!Yeni kitap ekle

export const createBooks = (req, res) => {
  const data = req.body; //data tanımsız olduğu için
  insertBook(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); //veriyi json şeklinde döndür
    }
  });
};

//!tüm kategoriler
export const showCategory = (req, res) => {
  getCategories((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); //veriyi json şeklinde döndür
    }
  });
};

//!user ekle
export const addUser = (req, res) => {
  const data = req.body; //data tanımsız olduğu için
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); //veriyi json şeklinde döndür
    }
  });
};

//!tüm user  getir
export const getAllUser = (req, res) => {
  getUser((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); //veriyi json şeklinde döndür
    }
  });
};

//!sepete kitap ekle
export const addBasket = (req, res) => {
  const data = req.body; //data tanımsız olduğu için
  insertBasket(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); //veriyi json şeklinde döndür
    }
  });
};

//!sepetteki ürünleri geitr
export const getAllBasket = (req, res) => {
  getBasket((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results); //veriyi json şeklinde döndür
    }
  });
};

//!sepetteki ürün miktarını güncelle
export const updateBasket = (req, res) => {
  const data = req.body;
  updateBasketById(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//!sepetteki ürünü sil
export const deleteBaskett = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  deleteBasket(id, data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
