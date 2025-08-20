import { Router } from 'express';
import { z } from 'zod';

export const router = Router();

const echoSchema = z.object({ message: z.string().min(1) });

router.post('/echo', (req, res) => {
  const parsed = echoSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }
  res.json({ echo: parsed.data.message });
});
