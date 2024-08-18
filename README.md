# TED-TENDERS
## TED-TENDERS side project
Tender Search App is a web application that allows users to search and retrieve tender notices from the TED (Tenders Electronic Daily) database using specific search criteria. This app is built with React for the frontend and communicates with Java and SpringBoot for backend API to fetch and display the tender data.
## Table of Contents
Features
Getting Started
Usage
File Structure
Contributing
### Features
Search for tender notices based on various criteria.
Display search results in a table format.
### Getting Started
#### Prerequisites
Before you begin, ensure you have the following installed:

* Node.js (version 12 or higher)
* npm or Yarn
##### Installation
1. Clone the repository:

git clone https://github.com/yourusername/tender-search-app.git
cd tender-search-app

2. Install dependencies:

Using npm:

*npm install*

Or using Yarn:

*yarn install*

3. Set up environment variables:

Create a .env file in the root of the project and add any necessary environment variables. For example:

*REACT_APP_API_URL=http://localhost:8080/api.ted.europa.eu/v3/*

##### Usage
1. Start the development server:

Using npm:

*npm start*

Or using Yarn:

*yarn start*

This will start the app and open it in your default browser. The app will be available at *http://localhost:3000*.

2. Perform a search:

* Enter a search query in the search bar.
* Press Enter or click the "Search" button to retrieve results.
* Results will be displayed in a table with details like title, description, publication number, etc.
3. View results:

* Browse through the search results in the table.
* Click on any result for more details (if implemented).
#### File Structure
Here's a brief overview of the project's file structure:

css
```bash
tender-search-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── Table.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── ...
│
├── .env
├── package.json
└── README.md
```
* src/: Contains all the source code, including components, styles, and main application files.
* components/: Contains reusable components like the Table component.
* App.js: The main component that renders the app.
* .env: Environment variables.
* public/: Static files and the main HTML template.
* 
#### Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request.

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature-name.
5. Submit a pull request.


