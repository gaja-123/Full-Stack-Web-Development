# 4 dec 2025 Full Stack Web Course notes

Date: December 4, 2025
Note type: Notes

## Key Takeways

1. Props → to pass data from parent to child component. App.js → todoRowItem.js
2. Hierarchy for the parent child component → created table component ⇒ **App.js → todoTabble.js →todoRowItem.js**
3. Render the React list dynamically ⇒ use the .map function with arrow function and also the component that need to rendered for multiple times based on the list or array. i.e array data used for render the table row multiple times. **Map → apply the function to all elements of a array then returns the elements for rendering.**
4. Event listners are function that listens for specific action like click,scroll,etc on specific element in the web page and then run code in response. For interacive and responsive to user input. **Event → functionality to handle that.**
5. Dynamic redenering the the UI using the State of a component esp. the usestate. And usestate returns two things a. current state b. function to update it. **State in React is an object that stores information about a component’s current situation, and when it changes, React automatically re-renders the component to reflect the new data.**
6. Created a component for a form to get the **data input from user**.
7. First checked to print the user input data via console using a arrow function [ used event listener → onChange]. second, used the usestate hook to render the UI of the component based on change in the data using the state of that component. Third, instead of seperate function for setting the data change using useState hook, replaced with arrow function.
8. passing the function in prop from parent to child component. Note here the pointer to the function is passed. and all parent varibales and functions if called in that function is still works in the child component as the way defined in that function. 
9. React key → is best pracise to use esp. in case of render the list items using the .map or similar function.
10. Deletetodo function created in App.js → then it is passed as prop to the tototable.js → then it is passed as props to the todorowitem. In the element <tr> a click event listner is added, if any click then executes the deletetodo function. That just applies filter to the array and then using the state management assigns the settodos with the filtered one.
11. Conditional rendering → use to render a component in UI based on meting certain condition. For this uses → boolean variable, {<inside this html code or javascript code>},terinary operator,.

## Action

---

- [x]  React crash course
- [ ]  TypeScript crash course
- [ ]  Bootstrap (optional)
- [ ]  Integrate React and TypeScript
- [ ]  Full stack overview
- [ ]  Library project
- [ ]  Springboot ( additional not in udemey course)

## Notes

---

### Video  16 - Using props

- My notes:
    - Props → properties , it is used for passing data from the parent component to the child component. It is key-value pair.
    - Standard way is to pass only one prop with multiple key-value pair in it from parent to the child component.
    - Parent - child components : App.js → TodoRowItem.js (pass b/w with prop)
    - Note that prop is an object ⇒ use key-value pair.(important)
- GPT Note:
    
    Got it — let’s redo the summary in a sharper, cleaner way, with **What, Why, How, Limitations** and a critical lens applied:
    
    ---
    
    ### ✅ What
    
    - The lesson explains how to **pass dynamic data into React components using props**.
    - Instead of hardcoding table rows, data is stored in an **array of objects (`todos`)** and passed into a reusable child component (`TodoRowItem`).
    - Each row displays its own specific data (row number, description, assigned user).
    
    ---
    
    ### 🎯 Why
    
    - **Efficiency**: Avoids duplicating code for each row.
    - **Reusability**: Components can be reused with different data.
    - **Scalability**: Adding new rows only requires updating the array, not rewriting JSX.
    - **Best practice**: Parent components manage data, child components render it.
    
    ---
    
    ### ⚙️ How
    
    1. **Define an array of objects** in `App.js`:
        
        ```jsx
        const todos = [
          { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User1" },
          { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User2" },
          { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User1" }
        ];
        
        ```
        
    2. **Pass props to child component**:
        
        ```jsx
        <TodoRowItem
          rowNumber={todos[0].rowNumber}
          rowDescription={todos[0].rowDescription}
          rowAssigned={todos[0].rowAssigned}
        />
        
        ```
        
    3. **Use props inside child component**:
        
        ```jsx
        function TodoRowItem(props) {
          return (
            <tr>
              <td>{props.rowNumber}</td>
              <td>{props.rowDescription}</td>
              <td>{props.rowAssigned}</td>
            </tr>
          );
        }
        
        ```
        
    4. **Render multiple rows** by repeating the component with different indices (0, 1, 2).
    
    ---
    
    ### ⚠️ Limitations & Critical View
    
    - **Manual indexing is clumsy**: Writing `<TodoRowItem />` three times with `todos[0]`, `todos[1]`, `todos[2]` is not scalable.
    - **Better approach**: Use `.map()` to dynamically render all rows:
        
        ```jsx
        {todos.map((todo, index) => (
          <TodoRowItem
            key={index}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
          />
        ))}
        
        ```
        
    - **Static data**: The array is hardcoded. Real-world apps should use `useState` or fetch data from APIs.
    - **Props drilling risk**: Passing props works here, but in larger apps it becomes messy. Context API or state management libraries (Redux, Zustand) are better for complex cases.
    - **Naming inconsistency**: The lesson mixes `row`, `rho`, and `ro`. Inconsistent naming confuses beginners — clear naming conventions are essential.
    - **Scalability concern**: For hundreds of rows, manual repetition is impractical. `.map()` is the idiomatic React solution.
    
    ---
    
    👉 **Critical takeaway**: The lesson correctly introduces props, but it teaches a beginner-friendly yet inefficient method (manual indexing). The real production-ready approach is to use `.map()` for rendering lists, combined with state management for dynamic updates.
    

