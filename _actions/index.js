'use server';

import { createUser, findUserByCredentials, updateInterest } from '@/_services/queries';
import { revalidatePath } from 'next/cache';
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
    return found;
  } else {
    throw new Error(`Invalid Credentials!!`);
  }
}

async function addInterestedEvent(eventId, authId) {
  try {
    await updateInterest(eventId, authId);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath('/');
}

export { addInterestedEvent, login, registerUser };
