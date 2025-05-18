import express from "express";
import cors from "cors";
import "dotenv/config.js"
import { candidateRouter } from "./interface/routes/candidateRoutes.js";
import { postgresCandidateRepository } from "./infrastructure/repositories/postgresCandidateRepository.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// register the candidate repository for DI
app.set("candidateRepository", postgresCandidateRepository);

app.use(candidateRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
