import LimitControls from '../Components/LimitControls';
import CoinCard from '../Components/CoinCard';
import FilterInput from '../Components/FilterInput';
import SortCard from '../Components/SortCard';
import Spinner from '../Components/Spinner';

const HomePage = ({
  coins,
  loading,
  error,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy
}) => {
  const filteredCoins = coins
    .filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase()) ||
      c.symbol.toLowerCase().includes(filter.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'market_cap_desc': return b.market_cap - a.market_cap;
        case 'market_cap_asc':  return a.market_cap - b.market_cap;
        case 'price_desc':      return b.current_price - a.current_price;
        case 'price_asc':       return a.current_price - b.current_price;
        case 'change_desc':     return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case 'change_asc':      return a.price_change_percentage_24h - b.price_change_percentage_24h;
        default:                return 0;
      }
    });

  if (loading) {
    return (
      <div>
        <h1>Crypto Dashboard</h1>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Crypto Dashboard</h1>
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Crypto Dashboard</h1>

      <div className="top-controls">
        <FilterInput filter={filter} onChangeFilter={setFilter} />
        <LimitControls limit={limit} onChangeLimit={setLimit} />
        <SortCard sortBy={sortBy} onChangeSort={setSortBy} />
      </div>

      <main className="grid">
        {filteredCoins.length > 0 ? (
          filteredCoins.map((coin) => (
            <CoinCard coin={coin} key={coin.id} />
          ))
        ) : (
          <p>
            My Lord, You have searched something which does not exist. Can you
            please check it again?
          </p>
        )}
      </main>
    </div>
  );
}

export default HomePage;
