import { json } from '@sveltejs/kit';
import { db } from '../../../lib/database/dbconn.js';
import argon2 from 'argon2';

export async function POST({ request }) {
  return new Promise(async (resolve) => {
    try {
      const { name, email, password, phone, address } = await request.json();

      // Check if email already exists
      db.get('SELECT * FROM users WHERE email = ?', [email], async (err, existingUser) => {
        if (err) {
          console.error('Database error:', err);
          return resolve(json({ error: 'Something went wrong' }, { status: 500 }));
        }
        if (existingUser) {
          return resolve(json({ error: 'Email already exists' }, { status: 400 }));
        }

        // Hash password
        const hashedPassword = await argon2.hash(password);

        // Insert user
        db.run(
          `INSERT INTO users (name, email, password, phone, address) VALUES (?, ?, ?, ?, ?)`,
          [name, email, hashedPassword, phone, address],
          function (err) {
            if (err) {
              console.error('Database error:', err);
              return resolve(json({ error: 'Something went wrong' }, { status: 500 }));
            }
            resolve(json({ message: 'User registered successfully' }));
          }
        );
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      resolve(json({ error: 'Something went wrong' }, { status: 500 }));
    }
  });
}
