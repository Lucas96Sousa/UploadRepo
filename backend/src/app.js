require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const { resolve } = require("path");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.mongo();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan("dev"));
    this.server.use(
      "/files",
      express.static(resolve(__dirname, "..", "tmp", "uploads"))
    );
  }

  routes() {
    this.server.use(routes);
  }

  mongo() {
    try {
      this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      });
      console.log("Servidor Conectado");
    } catch (err) {
      console.log(`${err}, Servidor náo foi acessado`);
    }
  }
}

module.exports = new App().server;
