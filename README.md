🌐 Developer Portfolio Website

This is my personal full-stack portfolio website built to showcase my projects, skills, and experience in a professional way.
The portfolio includes both frontend and backend, making it a complete real-world full-stack application.

The frontend is built using React + Tailwind CSS, and the backend is developed using Spring Boot, providing APIs to manage portfolio data dynamically.

🛠️ Tech Stack
Frontend

React

Tailwind CSS

Vite

Axios

Backend

Java 17

Spring Boot

Spring Data JPA

Hibernate

MySQL

Maven

✨ Features

Responsive and modern UI

About Me section

Skills section

Projects showcase (dynamic)

Contact information

Backend APIs for managing portfolio data

Clean architecture (Controller → Service → Repository)

📁 Project Structure
PORTFOLIO/
│
├── frontend/        # React + Tailwind CSS
│   ├── src
│   └── public
│
├── backend/         # Spring Boot application
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── dto
│
└── README.md

▶️ How to Run Locally
🔹 Backend (Spring Boot)
cd backend
mvn spring-boot:run


📌 Backend runs on:

http://localhost:8080

🔹 Frontend (React + Tailwind)
cd frontend
npm install
npm run dev


📌 Frontend runs on:

http://localhost:5173

⚙️ Backend Configuration

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/portfolio
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

📡 API Overview (Sample)

GET /api/projects → Fetch all projects

POST /api/projects → Add new project

GET /api/skills → Fetch skills

GET /api/profile → Fetch profile details

🎯 Purpose of This Project

Build a professional developer portfolio

Practice full-stack development

Demonstrate React + Tailwind UI skills

Apply Spring Boot best practices

Show real-world project structure to recruiters

👨‍💻 Author

Dev Sonone
GitHub: Dev-git-cpu

📌 Note

This portfolio is created for personal branding and learning purposes.
It will be continuously updated with new projects and features.
