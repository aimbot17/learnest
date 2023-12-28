# Apna College

## Description

Welcome to Apna College, a web app designed to provide a user experience similar to Apna College, with additional features and improvements. Explore the app, and feel free to contribute to enhance its functionality.

## Getting Started

These instructions will help you set up a local copy of the project for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/) (optional, but recommended)
- [Docker](https://www.docker.com/) (for containerization, optional but recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JoshiUtsav/apnacollege.git
   ```

2. **Docker Installation (Optional, but Recommended):**

   If you prefer using Docker for containerization, follow these steps:

   - Install Docker by following the instructions for your operating system:
     - [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows/)
     - [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac/)
     - [Docker Engine for Linux](https://docs.docker.com/engine/install/)

3. **Frontend Setup:**

   Navigate to the `client` directory:

   ```bash
   cd apnacollege/client
   ```

   - **With Docker:**

     Build the Docker image for the client:

     ```bash
     docker build -t apnacollege-client .
     ```

     Run the Docker container for the client:

     ```bash
     docker run -p 3000:3000 apnacollege-client
     ```

   - **Without Docker:**

     Install dependencies:

     ```bash
     npm install
     ```

     Run the development server:

     ```bash
     npm run dev
     ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.
