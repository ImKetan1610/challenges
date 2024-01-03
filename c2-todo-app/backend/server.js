// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');

// // Create a simple in-memory database using lowdb
// const adapter = new FileSync('db.json');
// const db = low(adapter);

// server.use(middlewares);
// server.use(jsonServer.bodyParser);

// // Custom route to handle DELETE requests for the "data" resource
// server.delete('/data', (req, res) => {
//   const todoIdsToDelete = req.body.todos;

//   // Update the in-memory database to remove the todos with the specified IDs
//   db.get('data')
//     .remove((todo) => todoIdsToDelete.includes(todo.id))
//     .write();

//   res.status(200).json({ message: 'Todos deleted successfully' });
// });

// server.use(router);

// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });
