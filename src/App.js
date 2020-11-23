import './App.css';
import { Router } from "@reach/router";
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
       <Header />
      <Router>
       <ProductList path="/api/products"/>
      </Router>
    </div>
  );
}

export default App;
