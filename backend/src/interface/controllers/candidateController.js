import {
  getCandidatesUseCase,
  processCandidateUseCase,
} from "../../application/useCases/candidateUseCases.js";

const processCandidate = async (req, res) => {
  try {
    const { name, email, keywords } = req.body;
    const candidate = await processCandidateUseCase(
      req.app.get("candidateRepository"),
      { name, email, keywords }
    );
    res.json(candidate);
  } catch (error) {
    console.error("Error processing candidate:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

const getCandidates = async (req, res) => {
  try {
    const candidates = await getCandidatesUseCase(
      req.app.get("candidateRepository")
    );
    res.json(candidates);
  } catch (error) {
    console.error("Error getting candidates:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

export { getCandidates, processCandidate };
