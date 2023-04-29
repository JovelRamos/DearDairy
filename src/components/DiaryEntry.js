import React from 'react';
import './styles.css';

const DiaryEntry = ({ entry }) => (
  <div className="diary-entry">
    <h3 className="entry-date">{entry.date}</h3>
    <p className="entry-text">{entry.text}</p>
  </div>
);

export default DiaryEntry;