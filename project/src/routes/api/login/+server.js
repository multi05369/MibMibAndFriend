import { json } from '@sveltejs/kit';
import { db } from '../../../lib/database/dbconn.js';
import argon2 from 'argon2';

export async function POST({ request }) {
  try {
    const { email, password } = await request.json();

    // Wrap db.get() in a Promise to ensure it works with async/await
    const user = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });

    if (!user) {
      return json({ error: 'Invalid email or password' }, { status: 400 });
    }

    // If the user signed up using Google OAuth, they won't have a password
    if (!user.password) {
      return json({ error: 'Please log in with Google' }, { status: 400 });
    }

    // Verify password with Argon2
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return json({ error: 'Invalid email or password' }, { status: 400 });
    }

    return json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email, role: user.role } });

  } catch (error) {
    console.error('Unexpected error:', error);
    return json({ error: 'Something went wrong' }, { status: 500 });
  }
}
