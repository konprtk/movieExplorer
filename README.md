# Movie Explorer

Welcome to the Movie Explorer app!

This React application allows users to explore popular movies, view a trending movie banner, and manage a watchlist.

## Features

- **Trending Movies Banner**: Displays a trending movie with a dynamic banner.
- **Movies List**: Shows a list of popular movies with pagination support.
- **Watchlist**: View and manage your list of favorite movies.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for routing and navigation.
- **Axios**: HTTP client for making API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/konprtk/movieExplorer.git
   
   cd movieExplorer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

   This will start the app and you can view it at `http://localhost:3000`.

## API Key (optional)

This project uses the [TMDB API](https://www.themoviedb.org/documentation/api) to fetch movie data. To use this project, you'll need to set up your own API key.

1. Sign up for an account on TMDb.
2. Go to the API section of your account settings.
3. Replace the API key in the source code with your own.

In the `Movies` and `Banner` components, you'll need to replace `YOUR_API_KEY` with your actual API key in the following URLs:

- `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=${pageNo}`
- `https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY&language=en-US`

## Folder Structure

- `src/`
  - `components/`
    - `Banner.js`: Displays the trending movie banner.
    - `Movies.js`: Fetches and displays the list of popular movies.
    - `MovieCard.js`: Displays individual movie cards.
    - `Navbar.js`: Navigation bar component.
    - `Pagination.js`: Pagination controls for the movies list.
    - `WatchList.js`: Manages the user's watchlist.
  - `App.js`: Main application component with routing.
  - `App.css`: Styling for the application.
<!-- 
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. -->

## Contributing

Feel free to fork the repository and submit pull requests. Any contributions are welcome!

## Contact

For any questions or feedback, please reach out to me at [pratik127001@gmail.com](mailto:pratik127001@gmail.com).

---

### Enjoy exploring movies! 🍿🎬
