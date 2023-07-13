import { z } from 'zod';

const schema = z.object({
  _id: z.string(),
  createdOn: z.date(),
  updatedOn: z.date(),
  type: z.string(),
  name: z.string(),
  color: z.string(),
  number: z.number(),
}).strict();

export default schema;