# 3 dec 2025 Full Stack Web Course notes

Date: December 3, 2025
Note type: Notes

## Key Takeways

1. 

## Action

---

- [ ]  

## Notes

### Video 1

---

- React + Springboot + DB (CRUD)
- Springboot is not taught fully.
- Resources → source code + sildes pdf

### Video 2

- React → library for modern single page web development.
- Traditional web development → uses full page reload but react is partial reload based on user request.
- It access the server using the REST API for data.
- It is hard to build it on own using JS,AJAX,etc ⇒ so react,angular,vue.

### Video 3 - development area setup

- Visual studio as IDE
- Commnad line tools → node(to run JS outside browser), npm (node package manager for JS lib),TSC(complie Typescript (superset of JS and strongly typed) to plain JS)
- Typescript key features → static varibale type ⇒ complie time error detection and also other feature of scalability.

### Video 4 - Getting strated with react

- React features → component based [small,reusable piece of UI],Decelrative view[based on state of component update UI],component logic is in JS,Responsive design(e.g. layout adjust to screen size),modern frameworks for UI (bootstrap,google material design for rich look by prebuilt standarads)
- React Architecture ⇒ components (small,reusable UI part) → renders HTML based on State of the component and components are defined in JS.
- Key terms of react:
    - Component → small reusable part of UI
    - Props(properties) → to pass data from parent to child component
    - State → An object hold data specific to the component and helps to render UI based on user react.
    - Hooks → simplifies the state management
    - Modules → collection of the related components.
- React project is composed of multiple files → htmls,CSSs,JSs,Images,others,config.

### Video 5 - React project start

- react provides command line tools for this. and that will do heavy lifting for starter files.
- create new react app ⇒ npx create-react-app <app name>
- run react app ⇒ cd <appname> then npm start [1.buid the app, 2.start the server,3.watches the source fiels,4.reload if source files are updated automatic]
- change port ⇒ set port=5100 && npm start [default is 3000]
- project structure ⇒
    - node modules(all lib and dependencies)
    - public → browser tab icon(favicon),index.html(single html page),manifest.json(meta data of project),robots.txt(search engines what and not to crawl)
    - src [most work we do]→global things(app.js,app.css,app.tes.js),index.js,index.css,etc
    - gitignore → package.json ( lib and dependencies used);package-lock.json(version lock in of dependencies),readme file.

### Video 6 - first react app creation

- create the project folder and in visual studio terminal run the above commands to see the app running. and modify the App.js (important) to render changes in the web page.

### Video 7 - React - behind the screen

Perfect — let’s break this down into a **structured explanation** with clear headings and the **what, why, and how** of each step.

---

# ⚛️ React Behind the Scenes

## 1. **What is Happening?**

When you run a React application, the browser doesn’t magically know how to render React code. Instead, React uses a combination of **HTML, JavaScript, and the React DOM library** to inject your app into a web page.

At the core:

- **`index.html`** → The root HTML file with a `<div id="root"></div>`.
- **`index.js`** → The entry JavaScript file that tells React where to render your app.
- **`App.js`** → Your main React component that defines what shows up on the screen.

---

## 2. **Why is it Done This Way?**

- **Single Page Application (SPA)**: React apps usually run inside one HTML file (`index.html`). Instead of loading new pages, React dynamically updates the content inside the `root` div.
- **Separation of Concerns**:
    - HTML provides the container (`root`).
    - JavaScript (React) controls what goes inside.
- **Efficiency**: React only updates parts of the DOM that change, making apps faster.

---

## 3. **How Does It Work?**

### Step 1: `index.html`

```html
<body>
  <div id="root"></div>
</body>

```

- This is the placeholder where React will inject your app.
- Without this, React wouldn’t know where to render.

---

### Step 2: `index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

- **`document.getElementById('root')`** → Finds the `<div id="root">` in `index.html`.
- **`ReactDOM.createRoot()`** → Creates a React rendering context.
- **`root.render(<App />)`** → Replaces the empty div with your React component tree.

---

### Step 3: `App.js`

```jsx
function App() {
  return <p>We made our first React application!</p>;
}
export default App;

```

- Defines what the UI looks like.
- In this case, it simply returns a `<p>` tag with text.

---

### Step 4: Rendering

- React replaces the empty `<div id="root">` with the output of `<App />`.
- The browser now shows:
    
    ```
    We made our first React application!
    
    ```
    

---

## 4. **Extra Features**

