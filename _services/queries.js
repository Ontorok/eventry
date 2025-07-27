import { User } from '@/_models/user';
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/_utils/data-util';

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

export { createUser, getAllEvents, getEventById };
