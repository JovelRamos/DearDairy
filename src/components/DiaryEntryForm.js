import React, { useState } from 'react';
import '../global-styles.css';
import './components-styles.css';
import { Form, TextArea, Button } from 'semantic-ui-react';

const DiaryEntryForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit} className="entry-form">
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your Dear Diary entry here..."
        className="entry-textarea"
      />
      <Button type="submit" className="submit-btn">
        Save Entry
      </Button>
    </Form>
  );
};

export default DiaryEntryForm;