# Basic E-commerce Backend (Microservices Architecture)

## Tech Stack

- **Backend**: Node.js
- **Database**: MongoDB
- **Communication**:
  - `gRPC` for internal product service communication
  - `REST` for user service and API Gateway
  - `RabbitMQ` for notification service (event-driven)

- **Containerization**: Docker

---

## Microservices Breakdown

### 1. Product Service
- Handles all product-related operations
- Communicates using **gRPC**

### 2. User Service
- Manages user registration, login, etc.
- Communicates using **REST**

### 3. Notification Service
- Sends notifications (e.g., email, SMS)
- Listens to events via **RabbitMQ**

### 4. API Gateway
- Central access point for the client
- Communicates using **REST**
- Routes requests to appropriate services

---

##  License

All rights reserved © Muhammed Rishad 


















