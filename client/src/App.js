import React, {useEffect, useState} from "react";
import './App.css';
import API from "./utils/API";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import QueryResults from "./components/QueryResults";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SavedList from "./pages/SavedList";


function App() {
  const [params, setParams] = useState({ search: "", type: ""});
  const [results, setResults] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    API.getBooks().then((books) => setBookList(books.data));
  });

  const updateSearch = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value});
  };

  const updateType = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value});
  };

  const searchGoogleBooksAPI = (e) => {
    e.preventDefault();
    if (params.search !== "" && params.type !== "") {
      API.search(params.type, params.search).then((response) => {
        console.log("Found results were: ", response.data.items);
        setResults(response.data.items);
      });
    }
  };

  const commitSave = async (obj) => {
    await API.saveBook(obj);

    await API.getBooks().then((books) => setBookList(books.data));

     console.log(bookList);
  };

  const commitDelete = async (id) => {
    await API.removeBook(id);

    await API.getBooks().then((books) => setBookList(books.data));
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <SearchForm
            search={updateSearch}
            type={updateType}
            submit={searchGoogleBooksAPI}
            />
            <QueryResults results={results} save={commitSave} />
          </Route>
          <Route exact path="/saved">
            <SavedList books={bookList} commitDelete={commitDelete} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
