'use server';

import EmailTemplate from '@/_components/common/EmailTemplate';
import { createUser, findUserByCredentials, getEventById, updateGoing, updateInterest } from '@/_services/queries';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';

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

async function addGoingEvent(eventId, user) {
  try {
    await updateGoing(eventId, user?.id);
    await sendEmail(eventId, user);
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath('/');
  redirect('/');
}

async function sendEmail(eventId, user) {
  try {
    const event = await getEventById(eventId);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here.`;
    const sent = await resend.emails.send({
      from: 'noreply@eventry.hellonasir.dev',
      to: user?.email,
      subject: 'Successfully Registered for the event!',
      react: EmailTemplate({ message }),
    });
  } catch (error) {
    throw new Error(error);
  }
}

export { addGoingEvent, addInterestedEvent, login, registerUser, sendEmail };
