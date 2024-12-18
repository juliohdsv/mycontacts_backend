import { Router } from "express";

import ContactController from "../app/controllers/ContactController.js";

const router = Router();

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.updated);
router.delete("/contacts/:id", ContactController.delete);

export default router;
