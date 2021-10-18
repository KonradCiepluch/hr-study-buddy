import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { db } from './db';
import { groups } from './db';

export const worker = setupWorker(...handlers);

const createRecords = () => {
  for (let i = 0; i < 15; i++) {
    db.student.create();
    db.event.create();
  }
};

const createGroups = () => groups.forEach((group) => db.group.create({ name: group }));

createRecords();
createGroups();

window.mocks = {
  createRecords,
  createGroups,
  getStudents: () => db.student.getAll(),
  getEvents: () => db.event.getAll(),
  getGroups: () => db.group.getAll(),
};
