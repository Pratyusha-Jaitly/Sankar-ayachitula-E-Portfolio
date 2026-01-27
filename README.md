# Personal Portfolio Website

## Author
Sankar Sudheer Ayachitula

## Class Link
CS 5610 – Web Development 
Northeastern University – Khoury College of Computer Sciences  
 

## Project Objective
The objective of this project is to design and implement a responsive, accessible, and standards-compliant personal portfolio website using modern web technologies.

The website showcases:
- About Me section
- Academic and Professional Experience
- Education and Coursework
- Projects
- Contact page with a client-side email form
- Footprints page featuring an interactive world map with visited locations and photo galleries

The project emphasizes clean HTML semantics, organized CSS without `!important`, ES6 JavaScript modules, accessibility best practices, and W3C compliance.

## Design Doc Link:
Link: https://docs.google.com/document/d/1FnuTRspHGk91FZd3h7IX8rZAXQsndJb2ppMofhByaLw/edit?usp=sharing


## Home Page:

<img width="1437" height="797" alt="Thumbnail" src="https://github.com/user-attachments/assets/055c7667-4d29-4ee6-8bdc-b1f07ff8d676" />

## Contact Me Page:

<img width="2866" height="1356" alt="image" src="https://github.com/user-attachments/assets/93f4b7d2-ee5a-4c04-97bc-346306f805b6" />

## FootPrint Page:

<img width="2892" height="1514" alt="image" src="https://github.com/user-attachments/assets/b9638d86-a6fd-4076-8f69-273cd29a6f9b" />


## Tech Stack
- HTML5
- CSS3 (custom properties, responsive layout)
- JavaScript (ES6 modules)
- Bootstrap 5 (layout and components via CDN)
- Leaflet.js (interactive map via CDN)
- ESLint (class-provided configuration)

## Project Structure
```text
.
├── index.html
├── pages/
│   ├── contact.html
│   └── footprints.html
├── css/
│   ├── styles.css
│   ├── contact.css
│   └── footprints.css
├── js/
│   ├── main.js
│   ├── contact.js
│   ├── footprints.js
│   └── lib/
│       ├── dom.js
│       ├── mailto.js
│       └── footprints-data.js
├── images/
│   ├── favicon.png
│   └── footprints/
│       ├── us/
│       ├── sg/
│       ├── id/
│       ├── jp/
│       └── in/
├── package.json
└── LICENSE
```

## Instructions to Build and Run

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install project dependencies

   ```bash
   npm install
   ```

3. Start a local HTTP server
   (Required to support ES6 modules)

   ```bash
   npx http-server .
   ```

4. Open the project in a browser

   * Home page: `http://localhost:8080/index.html`
   * Contact page: `http://localhost:8080/pages/contact.html`
   * Footprints page: `http://localhost:8080/pages/footprints.html`

5. (Optional) Run code linting

   ```bash
   npm run lint
   ```
