import React, { useState } from 'react';
import { Card, Button, TextArea } from 'semantic-ui-react';
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
    <Card className="diary-entry">
      <Card.Content>
        <Card.Header>{entry.date}</Card.Header>
        {isEditing ? (
          <div className="edit-form">
            <TextArea value={text} onChange={(e) => setText(e.target.value)} />
            <div className="edit-buttons">
              <Button onClick={handleCancelClick}>Cancel</Button>
              <Button onClick={handleSaveClick}>Save</Button>
            </div>
          </div>
        ) : (
          <Card.Description>
            <p>{entry.text.split('\n').map((line, i) => <div key={i}>{line}</div>)}</p>
            <div className="entry-buttons">
              <Button className="edit-btn" onClick={handleEditClick}>
                Edit
              </Button>
              <Button className="delete-btn" onClick={handleDeleteClick}>
                Delete
              </Button>
            </div>
          </Card.Description>
        )}
      </Card.Content>
    </Card>
  );
};

export default DiaryEntry;