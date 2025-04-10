import { Sequelize } from 'sequelize-typescript';
import { transactions } from "./transactions";
import dotenv from "dotenv";

dotenv.config();

const connectionDB = new Sequelize({
    dialect: 'mssql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'sa',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'Checking',
    port: Number(process.env.DB_PORT || '1433'),
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }  
})

transactions.initModel(connectionDB);

export { transactions, connectionDB };