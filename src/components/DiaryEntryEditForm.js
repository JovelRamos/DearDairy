import React, { useState } from 'react';
import './styles.css';

const DiaryEntryEditForm = ({ entry, onSubmit, onCancel }) => {
    const [text, setText] = useState(entry.text);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(entry.id, text);
      onCancel();
    };
  
    return (
      <form onSubmit={handleSubmit} className="entry-form">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your Dear Dairy entry here..."
          className="entry-textarea"
        />
        <div className="entry-form-buttons">
          <button type="submit" className="submit-btn">Save Entry</button>
          <button onClick={onCancel} className="cancel-btn">Cancel</button>
        </div>
      </form>
    );
  };

  export default DiaryEntryEditForm;