### Video 17 - Hierarchy of parent - child components

- My Notes:
    - Hierarachy of parent-child components: App.js→ TodoTable.js → TodoRowItem.js
    - So, created second component → that is for the enitre table⇒ so table as a component can be reusable.
- GPT notes:
    
    Here’s a structured summary of that lesson, framed with **What, Why, How, Limitations** and a critical lens:
    
    ---
    
    ### ✅ What
    
    - The lesson introduces a new reusable component: **`TodoTable`**.
    - Instead of keeping the entire table markup inside `App.js`, the table is moved into its own file (`TodoTable.js`).
    - `TodoTable` acts as a **parent component** that receives `todos` as props and renders multiple `TodoRowItem` child components.
    
    ---
    
    ### 🎯 Why
    
    - **Organization**: Separating the table into its own file makes the codebase cleaner and easier to maintain.
    - **Reusability**: The table can be reused in other parts of the app or extended later.
    - **Hierarchy clarity**: Establishes a parent-child relationship (`App.js → TodoTable → TodoRowItem`), which mirrors React’s component-driven design.
    - **Scalability**: Easier to expand functionality (sorting, filtering, styling) when the table is modular.
    
    ---
    
    ### ⚙️ How
    
    1. **Create `TodoTable.js`**:
        
        ```jsx
        function TodoTable(props) {
          return (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Assigned</th>
                </tr>
              </thead>
              <tbody>
                {/* TodoRowItem components will go here */}
              </tbody>
            </table>
          );
        }
        export default TodoTable;
        
        ```
        
    2. **Update `App.js`**:
        - Remove the inline `<table>` code.
        - Import and call `<TodoTable todos={todos} />`.
        - Pass the `todos` array as a prop.
    3. **Inside `TodoTable`**:
        - Import `TodoRowItem`.
        - Render multiple `TodoRowItem` components, each receiving one object from `props.todos`.
        - Example (current approach):
            
            ```jsx
            <TodoRowItem {...props.todos[0]} />
            <TodoRowItem {...props.todos[1]} />
            <TodoRowItem {...props.todos[2]} />
            
            ```
            
    
    ---
    
    ### ⚠️ Limitations & Critical View
    
    - **Manual repetition**: The lesson shows calling `TodoRowItem` three times with explicit indices (0, 1, 2). This is inefficient and not scalable.
    - **Best practice**: Use `.map()` to dynamically render rows:
        
        ```jsx
        {props.todos.map((todo, index) => (
          <TodoRowItem
            key={index}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
          />
        ))}
        
        ```
        
    - **Static data**: The `todos` array is still hardcoded. Real-world apps should use `useState` or fetch data from APIs.
    - **Props naming inconsistency**: The lesson mixes `row`, `ro`, and `rho`. Consistent naming conventions are crucial for readability.
    - **Limited abstraction**: While the table is reusable, the rendering logic is still tightly coupled to fixed indices. Without `.map()`, adding/removing todos requires manual edits.
    - **Scalability concern**: For larger datasets, this approach becomes impractical. Dynamic rendering and state management are necessary.
    
    ---
    
    👉 **Critical takeaway**: The lesson correctly demonstrates component hierarchy and props passing, but it relies on **manual indexing** instead of the idiomatic React pattern (`.map()`). For production-ready code, `TodoTable` should dynamically render rows from `props.todos`, making the component truly reusable and scalable.
    

### Video 18- Render the React list dynamically

