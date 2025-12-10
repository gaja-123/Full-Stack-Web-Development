# 7 dec 2025 Full Stack Web Course notes: typescript 3

Date: December 7, 2025
Note type: Notes

## Key Takeways

1. Abstract class → represents general concept e.g. shape,vehicle. Can also have abstract method( not implemted). Abstract methods must be implemented by the subclasses.Cannot create instance of an abstract class.
2. Math is a  class with properties and methods related to math concstants and functions. e.g. PI,pow.
3. keyword : abstract for class and method. export abstract class <classname>{….]
4. Interface → contract methods and also can have properties. It is structure ( no implementation). Class can implement multiple interfaces. 
5. Keywords: implements,interface. export interface <interface name> {…]
6. React + Typescript Integration ⇒ 1.install typescript 2. tsconfig.json 3.add type to params and varibales 4. new class (todomodel) as datatype to pass as prop to child componnts.
7. Install typescript and types ⇒ then delete unnecessary likes webvital.js,app.test.js,setup.js ⇒ then all .js to .tsx ⇒ then html element in index.tsx ⇒ then tsconfig.json create(”jsx”:”react-jsx”).
8. Mention the type expliclity for params and variables and also use the new datatype defined by class.
9. All functional component ⇒ change to define like arrow function and also use the React Functional component type for those const(s).
    
    [ expecting props input datatype defined in React.FC<props_datatype>]. ( that defines const is of type functional component and expecting prop datatype as stated)
    
10. No use of export default ⇒ instead use export const <func_comp_name>…. . ⇒ for non defalut export must mention {…} while importing in the import file.

## Action

---

- [ ]  

## Notes

---

### Video 46 - Abstract classes

- My Notes:
    - Abstract class represents general concepts like Shape,Vehicle. ⇒ so no imlementation.
    - Abstract class not have create instance of it.
    - Abstract calss can also have abstract method(s)[ not implemented]
    - Subclasses of an abstract class MUST implement the abstract method(s). e.g. area of different shapes.
    - VS code quick fix → to implement abstract method in subclass.
- GPT notes:
    
    Here’s a structured breakdown of the video content on **abstract classes in TypeScript**, framed as **what, why, how, limitations**, with some critical analysis:
    
    ---
    
    ### 📌 What
    
    - **Abstract classes**: Generalized templates that define shared structure/behavior but cannot be instantiated directly.
    - They can contain:
        - **Concrete methods** (with implementation).
        - **Abstract methods** (no implementation, must be defined in subclasses).
    - Example: `Shape` as an abstract class with an abstract method `calculateArea()`.
    
    ---
    
    ### 🎯 Why
    
    - **Encapsulation of common features**: Abstract classes allow grouping shared properties (like `x`, `y` coordinates) while leaving specific details (like area calculation) to subclasses.
    - **Polymorphism**: Enables treating different shapes uniformly (e.g., storing `Circle` and `Rectangle` in a `Shape[]` array).
    - **Code consistency**: Forces subclasses to implement required methods, reducing risk of missing functionality.
    
    ---
    
    ### ⚙️ How
    
    - Use the `abstract` keyword on both the class and its methods.
    - Example:
        
        ```tsx
        abstract class Shape {
          abstract calculateArea(): number;
        }
        
        class Rectangle extends Shape {
          constructor(public width: number, public length: number) { super(); }
          calculateArea(): number {
            return this.width * this.length;
          }
        }
        
        class Circle extends Shape {
          constructor(public radius: number) { super(); }
          calculateArea(): number {
            return Math.PI * Math.pow(this.radius, 2);
          }
        }
        
        ```
        
    - **Usage**:
        - Cannot instantiate `Shape` directly (`new Shape()` → error).
        - Must instantiate concrete subclasses (`new Circle(20)`, `new Rectangle(10, 5)`).
        - Store them in a `Shape[]` array and iterate to call `calculateArea()` polymorphically.
    
    ---
    
    ### ⚠️ Limitations
    
    - **Rigid inheritance**: Abstract classes enforce a single inheritance chain. If you need multiple unrelated behaviors, interfaces are more flexible.
    - **Overhead for simple cases**: For trivial differences (like `radius * radius` vs `Math.pow(radius, 2)`), abstract classes may feel heavy-handed compared to just writing separate functions.
    - **Potential misuse**: Beginners may overuse abstract classes when interfaces or composition would be cleaner. For example, a `Shape` hierarchy can become bloated if every geometric concept is forced into inheritance.
    - **Testing complexity**: Abstract classes can make mocking harder compared to interfaces, since they may contain partial implementations.
    
    ---
    
    ### 🔍 Critical Take
    
    - The video does a good job of **illustrating the concept with shapes**, but it oversimplifies:
        - Real-world applications often mix **interfaces** and **abstract classes**. For example, `Drawable` or `Transformable` behaviors might be better expressed as interfaces.
        - The example focuses only on `calculateArea()`, but abstract classes shine when multiple related methods/properties are shared.
        - Using `Math.pow(radius, 2)` is arguably unnecessary here—`radius * radius` is simpler and more performant. The video’s choice was more about demonstrating the `Math` object than best practice.
        - The example doesn’t show **constructor enforcement** (e.g., requiring `x`, `y` coordinates in `Shape`), which would make the abstraction stronger.
    
    ---
    
    ✅ **Summary**:
    
    Abstract classes in TypeScript provide a way to define **generalized templates with enforced contracts**. They’re useful for shared structure and polymorphism but can be **too rigid** if misapplied. Interfaces or composition often offer more flexibility. The video’s shape example is a good teaching tool, but in production code, careful consideration is needed to avoid over-engineering.
    
    ---
    
    ### Video 47 -code implemenataion of 46
    

