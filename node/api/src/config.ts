export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

export const postgreSqlConnection = {
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE,
};

export const corsUrl = process.env.CORS_URL;

export const logDirectory = process.env.LOG_DIR;
export const showErrorInProduction = process.env.SHOW_ERROR_IN_PRODUCTION;
