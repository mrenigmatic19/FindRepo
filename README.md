# FindRepo :- Find Repositories by Username [Live](https://solvedsa.com)
## Introduction:
 This project involves creating a web page that displays public Github repositories belonging to a specific user. The main goal is to design a user-friendly interface with functionality to retrieve and showcase repository information.
![Screenshot 2024-01-21 190203](https://github.com/mrenigmatic19/FindRepo/assets/96334291/e6176951-c084-4f80-b5c1-49ad68328e61)

## Prerequisites:
To run this website, you need to have the following installed on your computer:

- Node.js

## Getting Started:

- Clone the repository from the Github link provided.
- Install all the dependencies using the following command:
```bash
# install locally (recommended)
npm i connect-flash ejs express express-session fs 
npm i http node-fetch nodemon package-lock-only path
```
- Create a new terminal window and start the Node.js server using the following command:
```bash
npm run start-dev
```
- Open your web browser and go to the following URL:
`http://localhost:3001/`

## Website Features:

1. **GitHub API Integration:**
   - Developed a custom API for seamless integration with the GitHub REST API.
   - Ensured efficient and secure data retrieval from GitHub repositories.

2. **Dynamic Pagination Implementation:**
   - Implemented server-side pagination for a fluid and responsive user experience.
   - Users can easily navigate through repositories, with default pagination set at 10 items per page.

3. **User-Friendly Search Page:**
   - Crafted an intuitive search page, enhancing user interaction and accessibility.
     ![Screenshot 2024-01-21 191538](https://github.com/mrenigmatic19/FindRepo/assets/96334291/89ae6d74-5aae-4b42-9b88-5ce86db1b2b5)

4. **Result Page Enhancement:**
   - Designed a visually appealing result page displaying user details and repositories.
     ![Screenshot 2024-01-21 191959](https://github.com/mrenigmatic19/FindRepo/assets/96334291/fdf13915-2492-42de-a973-5b21a22f32b2)
   - Showcased repository information, including name, description, and up to three primary languages used.

5. **Detailed Repository View:**
   - Enabled users to click on a repository for an in-depth view.
     ![Screenshot 2024-01-21 191914](https://github.com/mrenigmatic19/FindRepo/assets/96334291/85cf45aa-e589-4029-80b8-f979b121a51e)
   - Facilitated a seamless transition to the selected repository.

6. **Loader Integration:**
   - Implemented loaders during data fetching and processing stages, ensuring a polished and responsive interface.

7. **Hosting on https://www.solvedsa.com:**
   - Successfully deployed and hosted the project on solvedsa.com for convenient access.
     ![Screenshot 2024-01-21 191637](https://github.com/mrenigmatic19/FindRepo/assets/96334291/2bbe44df-a257-41b0-b6e7-5f1029a364d2)

8. **Technology Stack:**
   - Utilized HTML, CSS, Bootstrap, and JavaScript (Node.js, Express.js).
   - Demonstrated proficiency in modern web development technologies.

9. **User-Defined Items Per Page:**
   - Empowered users to set the displayed items per page within the range of 1 to 100.
   - Default setting optimized at 10 items per page for a balanced user experience.
     ![Screenshot 2024-01-21 191914](https://github.com/mrenigmatic19/FindRepo/assets/96334291/41551356-3e9d-4182-8bca-ea7edd9c101e)
   - Look at lower right corner.

These achievements collectively deliver a comprehensive and user-centric GitHub Repositories Explorer, showcasing technical prowess and thoughtful design.
  
## Conclusion:
In summary, this project is a user-friendly Github Repositories Explorer. It integrates seamlessly with the GitHub API, offering dynamic pagination, a user-friendly search page, and a detailed result view. Loaders enhance responsiveness, and the project is hosted on solvedsa.com. Built with HTML, CSS, Bootstrap, and JavaScript (Node.js, Express.js), it provides an efficient and accessible platform for exploring Github repositories. Users can easily define the items per page, showcasing adaptability and thoughtful design.