- **React Logo & Hot Reload**:
    - Default starter code includes a spinning React logo and text like *“Edit src/App.js and save to reload.”*
    - Hot reload means changes in your code automatically refresh in the browser without restarting the server.

---

# 🔎 Critical Perspective

### ✅ Strengths

- **Clean separation**: HTML provides a root, React controls rendering.
- **Scalability**: Works for small apps and large enterprise apps.
- **Developer experience**: Hot reload and strict mode help catch errors early.

### ❌ Weaknesses

- **Abstracted complexity**: Beginners may not realize React is just replacing a div in HTML.
- **Single root limitation**: Everything is tied to one `root` div, which can feel restrictive compared to multi-page apps.
- **Strict Mode confusion**: New developers often don’t understand why components render twice in development (it’s intentional for debugging).

---

# 🎯 Final Takeaway

- **What**: React injects your app into `index.html` via the `root` div.
- **Why**: To build fast, dynamic single-page applications with efficient DOM updates.
- **How**: `index.js` finds the root div, creates a React rendering context, and renders `<App />`.

- **so the key thigs are**
    - **Index.html → single page with div of ‘root’**
    - **index.js → tells react where to render i.e. div with ‘root’ in the index.html.**
    - **App.js → main react component that tells what to show up in that place.**

### Video 8 - code understanding for react behind the scence

- redundant version of video 7 but explained in the code manner.
- The component or function in App.js uses the JSX that helps to write the HTML code in JS and render that later.

Got it 👍 — let’s break this transcript into a **structured explanation** with clear **headings (What, Why, How)**, examples, and critical notes so you fully understand the behind‑the‑scenes of React rendering.

---

# ⚛️ Behind the Scenes of a React Application

## 1. **What is Happening?**

React applications don’t directly render HTML files. Instead:

- **`index.html`** → Provides a single empty container (`<div id="root">`) inside the body.
- **`index.js`** → Finds that container and injects React components into it.
- **`App.js`** → Defines the actual UI (using JSX) that users see.

👉 Without JavaScript enabled, the page looks empty because React relies on injecting content dynamically.

---

## 2. **Why is it Done This Way?**

- **Single Page Application (SPA)**: React uses one HTML file (`index.html`) and dynamically updates the DOM.
- **Efficiency**: Instead of reloading entire pages, React only updates the parts of the DOM that change.
- **Flexibility**: Developers can build complex UIs by composing small components, all injected into the `root` div.
- **Separation of Concerns**: HTML provides the container, React provides the logic and rendering.

---

## 3. **How Does It Work?**

### Step 1: `index.html`

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>

```

- The `<div id="root">` is the placeholder.
- If you open this file directly in a browser, you’ll see an empty page.

---

### Step 2: `index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

- **`document.getElementById('root')`** → Finds the empty div in `index.html`.
- **`ReactDOM.createRoot()`** → Creates a React rendering context.
- **`root.render(<App />)`** → Injects the `App` component into the root div.

---

### Step 3: `App.js`

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>We made our first React application!</p>
      </header>
    </div>
  );
}
export default App;

```

- Defines a component using **JSX** (JavaScript + HTML-like syntax).
- JSX is compiled into JavaScript that creates DOM elements.
- The `<App />` component is what gets rendered inside the root div.

---

### Step 4: Rendering in Browser

- React replaces the empty `<div id="root">` with the output of `<App />`.
- The browser now shows:
    
    ```
    We made our first React application!
    
    ```
    
- If you inspect the page, you’ll see the injected DOM structure inside the root div.

---

# 🔎 Critical Perspective

### ✅ Strengths

- **Declarative rendering**: You describe what the UI should look like, React handles updates.
- **Component-based**: Easy to reuse and maintain code.
- **Hot reload**: Changes in code instantly refresh in the browser.

### ❌ Weaknesses

- **Empty HTML fallback**: Without JavaScript, users see nothing (bad for SEO unless you use SSR).
- **Complexity hidden**: Beginners may not realize JSX is compiled into `React.createElement()` calls.
- **Strict Mode confusion**: In development, components may render twice, which can confuse newcomers.

---

# 🎯 Final Takeaway

- **What**: React injects components into the `root` div of `index.html`.
- **Why**: To build fast, dynamic single-page applications with efficient DOM updates.
- **How**: `index.js` finds the root div, creates a rendering context, and renders `<App />` using JSX.

---

### Video 9 - create react project template

- <div> → used for group the realted and styling content
- scope → accessbility attribute that tells <th> linked to row or column.
- <table>,<tr>,<th>,<td>
- **In React, `<div>` is commonly used as a wrapper for components.**

Got it 👍 — let’s break this transcript into a **structured explanation** with clear headings, subheadings, examples, and critical notes so you understand exactly what’s happening when building the React table.

---

# 📋 Creating a To‑Do Table in React

## 1. **What is Happening?**

The goal is to replace the placeholder `<p>` tag (“We made our first React application”) with a proper **HTML table** inside the React component.

This table will serve as the **template** for displaying to‑do items.

---

## 2. **Why Do It This Way?**

- **Organized Data**: Tables are useful when you want to display structured information (like ID, description, and assigned person).
- **Scalability**: Once the table template is ready, you can later populate it dynamically from state or APIs.
- **Separation of Concerns**: Headers define the structure, while the body holds the actual data rows.

---

## 3. **How It Works Step by Step**

### Step 1: Remove Placeholder

- Delete the `<p>` tag and `className="App"` from the component.
- This clears space for the new table.

---

### Step 2: Add Wrapper Divs

```jsx
<div>
  <div>
    <div>Your To-Dos</div>
    <div>
      {/* Table goes here */}
    </div>
  </div>