### Video 48 - Interface

- My notes:
    - Interface is a contract → that defines the structure ( not implemtation) of have both contract method and/or properties.
    - Classes implemting the interface MUST provide the contract method or/and properties accrodingly.
    - Keywords : implements
    - A class can implement multiple interfaces ( but not extend multiple superclasses)
- GPT notes:
    
    Here’s a clear, structured summary of the video on **interfaces in TypeScript**:
    
    ---
    
    ### 📌 What
    
    - **Interfaces** in TypeScript define **contracts** for classes.
    - They specify methods (and optionally properties) that implementing classes must provide.
    - Example: A `Coach` interface with a method `getDailyWorkout()`.
    
    ---
    
    ### 🎯 Why
    
    - **Consistency**: Ensures all implementing classes follow the same structure.
    - **Flexibility**: A class can implement multiple interfaces, unlike abstract classes which only allow single inheritance.
    - **Polymorphism**: Different classes (e.g., `CricketCoach`, `GolfCoach`) can be treated uniformly as `Coach` objects.
    - **Separation of concerns**: Interfaces focus on *what* should be done, not *how*.
    
    ---
    
    ### ⚙️ How
    
    - Define an interface using the `interface` keyword:
        
        ```tsx
        interface Coach {
          getDailyWorkout(): string;
        }
        
        ```
        
    - Implement it in classes:
        
        ```tsx
        class CricketCoach implements Coach {
          getDailyWorkout(): string {
            return "Practice your spin bowling technique";
          }
        }
        
        class GolfCoach implements Coach {
          getDailyWorkout(): string {
            return "Hit 100 balls at the golf range";
          }
        }
        
        ```
        
    - Use in application:
        
        ```tsx
        let coaches: Coach[] = [];
        coaches.push(new CricketCoach());
        coaches.push(new GolfCoach());
        
        for (let tempCoach of coaches) {
          console.log(tempCoach.getDailyWorkout());
        }
        
        ```
        
    - Output:
        - Cricket coach → "Practice your spin bowling technique"
        - Golf coach → "Hit 100 balls at the golf range"
    
    ---
    
    ### ⚠️ Limitations
    
    - **No implementation**: Interfaces cannot provide default behavior (unlike abstract classes).
    - **Optional vs required**: If not carefully designed, interfaces can become too rigid or too vague.
    - **Runtime absence**: Interfaces exist only at compile-time in TypeScript; they don’t enforce contracts at runtime.
    - **Overuse risk**: Using interfaces for trivial cases may add unnecessary boilerplate.
    
    ---
    
    ✅ **Summary**:
    
    Interfaces in TypeScript define **method/property contracts** that classes must fulfill. They’re ideal for ensuring consistency across different implementations (like different types of coaches), enabling polymorphism, and supporting multiple inheritance of behavior. However, they don’t provide actual code, only structure, so they should be used thoughtfully to avoid over-engineering.
    
    ---
    

