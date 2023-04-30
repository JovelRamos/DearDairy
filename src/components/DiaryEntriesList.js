import React from 'react';
import DiaryEntry from './DiaryEntry';
import '../global-styles.css';
import './components-styles.css';

const DiaryEntriesList = ({ entries, onEditEntry, onDeleteEntry }) => (
  <div className="entries-list">
    {entries.map((entry) => (
      <DiaryEntry key={entry.id} entry={entry} onEdit={onEditEntry} onDelete={() => onDeleteEntry(entry.id)} />
    ))}
  </div>
);

export default DiaryEntriesList;