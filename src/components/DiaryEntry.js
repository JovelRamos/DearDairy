import React, { useState } from 'react';
import '../global-styles.css';
import './components-styles.css';

const DiaryEntry = ({ entry, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(entry.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete(entry.id);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setText(entry.text);
  };

  const handleSaveClick = () => {
    onEdit(entry.id, text);
    setIsEditing(false);
  };

  return (
    <div className="diary-entry">
      <h3 className="entry-date">{entry.date}</h3>
      {isEditing ? (
        <div className="edit-form">
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <div className="edit-buttons">
            <button onClick={handleCancelClick}>Cancel</button>
            <button onClick={handleSaveClick}>Save</button>
          </div>
        </div>
      ) : (
        <div className="entry-text">
          <p>{entry.text}</p>
          <div className="entry-buttons">
            <button className="edit-btn" onClick={handleEditClick}>
              Edit
            </button>
            <button className="delete-btn" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryEntry;