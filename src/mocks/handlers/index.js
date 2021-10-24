import { auth } from './auth';
import { groups } from './groups';
import { students } from './students';
import { events } from './events';
import { notes } from './notes';

export const handlers = [...auth, ...groups, ...students, ...events, ...notes];
