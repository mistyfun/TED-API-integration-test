# TED-TENDERS
## TED-TENDERS side project
Tender Search App is a web application that allows users to search and retrieve tender notices from the TED (Tenders Electronic Daily) database using specific search criteria. This app is built with React for the frontend and communicates with Java and SpringBoot for backend API to fetch and display the tender data.
## Table of Contents
* Features
* Getting Started
* Usage
* File Structure
* Contributing
### Features
Search for tender notices based on various criteria.
Display search results in a table format.
### Getting Started
#### Prerequisites
Before you begin, ensure you have the following installed:

* Java Development Kit (JDK) (version 11 or higher)
* Maven (for managing Java dependencies)
* Node.js (version 12 or higher)
* npm or Yarn
##### Installation
1. Clone the repository:

git clone https://github.com/yourusername/tender-search-app.git
cd tender-search-app

#### Backend Setup (Spring Boot)
1. Navigate to the backend directory (if your project has separate directories for frontend and backend):
  *cd backend*
2. Build the Project:
  *mvn clean install*
3. Set Up Environment Variables:
  Create an `application.properties` file in the *src/main/resources/* directory and add any necessary configuration, such as the TED API base URL.
4. Run the Backend Server:
   mvn spring-boot:run

   The backend server will start at `http://localhost:8080`.
#### Frontend Setup (React)
1. Navigate to the frontend directory (if applicable):
   
   *cd frontend*
   
3. Install Dependencies:
   
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

```bash
tender-search-app/
│
├── backend/                        # Backend (Spring Boot) source code
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── example/
│   │   │   │           └── tenders/
│   │   │   │               └── ... # Controllers, Services, Models, etc.
│   │   │   ├── resources/
│   │   │   │   └── application.properties # Spring Boot configuration
│   │   └── test/                  # Test files for backend
│   └── pom.xml                    # Maven configuration file
│
├── frontend/                       # Frontend (React) source code
│   ├── public/
│   │   └── index.html              # Main HTML template
│   ├── src/
│   │   ├── components/             # Reusable React components
│   │   │   └── Table.js
│   │   ├── App.js                  # Main React component
│   │   ├── index.js                # React DOM rendering entry point
│   │   └── ...                     # Other source files
│   ├── .env                        # Environment variables for React
│   ├── package.json                # Node.js dependencies and scripts
│   └── README.md                   # Project documentation
│
└── README.md                       # Project documentation
```
* `backend/`: Contains all backend-related code, including controllers, services, and configuration files.
* `frontend/`: Contains all frontend-related code, including components, styles, and main application files.
#### Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request.

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature-name.
5. Submit a pull request.


