# Tic Tac Toe Game 🎮

### Project Description

This is a Tic Tac Toe application built with **ReactJs** and **TypeScript** to ensure code safety. The project features a user-friendly interface with selectable difficulty levels from easy to hard, integrating AI with the Minimax algorithm for the hard mode, providing a rich and challenging gameplay experience.

### Key Features

- Single-player mode with AI difficulty levels: Easy, Medium, and Hard.
- Modern and intuitive user interface.
- Docker image ready for quick deployment.

### Technologies Used

- **React** with **TypeScript** for front-end.
- **Docker** for packaging and deployment.
- **Nginx** to serve the application when running in a Docker container.

## How to Run the Application

### 1. Run on Docker

#### Requirements

- Docker installed on your machine.

#### Steps to Run

1. **Pull Docker Image**: Pull the Docker image from Docker Hub.

   ```bash
   docker pull xuanphuc2002/xuanphuc-tic-toc-toe
   ```

2. **Run Docker Container**: Start the Docker container with the pulled image.

   ```bash
   docker run -d -p 8080:80 xuanphuc2002/xuanphuc-tic-toc-toe
   ```

3. **Access the Application**: Open your browser and go to [localhost:8080](http://localhost:8080) to play Tic Tac Toe.

### 2. Run on Vercel

**Access the Application**: Open your browser and go to [tic-tac-toe-game.vercel.app](https://draphony-tic-toc-toe.vercel.app/) to play Tic Tac Toe.

### 3. Docker Image Link

- [Docker Hub](https://hub.docker.com/r/xuanphuc2002/xuanphuc-tic-toc-toe)

### 4. Personal Information

- Author: Ngô Lê Xuân Phúc
- Email: phuc.ngolexuan@gmail.com
