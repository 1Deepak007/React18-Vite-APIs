# REACT
# REACT VITE API

For React project:
npx create-react-app react18_basics
npm run-start   OR   npm start


npm run build -> will create a build folder that that will be served/deployes not source code folder.



For Vite Project:
create vite project  -> npm create vite@latest
install node modules -> npm install  or  npm i
Vite + react Project -> npm run dev   

For tailwind :
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
->in tailwind.config.js add code :
            /** @type {import('tailwindcss').Config} */
            export default {
            content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
            }
->in index.css import
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
-> npm run dev 


# ADDING BOOTSTRAP
npm install bootstrap - to add React-Bootstrap for styling.
import 'bootstrap/dist/css/bootstrap.min.css';      // import in main.jsx
