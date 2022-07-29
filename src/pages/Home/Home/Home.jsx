import React from "react";
import data from "../../../backend/Data";
import Cards from "../../../components/Cards/Cards";
import "./Home.css";
const Home = () => {
  return (
    <div className="container-fluid">
      <h3 className="text-center mt-5, text-uppercase">Shop Page</h3>
      <div className="container py-4">
        <div className="row">
          {data.products.map((item, index) => {
            return (
              <Cards
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
