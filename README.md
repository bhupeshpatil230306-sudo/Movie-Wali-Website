# 🎬 Movie Wali Website

A modern, responsive movie discovery website built using **React, JavaScript, and CSS**, with **Docker** for containerization and deployment.

## 📌 About the Project

Movie Wali Website is a frontend-based movie browsing platform featuring a modern dark-themed interface.

Users can explore movies, search for titles, filter movies by genre and language, view movie details, and maintain a personal watchlist.

The application is packaged using Docker and served through Nginx.

## ✨ Features

- Modern dark-themed user interface
- Featured movie banner
- Movie search functionality
- Genre-based filtering
- Language-based filtering
- Movie details popup
- Personal watchlist using browser Local Storage
- Responsive layout
- Docker-based deployment

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend development |
| JavaScript | Application logic |
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| Vite | Development and production build |
| Local Storage | Watchlist persistence |
| Docker | Containerization |
| Nginx | Web server |
| Git & GitHub | Version control |

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm
- Git
- Docker Desktop (for Docker deployment)

### 1. Clone the Repository

```bash
git clone https://github.com/bhupeshpatil230306-sudo/Movie-Wali-Website.git
```

### 2. Navigate to the Project

```bash
cd Movie-Wali-Website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### 5. Create Production Build

```bash
npm run build
```

## 🐳 Docker Implementation

The project uses a multi-stage Docker build:

- Node.js builds the React application.
- Nginx serves the generated production files.
- Docker packages the application into a container image.

### Build Docker Image

```bash
docker build -t movie-wali-website .
```

### Run Docker Container

```bash
docker run -d --name movie-wali-site -p 8080:80 movie-wali-website
```

### View Docker Images

```bash
docker images
```

### View Running Containers

```bash
docker ps
```

### Access the Website

```text
http://localhost:8080
```

## 📸 Screenshots

Add actual screenshots of the project here:

1. Website Home Page
2. Search and Filtering
3. Movie Details Popup
4. Watchlist
5. Successful Production Build
6. Docker Image
7. Running Docker Container
8. Website Running Through Docker

## 🎯 Project Scope

This is a frontend-only project. Movie information is maintained in the frontend code, while the watchlist uses browser Local Storage.

The project demonstrates frontend development, responsive UI design, production builds, containerization, and deployment.

## 🚀 Future Enhancements

- Integration with a movie database API
- Backend and database integration
- User authentication
- Movie trailer integration
- Improved movie recommendations

## 👨‍💻 Author

**Bhupesh Patil**

GitHub: [bhupeshpatil230306-sudo](https://github.com/bhupeshpatil230306-sudo)

---

⭐ If you like this project, consider giving the repository a star!