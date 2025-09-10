import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  // State lưu trữ dữ liệu dùng chung
  const [emotions, setEmotions] = useState([]);
  const [improvementGoals, setImprovementGoals] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [industryTotal, setIndustryTotal] = useState(0);
  const [industryPage, setIndustryPage] = useState(1);
  const [foodActivities, setFoodActivities] = useState([]);
  const [foodTotal, setFoodTotal] = useState(0);
  const [foodPage, setFoodPage] = useState(1);
  const [physicalActivities, setPhysicalActivities] = useState([]);
  const [physicalTotal, setPhysicalTotal] = useState(0);
  const [physicalPage, setPhysicalPage] = useState(1);
  const [therapeuticActivities, setTherapeuticActivities] = useState([]);
  const [therapeuticTotal, setTherapeuticTotal] = useState(0);
  const [therapeuticPage, setTherapeuticPage] = useState(1);
  const [entertainmentActivities, setEntertainmentActivities] = useState([]);
  const [entertainmentTotal, setEntertainmentTotal] = useState(0);
  const [entertainmentPage, setEntertainmentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMoreEntertainment, setIsLoadingMoreEntertainment] = useState(false);
  const [isLoadingMoreFood, setIsLoadingMoreFood] = useState(false);
  const [isLoadingMorePhysical, setIsLoadingMorePhysical] = useState(false);
  const [isLoadingMoreTherapeutic, setIsLoadingMoreTherapeutic] = useState(false);
  const [isLoadingMoreIndustry, setIsLoadingMoreIndustry] = useState(false);

  // Hardcoded data
  const hardcodedEmotions = [
    { Id: 1, Name: "Happy", Description: "Feeling joyful and content" },
    { Id: 2, Name: "Sad", Description: "Feeling down or upset" },
    { Id: 3, Name: "Excited", Description: "Feeling enthusiastic and eager" },
  ];

  const hardcodedImprovementGoals = [
    { Id: 1, Name: "Reduce Stress", Description: "Lower stress levels through relaxation" },
    { Id: 2, Name: "Improve Focus", Description: "Enhance concentration and productivity" },
    { Id: 3, Name: "Boost Energy", Description: "Increase physical and mental energy" },
  ];

  const hardcodedEntertainmentActivities = [
    { Id: 1, Name: "Watch Movie", Description: "Enjoy a film", IntensityLevel: "Low", ImpactLevel: "Positive" },
    { Id: 2, Name: "Play Board Game", Description: "Engage in a fun game", IntensityLevel: "Medium", ImpactLevel: "Positive" },
    { Id: 3, Name: "Listen to Music", Description: "Relax with music", IntensityLevel: "Low", ImpactLevel: "Positive" },
    { Id: 4, Name: "Read Novel", Description: "Immerse in a story", IntensityLevel: "Low", ImpactLevel: "Positive" },
    { Id: 5, Name: "Karaoke", Description: "Sing your favorite songs", IntensityLevel: "Medium", ImpactLevel: "Positive" },
  ];

  const hardcodedFoodActivities = [
    { Id: 1, Name: "Healthy Salad", Description: "Prepare a nutritious salad", IntensityLevel: "Low", ImpactLevel: "Positive" },
    { Id: 2, Name: "Smoothie", Description: "Blend a fruit smoothie", IntensityLevel: "Low", ImpactLevel: "Positive" },
    { Id: 3, Name: "Baked Chicken", Description: "Cook a healthy chicken dish", IntensityLevel: "Medium", ImpactLevel: "Positive" },
  ];

  const hardcodedPhysicalActivities = [
    { Id: 1, Name: "Yoga", Description: "Practice yoga poses", IntensityLevel: "Medium", ImpactLevel: "Positive" },
    { Id: 2, Name: "Running", Description: "Go for a run", IntensityLevel: "High", ImpactLevel: "Positive" },
    { Id: 3, Name: "Stretching", Description: "Perform stretching exercises", IntensityLevel: "Low", ImpactLevel: "Positive" },
  ];

  const hardcodedTherapeuticActivities = [
    { Id: 1, Name: "Meditation", Description: "Practice mindfulness", IntensityLevel: "Low", ImpactLevel: "Positive" },
    { Id: 2, Name: "Deep Breathing", Description: "Focus on breath control", IntensityLevel: "Low", ImpactLevel: "Positive" },
    { Id: 3, Name: "Journaling", Description: "Write thoughts and feelings", IntensityLevel: "Low", ImpactLevel: "Positive" },
  ];

  const hardcodedIndustries = [
    { Id: 1, IndustryName: "Technology", Description: "Tech-related activities" },
    { Id: 2, IndustryName: "Healthcare", Description: "Healthcare-related activities" },
    { Id: 3, IndustryName: "Education", Description: "Educational activities" },
  ];

  // Fetch all emotions
  const fetchAllEmotions = useCallback(async () => {
    return hardcodedEmotions;
  }, []);

  // Fetch all improvement goals
  const fetchAllImprovementGoals = useCallback(async () => {
    return hardcodedImprovementGoals.map((goal) => ({
      value: goal.Id,
      label: goal.Name,
      description: goal.Description,
    }));
  }, []);

  // Fetch entertainment activities (phân trang)
  const fetchEntertainmentPage = useCallback(async (page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    const data = hardcodedEntertainmentActivities.slice(offset, offset + pageSize);
    return { data, total: hardcodedEntertainmentActivities.length };
  }, []);

  // Fetch food activities (phân trang)
  const fetchFoodPage = useCallback(async (page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    const data = hardcodedFoodActivities.slice(offset, offset + pageSize);
    return { data, total: hardcodedFoodActivities.length };
  }, []);

  // Fetch physical activities (phân trang)
  const fetchPhysicalPage = useCallback(async (page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    const data = hardcodedPhysicalActivities.slice(offset, offset + pageSize);
    return { data, total: hardcodedPhysicalActivities.length };
  }, []);

  // Fetch therapeutic activities (phân trang)
  const fetchTherapeuticPage = useCallback(async (page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    const data = hardcodedTherapeuticActivities.slice(offset, offset + pageSize);
    return { data, total: hardcodedTherapeuticActivities.length };
  }, []);

  // Fetch industries (phân trang)
  const fetchIndustryPage = useCallback(async (page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    const data = hardcodedIndustries.slice(offset, offset + pageSize);
    return { data, total: hardcodedIndustries.length };
  }, []);

  // Load more entertainment (phân trang)
  const loadMoreEntertainment = useCallback(async () => {
    if (isLoadingMoreEntertainment) return;
    setIsLoadingMoreEntertainment(true);
    const nextPage = entertainmentPage + 1;
    const { data } = await fetchEntertainmentPage(nextPage, 10);
    setEntertainmentActivities((prev) => [
      ...prev,
      ...data.map((item) => ({
        value: item.Id,
        label: item.Name,
        description: item.Description,
        intensityLevel: item.IntensityLevel,
        impactLevel: item.ImpactLevel,
      })),
    ]);
    setEntertainmentPage(nextPage);
    setIsLoadingMoreEntertainment(false);
  }, [entertainmentPage, fetchEntertainmentPage, isLoadingMoreEntertainment]);

  // Load more food (phân trang)
  const loadMoreFood = useCallback(async () => {
    if (isLoadingMoreFood) return;
    setIsLoadingMoreFood(true);
    const nextPage = foodPage + 1;
    const { data } = await fetchFoodPage(nextPage, 10);
    setFoodActivities((prev) => [
      ...prev,
      ...data.map((item) => ({
        value: item.Id,
        label: item.Name,
        description: item.Description,
        intensityLevel: item.IntensityLevel,
        impactLevel: item.ImpactLevel,
      })),
    ]);
    setFoodPage(nextPage);
    setIsLoadingMoreFood(false);
  }, [foodPage, fetchFoodPage, isLoadingMoreFood]);

  // Load more physical (phân trang)
  const loadMorePhysical = useCallback(async () => {
    if (isLoadingMorePhysical) return;
    setIsLoadingMorePhysical(true);
    const nextPage = physicalPage + 1;
    const { data } = await fetchPhysicalPage(nextPage, 10);
    setPhysicalActivities((prev) => [
      ...prev,
      ...data.map((item) => ({
        value: item.Id,
        label: item.Name,
        description: item.Description,
        intensityLevel: item.IntensityLevel,
        impactLevel: item.ImpactLevel,
      })),
    ]);
    setPhysicalPage(nextPage);
    setIsLoadingMorePhysical(false);
  }, [physicalPage, fetchPhysicalPage, isLoadingMorePhysical]);

  // Load more therapeutic (phân trang)
  const loadMoreTherapeutic = useCallback(async () => {
    if (isLoadingMoreTherapeutic) return;
    setIsLoadingMoreTherapeutic(true);
    const nextPage = therapeuticPage + 1;
    const { data } = await fetchTherapeuticPage(nextPage, 10);
    setTherapeuticActivities((prev) => [
      ...prev,
      ...data.map((item) => ({
        value: item.Id,
        label: item.Name,
        description: item.Description,
        intensityLevel: item.IntensityLevel,
        impactLevel: item.ImpactLevel,
      })),
    ]);
    setTherapeuticPage(nextPage);
    setIsLoadingMoreTherapeutic(false);
  }, [therapeuticPage, fetchTherapeuticPage, isLoadingMoreTherapeutic]);

  // Load more industry (phân trang)
  const loadMoreIndustry = useCallback(async () => {
    if (isLoadingMoreIndustry) return;
    setIsLoadingMoreIndustry(true);
    const nextPage = industryPage + 1;
    const { data } = await fetchIndustryPage(nextPage, 10);
    setIndustries((prev) => [
      ...prev,
      ...data.map((item) => ({
        value: item.Id,
        label: item.IndustryName,
        description: item.Description,
      })),
    ]);
    setIndustryPage(nextPage);
    setIsLoadingMoreIndustry(false);
  }, [industryPage, fetchIndustryPage, isLoadingMoreIndustry]);

  // Prefetch dữ liệu khi mount
  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetchAllEmotions(),
      fetchAllImprovementGoals(),
      fetchEntertainmentPage(1, 10),
      fetchFoodPage(1, 10),
      fetchPhysicalPage(1, 10),
      fetchTherapeuticPage(1, 10),
      fetchIndustryPage(1, 10),
    ])
      .then(
        ([
          allEmotions,
          improvementGoalsRes,
          entertainmentRes,
          foodRes,
          physicalRes,
          therapeuticRes,
          industryRes,
        ]) => {
          setEmotions(allEmotions || []);
          setImprovementGoals(improvementGoalsRes || []);
          setEntertainmentActivities(
            entertainmentRes.data.map((item) => ({
              value: item.Id,
              label: item.Name,
              description: item.Description,
              intensityLevel: item.IntensityLevel,
              impactLevel: item.ImpactLevel,
            }))
          );
          setEntertainmentTotal(entertainmentRes.total);
          setEntertainmentPage(1);

          setFoodActivities(
            foodRes.data.map((item) => ({
              value: item.Id,
              label: item.Name,
              description: item.Description,
              intensityLevel: item.IntensityLevel,
              impactLevel: item.ImpactLevel,
            }))
          );
          setFoodTotal(foodRes.total);
          setFoodPage(1);

          setPhysicalActivities(
            physicalRes.data.map((item) => ({
              value: item.Id,
              label: item.Name,
              description: item.Description,
              intensityLevel: item.IntensityLevel,
              impactLevel: item.ImpactLevel,
            }))
          );
          setPhysicalTotal(physicalRes.total);
          setPhysicalPage(1);

          setTherapeuticActivities(
            therapeuticRes.data.map((item) => ({
              value: item.Id,
              label: item.Name,
              description: item.Description,
              intensityLevel: item.IntensityLevel,
              impactLevel: item.ImpactLevel,
            }))
          );
          setTherapeuticTotal(therapeuticRes.total);
          setTherapeuticPage(1);

          setIndustries(
            industryRes.data.map((item) => ({
              value: item.Id,
              label: item.IndustryName,
              description: item.Description,
            }))
          );
          setIndustryTotal(industryRes.total);
          setIndustryPage(1);
        }
      )
      .catch((err) => {
        console.error("Promise.all error in DataContext:", err);
      })
      .finally(() => setIsLoading(false));
  }, [
    fetchAllEmotions,
    fetchAllImprovementGoals,
    fetchEntertainmentPage,
    fetchFoodPage,
    fetchPhysicalPage,
    fetchTherapeuticPage,
    fetchIndustryPage,
  ]);

  return (
    <DataContext.Provider
      value={{
        emotions,
        improvementGoals,
        industries,
        industryTotal,
        industryPage,
        foodActivities,
        foodTotal,
        foodPage,
        physicalActivities,
        physicalTotal,
        physicalPage,
        therapeuticActivities,
        therapeuticTotal,
        therapeuticPage,
        entertainmentActivities,
        entertainmentTotal,
        entertainmentPage,
        isLoading,
        isLoadingMoreEntertainment,
        loadMoreEntertainment,
        isLoadingMoreFood,
        loadMoreFood,
        isLoadingMorePhysical,
        loadMorePhysical,
        isLoadingMoreTherapeutic,
        loadMoreTherapeutic,
        isLoadingMoreIndustry,
        loadMoreIndustry,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};