</div>

```

- Multiple `<div>` elements are used to structure the layout.
- The innermost div contains the heading **“Your To-Dos”**.

---

### Step 3: Create Table Structure

```jsx
<table>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Description</th>
      <th scope="col">Assigned</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
      <td>Feed Dog</td>
      <td>Eric</td>
    </tr>
    <tr>
      <td scope="row">2</td>
      <td>Get a Haircut</td>
      <td>Eric</td>
    </tr>
  </tbody>
</table>

```

- **`<thead>`** → Defines the table headers (`#`, `Description`, `Assigned`).
- **`<tbody>`** → Holds the actual data rows.
- **Rows (`<tr>`)** → Each to‑do item is a row.
- **Cells (`<td>`)** → Contain the values (ID, task, person).

---

### Step 4: Save and Compile

- React automatically recompiles when you save.
- Browser shows:
    
    ```
    Your To-Dos
    #   Description     Assigned
    1   Feed Dog        Eric
    2   Get a Haircut   Eric
    
    ```
    

---

# 🔎 Critical Perspective

### ✅ Strengths

- **Clear structure**: Easy to read and extend later.
- **Reusable template**: Can later map over an array of tasks instead of hardcoding rows.
- **Semantic HTML**: Using `<thead>`, `<tbody>`, `<th>`, and `<td>` improves accessibility.

### ❌ Weaknesses

- **Hardcoded data**: Currently, tasks are static (“Feed Dog”, “Get a Haircut”).
- **Too many `<div>` wrappers**: Could be simplified; excessive nesting may confuse beginners.
- **Not dynamic yet**: Real React power comes when you use state/props to generate rows automatically.

---

# 🎯 Final Takeaway

- **What**: Built a static HTML table inside React to display to‑do items.
- **Why**: Provides a structured way to organize tasks before making them dynamic.
- **How**: Removed placeholder text, added divs, created a table with headers and rows, and rendered it inside the root component.

---

### Video 9- integrate react with bootstrap

Got it 👍 — let’s break this down into a **clear, simple, and comprehensive explanation** using **What, Why, How**.

---

# 🎨 Integrating React with Bootstrap

## 1. **What**

- **Bootstrap** is a popular CSS framework that provides ready‑made styles and components (tables, buttons, grids, cards, etc.).
- In React, you can use Bootstrap classes (`container`, `card`, `table`, `table-hover`) to make your app look professional without writing all the CSS yourself.
- The goal here: take a plain to‑do list table and make it visually appealing.

---

## 2. **Why**

- The current app shows tasks (like *Feed Dog* and *Get a Haircut*) but they look squished and unstyled.
- Bootstrap improves:
    - **Readability** → Proper spacing, alignment, and borders.
    - **User Experience** → Tables look clean and interactive (e.g., hover effects).
    - **Speed** → No need to design everything from scratch.
- In short: Bootstrap makes your React app look modern and polished quickly.

---

## 3. **How**

### Step 1: Get Bootstrap Files

