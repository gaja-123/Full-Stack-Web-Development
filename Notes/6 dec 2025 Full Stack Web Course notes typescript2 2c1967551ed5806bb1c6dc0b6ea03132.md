# 6 dec 2025 Full Stack Web Course notes: typescript2

Date: December 6, 2025

## Key Takeways

1. Typescript inheritance - extends,super. only support single inheritance but multiple interfaces implemtation. Inheritance is used to extend the common properties and methods from superclass to the subclasses. It supports abstract classes and overriding.
2. Default things in typescript: public
3. Rename symbols in VSCode, quick fix for get and set accessors.
4. Array of type class can only hold itself and it subclasses objects.

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

### Video 41 - Inheritance

- My notes:
    - Typescript supports the OOPs concepts - so inheritance.
    - Inheritance ⇒ common propeties and methods from superclass is extended to subclasses.
    - Supports abstract class and also overriding the method.
    - supports only single inheritance but can implement multiple interfaces.
    - Keywords ⇒ extends, super
    - can also have array of class → that holds object of that class and it’s subclasses.
- GPT notes:
    
    Perfect — let’s break this down in a structured way so you really understand **what’s happening, why it matters, how it works, and where the limitations are. I’ll also be critical so you see both strengths and weaknesses.**
    
    ---
    
    ## 🔎 What
    
    - **Inheritance in TypeScript**: A way to reuse code by defining common properties/methods in a base class (`Shape`) and extending it in subclasses (`Circle`, `Rectangle`).
    - **Superclass (`Shape`)**: Holds shared attributes (`x`, `y`) and a method (`getInfo`) that describes the shape.
    - **Subclasses (`Circle`, `Rectangle`)**: Extend `Shape`, add their own properties (`radius`, `width`, `length`), and override `getInfo` to provide more specific output.
    - **Polymorphism**: When you store different subclasses in a single array of type `Shape[]`, you can call `getInfo` on each and the correct overridden method runs.
    
    ---
    
    ## 💡 Why
    
    - **Code reuse**: Instead of duplicating `x` and `y` in every shape, you define them once in `Shape`.
    - **Consistency**: All shapes share a common interface (`getInfo`), so you can treat them uniformly.
    - **Extensibility**: Adding new shapes (like `Triangle`) is easy — just extend `Shape` and override methods.
    - **Polymorphism in practice**: The array of shapes demonstrates how you can work with different objects in a unified way.
    
    ---
    
    ## ⚙️ How
    
    1. **Superclass definition**:
        
        ```tsx
        class Shape {
          constructor(private x: number, private y: number) {}
          getInfo(): string {
            return `x=${this.x}, y=${this.y}`;
          }
        }
        
        ```
        
        - Uses **parameter properties** (`private x: number`) to both declare and assign in one step.
        - `getInfo` returns a string representation.
    2. **Subclass Circle**:
        
        ```tsx
        class Circle extends Shape {
          constructor(x: number, y: number, private radius: number) {
            super(x, y); // calls Shape’s constructor
          }
          getInfo(): string {
            return `${super.getInfo()}, radius=${this.radius}`;
          }
        }
        
        ```
        
        - `extends` keyword establishes inheritance.
        - `super(x, y)` calls the parent constructor.
        - Overrides `getInfo` but still calls `super.getInfo()` to reuse base logic.
    3. **Subclass Rectangle**:
        
        ```tsx
        class Rectangle extends Shape {
          constructor(x: number, y: number, private width: number, private length: number) {
            super(x, y);
          }
          getInfo(): string {
            return `${super.getInfo()}, width=${this.width}, length=${this.length}`;
          }
        }
        
        ```
        
    4. **Polymorphic usage**:
        
        ```tsx
        let shapes: Shape[] = [];
        shapes.push(new Shape(10, 15));
        shapes.push(new Circle(5, 10, 20));
        shapes.push(new Rectangle(0, 0, 10, 5));
        
        for (let tempShape of shapes) {
          console.log(tempShape.getInfo());
        }
        
        ```
        
        - Each subclass provides its own `getInfo`, but the loop doesn’t care which type it is — polymorphism handles it.
    
    ---
    
    ## ⚠️ Limitations & Critical View
    
    - **Single inheritance only**: TypeScript doesn’t allow multiple inheritance (you can’t extend two classes). You can only implement multiple interfaces. This is a limitation compared to languages like C++.
    - **Runtime vs compile-time**: TypeScript compiles to JavaScript, which doesn’t enforce types at runtime. So inheritance is mostly a compile-time structure; at runtime, it’s just JavaScript’s prototype chain.
    - **Encapsulation**: Using `private` is only enforced at compile-time. At runtime, JavaScript doesn’t truly hide properties.
    - **Overuse risk**: Inheritance can lead to rigid hierarchies. For example, if you later want a `Square` that shares logic with `Rectangle`, you might end up duplicating or refactoring. Composition (having a `Shape` contain other objects) is often more flexible.
    - **Performance**: Overridden methods that call `super` can add small overhead. Not a big deal here, but in large hierarchies it can matter.
    - **Design critique**: The `getInfo` method returns a string. That’s fine for demos, but in real-world apps you’d likely want structured data (e.g., JSON) rather than concatenated strings, which are harder to parse.
    
    ---
    
    ## 🧠 Critical Takeaway
    
    - **Good for learning OOP concepts**: This example clearly demonstrates inheritance, overriding, and polymorphism in TypeScript.
    - **But in practice**: Modern TypeScript/JavaScript often favors **composition over inheritance**. For example, instead of `Rectangle extends Shape`, you might have a `Shape` interface and let `Rectangle` implement it, or compose smaller reusable objects.
    - **Best practice**: Use inheritance sparingly, only when there’s a clear “is-a” relationship (Circle *is a* Shape). Otherwise, prefer composition (Rectangle *has* dimensions).
    
    ---
    

### Video 42,43,44,45 - code implementation of video 41

- My notes:
    - 42 - class and subclass (shape.ts,circle.ts)
    - 43 - main app ( driver.ts)
    - 44 - second class (rect.ts)
    - 45 - array of shapes