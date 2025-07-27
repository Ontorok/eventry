'use server';

import { createUser } from '@/_services/queries';
import { redirect } from 'next/navigation';

async function registerUser(fromData) {
  const user = Object.fromEntries(fromData);
  const created = await createUser(user);
  if (created) {
    redirect('/login');
  }
}

export { registerUser };
