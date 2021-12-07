import React, { useEffect, useState, createContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile"
import Signup from "./components/Signup";
import Login from "./components/Login";
import PictureID from './components/Picture/PictureID'

// import Comments from "./components/Comments/index.js";
// import Favorites from "./components/Favorites/index.js";

import Navbar from "./components/Navbar/index.js";
import Auth from "./utils/auth";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  let user = "";
  // return the headers to the context so httpLink can read them
  if(token){
    user = Auth.getID();
  }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      userID: user, 
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
 
});

const checkLoggedIn = () => {
  const logged = Auth.loggedIn()
  if(logged){
    const ID = Auth.getID()
    return ID
  }
  return ""
}

export const UserID = createContext(null);

function App() {
  const [userID, setUserID] = useState("");

  useEffect(() => {

    setUserID(checkLoggedIn())


  }, [])

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <UserID.Provider value={{userID, setUserID}}>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route path="/pictures/:pictureid" element={<PictureID />} />
            
            <Route exact path="/logout" render={() => (

              // eslint-disable-next-line no-sequences
              setUserID(""),
              localStorage.removeItem('id_token'),

              <Navigate to="/" />
            )} 
            />

          </Routes>



        </UserID.Provider>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;