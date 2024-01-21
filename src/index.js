import { app } from "./app.js";
import { connectDb } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDb().then(() => {
  try {
    app.listen(PORT, () => {
      console.log("Server Running...");
    });
  } catch (error) {
    console.log(error);
  }
});
