import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

// TCP 2
const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/**  1. ENTERANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // Public Folder
app.use(express.urlencoded({ extended: true })); // Traditional API
app.use(express.json()); // Rest API
app.use(morgan(MORGAN_FORMAT));

/**  2. SESSIONS **/ // Authentication & Authorization => Tamg'a
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6 hours
    },
    store: store,
    resave: true, // 10:30 auth = > 13:30
    saveUninitialized: true,
  }),
);

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next(); // Middleware
});

/**  3. VIEWS    **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**  4. ROUTERS **/
// BSSR: EJS
app.use("/admin", routerAdmin); // BSSR
app.use("/", router); // SPA: REACT

export default app;
