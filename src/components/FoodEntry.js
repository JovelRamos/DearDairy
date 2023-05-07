// FoodEntry.js
import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';

function FoodEntry({ food, calories, proteins, fats, carbohydrates, deleteEntry, deleteButtonStyle }) {
  return (
    <Table.Row>
      <Table.Cell textAlign="center">{food}</Table.Cell>
      <Table.Cell textAlign="center">{Math.round(calories)}</Table.Cell>
      <Table.Cell textAlign="center">{Math.round(proteins)}</Table.Cell>
      <Table.Cell textAlign="center">{Math.round(fats)}</Table.Cell>
      <Table.Cell textAlign="center">{Math.round(carbohydrates)}</Table.Cell>
      <Table.Cell textAlign="center">
        <Button onClick={deleteEntry} style={deleteButtonStyle}>
          <Icon name="minus circle" color="red" />
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}

export default FoodEntry;