### Video 49 - code implemetation of video 48

### Video 50- React and TypeScript Integration

- My notes:
    - Typescript is one of popular langauge used in React development → as it is strongly typed, Complier time error check,IDE support, Industrial usage, OOPs support.
    - Typescript use how ( from js React project to typescript React project) ⇒ 1.install typescript( use npm) 2. tsconfig.json ( complier option and root of project mention) 3.Add type to params and variables 4. Create of new class ( used as props to pass from parent to child components.)
- GPT notes:
    
    Here’s a structured and critical summary of the React + TypeScript overview you shared:
    
    ---
    
    ## 🔹 What
    
    - **React development languages**: JavaScript, ECMAScript (ES6/ES9), and TypeScript.
    - **TypeScript**: A superset of JavaScript/ECMAScript that adds static typing and compile-time checks.
    - **Conversion example**: Turning a JavaScript-based React ToDo app into a TypeScript-based one.
    
    ---
    
    ## 🔹 Why
    
    - **Strong typing**: Helps catch errors at compile time rather than runtime.
    - **IDE support**: Autocompletion, refactoring, and better tooling.
    - **Productivity boost**: Developers can rely on extensive documentation, blogs, and tutorials.
    - **Industry adoption**: TypeScript is increasingly popular in React projects, making skills marketable.
    
    ---
    
    ## 🔹 How
    
    1. **Install TypeScript**:
        
        ```bash
        npm install --save typescript @types/node @types/react @types/react-dom @types/jest
        
        ```
        
    2. **Create config file**:
    
    → Defines compiler options and project root.
        
        ```bash
        npx tsc --init
        
        ```
        
    3. **Add types to variables & parameters**:
    Example:
        
        ```tsx
        const addTodo = (description: string, assigned: string) => { ... }
        
        ```
        
    4. **Create a model class**:
    
    → Used as props/objects throughout the app.
        
        ```tsx
        class TodoModel {
          constructor(
            public rowNumber: number,
            public rowDescription: string,
            public rowAssigned: string
          ) {}
        }
        
        ```
        
    
    ---
    
    ## 🔹 Limitations / Critical View
    
    - **Learning curve**: Developers must learn TypeScript syntax and concepts (interfaces, generics, unions).
    - **Setup overhead**: Extra configuration (`tsconfig.json`, type definitions) compared to plain JavaScript.
    - **Slower prototyping**: Strict typing can feel cumbersome for quick experiments or small projects.
    - **Type definition maintenance**: Large projects require constant updates to type definitions, which can become tedious.
    - **Not a silver bullet**: TypeScript prevents certain classes of bugs but doesn’t eliminate logic errors or poor design.
    - **Community split**: Some React developers argue TypeScript adds unnecessary complexity, especially when JavaScript already evolves quickly with ESNext features.
    
    ---
    
    ✅ **Balanced takeaway**:
    
    TypeScript in React is powerful for scaling and maintaining applications, especially in teams. But for small, fast-moving projects, the overhead may outweigh the benefits. It’s not about “TypeScript vs JavaScript” but about choosing the right tool for the context.
    
    ---
    

### Video 51 - React + Typescript part1

- My notes:
    - install typescript and types( nodes,react,react-dom,etc)
    - delete unnnescessary things like webvitals.js,app.test.js,setup.js
    - all .js ⇒ to .tsx ( for typescript to transplie even the JSX syntax)
    - Explicit import of React in .tsx files that has JSX.
    - fix type error as HTML to avoid null return ( as typescript is strongly typed)
    - npx tsc — init [ specifies complier options and also root file to run] ⇒ jsx:”react-jsx”( to complie the react code)
    - npm start ⇒ gives many type errors.
