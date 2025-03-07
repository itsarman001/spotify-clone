# Spotify Clone

A Vue.js-based web application replicating core features of Spotify, utilizing Tailwind CSS for styling, Pinia for state management, and Vue Router for navigation.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project is organized as follows:

```
spotify-clone
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   └── main.css
│   ├── components
│   │   ├── authentication
│   │   │   └── Login.vue
│   │   ├── card
│   │   │   └── Card.vue
│   │   ├── layouts
│   │   │   └── MainLayout.vue
│   │   ├── miscellaneous
│   │   │   └── NotFound.vue
│   │   ├── music-player
│   │   │   ├── PlayerControls.vue
│   │   │   ├── ProgressBar.vue
│   │   │   ├── TrackInfo.vue
│   │   │   └── VolumeControl.vue
│   │   ├── navigation
│   │   │   ├── Sidebar.vue
│   │   │   └── Topbar.vue
│   │   ├── playlist
│   │   │   ├── PlaylistCard.vue
│   │   │   ├── TrackItem.vue
│   │   │   └── TrackList.vue
│   │   ├── ui
│   │   │   ├── Button.vue
│   │   │   ├── Input.vue
│   │   │   ├── Loader.vue
│   │   │   └── Modal.vue
│   ├── composables
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── stores
│   │   └── userStore.js
│   └── views
│       └── HomeView.vue
├── .env
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierrc.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Features

- **User Authentication**: Secure login functionality.
- **Responsive Design**: Optimized for various devices using Tailwind CSS.
- **State Management**: Efficient data handling with Pinia.
- **Dynamic Routing**: Seamless navigation using Vue Router.
- **Music Playback**: Core music player components including controls and track information.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/itsarman001/spotify-clone.git
   cd spotify-clone
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and populate it with the necessary variables as outlined in the [Environment Variables](#environment-variables) section.

## Usage

1. **Start the Development Server**:

   ```bash
   npm run dev
   ```

2. **Access the Application**:

   Open your browser and navigate to `http://localhost:5173` (or the specified port) to interact with the application.

## Environment Variables

The application requires specific environment variables for configuration. Create a `.env` file in the root directory with the following structure:

```
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
VITE_REDIRECT_URI=http://localhost:5173
```

- `VITE_SPOTIFY_CLIENT_ID`: Your Spotify application's Client ID.
- `VITE_SPOTIFY_CLIENT_SECRET`: Your Spotify application's Client Secret.
- `VITE_REDIRECT_URI`: The redirect URI configured in your Spotify application settings.

Ensure these variables are set correctly to enable Spotify API integration.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

For more information, visit the [GitHub repository](https://github.com/itsarman001/spotify-clone).
