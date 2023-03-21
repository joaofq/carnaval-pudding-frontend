import './App.css';
import Footer from './components/Footer/Footer';
import General from './components/General/General';
import Header from './components/Header/Header';
import Quizz from './components/Quizz/Quizz';
import Visitors from './components/Visitors/Visitors';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <General />
        <Visitors />
        <Quizz />
      </main>
      <Footer />
    </div>
  );
}

export default App;
