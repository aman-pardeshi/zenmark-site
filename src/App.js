import Header from './components/Header';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
