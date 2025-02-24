import { json } from '@sveltejs/kit';
import { db } from '../../../lib/database/dbconn.js';
import argon2 from 'argon2';

export async function POST({ request }) {
  return new Promise(async (resolve) => {
    try {
      const {
        name,
        email,
        password,
        phone,
        address_line1,
        address_line2,
        city,
        state,  // Adjusted to match your DB schema
        zip_code,
        country
      } = await request.json();

      // Check if email already exists
      db.get('SELECT * FROM users WHERE email = ?', [email], async (err, existingUser) => {
        if (err) {
          console.error('Database error:', err);
          return resolve(json({ error: 'Something went wrong' }, { status: 500 }));
        }
        if (existingUser) {
          return resolve(json({ error: 'Email already exists' }, { status: 400 }));
        }

        try {
          // Hash password (only if it's provided, to support OAuth users)
          const hashedPassword = password ? await argon2.hash(password) : null;

          // Insert user into the database
          db.run(
            `INSERT INTO users 
            (name, email, password, phone, address_line1, address_line2, city, state, zip_code, country) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, email, hashedPassword, phone, address_line1, address_line2, city, state, zip_code, country],
            function (err) {
              if (err) {
                console.error('Database error:', err);
                return resolve(json({ error: 'Something went wrong' }, { status: 500 }));
              }
              resolve(json({ message: 'User registered successfully' }));
            }
          );
        } catch (hashError) {
          console.error('Password hashing error:', hashError);
          resolve(json({ error: 'Something went wrong' }, { status: 500 }));
        }
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      resolve(json({ error: 'Something went wrong' }, { status: 500 }));
    }
  });
}
