import { useState, useEffect } from "react"
import { candidateApi } from "../../../infrastructure/api/candidateApi"
import { Candidate } from "../../../shared/types"

export const useCandidatesPage = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [search, setSearch] = useState('');
  const [fetchStatus, setFetchStatus] = useState<'loading' | 'error' | 'success'>('loading');
  const [originalCandidates, setOriginalCandidates] = useState<Candidate[]>([]);
  const hasCandidates = originalCandidates.length > 0;

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await candidateApi.getAllCandidates();
        setCandidates(response);
        setOriginalCandidates(response);
        setFetchStatus('success');
      } catch (error) {
        setFetchStatus('error');
      }
    };
    fetchCandidates();
  }, []);

  const sortByCreationDate = () => {
    const sortedCandidates = [...candidates].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    setCandidates(sortedCandidates);
  };

  const filterCandidates = () => {
    const trimmedSearch = search.trim();
    // If the search is empty, show all candidates
    if (!trimmedSearch) {
      setCandidates(originalCandidates);
      return;
    }
    
    const filteredCandidates = originalCandidates.filter((candidate) => 
      candidate.name.toLowerCase().includes(trimmedSearch.toLowerCase()) || 
      candidate.keywords.toLowerCase().includes(trimmedSearch.toLowerCase())
    );
    setCandidates(filteredCandidates);
  };

  return { candidates, fetchStatus, search, setSearch, sortByCreationDate, filterCandidates, hasCandidates };
};
