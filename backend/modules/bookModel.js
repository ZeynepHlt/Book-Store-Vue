//* database işlemlerinin yapıldığı yer

//db import et
import db from "../config/database.js";

//tüm kitapları getir
export const getBooks = (result) => {
  db.query("select * from books", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
//tüm kategoriler getir
export const getCategories = (result) => {
  db.query("select * from category", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
//tek bir kitabı getir
export const getBookById = (id, result) => {
  db.query("select * from books where book_id=?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//veritabanına ürün ekleme
export const insertBook = (data, result) => {
  db.query("insert into books set?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//veritabanına user ekleme
export const insertUser = (data, result) => {
  db.query("INSERT INTO users SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//kullanıcıları getir
export const getUser = (result) => {
  db.query("select * from users", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//sepete kitap ekleme
export const insertBasket = (data, result) => {
  db.query("INSERT INTO basket SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//sepetteki ürünleri getir
export const getBasket = (result) => {
  db.query("select * from basket", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// sepetteki ürün miktarını güncelle
export const updateBasketById = (data, result) => {
  db.query(
    "UPDATE basket SET amount = ? WHERE book_id = ? AND user_id=?",
    [data.amount, data.book_id, data.user_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// sepetten ürün sil
export const deleteBasket = (id, data, result) => {
  db.query(
    "DELETE FROM basket WHERE book_id = ? AND user_id=?",
    [id, data.user_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
