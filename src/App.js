import React, { useState } from 'react';
import DiaryEntryForm from './components/DiaryEntryForm';
import DiaryEntriesList from './components/DiaryEntriesList';
import './components/styles.css';
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

return (
<div className="app">
<header className="app-header">
<h1 className="app-title">Dear Dairy</h1>
</header>
<main className="app-main">
<DiaryEntryForm onSubmit={addEntry} />
<DiaryEntriesList entries={entries} />
</main>
<footer className="app-footer">
<p>© 2023 Dear Dairy. All rights reserved.</p>
</footer>
</div>
);
};

export default App;