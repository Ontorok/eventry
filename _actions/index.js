'use server';

import { createUser, findUserByCredentials } from '@/_services/queries';
import { redirect } from 'next/navigation';

async function registerUser(fromData) {
  const user = Object.fromEntries(fromData);
  const created = await createUser(user);
  if (created) {
    redirect('/login');
  }
}

async function login(formData) {
  const credentials = Object.fromEntries(formData);
  const found = await findUserByCredentials(credentials);
  if (found) {
    redirect('/');
  } else {
    throw new Error(`Invalid Credentials!!`);
  }
}

export { login, registerUser };
