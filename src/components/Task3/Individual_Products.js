import React, { useEffect, useState } from "react";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import { Link } from "react-router-dom";


const Individual_Products = (props) => {
  const [brand, setBrand] = useState([])
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);

  const [brand1, setBrand1] = useState([]);
  const [brand2, setBrand2] = useState([]);
  const [brand3, setBrand3] = useState([]);
  const [brand4, setBrand4] = useState([]);

  const [title1, setTitle1] = useState([]);
  const [title2, setTitle2] = useState([]);
  const [title3, setTitle3] = useState([]);
  const [title4, setTitle4] = useState([]);

  const [price1, setPrice1] = useState([]);
  const [price2, setPrice2] = useState([]);
  const [price3, setPrice3] = useState([]);
  const [price4, setPrice4] = useState([]);

  useEffect(() => {
    const db = props.data;
    console.log("db", db);

    const slicedProducts = db.slice(0, 4);
    console.log("sliced", slicedProducts);

    const brandData = [];
    const titleData = [];
    const priceData = [];

    for (let i = 0; i < slicedProducts.length; i++) {
      brandData.push(slicedProducts[i].brand);
      titleData.push(slicedProducts[i].title);
      priceData.push(slicedProducts[i].price);
    }

    setBrand(brandData);
    setTitle(titleData);
    setPrice(priceData);

    console.log("brand", brand);
    console.log("title", title);
    console.log("price", price);

    setBrand1(brand.slice(0, 1));
    setBrand2(brand.slice(1, 2));
    setBrand3(brand.slice(2, 3));
    setBrand4(brand.slice(3, 4));

    //    console.log(brand1)
    //    console.log(brand2)
    //    console.log(brand3)
    //    console.log(brand4)

    
    setTitle1(title.slice(0, 1));
    setTitle2(title.slice(1, 2));
    setTitle3(title.slice(2, 3));
    setTitle4(title.slice(3, 4));

    setPrice1(price.slice(0, 1));
    setPrice2(price.slice(1, 2));
    setPrice3(price.slice(2, 3));
    setPrice4(price.slice(3, 4));

    
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
      <Link to="/"><div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            border: "2px solid black",
            marginLeft: "5px",
            marginTop: "-20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{brand1}</span>
            <span>{title1}</span>
            <span>{price1}</span>
          </div>

          <div>
            <img src={img1} style={{ width: "100px", height: "100px" }}></img>
          </div>
        </div></Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            border: "2px solid black",
            marginLeft: "5px",
            marginTop: "-20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{brand2}</span>
            <span>{title2}</span>
            <span>{price2}</span>
          </div>

          <div>
            <img src={img2} style={{ width: "100px", height: "100px" }}></img>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "5px", width:'200px', marginLeft:'5px', marginTop:"10px" }}>
        <div style={{ border: "2px solid black", display: "flex", alignItems:'center'}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{brand3}</span>
            <span>{title3}</span>
            <span>{price3}</span>
          </div>

          <div>
            <img src={img3} style={{ width: "100px", height: "100px" }}></img>
          </div>
        </div>

        <div style={{ border: "2px solid black", display: "flex", alignItems:'center'}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{brand4}</span>
            <span>{title4}</span>
            <span>{price4}</span>
          </div>

          <div>
            <img src={img4} style={{ width: "100px", height: "100px" }}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual_Products;
