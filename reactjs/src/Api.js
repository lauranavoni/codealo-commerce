import { useState, useEffect } from "react";
import axios from "axios";

const App = (_) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://codealo-commerce-cms.onrender.com`)
      .then((res) => {
        setProduct(res.data.name);
      })
  }, []);

  return <div>{product}</div>;
};
export default App;