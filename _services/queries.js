import { User } from '@/_models/user';
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/_utils/data-util';
import mongoose from 'mongoose';

const { Event } = require('@/_models/event');

async function getAllEvents() {
  const events = await Event.find().lean();
  return replaceMongoIdInArray(events);
}

async function getEventById(id) {
  const event = await Event.findById(id).lean();
  return replaceMongoIdInObject(event);
}

async function createUser(user) {
  return await User.create(user);
}

async function findUserByCredentials(credentials) {
  const user = await User.findOne(credentials).lean();
  return replaceMongoIdInObject(user);
}

async function updateInterest(eventId, authId) {
  const event = await Event.findById(eventId);
  if (event) {
    await new Promise((res) => setTimeout(res, 3000));
    const foundUser = event.interested_ids.find((id) => id.toString() === authId);
    if (foundUser) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }
  }
  event.save();
}

async function updateGoing(eventId, authId) {
  const event = await Event.findById(eventId);
  if (event) {
    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    event.save();
  }
}

export { createUser, findUserByCredentials, getAllEvents, getEventById, updateGoing, updateInterest };
