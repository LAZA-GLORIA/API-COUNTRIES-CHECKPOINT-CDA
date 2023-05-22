import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://countries.nausicaa.wilders.dev/",
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
    },
  },
});

export default client;

// import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// //https://www.apollographql.com/docs/react/networking/authentication/#cookie
// export default new ApolloClient({
//   uri: "https://countries.nausicaa.wilders.dev/",
//   cache: new InMemoryCache(),
//   defaultOptions: {
//     query: {
//       fetchPolicy: "cache-first",
//     },
//   },
//   link: authLink.concat(
//     createHttpLink({
//       uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
//       credentials: "include",
//     })
//   ),
// });
