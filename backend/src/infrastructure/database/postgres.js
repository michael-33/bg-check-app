import { Pool } from 'pg';

const pgConnPool = new Pool({
  connectionString: process.env.POSTGRESQL_DATABASE_URL
});

export { pgConnPool }; 