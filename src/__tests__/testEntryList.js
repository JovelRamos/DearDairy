describe('addNewDiaryEntry', () => {
    it('should add a new diary entry to the diary entries list', () => {
      // Set up
      const diaryEntriesList = [      { id: 1, date: '2022-05-01', content: 'First entry' },      { id: 2, date: '2022-05-02', content: 'Second entry' },    ];
      const newEntry = { id: 3, date: '2022-05-03', content: 'Third entry' };
  
      // Execute
      const updatedDiaryEntriesList = addNewDiaryEntry(diaryEntriesList, newEntry);
  
      // Assert
      expect(updatedDiaryEntriesList).toContainEqual(newEntry);
    });
  });