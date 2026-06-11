import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h5 className="mt-4">Support Portal</h5>
        <a href="" className="mt-4">Track Tickets</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-5">
            <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg: how do I activate F&O" className="mt-3 mb-3"/>
            <br/>
            <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="col-6 p-5">
            <h1 className="fs-4">Featured</h1>
            <ol>
                <li>
                    <a href="">Current Takeovers and Delisting - January 2024</a>
                </li>
                <li>
                    <a href="" style={{lineHeight: "3.5"}}>Latest Intraday leverages - MIS & CO</a>
                </li>
            </ol>
        </div>
      </div>

    </section>
  );
}

export default Hero;