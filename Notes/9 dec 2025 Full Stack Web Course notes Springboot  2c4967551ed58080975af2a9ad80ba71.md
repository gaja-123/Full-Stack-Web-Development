# 9 dec 2025 Full Stack Web Course notes: Springboot setup and intro.

Date: December 9, 2025

## Key Takeways

1. frontend ( react + TS) communicate with backend ( springboot java) via RESTAPI(http) and that communicate with DATABASE(via JPA or hibernate).
2. Spring DataREST is used to autogenerate the endpoints for get,post,delete,put to the database.
3. project lambok ⇒ auto generate the code for getter,setter,etc.
4. **Endpoint = URL + HTTP method → operation on a resource like book.**
5. Done with MYSQL setup + Java setup + Intellij setup
6. Insert the books data using the scripts.

## Action

---

- [ ]  

## Notes

---

### Video 89 - scring boot project setup overview

- My notes:
    - Spring Data REST used to auto generate CRUD endpoints with GET,POST,DELEE,Post.
    - project lambok ⇒ is used to autogenerate the code for getter,seeter,etc
    - frontend communicate with REST API with backend(springboot) it then communiate with Database for CRUD operations.
    - Yes, both approaches perform **GET, POST, PUT, DELETE directly on the database via JPA/Hibernate**. The difference is **Spring Data REST auto-generates endpoints**, while **manual coding requires explicit controllers and services**.
- GPT notes:
    
    Great — let’s break down that lecture into a **structured critical analysis** using the lens of *What, Why, How, and Limitations*.
    
    ---
    
    ## 📌 What
    
    - The lecture is an **overview of Spring Boot backend setup** in a full-stack project (React frontend + Spring Boot backend).
    - It covers:
        - Environment setup (JDK, IDE, Maven, MySQL).
        - Choice of IDE (IntelliJ Community Edition, with alternatives like Eclipse, VS Code, NetBeans).
        - Using **Spring Data REST** to auto-generate CRUD endpoints.
        - Database initialization with SQL scripts (tables + book data).
        - Introduction to **Project Lombok** for reducing boilerplate code in Java entities.
    
    ---
    
    ## 📌 Why
    
    - **Spring Data REST** is chosen to minimize manual coding of CRUD endpoints. This accelerates backend development by exposing REST APIs automatically.
    - **IntelliJ Community Edition** is recommended for consistency in the course, though other IDEs are supported.
    - **Database scripts** provide pre-populated data (22 books) so learners can immediately test APIs without manually inserting records.
    - **Lombok** is introduced to modernize Java development by eliminating repetitive getter/setter code, improving readability and developer productivity.
    
    ---
    
    ## 📌 How
    
    - **Setup**: Install JDK, IDE, Maven, MySQL Workbench.
    - **Database**: Run SQL scripts to create tables (`book`, `checkout_history`, `messages`, `reviews`) and populate book data.
    - **Spring Boot Project**:
        - Create a starter project with dependencies: Spring Boot Starter Data JPA, Spring Boot Starter Data REST, MySQL Connector, Lombok.
        - Define entities (e.g., `Book`).
        - Create repositories extending `JpaRepository`.
        - Spring Data REST automatically exposes endpoints (`/books`, `/books/{id}`) with CRUD operations (GET, POST, PUT, DELETE).
    - **Lombok**: Add annotations like `@Data` to auto-generate getters, setters, equals, hashCode, and toString.
    
    ---
    
    ## 📌 Limitations & Critical View
    
    - **Spring Data REST auto-exposure**:
        - ✅ Fast for prototyping.
        - ❌ Risky in production — exposes all CRUD endpoints without fine-grained control. Security, validation, and business logic may be bypassed.
    - **Database scripts**:
        - ✅ Convenient for demo/testing.
        - ❌ Hardcoded credentials (`root/test1234!`) are insecure. Splitting blobs across multiple files is practical but clunky.
    - **IDE choice**:
        - ✅ IntelliJ is powerful and widely used.
        - ❌ Beginners may struggle with its complexity; Eclipse/VS Code could be lighter alternatives.
    - **Lombok**:
        - ✅ Reduces boilerplate.
        - ❌ Adds dependency and “magic” code generation that can confuse debugging. Some teams avoid Lombok for maintainability concerns.
    - **Assumption of prior Spring Boot experience**:
        - ✅ Speeds up the course for experienced developers.
        - ❌ Beginners may feel lost since the lecture skips fundamentals (e.g., dependency injection, configuration).
    
    ---
    
    ## 🎯 Critical Summary
    
    The lecture provides a **fast-track backend setup** using Spring Data REST and Lombok, which is excellent for rapid prototyping and learning. However, it glosses over **security, maintainability, and customization concerns**. For real-world projects, developers should:
    
    - Add **service layers** instead of exposing repositories directly.
    - Secure endpoints with **Spring Security**.
    - Use **proper database credentials and migrations** (Flyway/Liquibase).
    - Consider whether Lombok fits the team’s coding standards.
    
    ---
    
    👉 In short: The approach is **efficient for learning and demos**, but **limited for production-grade applications**.
    

