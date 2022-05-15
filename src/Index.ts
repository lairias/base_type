import express from "express";
import auth from "./routes/auth.route";
import db from "../models"
const app = express();

db.sequelize.sync().then(() => {
    console.log("DB connected");
    app.listen(8000)
});
//---------------------------------------------------------------------------------------------------------------------
// *********************************Mideware*********************************
app.use(express.json())

app.use("/api/auth", auth
);
