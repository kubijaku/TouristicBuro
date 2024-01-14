import express, { urlencoded } from "express";
import cors from "cors";
import tripsRouter from "./routes/trips.js";


const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "PUT", "POST", "DELETE"],
    })
);
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use("/api/trips", tripsRouter);


export default app;
