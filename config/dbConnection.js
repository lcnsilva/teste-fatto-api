import { neon } from '@neondatabase/serverless';


const sql = neon(process.env.DATABASE_URL);

const requestHandler = async () => {
  const result = await sql`SELECT version()`;
  const data = JSON.stringify(result);
  return data;
};

export default requestHandler;