- My notes:
    - use the .map function to dynamically the component for each item in a list or array.
    - It creates a **new array** by applying a function to each element of the original array.
    - In React, it’s commonly used to **render lists of components dynamically**.
    - syntax:
        
        ```
        array.map((element, index, array) => {
          // return new value for each element
        });
        
        ```
        
- GPT notes:
    
    Here’s a clear breakdown of that lesson using **What, Why, How, Limitations** — with a critical lens applied:
    
    ---
    
    ### ✅ What
    
    - The lesson explains how to fix a bug in the `TodoTable` where only three rows were being rendered, even if more items existed in the `todos` array.
    - The solution is to use **JavaScript’s `.map()` function** to dynamically render a `TodoRowItem` for each element in the array.
    - This makes the table responsive to the actual length of the data instead of being hardcoded.
    
    ---
    
    ### 🎯 Why
    
    - **Scalability**: Hardcoding three rows works only for small, fixed datasets. As soon as you add a fourth item, it won’t show.
    - **Reusability**: `.map()` allows the component to adapt to any number of items without rewriting JSX.
    - **React best practice**: Rendering lists with `.map()` is the idiomatic way to handle dynamic data in React.
    - **Maintainability**: Easier to update and extend the app without introducing bugs.
    
    ---
    
    ### ⚙️ How
    
    1. **Before (hardcoded rows)**:
        
        ```jsx
        <TodoRowItem rowNumber={props.todos[0].rowNumber} ... />
        <TodoRowItem rowNumber={props.todos[1].rowNumber} ... />
        <TodoRowItem rowNumber={props.todos[2].rowNumber} ... />
        
        ```
        
        → Only three rows, regardless of array length.
        
    2. **After (dynamic rendering with `.map()`)**:
        
        ```jsx
        {props.todos.map((todo, index) => (
          <TodoRowItem
            key={index}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
          />
        ))}
        
        ```
        
        → Automatically renders as many rows as there are items in `props.todos`.
        
    3. **Result**: Adding a fourth item (`{ rowNumber: 4, rowDescription: "Charge phone battery", rowAssigned: "User1" }`) now shows correctly in the table.
    
    ---
    
    ### ⚠️ Limitations & Critical View
    
    - **Key usage**: The example uses `index` as the React `key`. This works but is not ideal for dynamic lists (e.g., if items are reordered). A unique identifier (like `rowNumber`) should be used instead.
    - **Static data**: The array is still hardcoded. For a real app, you’d manage todos with `useState` and allow adding/removing items dynamically.
    - **Naming consistency**: The lesson mixes terms like `row`, `ro`, `rho` — inconsistent naming can confuse beginners. Clear naming conventions are essential.
    - **Over-simplification**: While `.map()` is indeed the right approach, the lecture doesn’t mention edge cases (empty arrays, null props, missing fields). Robust code should handle these gracefully.
    - **Scalability concern**: For very large lists, rendering all items at once can hurt performance. Techniques like virtualization (`react-window`, `react-virtualized`) are better for production-scale apps.
    
    ---
    
    👉 **Critical takeaway**: The move from hardcoded rows to `.map()` is a fundamental step toward scalable React development. However, the example is beginner-friendly and skips best practices like unique keys, state management, and performance considerations. For production-ready apps, you’d need to go beyond `.map()` and think about data flow, error handling, and optimization.
    
    ### Video 19 - React event listerner esp. onclick event listner
    
- My notes:
    - Event listner → for dynamic update e.g array based on the event e.g. click buttion.
    - Any element can be associated with an event listner.
    - Pointer v/s function mention the onclick listner ⇒ if function(with paranthesis) then render the function return with the button render itself. if pointer ( without parathesis) then render the function return with click or event on the button.
    - Anonymous function v/s not.
        
        **Anonymous function**: A function **without a name**.
        
        `// Anonymous function assigned to a variable
        const greet = function() {
          console.log("Hello!");
        };`
        
        **Named function (not anonymous)**: A function that has an explicit name.
        
        `function greet() {
          console.log("Hello!");
        }`
        
    - Arrow function → shorter way to write the function.
        
        `// Traditional function
        function add(a, b) {
          return a + b;
        }
        
        // Arrow function
        const add = (a, b) => a + b;`
        
- GPT notes:

Here’s a structured breakdown of that lesson on **adding event listeners (onClick) in React**, framed with **What, Why, How, Limitations** — plus a critical review:

---

### ✅ What

