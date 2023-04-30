const DiaryEntriesList = require('../components/DiaryEntriesList');

describe('addEntry', () => {
  it('should add a new diary entry to the list', () => {
    // Create a new DiaryEntriesList object
    const diaryEntriesList = new DiaryEntriesList();

    // Call the addEntry function with a sample diary entry
    diaryEntriesList.addEntry({
      date: '2023-04-30',
      title: 'My First Entry',
      content: 'This is the content of my first diary entry'
    });

    // Check that the diary entry was added to the list
    expect(diaryEntriesList.entries.length).toBe(1);
    expect(diaryEntriesList.entries[0].date).toBe('2023-04-30');
    expect(diaryEntriesList.entries[0].title).toBe('My First Entry');
    expect(diaryEntriesList.entries[0].content).toBe('This is the content of my first diary entry');
  });
});