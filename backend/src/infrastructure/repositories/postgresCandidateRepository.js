import { pgConnPool } from "../database/postgres.js";
import { candidateRepository } from "../../domain/repositories/candidateRepository.js";

const postgresCandidateRepository = {
    ...candidateRepository,
    createCandidate: async (candidate) => {
        const { name, email, keywords, summary, extData } = candidate;
        const query = `INSERT INTO candidates (name, email, keywords, summary, extData) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const result = await pgConnPool.query(query, [name, email, keywords, summary, extData]);
        return result.rows[0];
    },
    getCandidates: async () => {
        const query = `SELECT * FROM candidates`;
        const result = await pgConnPool.query(query);
        return result.rows;
    }
}

export { postgresCandidateRepository };
