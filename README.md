# Geek Router App

  This is a React application featuring various components for different functionalities, including home, quotes, restaurants, contact, and food-related features. It features various components for exploring recipes, discovering new restaurants, reading inspiring quotes, and contacting the team behind the app. The application utilizes React Router for seamless navigation between different sections.
  Gourmet Explorer is a React application designed to provide users with a rich culinary experience. It features various components for exploring recipes, discovering new restaurants, reading inspiring quotes, and contacting the team behind the app. The application utilizes React Router for seamless navigation between different sections.

# [Hosted Link](https://geek-router-app.vercel.app/)

## Routes
   - /: Home Component
   - /quotes: Quote Component
   - /restaurants: Restaurants Component
   - /contact: Contact Component
   - /food: Food Component
   - /food:id:Detailed Food Component

## Home Component

  - The Home component represents the homepage of a web application.
  - This React component displays various sections including a hero section, a summary section, and testimonials.

## Qoute Component

  - The Qoutes component displays a list of quotes fetched from a JSON file (Qoutes.json). Each quote is displayed along with its author, and there's an option to share the quote on Twitter.
  - This React component renders a list of quotes fetched from the Qoutes.json file. Each quote is displayed in a styled card, showing the quote text and the author's name. Additionally, there's a Twitter share     button associated with each quote that allows users to share the quote on Twitter.

## Restaruants Component

  - The Restaruant component is a React component that displays a list of restaurants based on provided data. Users can search for restaurants by name and filter them based on their ratings.
  - This component renders a list of restaurants fetched from the provided data file (Data.js). Users can search for restaurants by entering a search query in the input field. Additionally, users can filter restaurants based on their minimum rating by adjusting the rating input field. Each restaurant is displayed with its name, rating, address, type of food, and a link to visit the menu.

## Contact Component

  - The Contact component is a React component that provides a form for users to submit their contact details and a message.
  - This component allows users to fill out a form with their name, email, phone number, and a message. Upon submission, the form data is logged to the console. Additionally, the component displays contact details such as the location, phone number, and email address.

## Food Component

  - The Food component is a React component that provides food and detailed ingridient and youtube video etc
  - This help users search for, view, and explore various recipes. Users can search for recipes by entering keywords in the search bar, and the app will display a list of matching recipes. Additionally, users can view detailed information about each recipe, including ingredients, instructions, and related links such as recipe sources and instructional videos.

### Router

  - The application utilizes React Router for navigation between different components.
    # Dependency
      - React Router DOM: For routing within the application.
