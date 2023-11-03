import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const url = "https://api.revam.cloud/api/extension/";

function Products() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center">
      {data.slice(0, 10).map((item) => {
        return (
          <div
            key={item.id}
            className="w-9/12 max-w-sm mx-2   my-4 flex flex-col justify-center items-center border-2 border-black"
          >
            <div className=" w-full h.full flex justify-center items-center  ">
              <img src={item.image_url} alt="" className="w-3/6 h-3/6" />
            </div>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
