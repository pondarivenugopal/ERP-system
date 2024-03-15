import React from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill } from "react-icons/bs";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <a href="/products">
          <div className="card">
            <div className="card-inner">
              <h3>Products</h3>
              <BsFillArchiveFill className="card_icon" />
            </div>
            <h1>5</h1>
          </div>
        </a>
        <a href="/orders">
          <div className="card">
            <div className="card-inner">
              <h3>ORDERS</h3>
              <BsFillGrid3X3GapFill className="card_icon" />
            </div>
            <h1>5</h1>
          </div>
        </a>
      </div>
    </main>
  );
}

export default Home;
