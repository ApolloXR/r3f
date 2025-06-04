# ApolloXR - 3D Asset Showcase Landing Page

This project is a modern landing page for ApolloXR, showcasing high-quality 3D assets using React and React Three/Fiber.

## Project Goals

- Create a visually stunning, clean, minimalistic, futuristic, and high-tech landing page.
- Highlight the company's capabilities in 3D asset creation.
- Display 3 interactive 3D assets with options for VR/AR viewing.
- Include an email collection/contact form.

## Tech Stack

- React
- React Three/Fiber (R3F)
- Three.js
- @react-three/drei
- @react-three/xr
- HTML5 & CSS3

## Project Structure

```
website-r3f/
├── public/
│   ├── index.html
│   └── models/         # Place your .glb/.gltf models here
│       ├── asset1.glb
│       ├── asset2.glb
│       └── asset3.glb
├── src/
│   ├── App.js          # Main application component
│   ├── index.js        # React entry point
│   ├── index.css       # Global styles
│   ├── App.css         # App-specific styles
│   └── components/     # UI Components
│       ├── Hero.js
│       ├── Showcase.js
│       ├── AssetViewer.js  # R3F component for 3D models
│       ├── ContactForm.js
│       └── Footer.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1.  **Navigate to the project directory `c:\codes\ApolloXR\website-r3f`**.
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```
3.  **Place your 3D models:**
    Create a `public/models/` directory.
    Add your `.glb` or `.gltf` 3D models to this directory. For the initial setup, the application expects `asset1.glb`, `asset2.glb`, and `asset3.glb`. You can update the paths in `src/App.js` or `src/components/Showcase.js` later.

### Running the Development Server

```bash
npm start
```
or
```bash
yarn start
```
This will start the development server, typically at `http://localhost:3000`.

## Building for Production

```bash
npm run build
```
or
```bash
yarn run build
```
This command builds the app for production to the `build` folder.
