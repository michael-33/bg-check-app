import { Router } from "express";
import {
  getCandidates,
  processCandidate,
} from "../controllers/candidateController.js";
import { validateCandidateInput } from "../middleware/validation.js";

const candidateRouter = Router();

candidateRouter.get("/api/candidates", getCandidates);
candidateRouter.post(
  "/api/processCandidate",
  validateCandidateInput,
  processCandidate
);

export { candidateRouter };
