import axios from "axios";

const fetchData = (url) => axios.get(url).then((res) => res.data);

const externalApiService = {
  getRandomUser: () =>
    fetchData("https://randomuser.me/api/").then((data) => data.results[0]),

  getPlaceholderUser: (userId) =>
    fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`),

  getAgeEstimate: (name) => fetchData(`https://api.agify.io?name=${name}`),

  getWikipediaSummary: (name) =>
    fetchData(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`).then(
      (data) => data.extract
    ),
};

export const getMockData = async (originalData) => {
  try {
    const mockAge = await externalApiService.getAgeEstimate(originalData.name);
    const wikipediaSummary = await externalApiService.getWikipediaSummary(
      originalData.name
    );
    const mockUser = await externalApiService.getRandomUser();
    const secondMockUser = await externalApiService.getPlaceholderUser();
    return {
      ...originalData,
      name: mockUser.name,
      email: secondMockUser.email,
      wikipediaSummary: `${wikipediaSummary}. User age: ${mockAge}`,
    };
  } catch (error) {
    console.error("Error getting mock data:", error);
    return originalData;
  }
};
