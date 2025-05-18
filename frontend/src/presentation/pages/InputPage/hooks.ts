import { useForm, SubmitHandler } from "react-hook-form"
import { candidateApi } from "../../../infrastructure/api/candidateApi"
import { useState } from "react"
import { Candidate, CandidateInput } from "../../../shared/types"

export const useInputPage = () => {
  const { register, handleSubmit } = useForm<CandidateInput>();
  const [isLoading, setIsLoading] = useState(false);
  
  const onSubmit: SubmitHandler<CandidateInput> = async (data) => {
    const candidateName = data.name.trim().replace(/\s+/g, '_');
    try {
      setIsLoading(true);
      await candidateApi.createCandidate({name: candidateName, email: data.email, keywords: data.keywords});
      alert("Candidate created successfully");
    } catch (error) {
      alert("Error creating candidate");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { register, handleSubmit, onSubmit, isLoading };
};
