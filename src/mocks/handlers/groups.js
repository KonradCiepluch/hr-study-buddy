import { rest } from 'msw';
import { db } from 'mocks/db';

export const groups = [
  rest.get('/groups', (req, res, ctx) => {
    const groups = db.group.getAll();
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/groups/:id', (req, res, ctx) => {
    if (req.params.id) {
      const filteredStudents = db.student.findMany({
        where: {
          group: {
            equals: req.params.id,
          },
        },
      });
      return res(
        ctx.status(200),
        ctx.json({
          students: filteredStudents,
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        error: 'Please provide the group ID',
      })
    );
  }),
];
