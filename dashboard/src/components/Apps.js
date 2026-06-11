import React from "react";

const Apps = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Apps</h1>

      <hr />

      <div className="row">
        <div className="col-md-4">
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h4>Kite</h4>
            <p>Advanced trading platform.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h4>Console</h4>
            <p>Portfolio and reports.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h4>Coin</h4>
            <p>Mutual fund investments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;