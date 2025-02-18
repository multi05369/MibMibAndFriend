import { json } from '@sveltejs/kit';
import { getDb } from '../../../lib/database/dbconn.js'; // Make sure the path to dbconn.js is correct
import argon2 from 'argon2';

export async function POST({ request }) {
  try {
    const db = await getDb();  // Use the getDb function to obtain the DB connection
    const { name, email, password, phone, address } = await request.json();

    // Check if email already exists
    const existingUser = await db.get('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser) {
      return json({ error: 'Email already exists' }, { status: 400 });
    }

    // Hash the password using Argon2
    const hashedPassword = await argon2.hash(password);

    // Insert new user into the database
    await db.run(
      `INSERT INTO users (name, email, password, phone, address) VALUES (?, ?, ?, ?, ?)`,
      [name, email, hashedPassword, phone, address]
    );

    return json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return json({ error: 'Something went wrong' }, { status: 500 });
  }
}
