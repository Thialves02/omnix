import GlobalStyle from './assets/style/global'
import Footer from './components/Footer/Footer';
import OffersComponent from './pages/Offers/Offers';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import CtxApp from './context/CtxApp';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <CtxApp >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/offers" element={<OffersComponent />}></Route>
          </Routes>
          <Footer />
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
