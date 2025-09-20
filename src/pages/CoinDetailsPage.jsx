import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import Spinner from "../Components/Spinner";
import Coinchart from "../Components/Coinchart";

const API_URL = import.meta.env.VITE_API_Coin;

const CoinDetailsPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const coindetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Data Not Loading");
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    coindetails();
  }, [id]);

  if (Loading) return <Spinner/>;
  if (error) return <div className="error">{error}</div>;
  if (!coin) return null;

  return (
    <div className="coin-details-container">
      <Link to="/">Back to Home</Link>
      <h1 className="coin-details-title">
        {coin ? `${coin.name} (${coin.symbol.toUpperCase()})` : "Coin Details"}
      </h1>
      <img
        src={coin.image?.large}
        alt={coin.name}
        className="coin-details-image"
      />
      <p>{coin.description.en.split(". ")[0] + "."}</p>

      <div className="coin-details-info">
        <h3>Rank: #{coin.market_cap_rank}</h3>
        <h3>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</h3>
        <h4>24h Low: ${coin.market_data.low_24h.usd.toLocaleString()}</h4>
        <h4>24h High: ${coin.market_data.high_24h.usd.toLocaleString()}</h4>
        <h4>24h Price Change: {coin.market_data.price_change_percentage_24h?.toFixed(2)}%</h4>
        <h4>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</h4>
        <h4>Circulating Supply: {coin.market_data.circulating_supply.toLocaleString()}</h4>
        <h4>Total Supply: {coin.market_data.total_supply ? coin.market_data.total_supply.toLocaleString() : "N/A"}</h4>
        <h4>Max Supply: {coin.market_data.max_supply ? coin.market_data.max_supply.toLocaleString() : "N/A"}</h4>
        <h4>All-Time Low: ${coin.market_data.atl.usd.toLocaleString()} on {new Date(coin.market_data.atl_date.usd).toLocaleDateString()}</h4>
        <h4>All-Time High: ${coin.market_data.ath.usd.toLocaleString()} on {new Date(coin.market_data.ath_date.usd).toLocaleDateString()}</h4>
        <h4>Last Updated: {coin.last_updated ? new Date(coin.last_updated).toLocaleString() : "N/A"}</h4>
        <Coinchart coinId={coin.id}/>
      </div>

      <div className="coin-details-link" style={{ marginTop: 20 }}>
        {coin.categories && coin.categories.length > 0 && (
          <div style={{ marginBottom: 10 }}>
            <strong>Categories:</strong> {coin.categories.join(", ")}
          </div>
        )}

        {coin.links?.homepage && coin.links.homepage[0] && (
          <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer" style={{ marginRight: 15 }}>
            Official Website
          </a>
        )}

        {coin.links?.blockchain_site && coin.links.blockchain_site[0] && (
          <a href={coin.links.blockchain_site[0]} target="_blank" rel="noopener noreferrer" style={{ marginRight: 15 }}>
            Blockchain Explorer
          </a>
          
        )}
      </div>
    </div>
  );
};

export default CoinDetailsPage;