- The lesson introduces **event listeners in React**, specifically the `onClick` event.
- A button (`Add New To-Do`) is created, styled with Bootstrap, and given an `onClick` handler.
- The handler (`addTodo`) initially logs a message, then evolves to push a new object into the `todos` array.

---

### 🎯 Why

- **Interactivity**: Without event listeners, the app is static. `onClick` allows user actions to trigger code.
- **Dynamic functionality**: Clicking the button adds new items to the list, making the app responsive to user input.
- **Foundation for state management**: Event listeners are the entry point to handling user-driven changes in React apps.
- **Best practice**: React encourages declarative event handling via props like `onClick`, rather than direct DOM manipulation.

---

### ⚙️ How

1. **Create a button**:
    
    ```jsx
    <button className="btn btn-primary" onClick={addTodo}>
      Add New To-Do
    </button>
    
    ```
    
2. **Define the handler function**:
    
    ```jsx
    const addTodo = () => {
      console.log("Add New To-Do button clicked");
    };
    
    ```
    
    - Important: **no parentheses** in `onClick={addTodo}`.
    - Using parentheses (`addTodo()`) would call the function immediately during render, not on click.
3. **Add functionality**:
    
    ```jsx
    const addTodo = () => {
      if (todos.length > 0) {
        const newTodo = {
          rowNumber: todos.length + 1,
          rowDescription: "New To-Do",
          rowAssigned: "User3"
        };
        todos.push(newTodo);
        console.log(todos);
      }
    };
    
    ```
    
    - Each click appends a new object to the `todos` array.
    - Console shows the updated list.
4. **Result**: Clicking the button repeatedly adds more items to the array, though they don’t yet display in the UI.

---

### ⚠️ Limitations & Critical View

- **No state management**: The code mutates the `todos` array directly (`push`). In React, this won’t trigger a re-render. Proper approach: use `useState` and `setTodos([...todos, newTodo])`.
- **Console-only feedback**: The new items appear in the console but not in the UI. Without state, the DOM doesn’t update.
- **Hardcoded values**: Every new todo has the same description (“New To-Do”) and assigned user (“User3”). Real apps should allow user input.
- **Key warnings**: React warns about missing `key` props when rendering lists. This should be addressed by using a unique identifier (`rowNumber` or `id`).
- **Code organization**: Defining functions inline inside `onClick` is possible but messy. Keeping handlers separate improves readability.
- **Scalability concern**: Directly pushing to arrays and logging is fine for demos, but production apps need immutability, controlled inputs, and proper state updates.

---

👉 **Critical takeaway**: The lesson correctly introduces `onClick` and the idea of event-driven updates, but it demonstrates a **non-idiomatic React pattern** (mutating arrays directly). The real production-ready approach is to use **React state (`useState`)** so that the UI re-renders automatically when data changes.

### Video 20 - Dynamic render UI based on change in data using the state management

- My notes:
    - Use the usestate hook for rendering the UI dynamically based on the change in the state.
    - Usestate returns 1. current state 2. function to update that.
    - So it is used to render the component UI based on the change in it’s data.
    - State in React is an object that stores information about a component’s current situation, and when it changes, React automatically re-renders the component to reflect the new data.
    - use … to destructure an array in JS
- GPT Notes:

Here’s a structured summary of that lesson on **React state with `useState`**, framed with **What, Why, How, Limitations** — plus a critical review:

---

### ✅ What

- The lesson introduces **React state management** using the `useState` hook.
- Instead of treating `todos` as a plain variable, it’s wrapped in `useState` so React can track changes and re-render the UI automatically.
- `useState` returns two values:
    - The current state (`todos`).
    - A function to update it (`setTodos`).

---

### 🎯 Why

- **Dynamic re-rendering**: Without state, changes to data (like adding a new todo) won’t update the UI.
- **Component-driven design**: Each component can manage its own state, making apps modular and predictable.
- **React philosophy**: State is central to React’s declarative rendering — the UI reflects the current state.
- **User experience**: Ensures that when users interact (e.g., clicking “Add To-Do”), they immediately see updated results.

---

### ⚙️ How

1. **Import `useState`**:
    
    ```jsx
    import React, { useState } from "react";
    
    ```
    
2. **Initialize state**:
    
    ```jsx
    const [todos, setTodos] = useState([
      { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User1" },
      { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User2" },
      { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User1" },
      { rowNumber: 4, rowDescription: "Charge phone battery", rowAssigned: "User1" }
    ]);
    
    ```
    
