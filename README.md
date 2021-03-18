# MERN_Google_Books_Search
A React-based app that handles Google Books API searches to query book information and utilizes MongoDB to manage a list of books.

## Description

The app uses `npx create-react-app` to get the basic boilerplate and then components are created to render content to a single page application. This app relies on the Google Books API to enable a search function that we pass by entering a string into a query form and specifying whether we're looking it up by title or author category. 

By setting the parameters in our component we render a thumbnail image of a book cover (if available within the API), the title, author(s), a synopsis of the book, and a link to more details in a new browser tab.

Additionally, a button to save a book to a user's list is part of the component QueryResults. **At present time I'm getting an error when clicking this as it's not passing the ID or any other info the SavedList page**

## SAMPLE
Link to deployed app in Heroku: [Basic Google Books API Search app](https://hector-gm--google-books-search.herokuapp.com/)

![Sample of Deployed App](./hector-gm--google-books-search.herokuapp.com_.png)