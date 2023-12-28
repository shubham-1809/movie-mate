<h1>Movie Mate</h1>
This project is a Movie Ticket Booking System developed using Node.js, Express, React.js and MongoDB. The architecture follows the Model-View-Controller (MVC) pattern to organize the codebase effectively. The system provides APIs for managing movies, bookings, admins and user authentication.

<h3>Table Of Contents</h3>
<ul>
  <li>Features</li>
  <li>Installation</li>
  <li>Configurations</li>
  <li>Usage</li>
  <li>Models</li>
  <li>Controllers</li>
  <li>Middlewares</li>
  <li>Authentication</li>
  <li>Database</li>
  <li>Contributing</li>
  <li>License</li>
</ul>

<h3>Features</h3>
<ul>
  <li><b>User Authentication:</b> Secure user authentication using JWT tokens.</li>
  <li><b>Movie Management:</b> CRUD operations for managing movie details.</li>
  <li><b>Booking System:</b> Reserve and manage seat bookings for movies.</li>
  <li><b>Admin and User Management:</b> CRUD operations for managing admins and users details.</li>
</ul>

<h3>Installation</h3>
<ul>
  <li>Clone the repository: git clone https://github.com/shubham-1809/movie-mate.git</li>
  <li>Install dependencies: npm install</li>
  <li>Start the server: npm start</li>
</ul>

<h3>Configuration</h3>
<ul>
  <li>Update the configuration in config/config.js as per your environment.</li>
  <li>Configure the MongoDB connection string in config/database.js.</li>
  <li>Set up environment variables for sensitive information.</li>
</ul>

<h3>Usage</h3>
<ul>
  <li>Register and authenticate users.</li>
  <li>Manage movies through the provided APIs.</li>
  <li>Allow users to book seats for their preferred movies.</li>
  <li>Integrate the APIs into your frontend application for a complete booking experience.</li>
</ul>

<h3>Models</h3>
<ul>
  <li><b>User:</b> Represents a registered user.</li>
  <li><b>Admin:</b> Represent an admin who can add and manage movie listings.</li>
  <li><b>Movie:</b> Stores information about a movie.</li>
  <li><b>Booking:</b> Manages seat bookings for users.</li>
</ul>

<h3>Controllers</h3>
<ul>
  <li><b>UserController:</b> Handles user registration and authentication.</li>
  <li><b>AdminController:</b> Handles admin registration and authentication.</li>
  <li><b>MovieController:</b> Manages CRUD operations for movies.</li>
  <li><b>BookingController:</b> Handles seat booking and reservation.</li>
</ul>

<h3>Middleware</h3>
<ul>
  <li><b>AuthenticationMiddleware:</b> Validates user authentication using JWT tokens.</li>
  <li><b>AuthorizationMiddleware:</b> Ensures users have the necessary permissions for specific actions.</li>
</ul>

<h3>Authentication</h3>
User authentication is handled using JSON Web Tokens (JWT). Include the generated token in the Authorization header for secured API requests.

<h3>Database</h3>
This project uses MongoDB as its database. Ensure you have a MongoDB server running and update the connection string in the configuration.

<h3>Contributing</h3>
Feel free to contribute to the project by submitting issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
