import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controller/hotel.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);

//Update
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//Get
router.get("/:id", getHotel);

//Get All
router.get("/", getHotels);

export default router;
