# 5 dec 2025 Full Stack Web Course notes

Date: December 5, 2025
Note type: Notes

## Key Takeways

1. Typescript → superset of JS. Features → Static typed and also OOps support.
2. Hello world.ts program
3. let <varibale name> : <datatype> = <value>
4. template string ⇒ variable reference using ${<variable name>} and use the back ticks(``) e.g. `Hi ${Firstname} , how are you?`. useful in case of concate many things.
5. tsc —noEmitOnError <flename>.ts to avoid generate the .js file if there is complie time error (e.g. strongly type error but throws the complie time error)
6. For loop ( same as C program); simplified for loop ⇒ for ( let <var> of <array>){……….}; array ⇒ let <array name> : <datatype> [] =[…….], conditional statements [if,else]. Note Default datatype in .ts is <any>, if not mentioned. Array in .ts is growable/dynamic (e.g. push)
7. Basic class structure → classname,properties,constructor,setter,getter. And keywords: constructor,class,this. And access modifiers→ public,private,protected.
8. Accessors ⇒ use of getter and setter method to access the private class properties. <access modifer> <function name> (<param>:<param datatype>) : <return datatype>{…..}.[ this syntax is usual get and set method. but accssors are special type of get and set method]
9. but Accessors → are special way of get and set method like syntax defining and also calling. public get <propertyname>(): <property datatype>{ return this.<propertyname>} . public set <propertyname>(<parama>:<parama datatype>){ this.<propertyname≥=<param>}. calling and setting just like the <classname>.<propertyname>. No use of void in the set accessor ( note this).
10. tsconfig.json ⇒ used to define complier options and project settings. Note : accessors are avaible only to be complied by tsc if complier flag used — target ES5. And at root tsc — init to create template file of tsconfig.json automatically and change as per your need.
11. The underscore is **not enforced by TypeScript** — it’s purely convention. You could name the private field  x or internalfirstname if you wanted. and get or set accessor not use that _ while defining the name of them.
12. Parameter properties → that defines and assigns the class properties in the constructor call itself. No need of class properties declare and also assign externally in the constructor.
13. “tsc --build --clean” is helps to remove all the .js generated files in the folder.
14. Module → can export the class,function,varibale.etc from one .ts file and those can then be imported by other .ts files. . Use the key word export and import {class/function/variable name} from ‘<relative path to the .ts file and not mention .ts>’

## Action

---

- [x]  React crash course
- [ ]  TypeScript crash course
- [ ]  Bootstrap (optional)
- [ ]  Integrate React and TypeScript
- [ ]  Full stack overview
- [ ]  Library project
- [ ]  Springboot ( additional not in udemey course) (optional as time being)

## Notes

---

### Video 27 - Typescript overview

- My notes:
    - Typescript is superset of javascript ⇒ supports static type and also OOPs.
    - TypeScript > ECMA script > JS
    - ECMA script → is standardised version of JS
    - code → compile(tsc ⇒ converts .ts to .js) [ called transpiling i.e translating / compiling] → run( node command)
    - React support → .ts;.js;ECMA script,Dart,etc. And note that Typescript is popular ( complie time error check and alsoincrease productivity due to it features) [ no runtime bugs if solved by complie time itself]
