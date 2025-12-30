import {neon} from '@neondatabase/serverless'

import 'dotenv/config'

const db = process.env.DB_URL

export const sql = neon(db) 