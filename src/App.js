import NavBar from './Components/Navbar/NavBar'
import './App.css'
import { originals, action, romance, horror, comedy, trending } from './urls';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={trending} title='Trending' isSmall />
      <Footer />
    </div>
  )
};

export default App;
