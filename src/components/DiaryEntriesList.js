import React from 'react';
import { Card } from 'semantic-ui-react';
import DiaryEntry from './DiaryEntry';
import '../global-styles.css';
import './components-styles.css';

const DiaryEntriesList = ({ entries, onEditEntry, onDeleteEntry }) => (
  <Card.Group itemsPerRow={1} stackable className="entries-list">
    {entries.map((entry) => (
      <DiaryEntry key={entry.id} entry={entry} onEdit={onEditEntry} onDelete={() => onDeleteEntry(entry.id)} />
    ))}
  </Card.Group>
);
export default DiaryEntriesList;