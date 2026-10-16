# 🎬 CineScope — Movie Discovery App

A React Native mobile application for discovering movies using real-time data from The Movie Database (TMDB) API. CineScope is designed to help users explore trending movies, search titles, discover genres, view movie details, and find related movies through a clean and reusable mobile interface.

**Company:** Xplor BizConnect  
**Project:** Movie Discovery App  
**Technology:** React Native CLI, TypeScript  
**API Provider:** The Movie Database (TMDB)  
**Assignment Experience Level:** 0–2 Years

---

## 📌 1. Project Overview

CineScope is a movie discovery application developed as part of the Xplor BizConnect React Native assignment.

The objective is to build a functional mobile application that integrates multiple TMDB API endpoints, displays real movie information, provides smooth navigation, handles API errors, and follows a clean, maintainable project structure.

## 🎯 2. Project Objectives

- Integrate at least 15 distinct TMDB API endpoints.
- Display real movie data through meaningful application screens.
- Implement navigation between movie discovery and details screens.
- Create reusable UI components.
- Handle loading, empty, and error states.
- Maintain an organized and scalable codebase.
- Document installation, configuration, API integration, and execution.
- Publish the source code through GitHub without exposing private credentials.

## ✨ 3. Application Features

The following features describe the intended application functionality. Keep only the features that are implemented and verified in the submitted build.

### Movie Discovery
- Daily trending movies
- Popular movies
- Top-rated movies
- Upcoming releases
- Currently playing movies
- Genre-based movie discovery

### Search and Filtering
- Search movies by title
- Browse movies by genre
- Discover movies using available TMDB filters
- Support pagination where implemented

### Movie Details
- Movie overview and description
- Ratings and release dates
- Cast and crew information
- Available trailers and videos
- Movie reviews
- Recommended movies
- Similar movies
- Movie posters and backdrops
- Streaming provider information where available

### Saved Movies
- Save and remove movies from a watchlist, if implemented
- Display saved movies in a dedicated screen
- Persist saved data locally, if implemented

### User Experience
- Reusable components
- Consistent navigation
- Loading indicators
- Empty-result states
- API error handling
- Responsive layouts for supported devices

## 🛠️ 4. Technology Stack

| Technology | Purpose |
|---|---|
| React Native CLI | Cross-platform mobile development |
| TypeScript | Type safety and maintainable code |
| TMDB API | Movie and entertainment data |
| Axios | HTTP requests |
| Redux Toolkit | Centralized application state management |
| React Navigation | Screen navigation |
| Git | Version control |
| GitHub | Source code hosting and submission |
| Android Studio | Android emulator and SDK |
| Xcode | iOS simulator and build tools |

## 🌐 5. TMDB API Integration

CineScope uses TMDB's REST API to retrieve movie information.

**Official API documentation:**  
https://developer.themoviedb.org/reference/getting-started

**Base URL:**

`https://api.themoviedb.org/3`

### 5.1 Movie Listing Endpoints

| # | HTTP Method | Endpoint | Purpose |
|---:|---|---|---|
| 1 | GET | `/trending/movie/day` | Retrieve daily trending movies |
| 2 | GET | `/movie/popular` | Retrieve popular movies |
| 3 | GET | `/movie/top_rated` | Retrieve top-rated movies |
| 4 | GET | `/movie/upcoming` | Retrieve upcoming movies |
| 5 | GET | `/movie/now_playing` | Retrieve movies currently playing |

### 5.2 Search and Discovery Endpoints

| # | HTTP Method | Endpoint | Purpose |
|---:|---|---|---|
| 6 | GET | `/search/movie` | Search movies by query |
| 7 | GET | `/discover/movie` | Discover movies using filters |
| 8 | GET | `/genre/movie/list` | Retrieve available movie genres |

### 5.3 Movie Details and Related Endpoints

