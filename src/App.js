import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import APIFectching from './components/Home/Home';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
function App() {
  return (
    <>
      <Header />
      <APIFectching />
      <Footer />
      </>

  );
}

export default App;
