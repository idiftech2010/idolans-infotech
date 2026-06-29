import { Router } from "express";
import { db, leadsTable } from "@workspace/db";
import { CreateLeadBody } from "@workspace/api-zod";
import { desc } from "drizzle-orm";

const router = Router();

router.post("/", async (req, res) => {
  const parsed = CreateLeadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.issues });
    return;
  }

  const { name, email, schoolName, facilitySize, appCategory, message } = parsed.data;

  const [lead] = await db
    .insert(leadsTable)
    .values({ name, email, schoolName: schoolName ?? null, facilitySize: facilitySize ?? null, appCategory, message: message ?? null })
    .returning();

  req.log.info({ leadId: lead.id, appCategory }, "Lead captured");
  res.status(201).json({ ...lead, createdAt: lead.createdAt.toISOString() });
});

router.get("/", async (req, res) => {
  const leads = await db.select().from(leadsTable).orderBy(desc(leadsTable.createdAt));
  res.json(leads.map((l) => ({ ...l, createdAt: l.createdAt.toISOString() })));
});

export default router;
