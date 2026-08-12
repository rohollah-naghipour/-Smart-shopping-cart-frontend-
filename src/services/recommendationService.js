import api from "./api";

export const getRecommendation = async (familyId, budget) => {
  const response = await api.post(
    "api/recommendations/",
    {
      family_id: familyId,
      budget: budget,
    }
  );

  return response.data;
};