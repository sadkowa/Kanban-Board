const initColumns = [
  { id: 1, name: 'Pending', limit: 6 },
  { id: 2, name: 'Analysis', limit: 3 },
  { id: 3, name: 'Development', limit: 5 },
  { id: 4, name: 'Test', limit: 3 },
  { id: 5, name: 'Deploy', limit: 5 }, 
  ]

  const initTasks = [
    {id: 1, name: 'Task1', idColumn: 1, user: 'Anna'},
    {id: 2, name: 'Task2', idColumn: 1, user: 'Anna'},
    {id: 3, name: 'Task3', idColumn: 1, user: 'Anna'},
    {id: 4, name: 'Task4', idColumn: 2, user: 'Stefan'},
    {id: 5, name: 'Task5', idColumn: 2, user: 'Marek'},
    {id: 6, name: 'Task6', idColumn: 2, user: 'Stefan'},
    {id: 7, name: 'Task7', idColumn: 3, user: 'Marek'},
    {id: 8, name: 'Task8', idColumn: 3, user: 'Stefan'},
    {id: 10, name: 'Task10', idColumn: 4, user: 'Jakub'},
    {id: 11, name: 'Task11', idColumn: 4, user: 'Iwona'},
    {id: 12, name: 'Task12', idColumn: 4, user: 'Mateusz'},
    {id: 13, name: 'Task13', idColumn: 4, user: 'Jakub'},
    {id: 16, name: 'Task16', idColumn: 5, user: 'Iwona'},
  ]

  export {initColumns, initTasks}