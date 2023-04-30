import React from 'react';
import DiaryEntryForm from './DiaryEntryForm';
import DiaryEntriesList from './DiaryEntriesList';
import './global-styles.css';

const DiaryEntry = ({ entry, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(entry.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(entry.id, text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(entry.id);
  };

  const handleCancel = () => {
    setText(entry.text);
    setIsEditing(false);
  };

  return (
    <div className="diary-entry">
      <h3 className="entry-date">{entry.date}</h3>
      {isEditing ? (
        <div>
          <textarea
            aria-label="Edit entry"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="entry-textarea"
          />
          <button aria-label="Save" onClick={handleSave}>Save</button>
          <button aria-label="Cancel" onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p className="entry-text">{entry.text}</p>
          <button aria-label="Edit" onClick={handleEdit}>Edit</button>
          <button aria-label="Delete" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default DiaryEntry;