| # | HTTP Method | Endpoint | Purpose |
|---:|---|---|---|
| 9 | GET | `/movie/{movie_id}` | Retrieve movie details |
| 10 | GET | `/movie/{movie_id}/credits` | Retrieve cast and crew |
| 11 | GET | `/movie/{movie_id}/videos` | Retrieve available trailers and videos |
| 12 | GET | `/movie/{movie_id}/reviews` | Retrieve movie reviews |
| 13 | GET | `/movie/{movie_id}/recommendations` | Retrieve recommended movies |
| 14 | GET | `/movie/{movie_id}/similar` | Retrieve similar movies |
| 15 | GET | `/movie/{movie_id}/images` | Retrieve movie posters and backdrops |
| 16 | GET | `/movie/{movie_id}/watch/providers` | Retrieve available watch providers |

**Endpoint count:** 16 distinct endpoint paths defined in the project's endpoint constants.

The actual number of implemented endpoints must be confirmed by checking the API service calls, response handling, and relevant application functionality. An endpoint constant alone does not prove integration.

## 6. API Architecture

CineScope follows a Feature-Based Architecture to organize API integration, state management, and business logic by feature. This structure improves maintainability, code reusability, and scalability.

# Architecture Overview

1. Each feature manages its related functionality, while shared API infrastructure is maintained centrally.
2. API Client: Centralized Axios configuration for communicating with the TMDB API.
3. Endpoint Constants: Movie API endpoints are defined in a dedicated module.
4. Feature-Based Organization: Movie discovery, search, and saved media functionality are organized into separate feature modules.

5. Redux Toolkit: Feature-specific state is managed using Redux slices and selectors where implemented.

6. TypeScript: Types and interfaces help maintain consistent data structures.

7. Reusable Components: Shared UI components are used across multiple screens.

## API Request Flow

A screen dispatches an action or calls the relevant feature service.

The feature service uses the centralized API client.

Axios sends the request to the TMDB API.

The response is processed by the feature's service or state-management logic.

Redux state is updated where Redux is used.

The screen renders the resulting data and handles loading, empty, and error states.

## Benefits

Feature-specific code is easier to maintain.
API logic is separated from UI components.
Redux state is organized by functionality.
Shared API configuration avoids duplication.
New features can be added without unnecessarily affecting existing modules.


## 🧭 7. Navigation

The application should provide navigation between its available screens, such as:

- Home
- Search
- Discover
- Movie Details
- Saved Movies or Watchlist
- Profile, if implemented

Movie cards should open the corresponding movie details screen. Related movies should allow users to navigate to their details as well.

Document the routes that are actually registered in the application.

## 🗂️ 8. Project Structure

The following is a representative structure. Update it to match the actual project files.

```text
CineScope/
├── android/
├── ios/
├── src/
│   ├── api/
│   │   ├── client/
│   │   └── endpoints/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├── config/
│   ├── navigation/
│   ├── redux/
│   │   └── features/
│   ├── screens/
│   └── utils/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

### Folder Responsibilities

- `api/`: API client, request handling, and endpoint definitions
- `components/`: Reusable UI components organized by component responsibility
- `config/`: Environment and application configuration
- `navigation/`: Navigation containers, stacks, and tab navigators
- `redux/`: Application state and feature-specific logic
- `screens/`: Application screens
- `utils/`: Shared utility functions

## ⚙️ 9. Prerequisites

Install the following tools before running the application:

- Node.js and npm
- React Native development environment
- Android Studio and Android SDK for Android
- Xcode and CocoaPods for iOS on macOS
- Git
- A TMDB account and API credentials

Refer to the official React Native environment setup guide:

https://reactnative.dev/docs/set-up-your-environment

## 🚀 10. Installation and Setup

### Step 1: Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd CineScope
```

Replace the placeholder with the actual repository URL.

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Configure environment variables

Create the environment files required by the project configuration:

- `.env.dev`
- `.env.live`

Example configuration:

```dotenv
BASE_URL=https://api.themoviedb.org/3
TMDB_ACCESS_TOKEN=YOUR_TMDB_ACCESS_TOKEN
```

Check the existing configuration in `src/config/` and use the exact variable names expected by the application.

Do not commit actual credentials or private environment files to GitHub. Provide a `.env.example` containing placeholder values instead.

### Step 4: Start Metro

In the project root, run:

```bash
npm start
```

