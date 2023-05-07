import React from 'react';
import { Button, Icon, Table, Popup} from 'semantic-ui-react';

function FoodEntry({ food, calories, proteins, fats, carbohydrates, deleteEntry, deleteButtonStyle }) {
  return (
    <Table.Row>
  <Table.Cell data-testid="food-entry" textAlign="center">{food}</Table.Cell>
      <Table.Cell textAlign="center">{Math.round(calories)}</Table.Cell>
      <Table.Cell textAlign="center">{Math.round(proteins)}</Table.Cell>
      <Table.Cell textAlign="center">{Math.round(fats)}</Table.Cell>
      <Table.Cell textAlign="center">{Math.round(carbohydrates)}</Table.Cell>
      <Table.Cell textAlign="center">
      <Popup content='Delete Food' trigger={<Button onClick={deleteEntry} style={deleteButtonStyle}>
          <Icon name="minus circle" color="red" />
        </Button>} />
        
      </Table.Cell>
    </Table.Row>
  );
}

export default FoodEntry;



