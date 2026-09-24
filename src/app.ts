import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
/**  1. ENTERANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**  2. SESSIONS **/

/**  3. VIEWS    **/
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/**  4. ROUTERS **/
// BSSR: EJS
app.use("/admin", routerAdmin);
app.use("/", router); // SPA: REACT

export default app;
