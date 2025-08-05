import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../Pages/index';
import Guest from '../Pages/guest';
import Host from '../Pages/host';
// Если добавишь позже — импортируй WeddingList и WeddingForm
// import WeddingList from '../Pages/WeddingList';
// import WeddingForm from '../Pages/WeddingForm';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link> |{' '}
        <Link to="/guest">Гость</Link> |{' '}
        <Link to="/host">Мы - молодожены</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/host" element={<Host />} />
        {/* Можно добавить позже: */}
        {/* <Route path="/weddings" element={<WeddingList />} /> */}
        {/* <Route path="/create" element={<WeddingForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
