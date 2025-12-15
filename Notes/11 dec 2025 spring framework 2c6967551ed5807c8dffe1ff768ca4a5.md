# 11 dec 2025 spring framework

Date: December 11, 2025

## Key Takeways

1. 

## Action

---

- [ ]  

## Notes

# Module 1:

---

### what is spring framwork:

- Lightweight → no require of JAVA EE server
- OPensource
- Framework → not just lib. And supports integration with many other tools and framework in DB,security,web,etc
- Depdencency inject → is the core feature of the spring

### Spring history

- adapted to new techonologies
- Verstaile
- focus on core business logic . not on like dependencies.

### lab1

Here’s a clear summary of the **Spring Overview Lab** page you’re viewing:

---

### 🌱 Purpose

- Introduces the **Reward Network reference application**.
- Helps you understand the tools and project structure used throughout the course.
- Focus is on building clean application logic decoupled from infrastructure APIs.

---

### 📚 Learning Outcomes

- Grasp the **project structure** and **RewardNetwork domain/API**.
- Learn how key components interact within the domain.
- See that business logic can be developed and unit tested without Spring.
- Later labs will show how this same code runs in a Spring environment unchanged.

---

### ⚙️ Prerequisites

- JDK 11 or 17 installed.
- Java IDE ready.
- Download and unzip the lab codebase.
- Run `./mvnw clean install` (Maven) or equivalent Gradle setup.

---

### 🧩 Use Case

- Implement and test the Rewards Network application using **Plain Old Java Objects (POJOs)**.
- Goal: get comfortable with tools and application concepts before adding Spring.

---

### 📝 Instructions (Key Tasks)

1. **Review Rewards Application** – background on the Rewards domain.
2. **Review Dependencies** – check Maven/Gradle dependency trees.
3. **Explore Rewards Common Project** – contains reusable types (e.g., `MonetaryAmount`, `Percentage`).
4. **Understand RewardNetwork Interface & Implementation** – central element of the app.
5. **Review RewardNetworkImpl Configuration** – depends on `AccountRepository`, `RestaurantRepository`, `RewardRepository`.
6. **Implement Logic** – write `rewardAccountFor(Dining)` using the sequence diagram.
7. **Return Reward Confirmation** – via `rewardRepository.confirmReward()`.
8. **Unit Testing** – enable and run `RewardNetworkImplTests` with stub repositories.

---

### ✅ Summary

- You build and test a realistic Java component in isolation.
- Application logic remains clean and decoupled from infrastructure.
- Sets the foundation for later labs where Spring will wire real repository implementations.

---

### Tasks done on this day:

1. understaood that I am not able get the concepts from spring academy
2. Datapy exploration under Navin
3. Courses searched and asked with Akash and Kalinga raj for sugesstion ⇒ they pointed to sundar for that.

### Understanding of Datapy

1. Resource group → is foundation head that contains various companies and if clicked we moved to specific company resources ( dataset,dashboard,etc)
2. Dashboard contain various dashborads created using the dataset . these are collection of chart with specific purpose if need. [ No story like feature in tableau using dashboards]
3. Dataset contain as dataset imported.
4. Dataset links → under construction. From it input form able to get that it is like joins.
5. Forms → not sure of this feature
6. Project is useful to run a custome python code to generate dataset from that code.
7. DB connection → not sure of that. may be connected DBs.
8. Webhooks → not sure. but stated as trigger that likely nudge to a specific code exection
9. org units→ likely to group the users in specific org.
10. Users → user details mostful features is role 

1. Charts supporting → 
    1. uni variant anlaysis( box plot, bar plot for numeric and categorical variable resp.)
    2. Bi variant analysis ( num vs num (scatter), numVScat (bar plot) supported) but cat vs cat is not supported.
    3. multi variant analysis supports num vs num vs cat. but not num vs num vs num,etc
    4. Python code for ML models are working and albe to plot the train vs test result to find the good fit model.
    5. Various charts are supported but unclear on something like heatmap ( which not need any axis expect the datframe in general case)
    6. only y-axis basic aggeration like sum,avg,min,max support. 
    7. No support on % which is most useful in compariosn.
    8. Filter and sorting are supported. ( but I am not able to working chart create based on that)

["### Understanding of Datapy...](https://copilot.microsoft.com/shares/oFLXUhx8ny8BjDvuGMHqP)