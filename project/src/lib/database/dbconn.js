import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Get the current directory from import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

let db;

async function getDb() {
  if (!db) {
    db = await open({
      filename: path.join(__dirname, 'database/app.db'), // Absolute path to db
      driver: sqlite3.Database
    });
  }
  return db;
}

(async () => {
  try {
    const db = await getDb();
    await db.run(`
      CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          google_id TEXT UNIQUE,
          name TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT,
          avatar TEXT,
          phone TEXT,
          address TEXT,
          role TEXT DEFAULT 'customer',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database created successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.error('Detailed error:', error);
  }
})();