3. **Update state with `setTodos`**:
    
    ```jsx
    const addTodo = () => {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "New To-Do",
        rowAssigned: "User3"
      };
      setTodos([...todos, newTodo]); // spread existing todos + new one
    };
    
    ```
    
4. **Render updated list**:
    - Because `setTodos` updates state, React re-renders the component.
    - The new todo appears immediately in the table.

---

### ⚠️ Limitations & Critical View

- **Direct mutation avoided**: The lesson correctly moves from `todos.push(newTodo)` (bad practice) to `setTodos([...todos, newTodo])`. Mutating state directly won’t trigger re-renders.
- **Hardcoded values**: Every new todo has the same description (“New To-Do”) and assigned user (“User3”). Real apps should allow user input.
- **Key warnings**: React requires unique `key` props when rendering lists. Using `index` works but isn’t ideal; `rowNumber` or a generated `id` is better.
- **Scalability**: For larger apps, managing state across multiple components requires more advanced tools (Context API, Redux, Zustand).
- **Naming consistency**: The lesson mixes “to dos” vs “todos” — consistent naming improves readability.
- **Over-simplification**: The example shows only adding items. Real-world apps need editing, deleting, and persisting data.

---

👉 **Critical takeaway**: The lesson successfully introduces `useState` and shows why direct mutation doesn’t work in React. However, it oversimplifies by hardcoding new todos and ignoring best practices like unique keys and user-driven input. For production-ready apps, state management should be more robust and scalable.

### Video 21- Creating react form inputs

- My notes:
    - Adding a form for dynamic input form the user.
    - Added the form as a component but no functionality is attached to it as of now.
    - `type="button"` → Prevents default form submission (does not reload the page).
- GPT notes:
    
    Here’s a concise structured summary of that lesson:
    
    ---
    
    ### ✅ What
    
    - A new component called **`NewTodoForm.js`** was created to allow users to add todos via a form instead of hardcoding or auto-generating them.
    - The form includes fields for **Assigned user** (text input), **Description** (textarea), and a **Submit button**.
    
    ---
    
    ### 🎯 Why
    
    - To make the application **more dynamic and user-driven**.
    - Instead of adding static todos, the app should let users input their own tasks.
    - Separating the form into its own component keeps the codebase **organized and modular**.
    
    ---
    
    ### ⚙️ How
    
    1. **Create new file**: `NewTodoForm.js` inside the `components` folder.
    2. **Define component**:
        
        ```jsx
        function NewTodoForm() {
          return (
            <div className="mt-5">
              <form>
                <div className="mb-3">
                  <label className="form-label">Assigned</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows="3" required></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3">
                  Add To-Do
                </button>
              </form>
            </div>
          );
        }
        export default NewTodoForm;
        
        ```
        
    3. **Import into `App.js`**:
        
        ```jsx
        import NewTodoForm from './components/NewTodoForm';
        
        ```
        
        Then render `<NewTodoForm />` below the existing todos table.
        
    4. **Result**: The form appears in the browser with input fields and a button, but clicking the button currently does nothing.
    
    ---
    
    ### ⚠️ Limitations & Critical View
    
    - **No functionality yet**: The form UI exists, but the button doesn’t add todos because no event handler is connected.
    - **Hardcoded structure**: Inputs are static; they don’t update state or interact with the todo list.
    - **Next step needed**: Connect the form to `useState` and `setTodos` so user input actually updates the todo list.
    - **Accessibility**: Labels and inputs are present, but form submission should ideally use `<form onSubmit>` instead of a plain button for better semantics.
    - **Scalability**: As the app grows, validation, error handling, and controlled components will be necessary.
    
    ---
    
    👉 **Critical takeaway**: This step sets up the **UI for user-driven todo creation**, but it’s incomplete. The next step is wiring the form inputs to React state and handling submission so new todos actually appear in the table.
    

### Video 22 - Adding user input to the react form

- My notes:
    - First created function for showing the value user enters dynamically via console.log
    - Second using the ‘useState’ hook to render coponent UI based on dynamic user input value. but incomplet wrt functionality.
    - instead of seperate function used the arrow function with anonymous function type.
