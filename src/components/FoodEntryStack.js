import React, { useState, useEffect } from 'react';
import { Table, Card, Header, Button, Icon, Popup, Confirm } from 'semantic-ui-react';
import FoodEntry from './FoodEntry';
import FoodEntryForm from './FoodEntryForm';
import moment from 'moment';
import 'semantic-ui-css/semantic.min.css';
import data from './data.json';


function FoodEntryStack() {
  const [tables, setTables] = useState([]);
  const [foods, setFoods] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [tableToDelete, setTableToDelete] = useState(null);

  // This is using a live, local, Django database
  // useEffect(() => {
  //   const fetchFoods = async () => {
  //     const response = await fetch('http://localhost:8000/nutrition');
  //     const data = await response.json();
  //     setFoods(data.data);
  //   };
  //   fetchFoods();
  // }, []);

  // This is using a static JSON file of the Django database
  useEffect(() => {
    setFoods(data.data);
  }, []);
  

  const getCurrentDate = () => {
    const today = new Date();
    return moment(today).format('MMMM D');
  };

  const handleEntry = (newEntries) => {
    setTables((prevTables) => [
      { entries: newEntries, id: prevTables.length, date: getCurrentDate() },
      ...prevTables,
    ]);
  };

  const handleCancel = () => {
    setTableToDelete(null);
    setConfirmOpen(false);
  };

  const handleConfirm = () => {
    deleteTable(tableToDelete);
    setTableToDelete(null);
    setConfirmOpen(false);
  };


  const deleteEntry = (tableIndex, entryIndex) => {
    setTables((prevTables) => {
      const updatedTables = prevTables.map((table, index) =>
        index === tableIndex
          ? {
            ...table,
            entries: table.entries.filter((_, i) => i !== entryIndex),
          }
          : table
      );
      return updatedTables;
    });
  };

  const deleteTable = (tableIndex) => {
    setTables((prevTables) => prevTables.filter((_, index) => index !== tableIndex));
  };

  const style = {
    stack: { marginBottom: '2rem' },
    cardHeader: { backgroundColor: '#ACB1D6', color: '#F1F6F9', marginBottom: '0', paddingBottom: '0' },
    tableHeader: { backgroundColor: '#8294C4', color: '#F1F6F9' },
    deleteColumn: { width: '1%' },
    tableNoMargin: { margin: '0' },
    cardShadow: {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      borderRadius: '5px',
    },
  };
  

  return (
    <div>
      <Header as='h3' dividing textAlign='center' style={{ color: "black", fontFamily: 'Kaushan Script' }}>Write Your Diary Entries Here!</Header>
      <div className="form-wrapper">
        <FoodEntryForm handleEntry={handleEntry} foods={foods} />
      </div>
      <Header as='h3' dividing textAlign='center' style={{ color: "black", fontFamily: 'Kaushan Script' }} >Your Diary Entries!</Header>

      {tables.map((table, tableIndex) => (
  <div key={table.id} style={style.stack}>
    <Card fluid style={style.cardShadow}>
      <Card.Content style={style.cardHeader}>
        <Card.Header textAlign="center" style={{color: "white", fontFamily: 'Kaushan Script'}}>{table.date}</Card.Header>
      </Card.Content>
      <Table celled key={table.id} style={style.tableNoMargin}>
            <Table.Header style={{ color: "white", fontFamily: 'Kaushan Script' }}>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Food</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Calories</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Proteins</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Fats</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Carbohydrates</Table.HeaderCell>
                <Table.HeaderCell textAlign="center" style={style.deleteColumn}>
                  <Popup
                    content="Delete Entry"
                    trigger={
                      <Button
                        color="red"
                        onClick={() => {
                          setTableToDelete(tableIndex);
                          setConfirmOpen(true);
                        }}
                      >
                        <Icon name="minus circle" color="black" />
                      </Button>
                    }
                  />
                  <Confirm
                    open={confirmOpen}
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                    content="Are you sure you want to delete your entry?"
                  />
                </Table.HeaderCell>

              </Table.Row>
            </Table.Header>
            <Table.Body style={{ color: "black", fontFamily: 'Kaushan Script' }}>
              {table.entries.map((entry, entryIndex) => (
                <FoodEntry
                  key={entryIndex}
                  food={entry.food}
                  calories={entry.calories}
                  proteins={entry.proteins}
                  fats={entry.fats}
                  carbohydrates={entry.carbohydrates}
                  deleteEntry={() => deleteEntry(tableIndex, entryIndex)}
                />
              ))}
              <Table.Row>
                <Table.Cell textAlign="center"><strong>Total</strong></Table.Cell>
                <Table.Cell textAlign="center"><strong>{table.entries.reduce((acc, entry) => acc + Math.round(entry.calories), 0)}</strong></Table.Cell>
                <Table.Cell textAlign="center"><strong>{table.entries.reduce((acc, entry) => acc + Math.round(entry.proteins), 0)}</strong></Table.Cell>
                <Table.Cell textAlign="center"><strong>{table.entries.reduce((acc, entry) => acc + Math.round(entry.fats), 0)}</strong></Table.Cell>
                <Table.Cell textAlign="center"><strong>{table.entries.reduce((acc, entry) => acc + Math.round(entry.carbohydrates), 0)}</strong></Table.Cell>
                <Table.Cell textAlign="center"></Table.Cell>
              </Table.Row>
            </Table.Body>
            </Table>
    </Card>
  </div>
))}
    </div>
  );
}

export default FoodEntryStack;