Great question — let’s clarify how **GET, POST, PUT, DELETE** operations interact with the database **with Spring Data REST** and **without it (manual coding)**.

---

## ⚡ With Spring Data REST

Spring Data REST automatically exposes CRUD endpoints based on your JPA repositories.

### How it works:

1. **Entity**: You define a JPA entity (e.g., `Book`).
2. **Repository**: You create an interface extending `JpaRepository<Book, Long>`.
3. **Spring Data REST**: Scans the repository and auto-generates endpoints.

### Example:

- `GET /books` → Fetch all books from DB.
- `GET /books/{id}` → Fetch a single book by ID.
- `POST /books` → Insert a new book record into DB.
- `PUT /books/{id}` → Update an existing book record.
- `DELETE /books/{id}` → Remove a book record.

👉 Behind the scenes, Spring Data REST calls the repository methods (`findAll`, `findById`, `save`, `deleteById`) which directly interact with the database via JPA/Hibernate.

---

## 🛠️ Without Spring Data REST (Manual Implementation)

You need to explicitly write controllers and services to handle CRUD operations.

### How it works:

1. **Entity**: Define JPA entity (`Book`).
2. **Repository**: Create `JpaRepository<Book, Long>`.
3. **Service Layer**: Write methods like `findAll()`, `findById()`, `save()`, `deleteById()`.
4. **Controller**: Map HTTP endpoints to service methods.

### Example:

```java
@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll(); // GET from DB
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id).orElse(null); // GET by ID
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book); // INSERT into DB
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        book.setId(id);
        return bookRepository.save(book); // UPDATE in DB
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id); // DELETE from DB
    }
}

```

👉 Here, you explicitly control how HTTP requests map to database operations.

---

## 🔍 Comparison

| Operation | With Spring Data REST | Without Spring Data REST |
| --- | --- | --- |
| **GET** | Auto-generated `/books` → calls `findAll()` | Controller method → calls `findAll()` |
| **POST** | Auto-generated `/books` → calls `save()` | Controller method → calls `save()` |
| **PUT** | Auto-generated `/books/{id}` → calls `save()` | Controller method → calls `save()` with ID |
| **DELETE** | Auto-generated `/books/{id}` → calls `deleteById()` | Controller method → calls `deleteById()` |

---

## 🎯 Critical View

- **With Spring Data REST**: Faster, less code, but limited customization. Good for prototypes.
- **Without Spring Data REST**: More effort, but gives full control over validation, security, and business logic. Essential for production systems.

---

👉 In short: Yes, both approaches perform **GET, POST, PUT, DELETE directly on the database via JPA/Hibernate**. The difference is **Spring Data REST auto-generates endpoints**, while **manual coding requires explicit controllers and services**.

### Video 91 - DB setup

- My notes:
    - Create the required tables (`book`, `review`, `checkout`, `messages`, `history`)
    - Insert the book data of 22 records.
