import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header heading={'Quote media'}/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
