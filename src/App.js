import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect} from 'react';
import ResponsiveGrid from './toSell/ResponsiveGrid';
import Categories from './components/Categories';



function App() {

  useEffect(() => {
    fetch("http://localhost:3001/advertisements")
    .then(response=>response.json())
    .then(data=> {
      setInitialAdvertisements(data);
      setAdvertisements(data)});
  }, [])
  

  const [initialAdvertisements, setInitialAdvertisements] = useState([]);

  const [advertisements, setAdvertisements] = useState([]);

  return (
    <>
      <Navbar advertisements={advertisements} setAdvertisements={setAdvertisements} advertisementsArr={initialAdvertisements} />
      <Categories/>
      <ResponsiveGrid advertisements={advertisements} />
    </>
  );
}

export default App;
