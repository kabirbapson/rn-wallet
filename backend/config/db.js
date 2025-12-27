import neon from '@neondatabase/serverless'

import 'dotenv/config'

const db = process.env.DB_URL
console.log({db})
export const sql = neon(process.env.DB) 