- GPT notes:
    
    Got it 👍 — let’s break this down step by step so it’s clear what’s happening when converting a **JavaScript React app** into a **TypeScript React app**:
    
    ---
    
    ## 🔹 Step 1: Install TypeScript + Type Definitions
    
    Command:
    
    ```bash
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest
    
    ```
    
    - **`typescript`** → the compiler itself.
    - **`@types/...` packages** → type definitions for Node, React, ReactDOM, and Jest (so TypeScript knows the shapes of these libraries).
    👉 Without these, TypeScript wouldn’t understand React’s APIs.
    
    ---
    
    ## 🔹 Step 2: Rename Files
    
    - Change all `.js` files → `.tsx` (for React components) or `.ts` (for plain TypeScript).
    - Delete unnecessary test/setup files (`App.test.js`, `reportWebVitals.js`, `setupTests.js`).
    - Update `index.js` → `index.tsx`.
    
    👉 `.tsx` is required because React components use **JSX syntax**, and TypeScript needs to parse that.
    
    ---
    
    ## 🔹 Step 3: Fix Type Errors
    
    - Example:
        
        ```tsx
        const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
        
        ```
        
        - TypeScript complains because `document.getElementById` can return `null`.
        - Adding `as HTMLElement` tells TypeScript: “Trust me, this will be an HTML element.”
    - Import React explicitly:
        
        ```tsx
        import React from "react";
        
        ```
        
        - Some files may assume React is globally available, but TypeScript enforces explicit imports.
    
    ---
    
    ## 🔹 Step 4: Create a Config File
    
    Command:
    
    ```bash
    npx tsc --init
    
    ```
    
    - Generates `tsconfig.json` with compiler options:
        - `target: es2016` → transpile to ES2016 JavaScript.
        - `module: commonjs` → module system.
        - `strict: true` → strict type checking.
        - `skipLibCheck: true` → skip type checking in libraries.
        - `forceConsistentCasingInFileNames: true` → avoids case sensitivity issues.
    
    👉 This file tells TypeScript how to compile your project.
    
    ---
    
    ## 🔹 Step 5: Configure JSX
    
    - In `tsconfig.json`, find the `jsx` option.
    - Change from:
    
    to:
        
        ```json
        "jsx": "preserve"
        
        ```
        
        ```json
        "jsx": "react-jsx"
        
        ```
        
    - This ensures JSX compiles correctly into React code.
    
    ---
    
    ## 🔹 Step 6: Handle Errors
    
    - After setup, you’ll see **lots of errors**:
        - Variables missing type annotations (`string`, `number`, etc.).
        - Props not typed.
        - Models not defined.
    
    👉 This is expected — TypeScript forces you to **add explicit types** everywhere (functions, props, state, models).
    
    ---
    
    ## 🔹 Critical Perspective
    
    - ✅ **Pros**: Strong typing, better tooling, fewer runtime bugs, scalable for large teams.
    - ⚠️ **Cons**:
        - Extra setup (install packages, rename files, configure `tsconfig.json`).
        - More verbose code (must annotate types).
        - Errors can feel overwhelming at first.
        - Slows down prototyping compared to plain JavaScript.
    
    ---
    
    ### ⚡ In short:
    
    This walkthrough shows the **conversion process**: install TypeScript, rename files, fix type errors, configure `tsconfig.json`, and handle stricter rules. The flood of errors at the end isn’t a failure — it’s TypeScript doing its job, forcing you to add types so your app is safer and more maintainable.
    
    ---
    

### video 52- react + typescript part 2

- My Notes:
    - Updated types from index.js→App.js→table.js→rowitem.js
    - Created new datatype using class for todo.
