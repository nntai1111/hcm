import React, { createContext, useContext } from "react";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
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

  return (
    <DataContext.Provider
      value={{
        emotions: hardcodedEmotions,
        improvementGoals: hardcodedImprovementGoals.map((goal) => ({
          value: goal.Id,
          label: goal.Name,
          description: goal.Description,
        })),
        entertainmentActivities: hardcodedEntertainmentActivities.map((item) => ({
          value: item.Id,
          label: item.Name,
          description: item.Description,
          intensityLevel: item.IntensityLevel,
          impactLevel: item.ImpactLevel,
        })),
        foodActivities: hardcodedFoodActivities.map((item) => ({
          value: item.Id,
          label: item.Name,
          description: item.Description,
          intensityLevel: item.IntensityLevel,
          impactLevel: item.ImpactLevel,
        })),
        physicalActivities: hardcodedPhysicalActivities.map((item) => ({
          value: item.Id,
          label: item.Name,
          description: item.Description,
          intensityLevel: item.IntensityLevel,
          impactLevel: item.ImpactLevel,
        })),
        therapeuticActivities: hardcodedTherapeuticActivities.map((item) => ({
          value: item.Id,
          label: item.Name,
          description: item.Description,
          intensityLevel: item.IntensityLevel,
          impactLevel: item.ImpactLevel,
        })),
        industries: hardcodedIndustries.map((item) => ({
          value: item.Id,
          label: item.IndustryName,
          description: item.Description,
        })),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};