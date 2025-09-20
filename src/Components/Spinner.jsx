// const override={
//     display:'block',
//     margin:'auto'
// }

// const Spinner = ({color='blue',size='150'}) => {
//     return ( 
//         <div>
//             <BarLoader
//             color={color}
//             size={size}
//             cssOverride={override}
//             aria-label="loading..."

//             />
//         </div>
//      );
// }
 
// export default Spinner;
import BarLoader from 'react-spinners/BarLoader';

const override = {
  display: 'block',
  margin: 'auto'
};

const Spinner = ({ color = '#36D7B7', size = 150 }) => (
  <BarLoader 
    color={color} 
    width={size} 
    cssOverride={override} 
    aria-label="loading" 
  />
);

export default Spinner;
