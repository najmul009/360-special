import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Qna from './Component/QNA/Qna';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qna></Qna>
      <Footer></Footer>
    </div>
  );
}

export default App;
