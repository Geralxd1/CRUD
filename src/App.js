import './App.css';
import "./componentes/normalize.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowProduct from './componentes/ShowProduct';
import CreateProduct from './componentes/CreateProduct';
import EditProduct from './componentes/EditProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<ShowProduct/>} />
          <Route path='/create' element={<CreateProduct/>} />
          <Route path='/edit/:id' element={<EditProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
