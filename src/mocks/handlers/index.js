import { auth } from './auth';
import { groups } from './groups';
import { students } from './students';
import { events } from './events';

export const handlers = [...auth, ...groups, ...students, ...events];