- GPT notes:
    
    Here’s a structured summary of that lecture on **capturing user input and managing state in the form**, framed with **What, Why, How, Limitations** — plus a critical review:
    
    ---
    
    ### ✅ What
    
    - The lesson shows how to make the **NewTodoForm** component dynamic by capturing user input.
    - Introduces **event listeners (`onChange`)** for form fields.
    - Uses **React state (`useState`)** to store and update the values typed into the form (`description` and `assigned`).
    - Demonstrates both approaches: defining separate handler functions vs. inline arrow functions inside `onChange`.
    
    ---
    
    ### 🎯 Why
    
    - **Interactivity**: Without capturing input, the form is static. Event listeners allow the app to respond to user typing.
    - **State-driven UI**: Storing input in state ensures React re-renders and keeps the UI in sync with what the user types.
    - **Controlled components**: By binding `value={stateVariable}` to inputs, React controls the displayed value, making the form predictable and easier to manage.
    - **Foundation for submission**: Capturing input into state is the prerequisite for later adding todos to the list.
    
    ---
    
    ### ⚙️ How
    
    1. **Add event listeners**:
        
        ```jsx
        <textarea
          className="form-control"
          rows="3"
          required
          onChange={descriptionChange}
        />
        
        ```
        
        - `onChange` fires whenever the user types.
        - The event object contains `event.target.value`, which is the current input.
    2. **Define handler functions**:
        
        ```jsx
        const descriptionChange = (event) => {
          console.log("Description:", event.target.value);
          setDescription(event.target.value);
        };
        
        const assignedChange = (event) => {
          console.log("Assigned:", event.target.value);
          setAssigned(event.target.value);
        };
        
        ```
        
    3. **Initialize state**:
        
        ```jsx
        const [description, setDescription] = useState("");
        const [assigned, setAssigned] = useState("");
        
        ```
        
    4. **Bind state to inputs**:
        
        ```jsx
        <input
          type="text"
          className="form-control"
          required
          value={assigned}
          onChange={(e) => setAssigned(e.target.value)}
        />
        <textarea
          className="form-control"
          rows="3"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        ```
        
    5. **Result**: As the user types, state updates, and the input fields always reflect the current state.
    
    ---
    
    ### ⚠️ Limitations & Critical View
    
    - **No submission yet**: Inputs are captured, but clicking “Add To-Do” doesn’t add anything to the list. Submission logic is still missing.
    - **Console logging removed**: Helpful for debugging, but in production you’d rely on state rather than logs.
    - **Code duplication**: Two separate handlers (`descriptionChange`, `assignedChange`) add verbosity. Inline arrow functions simplify but can reduce readability if logic grows.
    - **Accessibility**: Labels are present, but should use `htmlFor` tied to input `id`s for proper screen reader support.
    - **Scalability**: For larger forms, managing multiple `useState` calls can become cumbersome. Using a single state object or form libraries (Formik, React Hook Form) is more efficient.
    - **Validation**: Only `required` is used. Real apps need stronger validation (length, format, etc.).
    
    ---
    
    👉 **Critical takeaway**: This step successfully transforms the form into a **controlled component** by capturing input and storing it in state. However, it’s incomplete — the captured values aren’t yet submitted to the todo list. The next step is wiring the form’s submit button to `setTodos` so new tasks actually appear in the table.
    

### Video 23 - Passing the function in props instead of usual data

- My notes:
    - Useful to pass the function that is defined in the parent component to the child component. Pointer to that function is passed.
    - Note that while passing the other variables and functions defined in the parent component but called in the passing function as still accessible by the passing function as defined way.
    - **if a varible is associated with a state via usestate hook then whenever that varibale is updated then all the parts of the component that use that varibale is rerendered automatically by the React.**
    - This function is called by the event listner i.e. submit form button.
