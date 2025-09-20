// import { useState,useEffect } from 'react';
// // import LimitControls from './Components/limitControls';
// // import CoinCard from './Components/coinCard';
// // import FilterInput from './Components/FilterInput';
// // import SortCard from './Components/SortCard';
// import { Routes,Route } from 'react-router';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import Header from './Components/header';
// import NotFound from './pages/NotFound';
// import CoinDetailsPage from './pages/CoinDetailsPage';
// const API_URL= import.meta.env.VITE_API_URL;

// const App = () => {
//   const [coins,setCoins]=useState([]);
//   const [loading,setLoading]= useState(false);
//   const [error,setError] = useState(null);
//   const [limit,setLimit]= useState(10);
//   const[filter,setFilter]= useState("");
//   const[sortBy,setSortBy] = useState("market_cap_desc");

//   useEffect(()=>{
//     const coingeckodash= async ()=>{
//       try {
//         const res=await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
//         if(!res.ok) throw new Error("Something went Wrong");
//         const data=await res.json();
//         setCoins(data);
        
//       } catch (err) {
//         setError(err.message);
        
//       }
//       finally{
//         setLoading(false);
//       }
      

//     };
//     coingeckodash();

//   },[limit]);

//   // const filteredCoins= coins.filter((coin)=>{
//   //   return (
//   //     coin.name.toLowerCase().includes(filter.toLowerCase())||
//   //   coin.symbol.toLowerCase().includes(filter.toLowerCase())
//   //   );

//   // }).
//   // slice()
//   // .sort((a,b)=>{
//   //   switch (sortBy) {
//   //     case 'market_cap_desc':
//   //       return b.market_cap-a.market_cap;
//   //     case 'market_cap_asc':
//   //       return a.market_cap-b.market_cap;
//   //     case 'price_desc':
//   //       return b.current_price - a.current_price;
//   //       case 'price_asc':
//   //         return a.current_price - b.current_price;
//   //       case 'change_desc':
//   //         return b.price_change_percentage_24h - a.price_change_percentage_24h;
//   //       case 'change_asc':    // Biggest losers
//   //         return a.price_change_percentage_24h - b.price_change_percentage_24h;

    
//   //     default:
//   //       return ;
//   //   }});

    
//   //   fetch(API_URL).then((res)=>{
//   //     if(!res.ok) throw new error("No Data Actually Found");
//   //     return res.json();

//   //   }).then((data)=>{
//   //     console.log(data);
//   //     setCoins(data);
//   //     isLoading(false);


//   //   }).catch((err)=>{
//   //     setError(err.message);
//   //     isLoading(false);
//   //   }
//   //   )


//   // }
//   //   ,[])
  

//   return ( 
//     // <div>
//     //   <h1>Crypto Dashboard</h1>
//     //   {loading && <p>The Page is Loading!!</p>}
//     //   {error && <div className='error'>{error}</div>}
//     //   <div className='top-controls'>
//     //     <FilterInput filter={filter} onChangeFilter={setFilter} />
//     //     <LimitControls limit={limit} onChangeFilter={setLimit}/>
//     //     <SortCard sortBy={sortBy} onChangeSort={setSortBy}/>
//     //   </div>
//     //   {!loading && !error && (
//     //     <main className='grid'>
//     //       {filteredCoins.length>0 ? (filteredCoins.map((coin)=>
//     //         <CoinCard coin={coin} key={coin.id}/>)
//     //       ):
//     //         (<p>"My Lord, You have Searched Something which does not Exist. Can you Please check it again?"</p>)}
            


//     //     </main>

//     //   )}
//     // </div>
//     <>
//     <Header/>
//     <Routes>
//     <Route path='/' element={<HomePage coins={coins} loading={loading} filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit}
//     sortBy={sortBy} setSortBy={setSortBy}
//     error={error}/>}/>
//     <Route path='/about' element={<AboutPage/>}/>
//     <Route path='/coin/:id' element={<CoinDetailsPage/>}/>
//     <Route path='*' element={<NotFound/>}/>
//     </Routes>
//     </>
//    );
// }
 
// export default App;

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './Components/header';
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
