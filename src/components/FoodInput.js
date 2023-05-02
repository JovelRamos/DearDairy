import React, { useState, useEffect } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';

const API_KEY = '6iyK7KaJoXa0Sqyj6b2SqtNczOSNNhEgPOeogGea';

const FoodInput = ({ meal, onChange }) => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${meal});
            const data = await response.json();
            const options = data.foods.map((food) => ({
                key: food.fdcId,
                text: food.description,
                value: food.description
            }));
            setFoodList(options);
        };
        fetchData();
    }, [meal]);

    const handleDropdownChange = (e, { value }) => {
        onChange(value);
    };

    return (
        <Form.Field>
            <label>{meal}</label>
            <Dropdown
                placeholder={Select ${meal}}
            search
            selection
            options={foodList}
            onChange={handleDropdownChange}
/>
        </Form.Field>
    );
};
