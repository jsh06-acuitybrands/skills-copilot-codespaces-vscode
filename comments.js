// Create web server
// Create a new file named server.js in the root of the project directory and add the following code:
const express = require('express');
const app = express();
const comments = require('./comments');

// Serve static files
app.use(express.static('public'));

// Set up template engine
app.set('view engine', 'ejs');

// GET /comments
app.get('/comments', (req, res) => {
    res.render('comments', { comments: comments.getComments() });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
// Run the server
// Run the server by executing the following command in the terminal:
// node server.js
// Open a web browser and go to http://localhost:3000/comments to view the comments page. You should see the comments displayed on the page.
// This is the final step in the project. You have successfully created a web server that serves static files and renders dynamic content using the EJS template engine. You can now expand on this project by adding more features, such as user authentication, database integration, or additional routes and views.
// Conclusion
// In this project, you learned how to create a simple web server using Express.js and render dynamic content using the EJS template engine. You built a comments page that displays comments stored in a JavaScript module. You also learned how to serve static files such as CSS and JavaScript files using Express.js. This project provides a foundation for building more complex web applications and APIs using Node.js and Express.js. You can further enhance this project by adding new features, integrating databases, or implementing user authentication. I hope you found this project helpful and informative. Thank you for reading!
// Next Steps
// Here are some ideas to further enhance this project:
// Add user authentication using a library like Passport.js.
// Integrate a database such as MongoDB to store and retrieve comments.
// Implement a RESTful API to create, read, update, and delete comments.
// Create additional routes and views for different pages in the application.
// Add client-side validation using JavaScript to prevent empty or invalid comments.
// Use a front-end framework like React or Angular to build a single-page application.
// Implement real-time updates using WebSockets or server-sent events.
// Experiment with different template engines like Handlebars or Pug.
// Explore other middleware and plugins