import express from "express";

const  app = express();

app.use("/", (request, response) => {
  response.send({ ok: true});
});

app.listen(3333, ()=> console.log("Server running"));