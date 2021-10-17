import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/groups/:id', (req, res, ctx) => {
    if (req.params.id) {
      const filteredStudents = students.filter((student) => student.group === req.params.id);
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
    if (req.params.id) {
      const matchingStudent = students.find((student) => student.id === req.params.id);
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

    const matchingStudents = searchPhrase ? students.filter((student) => student.name.toLowerCase().includes(searchPhrase.toLowerCase())) : [];

    return res(ctx.status(200), ctx.json({ matchingStudents }));
  }),
];
