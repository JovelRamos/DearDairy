const ozToUnitConversion = {
    'g': 0.035274,
    'lb(s)': 16,
    'kg(s)': 35.274,
    'fl oz': 1,
    'mL': 0.033814,
    'cup': 8,
    'tbsp': 0.5,
    'tsp': 0.166667,
    'ltr': 33.814
  };
  
  function calculateTotalNutritionalValues(food, servingSize, unit) {
    const conversionFactor = ozToUnitConversion[unit] || 1;
    const servingSizeInOz = servingSize * conversionFactor;
    const totalCalories = food.calories * servingSizeInOz;
    const totalProteins = food.protein * servingSizeInOz;
    const totalFats = food.fats * servingSizeInOz;
    const totalCarbs = food.carbohydrates * servingSizeInOz;
    return { totalCalories, totalProteins, totalFats, totalCarbs };
  }
  
  
  export { calculateTotalNutritionalValues };
  