### Step 5: Run on Android

For the development environment, use the configured project script:

```bash
npm run android
```

If separate flavor scripts are configured, use:

```bash
npm run android:dev
npm run android:live
```

### Step 6: Run on iOS

Install CocoaPods dependencies if required:

```bash
cd ios
pod install
cd ..
```

Run the configured development scheme:

```bash
npm run ios:dev
```

Use `npm run ios:live` for the live environment if that script and scheme are configured.

**Note:** The commands above must match the scripts and schemes present in the actual repository.

## 📦 11. Android APK Generation

Build the development debug APK:

```bash
cd android
./gradlew app:assembleDevDebug
```

Build the live debug APK:

```bash
./gradlew app:assembleLiveDebug
```

The APK files are normally generated under:

```text
android/app/build/outputs/apk/
```

Confirm the actual output paths after successful builds. Release builds may require valid release-signing configuration.

## 🧪 12. Testing and Verification

Before submitting the assignment, verify the following.

### API Testing
- [ ] At least 15 distinct endpoints are called successfully.
- [ ] API responses are handled correctly.
- [ ] Movie lists display real TMDB data.
- [ ] Search returns relevant results.
- [ ] Movie details load for the selected movie.
- [ ] Credits, videos, reviews, and related movie data load where implemented.
- [ ] Missing or unavailable data does not crash the application.

### UI and Navigation
- [ ] Main screens render correctly.
- [ ] Movie cards navigate to the correct details.
- [ ] Navigation routes work correctly.
- [ ] Loading indicators are displayed when required.
- [ ] Empty states and error states are handled.
- [ ] Saved Movies functionality works if implemented.

### Platform Testing
- [ ] Dev flavor builds and launches on Android.
- [ ] Live flavor builds and launches on Android.
- [ ] iOS builds and launches on a simulator where the environment is available.
- [ ] Environment-specific configuration is loaded correctly.

### Repository and Security
- [ ] README setup instructions have been checked.
- [ ] `.env.dev` and `.env.live` are excluded from Git.
- [ ] No real API credentials are committed.
- [ ] The repository can be cloned and configured by another developer.

Only mark items complete after actually testing them.

## 🔐 13. API Security and Attribution

CineScope uses TMDB APIs to retrieve movie information.

- Keep credentials out of source control.
- Use local environment configuration for development.
- Never expose private API credentials in logs or screenshots.
- Follow TMDB's current API terms and attribution requirements.

**TMDB attribution:**  
https://www.themoviedb.org/

This product uses the TMDB API but is not endorsed or certified by TMDB.

## 📸 14. Application Screenshots

Add screenshots from the actual running application to demonstrate the implemented functionality.

Suggested screenshots:

- Home screen
- Search screen
- Discover and genre filters
- Movie details
- Cast and reviews
- Trailers and related movies
- Saved Movies screen

Store screenshots in a directory such as `docs/screenshots/` and link them here once available.

## 📋 15. Assignment Compliance Summary

| Assignment Requirement | Evidence to Provide |
|---|---|
| React Native application | Complete source code |
| Minimum 15 TMDB endpoints | Endpoint inventory and verified API calls |
| Real API data | Working screens and API responses |
| Navigation | Registered routes and tested flows |
| Reusable components | Organized component structure |
| Error handling | Loading, empty, and failure-state implementation |
| Clean code | Modular source structure |
| README documentation | Setup instructions, features, stack, and endpoints |
| GitHub submission | Accessible repository URL |
| Credential protection | `.gitignore` and `.env.example` |

## 👨‍💻 16. Author and Repository

**Developer: Monoo Sikarwar
**Project:** CineScope — Movie Discovery App  
**Company Assignment:** Xplor BizConnect  
**GitHub Repository:** `https://github.com/monoosikarwar2541-dev/CineScope.git`

---

### Conclusion

CineScope aims to provide a functional movie discovery experience using React Native and TMDB APIs. The project is organized around reusable components, API integration, navigation, and maintainable application code.

The final submission should demonstrate working functionality, verified integration of at least 15 distinct TMDB endpoints, proper error handling, and clear setup documentation.

