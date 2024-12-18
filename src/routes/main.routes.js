import { Router } from "express";

import ContactController from "../app/controllers/ContactController";

const route = Router();

route.get("/contacts", ContactController.index);

export default route;
