import express from "express";
import {
  entry,
  getBakorwil,
  getBakorwilById,
  createBakorwil,
  updateBakorwil,
  deleteBakorwil,
} from "../controller/bakorwilController.js";

const router = express.Router();

router.get("/", entry);
// ROUTE GET ALL BAKORWIL
router.get("/bakorwil", getBakorwil);
// ROUTE GET BAKORWIL BY ID
router.get("/bakorwil/:id", getBakorwilById);
// ROUTE CREATE BAKORWIL
router.post("/bakorwil", createBakorwil);
// ROUTE EDIT BAKORWIL
router.patch("/bakorwil/:id", updateBakorwil);
// ROUTE DELETE BAKORWIL
router.delete("/bakorwil/:id", deleteBakorwil);

export default router;
