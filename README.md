
# Alfred Frontend: Jira AI-Powered Assistant

This is the frontend project for Alfred, an AI-powered assistant that allows users to interact with Jira using natural language commands. The UI provides a user-friendly interface for querying and managing Jira data.

## Features

- Intuitive interface for typing natural language commands.
- Displays Jira data, issue statuses, and analytics in real-time.
- Seamlessly communicates with the backend to fetch and update data.

## Tech Stack

- **ReactJS** for building the user interface.
- **Axios** for making API calls to the backend.
- **Tailwind CSS** for styling.

## Prerequisites

- Node.js 16+

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thesourabh1995/alfred-frontend.git
   cd alfred-ui
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the backend URL:
   ```env
   REACT_APP_BACKEND_URL=http://127.0.0.1:8000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.


## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm test`: Runs the tests.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, contact [Your Name](mailto:your-email@example.com).
