import express from "express";
const router = express.Router();
 router.get("/login", (_req, res) => {
    res.send("incio de sesion");
});
export default router;