- GPT notes:
    
    Here’s a clear structured summary of that lecture on **submitting the form and updating state via props**:
    
    ---
    
    ### ✅ What
    
    - Added a **submit function (`submitTodo`)** to the `NewTodoForm` component.
    - Ensured that both **description** and **assigned** fields are not empty before submission.
    - Passed the parent’s **`addTodo` function** down to the form as a **prop**, so the child can trigger updates in the parent’s state.
    - After submission, the form inputs are reset to empty strings.
    
    ---
    
    ### 🎯 Why
    
    - To make the form **functional**, not just UI.
    - To enforce **validation** (no empty todos).
    - To demonstrate **parent-child communication** in React: child calls a function passed from parent, which updates state.
    - To ensure the todo list **re-renders automatically** when new items are added.
    
    ---
    
    ### ⚙️ How
    
    1. **Define `submitTodo` in `NewTodoForm`**:
        
        ```jsx
        const submitTodo = () => {
          if (description !== "" && assigned !== "") {
            props.addTodo(description, assigned);
            setDescription("");
            setAssigned("");
          }
        };
        
        ```
        
    2. **Pass `addTodo` from parent (`App.js`)**:
        
        ```jsx
        <NewTodoForm addTodo={addTodo} />
        
        ```
        
    3. **Update parent’s `addTodo`**:
        
        ```jsx
        const addTodo = (description, assigned) => {
          const newTodo = {
            rowNumber: todos.length + 1,
            rowDescription: description,
            rowAssigned: assigned
          };
          setTodos([...todos, newTodo]);
        };
        
        ```
        
    4. **Attach `submitTodo` to button**:
        
        ```jsx
        <button onClick={submitTodo}>Add To-Do</button>
        
        ```
        
    
    ---
    
    ### ⚠️ Limitations & Critical Notes
    
    - **Validation is minimal**: Only checks for empty strings. No feedback if validation fails.
    - **UX issue fixed**: Inputs now clear after submission, but without error messages users may be confused if nothing happens.
    - **Coupling**: Child depends directly on parent’s `addTodo`. For larger apps, state management tools (Context API, Redux) are cleaner.
    - **Scalability**: Adding more fields would require repeating the same `useState` + reset logic.
    - **Accessibility**: Labels should use `htmlFor` tied to input `id`s for better screen reader support.
    
    ---
    

### Video 24 - React keys

- My notes:
    - Whenever you render the list using the map function or similar, you need to provide the unique identifer ‘key’
    - This avoids the warning of “Each child in a list should have a unique key prop.” when render the list of elements using .map or similar function.
    - so added that in .map function → then also modified the code in addTodo in App.js for accomidaitng the dynamic value for rownumber with edge cases like intital conditions.
- GPT notes:
    
    Here’s a clear structured summary of that lecture on **unique keys in React lists and ensuring identifiers remain consistent**:
    
    ---
    
    ### ✅ What
    
    - React showed a warning: **“Each child in a list should have a unique key prop.”**
    - This happens when rendering lists with `.map()` but not providing a unique identifier.
    - The solution is to add a **`key` prop** to each rendered item, using something unique like `rowNumber`.
    
    ---
    
    ### 🎯 Why
    
    - Keys help React efficiently update and re-render lists.
    - They ensure each list item is treated as independent, preventing bugs when items are added, removed, or reordered.
    - Without keys, React can confuse items and cause unexpected UI behavior.
    
    ---
    
    ### ⚙️ How
    
    1. **Add a key to each row**:
        
        ```jsx
        <TodoRowItem
          key={todo.rowNumber}
          rowNumber={todo.rowNumber}
          rowDescription={todo.rowDescription}
          rowAssigned={todo.rowAssigned}
        />
        
        ```
        
        → Removes the warning.
        
    2. **Improve row number logic**:
        - Initially, new todos used `todos.length + 1` for `rowNumber`.
        - Problem: If items are deleted, this can create duplicate numbers.
        - Fix:
            
            ```jsx
            let rowNumber = 0;
            if (todos.length > 0) {
              rowNumber = todos[todos.length - 1].rowNumber + 1;
            } else {
              rowNumber = 1;
            }
            
            ```
            
        - This ensures each new todo always gets a unique identifier, even after deletions.
    3. **Result**:
        - Warning disappears.
        - Todos render correctly with unique keys.
        - Adding new todos works as before, but identifiers remain consistent.
    
    ---
    
    ### ⚠️ Limitations & Critical Notes
    
    - **Row numbers as IDs**: Works here, but in real-world apps, using database IDs or UUIDs is safer.
    - **Keys must be stable**: Avoid using array indexes as keys, since they can break when items are reordered or deleted.
    - **Scalability**: For larger apps, unique identifiers should come from persistent storage, not just incremental logic.
    
    ---
    
    👉 **Critical takeaway**: Adding a `key` prop fixes React’s warning and ensures list items are uniquely tracked. Updating the row number logic guarantees uniqueness even when items are deleted, making the todo list more robust.
    
    ### Video 25 - Delete item using react functionality
    
    - My Notes:
        - .filter() creates a **new array** without the deleted item.
        - setTodos(filtered) replaces the old state with this new array.
        - React re-renders the UI based on the updated state.
        - It is actually changing the data in state varibale → rerender the UI of the component.
        - Note the React architecture as of now: App.js→todotable→todorowitem ; App.js → todoform
    - GPT notes:
        
        Here’s a clear structured summary of that lecture on **adding delete functionality to the todo app**:
        
        ---
        
        ### ✅ What
        
        - Implemented a **delete feature** for the todo list.
        - Created a new function `deleteTodo` in `App.js` that removes a todo based on its unique `rowNumber`.
        - Passed this function down as a **prop** through `TodoTable` to `TodoRowItem`.
        - Added an `onClick` listener on each table row to trigger deletion.
        
        ---
        
        ### 🎯 Why
        
        - Without delete functionality, todos could only be added, not removed.
        - Each todo needs a **unique identifier (`rowNumber`)** so React knows which item to delete.
        - Passing functions as props allows child components to trigger state changes in the parent.
        
        ---
        
        ### ⚙️ How
        
        1. **Define delete function**:
            
            ```jsx
            const deleteTodo = (deleteRowNumber) => {
              let filtered = todos.filter(
                (value) => value.rowNumber !== deleteRowNumber
              );
              setTodos(filtered);
            };
            
            ```
            
            - Filters out the todo with the matching `rowNumber`.
            - Updates state with the new array.
        2. **Pass function as prop**:
            
            ```jsx
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
            
            ```
            
        3. **Use in child component**:
            
            ```jsx
            <tr onClick={() => props.deleteTodo(props.rowNumber)}>
              ...
            </tr>
            
            ```
            
            - Clicking a row calls `deleteTodo` with that todo’s `rowNumber`.
        4. **Result**:
            - Clicking a row deletes the corresponding todo.
            - Adding new todos still works, and each todo has a unique `rowNumber`.
        
        ---
        
        ### ⚠️ Limitations & Critical Notes
        
        - **Row-based deletion**: Clicking anywhere on a row deletes it — not ideal UX. Usually, a dedicated delete button is better.
        - **Identifiers**: Relies on `rowNumber` as a unique ID. Works here, but in real apps, database IDs or UUIDs are safer.
        - **Scalability**: For larger apps, managing state and props this way can get complex; Context API or Redux may be needed.
        - **User feedback**: No confirmation before deletion — accidental clicks can remove items instantly.
        
        ---
        
        👉 **Critical takeaway**:
        
        The delete functionality uses `filter` to remove items by their unique `rowNumber`, passed down as props. This demonstrates React’s pattern of **lifting state up** and letting child components trigger parent state changes. It works well for small apps, but in production you’d refine UX (dedicated delete buttons, confirmations, stronger IDs).
        

