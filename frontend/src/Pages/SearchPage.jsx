import { useLocation } from "react-router-dom";
import SearchProd from "../components/SearchProd";

const SearchPage = () => {
  const location = useLocation();
  const products = location.state?.product || [];  

  return (
    <div>
      {products.length === 0 ? (
        <h2>No products found.</h2>
      ) : (
        products.map((item) => <SearchProd key={item._id} product={item} />)
      )}
    </div>
  );
};

export default SearchPage;
