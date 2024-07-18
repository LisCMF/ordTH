## Application Overview
This application is a real-time order service that renders a table with order data on the frontend using React. The backend is built with Express and Socket.IO, providing the real-time data feed to the client.

### Key Features
- Real-time Data Updates: The server sends order data to connected clients every second, simulating real-time order processing.
- Modular and Scalable Architecture: The backend is structured to be modular, making it easy to maintain and scale.
- Socket.IO for Real-Time Communication: Utilizes Socket.IO to manage WebSocket connections, ensuring real-time data delivery to the frontend.
- React Frontend: The frontend is built with React, displaying the order data in a table format, which updates in real time as new data is received from the server.

### Backend Structure
Express Server: Handles HTTP requests and serves static files.
Socket.IO: Manages WebSocket connections for real-time data transfer.
Data Loading and Processing: Data is read from a JSON file and processed to organize orders by timestamps.
Modular Code Organization:
- Utils: Contains utility functions for data loading.
- Services: Contains business logic for handling order data.
- Controllers: Handles HTTP request responses.
- Routes: Defines application routes.
- Socket: Manages real-time order event broadcasting.

### Frontend Structure
- React Components: The main component connects to the Socket.IO server and listens for real-time updates.
- Table Display: Orders are displayed in a table that updates dynamically as new data is received.


### Order Manager Application Setup Guide !

This small guide will help you run the Order Manager application. 
![alt text](image.png)

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation Steps

1. **Install Dependencies**

   ```bash
   npm install

1. **Run webpack Dev Server**
This script runs webpack-dev-server along with nodemon for changes.
   ```bash
   npm run webpack:dev


### Thank you looking into this !!!
