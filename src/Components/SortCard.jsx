const SortCard = ({sortBy,onChangeSort}) => {
    return ( 
        <div className="controls">
            <label htmlFor="Sort By"> Sort By:</label>
            <select id="sort"value={sortBy} onChange={(e)=>
                onChangeSort(e.target.value)
            }>
                <option value="market_cap_desc"> Market Cap(High To Low)</option>
                <option value="market_cap_asc"> Market Cap(Low to High)</option>
                <option value="price_desc"> Price(High To Low)</option>
                <option value="price_asc"> Price(Low to High)</option>
                <option value="change_desc"> Change in Market(High To Low)</option>
                <option value="change_asc"> Change in Market(Low to High)</option>

            </select>
        </div>
     );
}
 
export default SortCard;