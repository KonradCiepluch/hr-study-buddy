import { rest } from 'msw';
import { db } from 'mocks/db';
import faker from 'faker';

export const students = [
  rest.get('/students/:id', (req, res, ctx) => {
    const students = db.student.getAll();
    if (req.params.id && req.params.id !== 'undefined') {
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
  rest.post('/students', (req, res, ctx) => {
    const newStudent = {
      id: faker.datatype.uuid(),
      ...req.body,
      average: Number(req.body.average),
    };

    db.student.create(newStudent);

    return res(ctx.status(201), ctx.json({ student: newStudent }));
  }),
];
