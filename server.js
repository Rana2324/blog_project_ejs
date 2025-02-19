import express from "express";
import router from "./routes/route.js";
import { notFoundHandler } from "./middleware/globalMiddleware.js";

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.static('public'));


// Routes
app.use("/", router);

// Error Handling
app.use(notFoundHandler);  // Handle 404

app.listen(7000, () => {
    console.log("Server is running on port 7000 http://localhost:7000");
})
