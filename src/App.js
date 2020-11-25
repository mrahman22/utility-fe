import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
       <Header />
       <ProductList path="/api/products"/>
    </div>
  );
}

export default App;
