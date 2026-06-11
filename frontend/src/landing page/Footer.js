import React from "react";

function Footer() {
  return (
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col m-1">
          <img src="media/images/logo.svg" style={{ width: "50%" }} />
          <p className="mt-3">
            &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="mt-3">
            <a href="https://x.com/" style={{color: "#0f1419", hover: "grey"}}><i class="fa-brands fa-twitter"></i></a>&nbsp;&nbsp;
            <a href="https://www.facebook.com/" style={{color: "#1877F2"}}><i class="fa-brands fa-square-facebook"></i></a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/" style={{color: "#C13584"}}><i class="fa-brands fa-instagram"></i></a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/help/linkedin/answer/a522735" style={{color: "#0a66c2"}}><i class="fa-brands fa-linkedin"></i></a>&nbsp;&nbsp;
            <a href="https://web.telegram.org/" style={{color: "#0088cc"}}><i class="fa-brands fa-telegram"></i></a>
          </div>
        </div>
        <div className="col">
          <p>Company</p>
          <div className="text-muted">
            <p>About</p> 

            <p>Products</p> 
            
            <p>Pricing</p>
        
            <p>Referral Programs</p>
            
            <p>Careers</p>
            
            <p>Zerodha.tech</p>
            
            <p>Press & media</p>
           
            <p>Zerodha cares (CSR)</p>
            
          </div>
        </div>
        <div className="col">
          <p>Support</p>
          <div className="text-muted">
            <p>Contact</p>
           
            <p>Support portal</p>
            
            <p>Z-Connect blog</p>
            
            <p>List of charges</p>
            
            <p>Downloads & resources</p>
        
          </div>
        </div>
        <div className="col">
          <p>Account</p>
          <div className="text-muted">
            <p>Open an account</p>
           
            <p>Fund transfer</p>
           
            <p>60 day challenge</p>
           
          </div>
        </div>
      </div>
      <div className="mt-5" style={{ fontSize: "14px" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
          INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
          Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
          INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
          Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
    </div>
  );
}

export default Footer;
