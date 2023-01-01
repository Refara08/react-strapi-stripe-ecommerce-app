import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit amet
            eum ipsum iste unde non deserunt dignissimos, necessitatibus
            possimus ab aperiam sunt dicta esse laborum nam consectetur neque
            aut culpa? Eum animi soluta reprehenderit maiores, iure nobis
            praesentium velit sunt.
          </p>
        </div>
        <div className="item">
          <h1>Contacts</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum a
            nesciunt ea quidem iusto animi vitae sit repellat voluptates
            pariatur odit placeat iste neque accusantium, dicta eaque esse vel
            nam at consectetur? Unde, amet? Corporis veniam saepe delectus
            veritatis. Omnis!
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Shopo</div>
          <div className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
