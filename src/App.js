import './App.css';
import Footer from './components/Footer/Footer';
import General from './components/General/General';
import Header from './components/Header/Header';
import Quizz from './components/Quizz/Quizz';
import Visitors from './components/Visitors/Visitors';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <General />
      <Visitors />
      <Quizz />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
