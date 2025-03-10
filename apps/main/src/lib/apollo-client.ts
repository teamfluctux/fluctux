import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // change it to actual base url
  uri: `${process.env.NEXT_PUBLIC_API_BASE_URI || "https://nextjs-self-host.vercel.app"}/api/graphql`,
  cache: new InMemoryCache(),
  
});