- GPT notes:
    
    Got it 👍 — let’s break down the video into a structured summary with **what, why, how, limitations**, and then I’ll add a critical perspective.
    
    ---
    
    ## 📌 What is TypeScript?
    
    - A language developed by Microsoft in 2012.
    - Free, open-source, and a **superset of JavaScript** (adds features but still compiles down to JS).
    - Provides **static typing** and **object-oriented programming support** (classes, interfaces, inheritance).
    - Designed to make JavaScript development more robust and maintainable.
    
    ---
    
    ## 🎯 Why Use TypeScript?
    
    - **Static typing & compile-time checks** → catch errors early, before runtime.
    - **IDE support** → better autocompletion, debugging, and refactoring.
    - **Scalability** → strongly typed code is easier to maintain in large projects.
    - **Popularity in React development** → most modern React projects use TypeScript for reliability.
    - **Productivity** → reduces runtime bugs and improves developer efficiency.
    
    ---
    
    ## ⚙️ How It Works
    
    1. **Write TypeScript code** (`.ts` files).
    Example:
        
        ```tsx
        console.log("Hello World");
        
        ```
        
    2. **Compile (transpile) to JavaScript** using the `tsc` command.
        - Input: `myDemo.ts`
        - Output: `myDemo.js`
    3. **Run the JavaScript** with Node.js (`node myDemo.js`).
    4. Compiler helps detect errors at build time (e.g., invalid properties).
    
    ---
    
    ## 🚨 Limitations / Criticisms
    
    - **Extra Build Step:** Browsers don’t understand TypeScript directly; you must transpile to JS.
    - **Learning Curve:** Developers must learn typing, interfaces, and new syntax.
    - **Overhead for Small Projects:** For quick scripts or prototypes, TypeScript can feel like unnecessary complexity.
    - **False Sense of Security:** Static typing reduces bugs but doesn’t eliminate runtime issues (e.g., logic errors, API failures).
    - **Tooling Dependency:** Requires proper setup (tsconfig, compiler, Node.js). Without good tooling, it can slow down beginners.
    - **Not Always Needed:** For small React apps or rapid prototyping, plain JavaScript may be faster and simpler.
    
    ---
    
    ## 🧐 Critical Take
    
    TypeScript is powerful, but the video paints it as a “must-have” for React development. In reality:
    
    - **For large-scale apps:** TypeScript is invaluable — it enforces discipline and prevents many runtime errors.
    - **For small projects or beginners:** It can add friction. You spend time fighting the compiler instead of building features.
    - **Balance is key:** Use TypeScript when scalability and team collaboration matter. Stick to JavaScript when speed and simplicity are more important.
    
    ---
    
    👉 In short: **TypeScript = safety + structure, but at the cost of setup and complexity.** It’s not automatically better — it depends on project size, team needs, and developer experience.
    

### Video 28 - Hello world typescript

- My notes;
    - Create the helloworld.ts with console.log(’hellow world’)
    - run tsc helloworld.ts [ transpliing helloworld.ts to helloworld.js]
    - node helloworld.js

### Video 29 - Defining variables overview

