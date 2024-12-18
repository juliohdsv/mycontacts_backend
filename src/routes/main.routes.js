import { Router } from "express";

const route = Router();


route("/", (request, response) => {
  response.send({ ok: true});
});

export default route;