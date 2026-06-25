# Documentation

## Walk Trough Application
This app uses React to manage the user interface (UI) and state, Tailwind for styling responsiveness, and LocalStorage to store data when users join a club.

### 1. Navbar 
Each page will have a navigation bar, which is used to navigate between pages. The navigation bar includes "Home," "Club," and "About," which will take you to their respective pages. 

![Description](./public/img/docs/DOCS_01_NavbarDesktop.png)

The navbar will also switch to a vertical hamburger menu when users are on non-desktop devices\
![Description](./public/img/docs/DOCS_02_NavbarMobile.png)


### 2. Home
The app starts at "/", which is the home page. The home page features a navigation bar and a "Join Now" button that directs users to /clubs
![Description](./public/img/docs/DOCS_03_Home.png)

### 3. Clubs
The "/clubs" section features a navigation bar and several club options that users can choose from. This page provides a brief overview of the clubs available to users and includes the following features:
![Description](./public/img/docs/DOCS_04_ClubList.png)

#### 3.1 Sortby
This feature is used to sort clubs according to the user's preference; the options available are A–Z and Z–A.
![Description](./public/img/docs/DOCS_05_SortBy.png)

The "A-Z" or "ascending" option is used to sort club names alphabetically. The following is the result of sorting the club names in A-Z or ascending order.
![Description](./public/img/docs/DOCS_04_ClubList.png)

The "Z-A" or ‘descending’ option is used to sort club names in reverse alphabetical order. The following is the result of sorting club names using the "z-a" or "descending" option.
![Description](./public/img/docs/DOCS_06_ZA.png)

#### 3.2 Mode
Under "/clubs," there is also a feature to change the club display mode; there are two display options: list and grid. \
![Description](./public/img/docs/DOCS_07_DisplayMode.png)

The grid will display the clubs in a grid layout, horizontally, then wrapping to the next row. Here is the result of the grid
![Description](./public/img/docs/DOCS_04_ClubList.png)

The list will display the clubs in a vertical list. Here are the results of the list
![Description](./public/img/docs/DOCS_08_DisplayModeList.png)

#### 3.3 See more
In the "/clubs" section, each club will have a "See More" button. This button is used to redirect users to "/clubs/:detailClubName". 
![Description](./public/img/docs/DOCS_09_SeeMore.png)

### 4. Clubs/:detailClubName
Here are the results: when you click "See More," you'll be redirected to "/clubs/:detailClubName"
![Description](./public/img/docs/DOCS_10_ClubDetail.png)

The clubname details page will display comprehensive information about the club selected by the user; this page also includes a "Join This Club" button. When this button is clicked, a confirmation prompt will appear asking whether the user wants to join the club. 

![Description](./public/img/docs/DOCS_11_Confirmation.png)

If the user declines, they will be redirected to the /club/:detailClubName page; however, if the user agrees, the user’s confirmation will be stored in local storage, and the button will change to "Already Joined" and its color will change. Once the user has joined, they cannot click the "Already Joined" button to leave the club.\
![Description](./public/img/docs/DOCS_13_Disabled.png)

Users can still join other clubs without any restrictions.\
![Description](./public/img/docs/DOCS_14_Join2.png)

### 5. About
The "About" page contains a brief overview of this project
![Description](./public/img/docs/DOCS_15_About.png)

### 6. Not Found
The "Not Found" page is used as a guard for the / path, which is not available for users to browse.\
For example, a user tries to access the /test page\
![Description](./public/img/docs/DOCS_16_Example.png)\
"Not found" will appear 
![Description](./public/img/docs/DOCS_17_NotFound.png)