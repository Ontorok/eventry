'use client';

import { login } from '@/_actions';
import { useState } from 'react';

export default function LoginForm() {
  const [error, setError] = useState(null);

  async function OnSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      await login(formData);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }
  return (
    <form className="login-form" onSubmit={OnSubmit}>
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* email */}
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>
      {/* password */}
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit" className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800">
        Login
      </button>
    </form>
  );
}