- My notes:
    - Typescript uses the keyword ‘let’ that sloves many issues unlike ‘var’ in javascript.
    - define a variable : let <variable name> : <datatype> = <value>
    - Datatypes → boolean,number( for both integer and float) , String,any( usefule incase of generic type for storing different values in array,etc), other types.
    - once defined the datatype assigning the wrong datatype value to that gives complie time error , the feature of the .ts strongly typed.
    
    ### Video 30 - Defining variable < code version>
    
    - My notes:
        - Note that tsc command still generates the .js (i.e. transpiling) even if there are errors ( e.g. strongly type error but throws complie time error)
        - Avoid generating the .js file with command tsc -noEmitOnError <filenams>.ts
    
    ### Video 31 - Creating loops and array
    
    - My notes:
        - loop discussed ⇒ for loop ⇒ syntax : for ( intialise; loop condition check; increament or decrement,etc){……}
        - simplified for loop ⇒ syntax : for ( let <variable name> of <array>){}
        - array syntax ⇒ let <arrayname> : <datatype>[] = […………]
        - Array in .ts is dynamic or growable. e.g. push.
        - Default datatype of the typescript is <any>
    
    ### Video 32,33 - coding of video 31 (redundant)
    
    ### Video 34,35 - Classes
    
    - My notes:
        - Define basic class structure: classname,properties of the class,constructor,getter and setter.
        - Accessor → public ( default, accessible by all classes) , private ( accessible by only that class), protected ( accessible by that class and it’s subclasses)
        - Use the keywords : class,constructor.
        - **No** `let` **for class properties** → they’re fields, not local variables.
        - **No** `let` **for constructor parameters** → parameters are automatically scoped.
        - use this.<class propertyname>
    
    ### Video 36,37 - accessors → special get and set method for access the private class properties
    
    - My notes:
        1. Accessors ⇒ use of getter and setter method to access the private class properties. <access modifer> <function name> (<param>:<param datatype>) : <return datatype>{…..}.
        2. but Accessors → are special way of get and set method like syntax defining and also calling. public get <propertyname>(): <property datatype>{ return this.<propertyname>} . public set <propertyname>(<parama>:<parama datatype>){ this.<propertyname≥=<param>}. calling and setting just like the <classname>.<propertyname>.
        3. tsconfig.json ⇒ is used to config the complie and project settings.
    - GPT notes:
        
        Here’s a structured breakdown of the video content on **TypeScript accessors (getters and setters)**, with a critical lens:
        
        ---
        
        ## 📌 What
        
        - **Accessors in TypeScript** are special `get` and `set` methods that allow controlled access to private class properties.
        - They provide a cleaner syntax compared to traditional getter/setter methods.
        - Example:
            
            ```tsx
            class Customer {
              private _firstName: string;
              private _lastName: string;
            
              get firstName() {
                return this._firstName;
              }
            
              set firstName(value: string) {
                this._firstName = value;
              }
            }
            
            ```
            
        
        ---
        
        ## 🎯 Why
        
        - **Encapsulation:** Protects private fields while exposing controlled access.
        - **Cleaner syntax:** Instead of calling `getFirstName()`, you can just use `myCustomer.firstName`.
        - **Consistency with OOP:** Matches patterns from other languages like Java or C#.
        - **IDE support:** Autocompletion and type checking work seamlessly with accessors.
        
        ---
        
        ## ⚙️ How
        
        1. Declare private fields (often with `_` prefix by convention).
        2. Define `get` accessor:
            - Syntax: `get propertyName() { return this._field; }`
            - No parameters, must return a value.
        3. Define `set` accessor:
            - Syntax: `set propertyName(value: Type) { this._field = value; }`
            - No explicit return type (not even `void`).
        4. Use them like normal properties:
            
            ```tsx
            myCustomer.firstName = "Susan";   // calls setter
            console.log(myCustomer.firstName); // calls getter
            
            ```
            
        5. Compiler requirement: Must target **ES5 or higher** (`tsc --target ES5`), otherwise accessors aren’t supported.
        6. To avoid repeating flags, configure them in `tsconfig.json`.
        
        ---
        
        ## 🚨 Limitations
        
        - **Compiler target dependency:** Accessors only work in ES5+; older targets fail.
        - **Hidden complexity:** Syntax looks like direct property access, but actually invokes functions — can confuse beginners.
        - **Performance overhead:** Each access involves a function call, not raw property access.
        - **Readability trade-off:** Overuse of accessors can obscure what’s happening behind the scenes.
        - **Convention reliance:** The `_` prefix for private fields is just convention, not enforced — can lead to inconsistent codebases.
        
        ---
        
        ## 🧐 Critical Perspective
        
        - The video presents accessors as a neat feature, but in practice:
            - For **simple data containers**, accessors add unnecessary boilerplate. Direct public fields may be fine.
            - For **large, complex systems**, accessors are useful when you need validation, logging, or transformation during property access.
            - The “magic” of `myCustomer.firstName` calling a function can reduce transparency — developers may assume it’s a simple field.
            - Relying on compiler flags (`-target ES5`) is a reminder that TypeScript features are tightly coupled to JavaScript runtime versions. Beginners often stumble here.
            - Using `tsconfig.json` is essential, but the video glosses over the fact that managing config files can be overwhelming for newcomers.
        
        ---
        
        ## 📌 Summary
        
        - **What:** Accessors (`get`/`set`) provide controlled access to private fields.
        - **Why:** Encapsulation, cleaner syntax, OOP consistency, IDE support.
        - **How:** Define `get`/`set` methods, use them like properties, configure compiler target.
        - **Limitations:** ES5+ requirement, hidden complexity, possible performance overhead, readability issues.
        - **Critical Take:** Accessors are powerful but can be overkill for simple cases. They shine when you need logic around property access, but otherwise risk adding confusion and boilerplate.
        
        ---
        
        You're right — let’s cover tsconfig.json properly and tie it to accessors and a sane project setup.
        
        ---
        
        ## What tsconfig.json is
        
        - A configuration file that controls how TypeScript compiles your project.
        - Centralizes compiler options (like target, module, strictness) so you don’t need to pass flags every time.
        - Enables project-wide behaviors (include/exclude files, output directories, JSX settings for React).
        
        ---
        
        ## Why you need it here
        
        - Accessors (get/set) require ES5+ output. Setting target in tsconfig avoids CLI flags.
        - Prevents bad builds (e.g., noEmitOnError) and enforces type safety (strict, noImplicitAny).
        - Keeps consistent behavior across machines and CI/CD.
        
        ---
        
        ## How to create and use it
        
        1. Initialize:
        
        This generates tsconfig.json with defaults.
            
            ```bash
            tsc --init
            
            ```
            
        2. Edit options as needed (examples below).
        3. Compile:
        
        TypeScript will use tsconfig.json automatically.
            
            ```bash
            tsc
            
            ```
            
        
        ---
        
        ## Minimal config for accessors and general TS
        
        ```json
        {
          "compilerOptions": {
            "target": "ES5",
            "module": "commonjs",
            "strict": true,
            "noEmitOnError": true,
            "outDir": "./dist",
            "rootDir": "./src",
            "sourceMap": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true
          },
          "include": ["src"],
          "exclude": ["node_modules", "dist"]
        }
        
        ```
        
        - target: ES5 ensures get/set accessors compile.
        - strict + noEmitOnError: catch errors early and block bad JS output.
        - outDir/rootDir: clean build outputs.
        - esModuleInterop: smoother default import behavior.
        
        ---
        
        ## React + TypeScript additions
        
        If you’re working in React:
        
        ```json
        {
          "compilerOptions": {
            "target": "ES2020",
            "module": "ESNext",
            "moduleResolution": "node",
            "jsx": "react-jsx",
            "strict": true,
            "noEmitOnError": true,
            "sourceMap": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true,
            "outDir": "dist",
            "rootDir": "src"
          },
          "include": ["src"],
          "exclude": ["node_modules", "dist"]
        }
        
        ```
        
        - jsx: react-jsx enables the modern JSX transform.
        - target/module: ES2020/ESNext aligns better with modern bundlers (Vite/Webpack).
        
        ---
        
        ## Common commands and tips
        
        - Build once:
            
            ```bash
            tsc
            
            ```
            
        - Watch mode:
            
            ```bash
            tsc --watch
            
            ```
            
        - For PowerShell execution policy issues with tsc, use:
            
            ```bash
            npx tsc
            
            ```
            
        
        ---
        
        ## Limitations and critical notes
        
        - Misconfigured target/module can break runtime (e.g., Node vs browser). Know your environment.
        - Overly strict settings can slow early prototyping; balance strict with velocity.
        - tsconfig sprawl is real. Keep only the options you need; document decisions in the repo.
        - In React apps, TypeScript compile doesn’t bundle — rely on your bundler (Vite/Webpack) for dev/build; TypeScript should type-check, not replace the bundler.
        
        ---
        
    
    ### Video 38 - configure complier options with tsconfig.json
    
    - My notes:
        - use tsc —init
        - use just tsc to transpiling all .ts files in the current directory.
        - After tsconfig.json ⇒ the set up working for me as of now only with tsc <without filename>. i.e it complies all ts files in that folder.

