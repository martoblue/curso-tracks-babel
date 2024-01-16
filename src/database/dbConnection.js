import sql from 'mssql';
import { Sequelize } from 'sequelize';
import config from '../config/connection.js';

const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const server = process.env.DB_SERVER_NAME;
const database = process.env.DB_DATABASE;

const sequelize = new Sequelize(database, user, password, {
  host: server,
  dialect: 'mssql',
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
  return sequelize;
};

async function getConnection() {
  const pool = await sql.connect(config.sql);
  const result = await pool.request().query('SELECT 1');
  console.log(result);
}

export { sequelize, dbConnection, getConnection };
