# RentalCar
## What is RentalCar?
RentalCar is the frontend of a car rental web app designed to help users quickly find and book the perfect car. You can browse, filter by brand, price, and mileage, save favorites that stick around after refresh, and easily complete your booking.

## Key Features:

A modern homepage with an eye-catching banner and clear call-to-action

Car catalog with filters to narrow down your search by brand, price, and mileage

Favorites system that keeps your selected cars saved even if you reload the page

Detailed car pages featuring a booking form for seamless reservations

“Load More” pagination for smooth browsing through the car list

## Tech Stack:
Built with React and Vite, using Redux for state management, React Router for navigation, and Axios for communicating with the backend API.

## Backend API  
This project uses the backend API documented here:  
https://car-rental-api.goit.global/api-docs/

All filtering, pagination, and data fetching happen via this API, enabling real-time and dynamic updates in the frontend.

## Pages and Routes  
- `/` — Home page with banner and intro  
- `/catalog` — Car catalog with filtering and favorites  
- `/catalog/:id` — Detailed car page with booking form  

## How It Works:
The catalog and filters connect directly to a backend API that handles filtering and pagination, ensuring you always get the latest data without delays.

## Getting Started:
```bash
Clone the repository: 
git clone <your-repo-url>

Install dependencies: 
npm install

Run locally: 
npm run dev

Build for production: 
npm run build
```

## About Me:
Hi! I’m Olga Ferubko, a Front-End Developer passionate about crafting intuitive and responsive user interfaces. I’m constantly leveling up my skills in JavaScript and React and enjoy writing clean, maintainable code.

Feel free to connect with me:

GitHub: https://github.com/olgaferubko

Email: ferubko.olga@gmail.com

LinkedIn: https://www.linkedin.com/in/olga-ferubko/

Check it out:
Deployed and live here: https://rental-car-project-eight.vercel.app/