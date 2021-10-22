import '@testing-library/jest-dom';
import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';
import { db } from 'mocks/db';

const server = setupServer(...handlers);

beforeAll(() => {
  db.group.create({
    name: 'A',
  });
  db.group.create({
    name: 'B',
  });
  db.group.create({
    name: 'C',
  });

  db.teacher.create();

  // oraz przy użyciu pętli 15 studentów i wydarzeń
  for (let i = 0; i < 15; i++) {
    db.student.create();
    db.event.create();
  }

  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
