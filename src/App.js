import { ProductPage } from "./Screens";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";



function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://pangaea-interviews.vercel.app/api/graphql",
  
  });

  return (
    <ApolloProvider client={client}>
      <ProductPage />
    </ApolloProvider>
  );
}

export default App;
