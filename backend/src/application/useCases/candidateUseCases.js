import { getMockData } from "../../infrastructure/services/externalApiService.js";
import { getOpenAICandidateSummary } from "../../infrastructure/services/openAIService.js";
import { createCandidate } from "../../domain/entities/Candidate.js";

const processCandidateUseCase = async (candidateRepository, candidateData) => {
  const {
    name,
    email,
    keywords,
    wikipediaSummary = "",
  } = await getMockData(candidateData);
  const openAISummary = await getOpenAICandidateSummary(wikipediaSummary);
  const candidateObject = createCandidate(
    name,
    email,
    keywords,
    openAISummary,
    wikipediaSummary
  );
  const candidate = await candidateRepository.createCandidate(candidateObject);
  return candidate;
};

const getCandidatesUseCase = async (candidateRepository) => {
  const candidates = await candidateRepository.getCandidates();
  return candidates;
};

export { processCandidateUseCase, getCandidatesUseCase };
