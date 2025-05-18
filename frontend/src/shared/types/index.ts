export interface Candidate {
  id: string;
  name: string;
  email: string;
  keywords: string;
  summary: string;
  extData?: string;
  createdAt: string;
}

export interface CandidateInput {
  name: string;
  email: string;
  keywords: string;
}