### Video 39- parameter properties

- My Notes:
    - Parameter properties → helps to simplfy the constructor and class properities deceleration.
    - These defines the class properties and also assigns them as passing the parameter in the object creation itslef.
    - No need of assign staments in the constructor.
- GPT Notes:
    
    Here’s a clear, structured summary of the video on **TypeScript parameter properties**:
    
    ---
    
    ## 📌 What
    
    - **Parameter properties** are a TypeScript shortcut for defining and assigning class properties directly in the constructor.
    - Instead of declaring fields separately and then assigning them inside the constructor, you can add an **access modifier** (`public`, `private`, `protected`, `readonly`) to constructor parameters.
    - This automatically:
        - Declares the property.
        - Assigns the parameter value to it.
    
    ---
    
    ## 🎯 Why
    
    - **Reduces boilerplate code** → no need to repeat property declarations and assignments.
    - **Cleaner syntax** → constructor parameters double as property definitions.
    - **Consistency** → same functionality as the traditional approach, but more concise.
    - **Productivity** → faster setup of classes, especially with many properties.
    
    ---
    
    ## ⚙️ How
    
    ### Traditional approach:
    
    ```tsx
    class Customer {
      private firstName: string;
      private lastName: string;
    
      constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
      }
    }
    
    ```
    
    ### Parameter properties shortcut:
    
    ```tsx
    class Customer {
      constructor(private firstName: string, private lastName: string) {}
    }
    
    ```
    
    - Both versions behave the same when creating an instance:
        
        ```tsx
        let myCus = new Customer("Rao", "Srinu");
        console.log(myCus.firstName); // accessible if public
        
        ```
        
    
    ---
    
    ## 🚨 Limitations / Considerations
    
    - **Readability trade-off:** New developers may find the shortcut less explicit compared to the traditional constructor.
    - **Access modifiers required:** Without `public`/`private`/`protected`, parameters won’t become properties.
    - **Overuse risk:** For complex constructors, parameter properties can make signatures harder to read.
    - **Convention clash:** Some teams prefer explicit property declarations for clarity.
    
    ---
    
    ## 🧐 Critical Take
    
    Parameter properties are a **syntactic sugar** feature — they don’t add new functionality, just reduce repetition. They’re excellent for simple data classes, but in larger projects, explicit property declarations may improve clarity and maintainability. Use them thoughtfully: concise when appropriate, explicit when clarity matters.
    
    ---
    
    👉 In short: **Parameter properties = shortcut to declare + assign class fields in one step.** They save time and reduce boilerplate, but can obscure intent if overused.
    

