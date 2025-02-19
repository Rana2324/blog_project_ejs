import express from "express";
import { homeController, postController, postDetailsController, aboutController, contactController, notFoundController } from "../controllers/allController.js";
import { urlLoggerMiddleware } from '../middleware/globalMiddleware.js';

//create router
const router = express.Router();

// Apply URL logger middleware to all routes
router.use(urlLoggerMiddleware);

router.get("/", homeController);
router.get("/post", postController);
router.get("/post/:id", postDetailsController);
router.get("/about", aboutController);
router.get("/contact", contactController);
router.get("*", notFoundController);

export default router;