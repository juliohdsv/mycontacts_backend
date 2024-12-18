import express from "express";

import routes from "./routes/main.route.js";

const app = express();

app.use(routes);

app.listen(3333, ()=> console.log("Server running"));
