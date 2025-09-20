const FilterInput = ({filter,onChangeFilter}) => {
    return (
        <div className="filter">
            <input type="text" value={filter}
            placeholder="Make yourself comfortable with Searching Whatever name you want" onChange={(e)=>{
                onChangeFilter(e.target.value);
            }}></input>
        </div>


      );
}
 
export default FilterInput;