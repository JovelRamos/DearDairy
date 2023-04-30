describe('deleteDiaryEntry', () => {
    it('should delete the specified diary entry from the diary entries list', () => {
      // Set up
      const diaryEntriesList = [      { id: 1, date: '2022-05-01', content: 'First entry' },      { id: 2, date: '2022-05-02', content: 'Second entry' },      { id: 3, date: '2022-05-03', content: 'Third entry' },    ];
      const entryToDelete = { id: 2, date: '2022-05-02', content: 'Second entry' };
  
      // Execute
      const updatedDiaryEntriesList = deleteDiaryEntry(diaryEntriesList, entryToDelete);
  
      // Assert
      expect(updatedDiaryEntriesList).not.toContainEqual(entryToDelete);
    });
  });