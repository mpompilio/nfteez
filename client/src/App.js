import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Nft from './components/Nft';
import SingleNft from './pages/SingleNft';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Header />

        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/nft/:id" component={SingleNft} />

        </div>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
