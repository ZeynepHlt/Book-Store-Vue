//*express için kök dosyamız
import express from "express";

import cors from "cors";
import Router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router--ara yazılım
app.use(Router);

app.listen(3000, () => {
  console.log("3000 portu dinleniyor");
});
