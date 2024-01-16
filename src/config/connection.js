import { config } from 'dotenv';
import assert from 'assert';

config();

const { PORT, HOST, HOST_URL, DB_USER, DB_PASS, DB_SERVER_NAME, DB_DATABASE, DB_ENCRYPT, DB_TRUST_SERVER_CERTIFICATE, VERSION } =
  process.env;

const sqlEcrypt = DB_ENCRYPT === 'true';
const sqlTrustServerCertificate = DB_TRUST_SERVER_CERTIFICATE === 'true';

assert(PORT, 'Port is required');
assert(HOST, 'Host is required');
assert(VERSION, 'Host is required');

export default {
  port: PORT,
  version: VERSION,
  url: HOST_URL,
  sql: {
    server: DB_SERVER_NAME,
    dataBase: DB_DATABASE,
    user: DB_USER,
    password: DB_PASS,
    option: {
      encrypr: sqlEcrypt,
      trustServerCertificate: sqlTrustServerCertificate,
      enabelArithAbort: true,
    },
  },
};
