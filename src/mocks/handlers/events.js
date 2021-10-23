import { rest } from 'msw';
import { db } from 'mocks/db';

export const events = [
  rest.get('/events', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ events: db.event.getAll() }));
  }),
  rest.get('/events/:name', (req, res, ctx) => {
    if (req.params.name) {
      const matchingEvents = db.event.findMany({
        where: {
          group: {
            equals: req.params.name,
          },
        },
      });
      if (matchingEvents.length) {
        return res(
          ctx.status(200),
          ctx.json({
            events: matchingEvents,
          })
        );
      }
      return res(
        ctx.status(403),
        ctx.json({
          error: `There are not student's of this group`,
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
];
