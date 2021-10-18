import { rest } from 'msw';
import { db } from 'mocks/db';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    const groups = db.group.getAll();
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/groups/:id', (req, res, ctx) => {
    const students = db.student.getAll();
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
        students,
      })
    );
  }),
  rest.get('/students/:id', (req, res, ctx) => {
    const students = db.student.getAll();
    if (req.params.id) {
      const matchingStudent = db.student.findFirst({ where: { id: { equals: req.params.id } } });
      if (!matchingStudent) {
        return res(
          ctx.status(404),
          ctx.json({
            error: 'No matching student',
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          student: matchingStudent,
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
  rest.post('/students/search', (req, res, ctx) => {
    const {
      body: { searchPhrase },
    } = req;

    const matchingStudents = searchPhrase ? db.student.findMany({ where: { name: { contains: searchPhrase } } }) : [];

    return res(ctx.status(200), ctx.json({ matchingStudents }));
  }),
];
