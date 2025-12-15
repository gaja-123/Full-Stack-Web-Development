# 10 dec 2025 Sprinboot from spring academy 1

Date: December 10, 2025

## Key Takeways

1. 

## Action

---

- [ ]  

## Notes

---

### IMplemeting GET

---

# 🌐 REST, CRUD, and HTTP — Simplified Explanation

---

## 1. What is REST?

- **REST** stands for **Representational State Transfer**.
- It’s a way of designing APIs so that you can manage and interact with **resources** (data objects).
- In REST:
    - A **Resource Representation** = an object (like a Cash Card).
    - A **State** = the value of that object (like its balance).
- REST APIs let you manage these resources, usually stored in a database, through HTTP requests.

---

## 2. CRUD Operations

- **CRUD** = the four basic actions you can perform on data:
    - **Create** → Add a new resource.
    - **Read** → Retrieve an existing resource.
    - **Update** → Modify an existing resource.
    - **Delete** → Remove a resource.

REST maps each CRUD operation to a specific **HTTP method**:

- Create → `POST`
- Read → `GET`
- Update → `PUT`
- Delete → `DELETE`

---

## 3. HTTP Basics in REST

REST uses **HTTP** as the communication protocol.

Every interaction has two parts:

### Request

- **Method (Verb):** What action you want (GET, POST, PUT, DELETE).
- **URI (Endpoint):** The address of the resource (e.g., `/cashcards/42`).
- **Body:** Data you send (only for Create/Update).

### Response

- **Status Code:** Result of the request (e.g., `200 OK`, `201 CREATED`).
- **Body:** Data returned (usually JSON).

---

## 4. Example: Cash Card API

Imagine an API that manages **Cash Cards**:

| Operation | Endpoint | HTTP Method | Response Status |
| --- | --- | --- | --- |
| Create | `/cashcards` | POST | 201 (CREATED) |
| Read | `/cashcards/{id}` | GET | 200 (OK) |
| Update | `/cashcards/{id}` | PUT | 204 (NO CONTENT) |
| Delete | `/cashcards/{id}` | DELETE | 204 (NO CONTENT) |
- **Create:** No ID provided — the system generates one.
- **Read/Update/Delete:** You must provide the unique ID of the resource (e.g., `/cashcards/42`).

---

## 5. Request Body

- For **Create** and **Update**, you send data in the request body.
- Example: Creating a Cash Card might include an initial amount.
- For **Read** and **Delete**, the body is empty — you only need the ID.

---

## 6. Example Walkthrough

**Read Cash Card with ID 123:**

### Request

```
Method: GET
URL: http://cashcard.example.com/cashcards/123
Body: (empty)

```

### Response

```
Status Code: 200 OK
Body:
{
  "id": 123,
  "amount": 25.00
}

```

This means the Cash Card with ID 123 exists and has a balance of 25.00.

---

## 🎯 Key Takeaways

- REST is about managing resources via HTTP.
- CRUD maps to HTTP methods: POST, GET, PUT, DELETE.
- Requests have a **method, URI, body**; responses have a **status code, body**.
- Example: `/cashcards/123` → GET request returns the Cash Card with ID 123.
- Create doesn’t need an ID; the system generates it.

---

---

# 🌐 REST in Spring Boot — Simplified Explanation

---

## 1. Spring IoC Container

- **IoC (Inversion of Control) container** is the core of Spring.
- It manages **Spring Beans** (objects created and configured by Spring).
- Instead of using `new` to create objects, you let Spring create them.
- Beans are stored in the IoC container and can be **injected** wherever needed.

---

## 2. Spring Annotations & Component Scan

- **Annotations** tell Spring what to do.
- During **Component Scan** (at application startup), Spring looks for annotated classes and creates beans.
- Example:
    
    ```java
    @RestController
    class CashCardController { }
    
    ```
    
    - `@RestController` tells Spring: *“This class is a REST controller, create a bean for it.”*
    - Spring then wires it into the web layer so it can handle HTTP requests.

---

## 3. Spring Web Controllers

- A **Controller** is a class that handles incoming HTTP requests.
- `@RestController` is a specialized controller for REST APIs.
- Once registered, Spring routes requests to the correct method inside the controller.

---

## 4. Handler Methods

- A **handler method** is a function inside the controller that processes a specific request.
- Example start:
    
    ```java
    private CashCard findById(Long requestedId) { }
    
    ```
    
    - This method is meant to handle “find CashCard by ID” requests.

---

## 5. Mapping Requests with `@GetMapping`

- REST says **Read** operations use `GET`.
- `@GetMapping` tells Spring: *“Call this method when a GET request comes to this path.”*
- Example:
    
    ```java
    @GetMapping("/cashcards/{requestedId}")
    private CashCard findById(Long requestedId) { }
    
    ```
    
    - The `{requestedId}` part is a placeholder for the actual ID in the URL (e.g., `/cashcards/42`).

---

## 6. Using `@PathVariable`

