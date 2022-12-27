import './App.css';
import Navbar from './Components/Navbar.js'
import Header from './Components/Header.js'
import Features from './Components/Features.js'
import Furniture from './Components/Furniture.js'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto px-8 xl:px-[150px] 2xl:px-[165px]'>
      <Navbar></Navbar>
      <Header></Header>
      <Features></Features>
      <Furniture></Furniture>
    </div>
  );
}

export default App;
