import { rest } from 'msw';
import { db } from 'mocks/db';
import faker from 'faker';

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
      if (filteredStudents.length) {
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
          Status: `There aren't students of this group`,
          students: filteredStudents,
        })
      );
    }
    return res(
      ctx.status(403),
      ctx.json({
        error: 'Please provide the group ID',
      })
    );
  }),
  rest.delete('/groups/delete', (req, res, ctx) => {
    const deletedStudent = db.student.delete({
      where: {
        id: {
          equals: req.body.id,
        },
      },
    });

    return res(ctx.status(202), ctx.json({ status: 'Student has been deleted', deletedStudent }));
  }),
  rest.post('/groups/add', (req, res, ctx) => {
    const newStudent = {
      id: faker.datatype.uuid(),
      ...req.body,
      average: Number(req.body.average),
    };

    db.student.create(newStudent);

    return res(ctx.status(201), ctx.json({ student: newStudent }));
  }),
];
