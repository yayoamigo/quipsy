import { Navbar } from "./components/Navbar"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

function App() {


  return (
    <ApolloProvider client={client}>
    <Navbar />
    </ApolloProvider>
  )
}

export default App
