import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, Dropdown, Icon, Input } from 'semantic-ui-react';
import { calculateTotalNutritionalValues } from './Calculations';
import './FoodEntryForm.css';
import 'semantic-ui-css/semantic.min.css';

function FoodEntryForm({ handleEntry, foods }) {
  const [selectedFoods, setSelectedFoods] = useState([{ food: '', unit: '', servingSize: '', id: 0 }]);
  const foodOptions = foods.map(food => ({ key: food.food_id, text: food.food_name, value: food.food_name }));
  const solidUnits = ['oz', 'g', 'lb(s)', 'kg(s)'];
  const liquidUnits = ['fl oz', 'mL', 'cup', 'tbsp', 'tsp', 'ltr'];
  const formRef = useRef(null);

  const handleChange = (e, { value }, index, field) => {
    const newSelectedFoods = [...selectedFoods];
    newSelectedFoods[index][field] = value;
    setSelectedFoods(newSelectedFoods);
  };

  const addFoodDropdown = (event) => {
    event.preventDefault();
    setSelectedFoods([...selectedFoods, { food: '', unit: '', servingSize: '', id: selectedFoods.length }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntries = selectedFoods.map(selectedFood => {
      const food = foods.find(food => food.food_name === selectedFood.food);
      if (food) {
        const totalNutritionalValues = calculateTotalNutritionalValues(food, selectedFood.servingSize, selectedFood.unit);
        return {
          food: selectedFood.food,
          calories: totalNutritionalValues.totalCalories,
          proteins: totalNutritionalValues.totalProteins,
          fats: totalNutritionalValues.totalFats,
          carbohydrates: totalNutritionalValues.totalCarbs
        };
      }
      return null;
    }).filter(entry => entry !== null);

    if (newEntries.length > 0) {
      handleEntry(newEntries);
      setSelectedFoods([{ food: '', unit: '', servingSize: '', id: 0 }]);
    }
  };

  return (
    <>
      <div className="form-container">
      <Form onSubmit={handleSubmit} ref={formRef}>
        {selectedFoods.map((selectedFood, index) => {
          const food = foods.find(food => food.food_name === selectedFood.food);
          const isSolid = food ? food.is_solid : null;
          const unitOptions = (isSolid ? solidUnits : liquidUnits).map(unit => ({ key: unit, text: unit, value: unit }));

          return (
            <div key={selectedFood.id} style={{ marginBottom: '1em' }}>
              <Dropdown
                fluid
                search
                selection
                options={foodOptions}
                placeholder='Select food'
                value={selectedFood.food}
                onChange={(e, data) => handleChange(e, data, index, 'food')}
                style={{ marginBottom: '1em' }}
              />
              <Input
                placeholder='Size'
                type='number'
                disabled={!selectedFood.food}
                value={selectedFood.servingSize}
                onChange={(e) => handleChange(e, { value: e.target.value }, index, 'servingSize')}
                min={1}
                style={{ width: '30%' }}
              />
              <Dropdown
                compact
                search
                selection
                options={unitOptions}
                placeholder='Unit'
                disabled={!selectedFood.food}
                value={selectedFood.unit}
                onChange={(e, data) => handleChange(e, data, index, 'unit')} style={{ width: '70%' }}
              />
            </div>
          );
        })}
        <Button icon fluid onClick={(e) => addFoodDropdown(e)} style={{ marginBottom: '1em' }} color='green' animated='fade'>
          <Button.Content visible><Icon name='add circle' /></Button.Content>
          <Button.Content hidden>Add Food!</Button.Content>
        </Button>
        <Button fluid style={{ marginBottom: '1em' }} type='submit' color='blue'>
          Submit Entry
        </Button>

      </Form>
      </div>
    </>
  );
}

export default FoodEntryForm;