### Video 40 - Modules : export and import

- My notes:
    - Module helps to split the code into multiple files. That helps in better code organization.
    - Then using the export and import it helps to export class,function,variable,etc from one .ts file to another.
    - e.g. export class <classname>{…}
    - import {<classname>} from ‘<relative path to the export .ts file. and not mention .ts>’

- GPT notes:
    
    Here’s a concise, structured summary of the video on **TypeScript modules**:
    
    ---
    
    ## 📌 What
    
    - **Modules** in TypeScript allow you to split code into multiple files for better organization.
    - A module can **export** classes, functions, or variables, and other files can **import** them.
    - This is essential for real-world projects where code is too large to keep in a single file.
    
    ---
    
    ## 🎯 Why
    
    - **Code organization:** Keeps related logic in separate files (e.g., `Customer`, `Product`, `Account`).
    - **Reusability:** Exported classes/functions can be reused across multiple files.
    - **Maintainability:** Easier to manage, debug, and scale large applications.
    - **Encapsulation:** Only exported members are accessible outside the module.
    
    ---
    
    ## ⚙️ How
    
    1. **Export from a file:**
        
        ```tsx
        // customer.ts
        export class Customer {
          constructor(public firstName: string, public lastName: string) {}
        }
        
        ```
        
    2. **Import into another file:**
        
        ```tsx
        // driver.ts
        import { Customer } from "./customer";
        
        let myCus = new Customer("Rao", "Srinu");
        console.log(myCus.firstName + " " + myCus.lastName);
        
        ```
        
    3. **File paths:**
        - `./customer` → same directory.
        - `../customer` → move up one directory.
        - `./subdir/customer` → inside a subdirectory.
    4. **Compile and run:**
        - Use `tsc` to compile.
        - Run the generated `.js` file with Node.
    
    ---
    
    ## 🚨 Limitations / Considerations
    
    - Must use `export` keyword; otherwise, classes/functions remain private to the file.
    - Imports require correct relative paths; mistakes cause “cannot find module” errors.
    - File extensions (`.ts`) are omitted in imports.
    - Module resolution depends on compiler options (`module`, `target`) in `tsconfig.json`.
    
    ---
    
    ## 🧐 Critical Take
    
    Modules are fundamental for scaling TypeScript projects, but beginners often trip over **path resolution** and forgetting to `export`. While the syntax is straightforward, the real challenge is managing directory structures and consistent imports in larger codebases. Using a proper `tsconfig.json` with `baseUrl` and `paths` can reduce path clutter and improve maintainability.
    
    ---
    
    👉 In short: **Modules = export + import.** They let you split code into files, reuse logic, and keep projects organized.