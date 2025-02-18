import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get the current directory (__dirname equivalent in ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define database path
const dbPath = path.join(__dirname, 'app.db');

// Check if the directory is writable
fs.access(__dirname, fs.constants.W_OK, (err) => {
  if (err) {
    console.error('❌ Directory is not writable:', __dirname);
  }
});

// Initialize database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error opening database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database:', dbPath);

    db.run(`
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
    `, (err) => {
      if (err) {
        console.error('❌ Error creating table:', err.message);
      } else {
        console.log('✅ Users table is ready.');
      }
    });
  }
});

// ✅ Export must be outside any function
export { db };
