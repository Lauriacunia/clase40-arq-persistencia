import express from "express";
import handlebars from "express-handlebars";
import htmlWire from "./routes/htmlWire.js";
import dataWire from "./routes/dataWire.js";
import singletonRoutes from "./routes/singletonRoutes.js";
// simular __dirname en módulos ES6
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "index.hbs",
  })
);
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/html-onwire", htmlWire);
app.use("/data-onwire", dataWire);
app.use("/datos", singletonRoutes);
app.use("/", (req, res) => {
  res.redirect("/html-onwire");
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
  console.log(
    `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
  )
);
server.on("error", (err) => console.log(err));