- GPT notes:
    
    Here’s a clear, structured summary of what’s happening in this step of converting the React ToDo app from **JavaScript** to **TypeScript**:
    
    ---
    
    ## 🔹 What was done
    
    - **TypeScript installed & configured** (`tsconfig.json` with JSX set to `react-jsx`).
    - **Index.tsx** works fine, but other files show type errors.
    - **Functions with parameters** (`addTodo`, `deleteTodo`) had implicit `any` types → fixed by explicitly declaring `string` and `number`.
    - **Props in components** (`TodoTable`, `TodoRowItem`) lacked type definitions → TypeScript requires explicit typing.
    - **Created a `TodoModel` class** in a new `models` folder to define the structure of a ToDo item (rowNumber: number, rowDescription: string, rowAssigned: string).
    
    ---
    
    ## 🔹 Why it matters
    
    - TypeScript enforces **explicit typing** to avoid runtime errors.
    - Props and parameters must be declared with types so the compiler can validate usage.
    - Creating a `TodoModel` ensures consistency across components when passing ToDo data.
    - Strong typing improves maintainability and makes the app safer to scale.
    
    ---
    
    ## 🔹 How it was fixed
    
    1. Added type annotations:
        
        ```tsx
        const addTodo = (description: string, assigned: string) => { ... }
        const deleteTodo = (rowNumber: number) => { ... }
        
        ```
        
    2. Built a `TodoModel` class:
        
        ```tsx
        class TodoModel {
          constructor(
            public rowNumber: number,
            public rowDescription: string,
            public rowAssigned: string
          ) {}
        }
        
        ```
        
    3. Updated props in `TodoRowItem`:
        
        ```tsx
        type Props = {
          rowNumber: number;
          rowDescription: string;
          rowAssigned: string;
          deleteTodo: () => void;
        }
        
        ```
        
    4. Linked `TodoTable` and `TodoRowItem` to use `TodoModel` for consistency.
    
    ---
    
    ## 🔹 Limitations / Critical View
    
    - **Verbosity**: Every parameter and prop must be typed, which can feel repetitive.
    - **Setup overhead**: Creating models and interfaces adds extra steps compared to plain JS.
    - **Errors flood in at once**: Beginners may feel overwhelmed when TypeScript flags everything.
    - **Flexibility trade-off**: Strict typing slows down quick prototyping, though it pays off in larger apps.
    
    ---
    
    ✅ **Bottom line**: This step was about enforcing explicit typing for functions and props, and introducing a `TodoModel` class to standardize ToDo data. It resolves TypeScript’s complaints and sets the foundation for a more robust, maintainable React app.
    
    ---
    

### Video 53 - React + TypeScript part 3

- My notes:
    - Explicitly mentioning the types
