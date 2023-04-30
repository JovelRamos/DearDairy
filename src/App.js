import React, { useState } from 'react';
import DiaryEntryForm from './components/DiaryEntryForm';
import DiaryEntriesList from './components/DiaryEntriesList';
import './components/components-styles.css';
import './global-styles.css';

const App = () => {
    const [entries, setEntries] = useState([]);
  
    const addEntry = (text) => {
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        text: text,
      };
      setEntries([...entries, newEntry]);
    };
  
    const updateEntry = (id, text) => {
      const updatedEntries = entries.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            text: text,
          };
        } else {
          return entry;
        }
      });
      setEntries(updatedEntries);
    };
  
    const deleteEntry = (id) => {
      const updatedEntries = entries.filter((entry) => entry.id !== id);
      setEntries(updatedEntries);
    };
  
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Dear Diary</h1>
        </header>
        <main className="app-main">
          <DiaryEntryForm onSubmit={addEntry} />
          <DiaryEntriesList
            entries={entries}
            onEditEntry={updateEntry}
            onDeleteEntry={deleteEntry}
          />
        </main>
        <footer className="app-footer">
          <p>© 2023 Dear Diary. All rights reserved.</p>
        </footer>
      </div>
    );
  };

export default App;