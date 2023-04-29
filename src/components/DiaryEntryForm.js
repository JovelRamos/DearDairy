import React, { useState } from 'react';
import './styles.css';

const DiaryEntryForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your Dear Dairy entry here..."
        className="entry-textarea"
      />
      <button type="submit" className="submit-btn">
        Save Entry
      </button>
    </form>
  );
};

export default DiaryEntryForm;