- GPT notes:
    
    Here’s a concise but complete summary of this step in the React → TypeScript conversion process:
    
    ---
    
    ## 🔹 What was done
    
    - **TodoTable component**:
        - Needed to accept a prop that is an **array of todos**.
        - Defined the prop type as `TodoModel[]` (array of `TodoModel` objects).
    - **DeleteTodo function**:
        - Added as a prop with type `function`.
    - **NewTodoForm component**:
        - Added `addTodo` as a prop with type `function`.
    - **TodoRowItem component**:
        - Props explicitly typed (`rowNumber`, `rowDescription`, `rowAssigned`, `deleteTodo`).
    
    ---
    
    ## 🔹 Why it matters
    
    - TypeScript requires **explicit typing** for props and functions.
    - Using `TodoModel[]` ensures consistency and prevents runtime errors when mapping todos.
    - Declaring functions (`deleteTodo`, `addTodo`) as typed props makes the code safer and easier to maintain.
    
    ---
    
    ## 🔹 How it was fixed
    
    1. In `TodoTable`:
        
        ```tsx
        todos: TodoModel[];
        deleteTodo: () => void;
        
        ```
        
    2. In `NewTodoForm`:
        
        ```tsx
        addTodo: () => void;
        
        ```
        
    3. In `TodoRowItem`:
        
        ```tsx
        rowNumber: number;
        rowDescription: string;
        rowAssigned: string;
        deleteTodo: () => void;
        
        ```
        
    
    ---
    
    ## 🔹 Result
    
    - All type errors across `App.tsx`, `TodoTable.tsx`, `TodoRowItem.tsx`, and `NewTodoForm.tsx` were resolved.
    - The app compiles and runs successfully in the browser.
    - The project now has **strongly typed props and models**, making it more robust.
    
    ---
    
    ✅ **Bottom line**: This step standardized props across components by tying them to the `TodoModel` class and explicitly typing functions. The app is now error-free and running, with TypeScript enforcing safer, more predictable code.
    
    ---
    
    ### Video 54 - React and Typescript integration part 4
    
    - Mynotes:
        - replace all JS function definition with arrow function with expecting props for that functional component as React.FC<prop_type>
        - It returns the JSX( JS+ HTML).
        - No need to export default, instead use {} ( for nondefault export) to be imported in the importing file.
    - GPT notes:
        
        Here’s a structured explanation of the transcript you shared, broken down into **What, Why, How, Limitations, and Critical Perspective**:
        
        ---
        
        ### 📌 What
        
        - The transcript describes **refactoring React components** from plain JavaScript functions into **TypeScript arrow functions with explicit typing**.
        - Changes include:
            - Converting `function ComponentName(...) {}` into `const ComponentName: React.FC<Props> = (...) => { ... }`.
            - Removing `export default` at the bottom and instead using **named exports** (`export const ...`).
            - Adding **TypeScript type annotations** (`React.FC`) to ensure components are recognized as functional components.
            - Updating imports to use **bracketed named imports** instead of default imports.
        - Applied to multiple components: `TodoRowItem`, `NewTodoForm`, `TodoTable`, and `App`.
        
        ---
        
        ### 🎯 Why
        
        - **Consistency:** Ensures all components follow the same coding style (arrow functions + constants).
        - **Type safety:** Using `React.FC` helps TypeScript verify that components return valid React elements and props are correctly typed.
        - **Maintainability:** Named exports make it clearer which components are exported and avoid confusion with default exports.
        - **Modern best practices:** Arrow functions and constants are preferred in modern React codebases for readability and consistency.
        
        ---
        
        ### ⚙️ How
        
        1. **Convert function to constant + arrow function:**
            
            ```tsx
            // Before
            function TodoRowItem(props) { ... }
            
            // After
            export const TodoRowItem: React.FC<Props> = (props) => { ... }
            
            ```
            
            - `const` + arrow function replaces `function`.
            - `React.FC<Props>` adds typing.
        2. **Remove `export default` at the bottom:**
            
            ```tsx
            // Before
            export default TodoRowItem;
            
            // After
            export const TodoRowItem: React.FC<Props> = (props) => { ... }
            
            ```
            
            - Export happens at the declaration, not at the bottom.
        3. **Update imports:**
            
            ```tsx
            // Before
            import TodoRowItem from "./TodoRowItem";
            
            // After
            import { TodoRowItem } from "./TodoRowItem";
            
            ```
            
            - Named imports require brackets.
        4. **Apply same pattern to other components:**
            - `NewTodoForm`, `TodoTable`, `App`.
            - Each converted to arrow function with `React.FC`.
        5. **Index.tsx adjustment:**
            - Since `App` is now a named export, it must be imported with brackets.
        
        ---
        
        ### 🚧 Limitations
        
        - **React.FC drawbacks:**
            - Some developers avoid `React.FC` because it automatically includes `children` prop even if not needed.
            - It can obscure explicit prop typing compared to defining props manually.
        - **Verbosity:** Adding `React.FC<Props>` everywhere can feel repetitive.
        - **Named exports vs default exports:**
            - Named exports improve clarity, but default exports can be simpler for single-component files.
        - **Refactor overhead:** Requires updating all imports across the project, which can be error-prone.
        - **No functional change:** This is mostly stylistic and type-safety improvement, not adding new features.
        
        ---
        
        ### 🔎 Critical Perspective
        
        - **Strengths:**
            - Enforces consistency across the codebase.
            - Improves type safety with TypeScript.
            - Aligns with modern React practices (arrow functions, constants).
            - Easier to maintain in larger projects with multiple contributors.
        - **Weaknesses:**
            - Over-reliance on `React.FC` can be debated; some teams prefer explicit prop typing without `React.FC`.
            - Removing default exports may make imports more verbose, especially for single-use components.
            - The transcript focuses heavily on syntax changes but doesn’t explain **why these changes matter for scalability or collaboration**.
            - The explanation is somewhat mechanical — it doesn’t highlight trade-offs or alternatives (e.g., custom prop interfaces vs `React.FC`).
        
        ---
        
        ✅ **In short:**
        
        This refactor converts all components into **arrow functions with TypeScript typing (`React.FC`) and named exports**, ensuring consistency and type safety across the app. It’s a good modernization step, but it’s mostly stylistic, with some trade-offs (like `React.FC` quirks and import verbosity).
        
        ---