- Spring needs to know how to pass the ID from the URL into the method.
- `@PathVariable` binds the URL value to the method parameter.
- Example:
    
    ```java
    @GetMapping("/cashcards/{requestedId}")
    private CashCard findById(@PathVariable Long requestedId) { }
    
    ```
    
    - If the request is `/cashcards/42`, then `requestedId = 42`.

---

## 7. Returning a Response with `ResponseEntity`

- REST requires a **Response body** and a **Status code**.
- `ResponseEntity` is a Spring helper that lets you build responses easily.
- Example final implementation:
    
    ```java
    @RestController
    class CashCardController {
      @GetMapping("/cashcards/{requestedId}")
      private ResponseEntity<CashCard> findById(@PathVariable Long requestedId) {
         CashCard cashCard = /* code to retrieve CashCard */;
         return ResponseEntity.ok(cashCard); // 200 OK + JSON body
      }
    }
    
    ```
    
    - Returns:
        - **Status Code:** `200 OK`
        - **Body:** JSON representation of the `CashCard` object

---

## 🎯 Key Takeaways

- Spring Boot uses **IoC + Annotations** to manage beans.
- `@RestController` creates a REST controller bean.
- `@GetMapping` maps HTTP GET requests to handler methods.
- `@PathVariable` injects values from the URL into method parameters.
- `ResponseEntity` builds proper HTTP responses with status codes and JSON bodies.

---

✅ **In short:** This example shows how Spring Boot lets you quickly build a REST endpoint: you annotate a controller, map a GET request to a method, bind the URL parameter with `@PathVariable`, and return a proper JSON response using `ResponseEntity`.

---

### Implemeting GET ( lab)

Got it 👍 — let’s break this test down step by step so you really understand what’s happening and why it matters.

---

## 🧪 Purpose of the Test

This test is verifying that your Spring Boot REST API endpoint (`/cashcards/99`) is working correctly. Specifically, it checks that when you send an HTTP GET request to that endpoint, the application responds with a **200 OK** status code.

---

## 🔍 Key Elements Explained

### 1. `@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)`

- This annotation **boots up your entire Spring Boot application** for testing.
- The `RANDOM_PORT` option means the app will start on a random port instead of the default (8080).
👉 This avoids conflicts if another app is already running on 8080.

---

### 2. `@Autowired TestRestTemplate restTemplate;`

- `TestRestTemplate` is a **Spring-provided helper** for making HTTP requests in tests.
- By using `@Autowired`, Spring injects an instance of this helper into your test class.
- Think of it as a lightweight client that lets you call your own API endpoints as if you were an external user.

---

### 3. `ResponseEntity<String> response = restTemplate.getForEntity("/cashcards/99", String.class);`

- Here, you’re making an **HTTP GET request** to `/cashcards/99`.
- `getForEntity` sends the request and expects a response body of type `String`.
- The result is wrapped in a `ResponseEntity`, which contains:
    - The **status code** (e.g., 200 OK, 404 Not Found).
    - The **headers** (metadata about the response).
    - The **body** (the actual data returned).

---

### 4. `assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);`

- This is the **assertion** part of the test.
- It checks that the status code returned is `HttpStatus.OK` (which equals 200).
- If the endpoint doesn’t return 200, the test fails — alerting you that something’s wrong with your API.

---

## 🧩 Why This Matters

- This test ensures your REST API is **reachable** and **responds correctly**.
- It’s a **smoke test**: a simple check that the endpoint is alive and behaving as expected.
- Later, you’ll expand tests to check the **response body**, **headers**, and more complex scenarios.

---

✅ **In short:**

This test spins up your Spring Boot app, uses a helper (`TestRestTemplate`) to call the `/cashcards/99` endpoint, captures the response, and verifies that the server replies with a 200 OK status. It’s the foundation for building confidence in your REST API.

---

Perfect — let’s unpack this failure carefully so you see why it’s happening and why it’s actually a **good sign** in test‑first development.

---

## 🧪 What Happened When You Ran the Test

- You ran `./gradlew test`, which executed your JUnit test class `CashCardApplicationTests`.
- The test tried to call the endpoint `/cashcards/99` using `TestRestTemplate`.
- The assertion expected the response to be **200 OK**.
- Instead, the response was **404 NOT_FOUND**, so the test failed.

---

## 🔍 Why Did It Fail?

- **Test‑first practice**: You wrote the test before writing the actual implementation.
👉 This means the endpoint `/cashcards/99` doesn’t exist yet.
- Spring Boot started your application, but since you haven’t defined a controller method to handle `GET /cashcards/{id}`, Spring Web doesn’t know what to do.
- By default, when Spring receives a request for an undefined endpoint, it automatically returns **404 NOT_FOUND**.

---

## 🧩 Understanding the Error Message

```
expected: 200 OK
but was: 404 NOT_FOUND

```

- **Expected**: Your test says “I want this endpoint to exist and return OK.”
- **Actual**: Spring says “Sorry, I don’t have that endpoint, so I’ll return NOT_FOUND.”

This mismatch is exactly what you want at this stage — the test is telling you what’s missing.

---

## 🚦 Why This Is Good

- The failure confirms your test is running correctly.
- It shows that Spring Boot is handling requests as expected (returning 404 for unknown endpoints).
- It sets the stage for you to now **implement the controller** that will satisfy the test.

