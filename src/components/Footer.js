import React from "react";


import "../style/footer.scss";





export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">
        <h1>S.E.T.V</h1>
        <h3>STONER.ENTERTAINMENT.TELEVESION</h3>
      </div>
      <div className="social-media">
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-twitter"></i>
      </div>
      <div className="copywright">@copywright</div>
    </div>
  );
}