- GPT Notes:
    
    Here’s a structured critical summary of that lecture using **What, Why, How, Limitations**:
    
    ---
    
    ## 📌 What
    
    - The lecture explains how to **set up a MySQL database** for the full-stack React + Spring Boot application.
    - It uses **five SQL scripts**:
        - **Script 1** → Creates the database (`react_library_database`) and tables (`book`, `review`, `checkout`, `messages`, `history`).
        - **Scripts 2–5** → Insert 22 sample book records into the `book` table (split due to image blobs).
    - Tables cover core functionality: books, reviews, checkouts, messages, and history.
    
    ---
    
    ## 📌 Why
    
    - The database is the **foundation** of the backend. Without it, the Spring Boot application has no persistent data to serve to the frontend.
    - Splitting book inserts into multiple scripts avoids performance issues caused by **BLOBs** (binary large objects for images).
    - Pre-populated data (22 books) ensures the application can be tested immediately without manual data entry.
    
    ---
    
    ## 📌 How
    
    1. Validate that all five scripts exist in the starter files.
    2. Open MySQL Workbench, log in with credentials (`root` / `test1234!`).
    3. Run **Script 1** → Creates database + tables.
    4. Run **Scripts 2–5** sequentially → Insert book records.
    5. Refresh schemas → Verify tables (`book`, `checkout`, `history`, `messages`, `review`).
    6. Query `SELECT * FROM book` → Confirm 22 books are loaded with metadata (title, author, description, category, copies, image blob).
    
    ---
    
    ## 📌 Limitations & Critical View
    
    - **Hardcoded credentials** (`root/test1234!`) are insecure and unrealistic for production.
    - **BLOB storage for images** is inefficient — storing images directly in DB consumes heavy memory and slows queries. A better approach is storing images in a file system or cloud storage (S3, Azure Blob) and saving only references in DB.
    - **Fake data** (nonsense descriptions) limits realism; good for demos but not for real-world testing.
    - **Manual script execution** is error-prone. In production, migrations should be automated with tools like **Flyway** or **Liquibase**.
    - **Scalability concerns**: Splitting inserts into multiple scripts is a workaround for low compute power, but in enterprise systems, bulk inserts and optimized schema design are preferred.
    - **Schema design**: While functional, the schema is simplistic. For example:
        - `messages` table only supports one message per person → unrealistic for real applications.
        - `history` table duplicates book details (title, author, description, image) instead of referencing the `book` table → leads to redundancy.
    
    ---
    
    ## 🎯 Critical Summary
    
    The lecture successfully sets up a working database with sample data, which is essential for learning and prototyping. However, the approach is **demo-oriented** and not production-ready. Key issues include insecure credentials, inefficient image storage, manual migrations, and simplistic schema design. For real-world projects, developers should adopt **secure authentication, external image storage, automated migrations, and normalized schema design**.
    
    ---
    
    ### Mosh ourse on springboot
    
    #### Core 1
    
    - Covers:
        - intro to springboot
        - depdendency injection
        - Database integration with spring Data JPA
    - Leap 1:
        - Includes - intro,create  project,understand it structure,depedndencies.
        - Spring ( framework in java)[core,web,data,AOP,etc] ⇒ springboot ( that easies the defaut things of spring) ⇒ this main feature is modular.
        - java,IDE/code editor,build tools( for building and packaging our app) [maven,gradel,etc]
        - Create project ⇒ way1 ) [start.spring.io](http://start.spring.io)  ( dependencies are 3rd party lib and project we are going to use in our project) . way2) Intellij → generator → spring boot.
        - Project structure ⇒
            - .idea → configuration files for the intellij
            - .mvn → contains the wrapper veriosn of maven for this project ⇒ then this verison is downloaded and installed for this project locally by the mvnw.cmd in the root folder.
            - pom.xml (project object model)→ contains the maven configuration and dependencies ⇒ is heart of the maven project.
            - src → main → java ⇒ for the java codes
            - src →main →resources ⇒ non java codes like html,dependencis,css.
            - src → test → automatic test files.
            - src → main →resources →application.properties  ⇒ contains the configuration file with key-vlaue pairs. [e.g. port,database,etc]
            - src →main →java →com.gaja.store → [storeApplication.java](http://storeApplication.java) ⇒ contains the main method of the java.
        - Dependency management:
            - dependencies are 3rd party libs and framework that are used in this project.
            - e.g. tomcat,web,etc ⇒ all related and most used interdependent dependencies are aptly grouped by the springboot developer named springbbot-satrter-web
            - 2ways → 1) from maven central web and 2) ctrl+n ( in intelliji)
            - maven panel →1)repositories 2)dependencies e.g. springboot-starter-we ( contain tomcat,json,web,etc)
        - Springboot controller:
            - Spring MVC → Model(data+logic; connects with the DBs and have simple java class for logic) + view ( the HTMl that nned to be rendered) + Controller( the user intereact and gets the data from model and tells the view , what to present).
            - annotation → gives more context understanging( of class,method,params,etc) to the springboot. (e.g. controller,requestmapping)
            - RequestMapping →/,/about,etc ⇒ then return a view.
        - Run the project → ways 1) intellij 2)maven maven.cmd spring-boot:run
        - Debugging the code ⇒ ways 1) system.out.print 2)intellij debug tool( chackpoint,step over,step into,resume,etc)
    - Automatic restart :
        - dependency ⇒spring-boot-devtools
        - settings→complier→build automatically.
        - advanced setting →auto-make
    - Configuring application properties:
        - src→main→resources→application.properties ⇒ to configure and also custome values.
        - for custom vlaue use the @value annotation to use them in the code.
- Depdency injection:
    - dendency/coupling b/w classes. e.g. orderserices depends on strippayemnt ⇒ not test orderserices , any change in stripepayment to paypal then need to change orderservices also.
    - so, orderserivces → depends on interface named paymentprocess → that is implemetd by the payaplpaymnet process, strippaymentprocoess,etc. This gives the object of the payment process to pass to / inject to the orderservices.
    - This is called dependency inject one of most useful feature of springboot.
    - select the class → then refactor → interface with changed name and the method included.
- Constructor injection:
    -