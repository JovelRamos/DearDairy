import React from 'react';
import DiaryEntry from './DiaryEntry';
import './styles.css';

const DiaryEntriesList = ({ entries }) => (
  <div className="entries-list">
    {entries.map((entry) => (
      <DiaryEntry key={entry.id} entry={entry} />
    ))}
  </div>
);

export default DiaryEntriesList;