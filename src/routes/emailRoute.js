import express from "express";
import { sendEmail } from "../controllers/emailcontroller.js";

const routes = express.Router();



routes.post("/send_email", sendEmail);



export default routes;