### Video 26 - React conditional Rendering

- My Notes:
    - Conditional rendering → use to render a component in UI based on meting certain condition.
    - For this uses → boolean variable, {<inside this html code or javascript code>},terinary operator,.
- GPT notes:
    
    Here’s a concise structured summary of that lecture on **conditional rendering in React**:
    
    ---
    
    ### ✅ What was implemented
    
    - Added **conditional rendering** to show or hide the *NewTodoForm* component.
    - Introduced a **state variable** (`showAddTodoForm`) to track whether the form is visible.
    - Used a **button with an onClick listener** to toggle the state between `true` and `false`.
    - Applied a **ternary operator** to change the button text dynamically between *“New To-Do”* and *“Close New To-Do”*.
    
    ---
    
    ### 🎯 Why it’s needed
    
    - Prevents the form from always being visible.
    - Improves user experience by letting users open/close the form as needed.
    - Demonstrates how React re-renders the UI when state changes.
    
    ---
    
    ### ⚙️ How it works
    
    1. **Initialize state**:
        
        ```jsx
        const [showAddTodoForm, setShowAddTodoForm] = useState(false);
        
        ```
        
    2. **Toggle state on button click**:
        
        ```jsx
        <button onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
          {showAddTodoForm ? "Close New To-Do" : "New To-Do"}
        </button>
        
        ```
        
    3. **Conditional render form**:
        
        ```jsx
        {showAddTodoForm && <NewTodoForm />}
        
        ```
        
    4. **Result**:
        - Initially hidden.
        - Clicking *New To-Do* shows the form.
        - Clicking *Close New To-Do* hides it again.
    
    ---
    
    ### ⚠️ Notes
    
    - This pattern is a **fundamental React concept**: using state to control what is rendered.
    - The ternary operator improves clarity by dynamically updating button text.
    - Sets the stage for building more complex full-stack React applications.
    
    ---
    
    👉 **Critical takeaway**: Conditional rendering lets you control when components appear or disappear based on state. In this todo app, it makes the form toggleable with a button, improving usability and demonstrating React’s re-rendering behavior.