- Visit the [Bootstrap website](https://getbootstrap.com/).
- Copy the CSS and JS links (CDN links) for the version you want.

### Step 2: Add Links to `index.html`

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
</script>

```

- These links load Bootstrap styles and scripts into your React project.

### Step 3: Apply Bootstrap Classes in Components

```jsx
<div className="container">
  <div className="card">
    <h2>Your To-Dos</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Assigned</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Feed Dog</td>
          <td>Eric</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Get a Haircut</td>
          <td>Eric</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```

- **`container`** → Adds spacing and centers content.
- **`card`** → Wraps content in a styled box.
- **`table table-hover`** → Creates a styled table with hover effects.

---

# ✅ Final Takeaway

- **What**: Add Bootstrap to React for styling.
- **Why**: To make the app look clean, modern, and user‑friendly.
- **How**: Import Bootstrap CSS/JS → Use Bootstrap classes (`container`, `card`, `table`) in your React components.

---

- **let me sumup ⇒ booststrap(prebuilt css framework)⇒ get links for bootstrap CSS and JS ⇒ add those links to index.html ⇒ use the bootstrap class name in appropriate areas in the App.js**

### Video 10 - Code for the bootstrap + React

- Links:
    - **Bootstrap CSS in** `<head>` → Styles load first, so the page looks correct immediately.
    - **Bootstrap JS at end of** `<body>` → Scripts run only after the DOM is ready, preventing errors and improving performance.
- use the bootstrap by classname ( not class) property in div [because of the JSX use classname]

### Video 11 - create first component

- JSX allows only one parent element in the component function to return.
- `export default <compoenetname>; used for allow this component to be imported in App.js`

Here’s a **clear summary of the key points** from that walkthrough on creating the first child component in a React To‑Do app:

---

# 📌 Key Takeaways

### 1. Problem

- The `App.js` file had a **very long DOM structure** (container → card → card body → table).
- To make the code cleaner and reusable, the table rows were extracted into a **separate component**.

---

### 2. Creating the Child Component

- A new folder **`components`** was created inside `src`.
- A new file **`TodoRowItem.js`** was added.
- Defined a function component:
    
    ```jsx
    function TodoRowItem() {
      return (
        <tr>
          <td scope="row">1</td>
          <td>Feed Dog</td>
          <td>Eric</td>
        </tr>
      );
    }
    export default TodoRowItem;
    
    ```
    
- **Important rule**: React components must return **only one parent element**. If multiple elements are needed, wrap them in a `<div>` or another container.

---

### 3. Using the Component in `App.js`

- Imported the new component:
    
    ```jsx
    import TodoRowItem from './components/TodoRowItem';
    
    ```
    
- Replaced the hardcoded table row (`<tr>...`) with `<TodoRowItem />`.

---

### 4. Rendering & Testing

- After saving and refreshing, the UI looked the same because the component returned the same data.
- Changing the text inside `TodoRowItem` (e.g., “Feed Dogg” with two Gs) confirmed that the new component was being rendered correctly.

---

### 5. Outcome

- ✅ Successfully created the **first child component** (`TodoRowItem`).
- ✅ Demonstrated how React components can be **modular, reusable, and dynamic**.
- ✅ Set the stage for building more complex components in the To‑Do app.

---

# 🎯 Final Summary

This step showed how to **refactor a long DOM into smaller components**. By moving table rows into a `TodoRowItem` component, the app becomes cleaner, easier to maintain, and ready for dynamic data later.

---

---

### Video 12- reuseable child component

Here’s a **structured summary** of that walkthrough, with clear headings and the **What, Why, How, and Limitations**:

---

# 📌 Summary: First React Child Component (TodoRowItem)

## 1. **What**

- A new child component called **`TodoRowItem`** was created.
- It returns a **table row (`<tr>`)** containing:
    - A row number
    - A description (e.g., “Feed Dog”)
    - An assignee (e.g., “Eric”)
- This component was then imported and used inside `App.js` to replace hardcoded table rows.

---

## 2. **Why**

- **Code organization**: `App.js` was becoming too long with all the table markup.
- **Reusability**: By extracting table rows into a component, you can reuse `<TodoRowItem />` multiple times.
- **Maintainability**: Easier to manage and update rows separately without touching the main app structure.

---

## 3. **How**

- **Step 1**: Create `TodoRowItem.js` inside a `components` folder.
- **Step 2**: Define the component:
    
    ```jsx
    function TodoRowItem() {
      const rowNumber = 1;
      const rowDescription = "Feed Dog";
      const rowAssigned = "Eric";
    
      return (
        <tr>
          <th scope="row">{rowNumber}</th>
          <td>{rowDescription}</td>
          <td>{rowAssigned}</td>
        </tr>
      );
    }
    export default TodoRowItem;
    
    ```
    
- **Step 3**: Import and use in `App.js`:
    
    ```jsx
    import TodoRowItem from './components/TodoRowItem';
    
    <tbody>
      <TodoRowItem />
      <TodoRowItem />
    </tbody>
    
    ```
    
- **Step 4**: On saving, the browser shows multiple rows rendered from the same component.

---

## 4. **Limitations**

- **Static data**: The component currently hardcodes values (`1`, “Feed Dog”, “Eric”).
- **No dynamic props**: Each `<TodoRowItem />` renders the same data, so duplication occurs.
- **Scalability issue**: For real applications, you need to pass **props** (e.g., `rowNumber`, `description`, `assigned`) to make each row unique.
- **User experience**: Without dynamic data, the table doesn’t reflect actual tasks or changes.

---

# 🎯 Final Takeaway

- **What**: Created a reusable child component (`TodoRowItem`) for table rows.
- **Why**: To simplify `App.js` and enable reusability.
- **How**: Defined a function component, returned a table row, imported it into `App.js`.
- **Limitations**: Still static — needs props to become dynamic and useful in real-world apps.

---

- **`<TodoRowItem />` is a self‑closing tag.**
- **sum up ⇒ parent component is App.js and Child component is TodoRowItem.js**
- **`export default TodoRowItem;`  ⇒ to make this component available to other componenet e.g. App.js to import.**
- **A component file usually has one main function (the component).**
- **You can have other helper functions inside, but only one is exported as the default component.**
- **For multiple components, either use named exports or separate files.**

### Video 13- React dynamic data {prop}

Got it 👍 — let’s simplify this whole explanation into **What, Why, How, and Limitations** so it’s crystal clear.

---

# 📌 Using Props in React (Todo Example)

- to pass data from parent component to child component use the props(properties) ⇒ reusabilty,dynamic.

## 1. **What**

- You created a child component (`TodoRowItem`) that renders a table row.
- Instead of hardcoding values (like “Feed Dog, Eric”), you now want to **pass dynamic data** from the parent (`App.js`) into the child.
- This is done using **props** (short for *properties*).

---

## 2. **Why**

- **Reusability**: One component can be reused for multiple rows.
- **Dynamic data**: Each row shows different information (task, user, row number).
- **Parent → Child communication**: Props let the parent send data down to the child. Without props, the child would always render the same static values.

---

## 3. **How**

1. **Create an array of todos in `App.js`:**
    
    ```jsx
    const todos = [
      { rowNumber: 1, rowDescription: "Feed Puppy", rowAssigned: "User1" },
      { rowNumber: 2, rowDescription: "Water Plants", rowAssigned: "User2" },
      { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "User1" }
    ];
    
    ```
    
2. **Pass props when calling the child component:**
    
    ```jsx
    <TodoRowItem
      rowNumber={todos[0].rowNumber}
      rowDescription={todos[0].rowDescription}
      rowAssigned={todos[0].rowAssigned}
    />
    
    ```
    
3. **Use props inside the child (`TodoRowItem.js`):**
    
    ```jsx
    function TodoRowItem(props) {
      return (
        <tr>
          <th scope="row">{props.rowNumber}</th>
          <td>{props.rowDescription}</td>
          <td>{props.rowAssigned}</td>
        </tr>
      );
    }
    export default TodoRowItem;
    
    ```
    
4. **Repeat for each todo (index 0, 1, 2)** → now the table shows all three tasks dynamically.

---

## 4. **Limitations**

- **Props are read‑only**: Child components cannot change the data they receive.
- **Manual repetition**: In this example, you manually wrote `<TodoRowItem />` three times. A better way is to use `.map()` to loop through the array.
- **One‑way data flow**: Data only flows **down** from parent to child. If the child needs to update data, you must handle it in the parent (using state).
- **Static array**: Right now, todos are hardcoded. For a real app, you’d want to manage them with React state or fetch them from a backend.

---

# 🎯 Final Takeaway

- **What**: Props let you pass dynamic data from parent (`App.js`) to child (`TodoRowItem`).
- **Why**: Makes components reusable and data‑driven.
- **How**: Define an array → pass values as props → use `props` inside the child.
- **Limitations**: Props are read‑only, data flow is one‑way, and manual repetition should be replaced with loops for scalability.

---

1.