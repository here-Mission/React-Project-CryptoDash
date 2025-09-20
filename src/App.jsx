import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoinDetailsPage from './pages/CoinDetailsPage';
import NotFound from './pages/NotFound';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  useEffect(() => {
    async function fetchCoins() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${API_URL}&order=${sortBy}&per_page=${limit}&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCoins();
  }, [limit, sortBy]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coins={coins}
              loading={loading}
              error={error}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
