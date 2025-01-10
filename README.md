# Instagram Clone

This project is a clone of Instagram, designed to replicate core features such as the ability to view posts, reels, story highlights, users data and tags, as well as navigate through tabs to explore content. It uses React for building the front-end, integrating third-party APIs to fetch posts, reels, and tags using a scrapper instagram api from rapid api, providing users with an interactive experience similar to the original platform.

## Features

- **Header**: This contains the instagram, icons and the dark mode switch icon.
- **Profile**: This contains the user picture, stats, bio, and action buttons.
- **Story Highlight**: This contains circular story highlights with scrolling and grid layout.
- **Tab Navigation**: Easily switch between different sections like Posts, Reels, and Tags.
- **Posts**: View a grid of posts with images fetched from a mock Instagram API.
- **Reels Section**: Watch video content in a video grid format, with full-screen controls.
- **Tags Section**: Browse tagged images and view posts related to specific tags.
- **Responsive Design**: Mobile-friendly layout for seamless browsing on different devices.
- **Dynamic Styling**: Interactive tab switching with a custom underline that moves as users select different tabs.

## Tech Stack

- **Frontend**: React.js, CSS for styling
- **State Management**: React Hooks (`useState`, `useEffect`, `useRef`)
- **API Calls**: Axios to interact with the Instagram mock API
- **CSS Framework**: Custom styles using plain CSS

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/instagram-clone.git
   ```
2. Navigate into the project directory:
   ```bash
   cd instagram-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```instagram-clone/
   1instagram-profile/
├── public/
│   └── vite.svg         # Public assets
├── src/
│   ├── assets/          # Images and static assets
│   ├── Components/      # Reusable UI components
│   ├── hook/            # Custom hooks for data fetching
│   ├── Styles/          # CSS files for styling
│   ├── App.css          # Styles for the App component
│   ├── App.jsx          # Main application file
│   ├── data.js          # Sample data for API key
│   ├── index.css        # Global styles
│   ├── main.jsx         # Entry point for the React app
├── .gitignore           # Git ignore file
├── eslint.config.js     # ESLint configuration
├── index.html           # Main HTML file
├── package.json         # NPM package configuration
├── vite.config.js       # Vite configuration file

```

## Contributing

Feel free to fork this project and submit pull requests with improvements or bug fixes. Contributions are welcome!

## Developers

- Alabi Sunday (019) - https://github.com/Capablecode
- Raji Itunu (097) - https://github.com/itunumide
- Emmanuel God'stime (043) - https://github.com/Nuelle-tech
- Olufunmilayo Esther Busari

<!-- ## License

This project is open-source and available under the MIT License. -->
