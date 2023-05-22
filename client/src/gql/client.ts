import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

//https://www.apollographql.com/docs/react/networking/authentication/#cookie
export default new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
    },
  },
  link: authLink.concat(createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    credentials: "include",
  })),
});
