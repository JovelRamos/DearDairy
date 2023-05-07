# Dear Dairy - Food Entry Application

Dear Dairy is a food entry application that allows users to keep track of their daily food consumption. Users can add food items with their serving sizes and units, and the application will automatically calculate the nutritional values, such as calories, proteins, fats, and carbohydrates.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Folder Structure

- `src/App.js`: The main application component that renders the `FoodEntryStack` component.
- `src/__tests__/testAll.test.js`: Contains the tests for the application components.
- `src/components/FoodEntry.js`: Represents a single food entry row in the table.
- `src/components/FoodEntryForm.js`: The form component for adding food entries.
- `src/components/FoodEntryStack.js`: The main component that renders the entire food entry stack, including the form and tables.
- `src/components/data.json`: A static JSON file containing sample food data.

## Installation

1. Clone the repository and navigate to the project folder.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server. The application will be available at `http://localhost:3000`.

## Usage

1. In the "Write Your Diary Entries Here!" section, select a food from the dropdown menu, enter the serving size, and select the unit.
2. Click "Add Food!" to add more food items to the entry.
3. Click "Submit Entry" to add the food entry to the diary.
4. The diary entry will be displayed in the "Your Diary Entries!" section. You can delete individual food items or entire entries using the delete buttons.

## Testing

To run the tests for the application components, execute the following command:

### npm test