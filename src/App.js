import Home from './routes/home/home.component';
import { Route, Routes, Outlet } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return <h1>Shop</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
