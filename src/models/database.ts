import { Sequelize } from 'sequelize-typescript';
import { transactions } from "./transactions";
import dotenv from "dotenv";

dotenv.config();

const connectionDB = new Sequelize({
    dialect: 'mssql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }  
})

transactions.initModel(connectionDB);

export { transactions, connectionDB };