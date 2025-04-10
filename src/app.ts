import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./models/database";
import {indexRoute} from "./routes";
import {connectProducer} from "./config/kafka_config/kafka";

const app = express();
dotenv.config();

const port = process.env.PORT || 8182;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

connectProducer();

indexRoute(app);
async function testConnection() {
    try {
      await connectionDB.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await testConnection();
})

