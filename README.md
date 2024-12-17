Here's a `README.md` file for your project:

---

# DuckDuckGo Search App with Query History

This is a simple web application built with React and Redux for the frontend, and Node.js for the backend. It allows users to query the DuckDuckGo Instant Answer API, displays results, and maintains a history of queries stored in browser cookies. The history is displayed as clickable links in a sidebar.

---

## Features

- **Search the Web**: Query DuckDuckGo's Instant Answer API and display results.
- **Query History**: Store search history in browser cookies.
- **Sidebar Links**: View and reuse past queries via clickable links.

---

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js) or Yarn
- Git

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/eshorr/duckduckgo-query.git
   cd duckduckgo-query
   ```

2. **Install Dependencies**:
   - Install backend dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Install frontend dependencies:
     ```bash
     cd ../frontend
     npm install
     ```

---

## Running the Application

### 1. Start the Backend Server
   In the `backend` directory, start the Node.js server:
   ```bash
   cd backend
   node index.js
   ```
   The backend server will run on `http://localhost:5000`.

### 2. Start the Frontend Application
   In the `frontend` directory, start the React application:
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

---

## Usage

1. Open the frontend in your browser at [http://localhost:3000](http://localhost:3000).
2. Enter a search query in the input field and click the "Search" button.
3. Results from the DuckDuckGo Instant Answer API will be displayed.
4. Queries are saved in the sidebar. Click any query in the sidebar to perform the search again.

---

## Project Structure

```
duckduckgo-search/
├── backend/
│   ├── index.js         # Backend server
│   └── package.json     # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── redux/       # Redux actions, reducers, and store
│   │   └── App.js       # Main React application
│   ├── public/          # Static assets
│   └── package.json     # Frontend dependencies
└── README.md            # Project documentation
```

---

## Notes

- The history is stored in browser cookies, which expire after 1 day.
- Only the 10 most recent queries are stored in the history.

---

## Troubleshooting

- **Issue**: "History is undefined."  
  **Solution**: Ensure the `history` key is initialized in the Redux store's state.
  
- **Issue**: Backend is not responding.  
  **Solution**: Verify that the backend server is running on `http://localhost:5000`.

---

## Future Enhancements

- Add a button to clear query history.
- Persist history across multiple devices using a database.
- Improve error handling and user feedback.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to customize this as needed! Let me know if you’d like any other changes or enhancements.
