// src/App.js

import React from 'react';
import ApolloClient from 'apollo-boost';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
    uri : "http://localhost:4000/graphql"
});
const App = () => {
      return (
        <ApolloProvider client={client}>
          <div className="App">
            <Header />
            <section className="App-main">
              <Post />
            </section>
          </div>
        </ApolloProvider>
  );
};

// class App extends Component {
//   render() {
//     return <div className="App">
//         <Header />
//         <section className="App-main">
//           <Post nickname="aquib" avatar={require('./image.jpg')} caption="Mundeyyyy!" image={require('./image.jpg')} />
//           <Post nickname="aquib" avatar={require('./image.jpg')} caption="Aseeeeem!" image={require('./img2.jpg')} />
//
//           {/* more posts */}
//         </section>
//       </div>;
//   }
// }

export default App;
