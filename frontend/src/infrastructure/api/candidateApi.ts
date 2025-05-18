import axios from "axios";

export const candidateApi = {
    createCandidate: async (candidate: any) => {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/processCandidate`, candidate);
        return response.data;
    },
    getAllCandidates: async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/candidates`);
        return response.data;
    }
}
