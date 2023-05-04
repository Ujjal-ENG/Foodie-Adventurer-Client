
# Project Title: Foodie Adventurer

"Foodie Adventurer" is a restaurant website that offers a variety of Indian cuisine. The website features a homepage with different types of food offered to easily find desired dishes and chefs. Users can browse through the chefs' profiles and view their number of years of experience, number of recipes, likes, and their picture. Users can also view the ingredients and instructions for each recipe, and add their favorite recipes to a favorite list.

The website is built using React.js for frontend, backend used Node Js on the top of the Express JS framework and Firebase for authentication purposes, and features authentication for users to create and manage their account information. The website is fully responsive, allowing users to easily access and navigate the site from their mobile devices.

The chefs featured on the website are all Indian, providing a unique cultural experience for users to learn more about Indian cuisine and cooking. Overall, "Foodie Adventurer" offers a convenient and enjoyable way to explore and learn about Indian cuisine.

## Features of this Project

### Home Page
- On the homepage, users first see a banner image with text and slider cards at the top. On the left side of the homepage, there is some text, and on the right side, there is a slider card. When the user moves the slider, the banner image changes based on the position of the sliders.

- After that, users see the Chefs card, which moves after 3 seconds. If the user wants to change it by default, they can do so. Each Chef's card shows the chef's experience, recipes, likes, and a **'View Recipe'** button. If the user clicks the 'View Recipe' button without logging in, they will be redirected to the login page. After logging in, the user will be redirected to where they were before the login page. **This page mainly shows each chef's details, including the banner and the special cuisine the chef offers.**

- Then users see the unique and stunning offerings that we provide, which are the reasons they come to our website or restaurant. We offer many things to help our users, and they can benefit from them.

- Then users will see 'Our Story,' which mainly shows the reasons behind the Foodie Adventurer concept.

- Finally, there is the footer, which provides links for users to explore the best cuisine states in India.

### Blog Page

- On the blog page, users first see a button to download the information as a PDF. This button is mainly used to download the information on the cards, as there are four cards in total.

- In the blog page, users secondly see four cards that mainly contain questions and answers based on React.

### About Us Page

- The AboutPage component consists of a div container that contains the title of the page, four sections with information about the cuisine, location, accommodations, and hours of operation of the restaurant, and a Maps component that displays a Google Map with the location of the restaurant.

- Each section of the page has a header with an icon, a title, and a paragraph with information about the corresponding topic. The sections are displayed side by side on large screens and stacked on smaller screens. The animation of the sections consists of a fade-in effect combined with a slight upward movement.

### My Favorite Foods Page

- After logging in, the user will see a navbar with various links, including "My Favorite Foods". When they click on this link, they will be taken to a page where they can see their favorite food items. These items are based on the chef they selected when they clicked the "Add to Favorite" button on the chef's profile page. The page will display the food item's name, an image of the dish, and some information about it, such as the ingredients used, the cooking method, and the chef's personal notes or tips. The user can also remove items from their favorites list by clicking the "Remove" button next to each item. This page allows the user to easily keep track of their favorite dishes and find them quickly when they want to order or cook them again.

### Navbar section
- The navbar section displays different links based on whether the user is logged in or not. If the user is not logged in, they will only see a "Login" button. However, once they log in, the "Login" button will be replaced with an avatar image and a "Logout" button.

- On the avatar if user hover it then show the login name if exists, and if user click the avatar then it show a modal with some information based on the login, like profile picture, name and email. If user want to update the profile picture and the name then he can.

### Data Fetching & Animation

- For Data fetching use axios and React Route Dom Loader.
- For give visual animation Used Framer Motion, AOS.
- For Image Loading, Used React Lazy Loader.
- For Slider Used Swiper JS.
- For Map user React LeafLet.

**Several Types of Packages Used in this Project**

## Live Site Link

You can visit the Live Site at [https://foodie-adventurer.web.app/]

## Author

My name is Ujjal Kumar Roy and I recently graduated with a degree in Computer Science and Engineering. I am passionate about web development and love to build things that people can use. In my free time, I enjoy playing cricket and listening to music.

- Facebook: [Ujjal Kumar Roy](https://www.facebook.com/ujjal.roy.7862/)
- LinkedIn: [Ujjal Kumar Roy](https://www.linkedin.com/in/ujjal-kumar-roy/)

If you have any feedback or suggestions for this project, feel free to contact me at ujjalroy7862@gmail.com