import { config } from "dotenv";
config();
import { sequelize } from "@src/models";
import configRouters from "@src/routers";

import express from "express";

const app = express();
const PORT = process.env.PORT || 8008;

app.use(express.json());
app.use(express.static("public"));

configRouters(app);

app.listen(PORT, async () => {
    try {
        console.log(`Server is running on port ${PORT}`);
        await sequelize.authenticate();
        console.log(`Connect has been established successfully!`);
    } catch (error) {
        console.log(`Unable to connect to the database: ${error}`);
    }
});
