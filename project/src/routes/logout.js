// src/routes/logout.js (or in your login/logout logic)
export async function GET({ cookies }) {
    cookies.delete('session', { path: '/' }); // Delete the session cookie
    return { status: 200, body: { message: 'Logged out successfully' } };
  }
  