---

✅ **In short:**

The test failed with 404 because you haven’t yet told Spring how to handle `GET /cashcards/99`. Spring Web automatically returns NOT_FOUND for undefined endpoints. This is expected in test‑first development — the failure guides you to implement the missing functionality.

---

### **Repositories & Spring Data**

.

---

## 🧩 The Problem So Far

- Right now, your controller returns a **hard-coded Cash Card object**.
- That means the data isn’t coming from a real database — it’s just fixed in code.
- This violates the **Separation of Concerns principle**:
    - The controller is supposed to handle **web requests/responses**.
    - The database logic (reading/writing data) should be handled elsewhere.
- Mixing these responsibilities makes the code harder to maintain, test, and scale.

---

## 🏛️ Layered Architecture

Software is often divided into **layers**, each with its own responsibility:

- **Presentation Layer (Controller)** → Talks to the client (browser, API consumer).
- **Business Layer (Service, optional)** → Contains business rules/logic.
- **Data Layer (Repository)** → Talks to the database.

👉 In your case:

- The **Controller** is near the client (handles HTTP requests).
- The **Repository** is near the database (handles queries and persistence).
- Later, you may add a **Service layer** if business logic grows complex.

---

## 📚 The Repository Pattern

- A **Repository** acts as an **interface between your application and the database**.
- It abstracts away the details of how data is stored/retrieved.
- Benefits:
    - Keeps controllers clean (no SQL or DB code inside them).
    - Makes switching databases easier (e.g., H2 → MySQL → PostgreSQL).
    - Provides a consistent way to access data.

---

## 🚀 How Spring Data Helps

- Spring Data provides **ready-made implementations** of the Repository pattern.
- Example: `CrudRepository` or `JpaRepository`.
- You just define an interface like:
    
    ```java
    interface CashCardRepository extends CrudRepository<CashCard, Long> { }
    
    ```
    
- Spring Boot + Spring Data will automatically generate the implementation at runtime.
- This means you can call methods like `findById()`, `save()`, `delete()`, without writing SQL yourself.

---

## ✅ In Short

- Controllers should **handle HTTP requests**.
- Repositories should **handle database operations**.
- Spring Data makes this separation easy by giving you plug‑and‑play repositories.
- This sets up a clean **Layered Architecture**, where each part of your app has a clear responsibility.

---

![image.png](image.png)

---

## 🗄️ Choosing a Database

- **Embedded database**: It’s packaged as a Java library, so you just add it as a dependency — no external installation needed.
- **In-memory database**: Stores data only in memory, not on disk.
👉 This means every time you restart or rerun tests, the database starts fresh (empty).
- **Compatibility**: Even though it’s lightweight, it still uses **JDBC** (Java Database Connectivity) and **SQL**, so it behaves like production-grade databases (MySQL, SQL Server, PostgreSQL, etc.).

### ⚖️ Trade-offs

- **Pros**: Easy setup, no external RDBMS installation, clean state for every test run.
- **Cons**: Data isn’t persistent, so you can’t use it for production.
This creates a **Dev-Prod Parity mismatch** — your app may behave slightly differently in dev vs. production.

👉 That’s why we use **H2** for local development and testing. It’s highly compatible with other relational databases, so the mismatch is minimal.

---

## ⚙️ Auto Configuration

- Normally, you’d have to manually configure Spring Data to connect to H2.
- With **Spring Boot Auto Configuration**, just adding the right dependencies (Spring Data + H2) is enough.
- Spring Boot automatically wires everything up so your app can talk to H2 without extra setup.

---

## 📚 Spring Data’s `CrudRepository`

This is where the “magic” happens.

### Example:

```java
interface CashCardRepository extends CrudRepository<CashCard, Long> { }

```

- By extending `CrudRepository`, you instantly get all CRUD (Create, Read, Update, Delete) operations without writing SQL.
- Example usage:
    
    ```java
    cashCard = cashCardRepository.findById(99);
    
    ```
    
- Notice: You didn’t write the implementation of `findById()`.
👉 Spring Data generates it for you at runtime, based on the entity (`CashCard`) and ID type (`Long`).

### How it works:

- `CrudRepository` is just an **interface** — no code inside.
- At application startup, Spring Data JDBC creates the actual implementation.
- Spring registers it as a **bean**, so you can inject and use it anywhere in your app.

---

## ⚖️ Trade-offs of `CrudRepository`

- **Pros**: Saves time, reduces boilerplate, handles common queries automatically.
- **Cons**: Generated SQL may not cover complex cases.
👉 For advanced queries, you’ll sometimes need to write **custom SQL** or use **@Query annotations**.

---

## ✅ In Short

- You’re starting with **H2 in-memory DB** for convenience in development.
- **Spring Boot Auto Configuration** makes setup trivial — just add dependencies.
- **Spring Data’s CrudRepository** gives you plug‑and‑play CRUD operations without writing SQL.
- Later, you can swap H2 for a production database (like MySQL/PostgreSQL) with minimal changes.

---

![image.png](image%201.png)

### STopped and need to continue on Spring framework