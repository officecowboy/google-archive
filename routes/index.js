import { Router } from "express";
import articlesRoutes from "./articles.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", articlesRoutes);

export default router;