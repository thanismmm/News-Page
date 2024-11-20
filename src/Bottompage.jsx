import React from "react";

const Bottompage = () => {
  return (
    <div className="bottom">
      <div className="content">
        <div className="left">
          <h3>News Page</h3>
          <p>
            Timely, accurate, unbiased. Our dedicated team of journalists is
            committed to providing you with the information you need to make
            informed decisions.
          </p>
          <h5>076 3075 074</h5>
          <h5>thanis7168t@gmail.com</h5>
        </div>
        <div className="right">
          <p>Usefull Website Links</p>
          <ul>
            <div className="link-item">
              <a href="https://www.nytimes.com/" target="_balnk">
                The New York Times
              </a>
            </div>
            <div className="link-item">
              <a href="https://www.theguardian.com/" target="_balnk">
                The Guardian
              </a>
            </div>
            <div className="link-item">
              <a href="https://www.bbc.com/" target="_balnk">
                BBC News
              </a>
            </div>
            <div className="link-item">
              <a href="https://www.reuters.com/" target="_balnk">
                Reuters
              </a>
            </div>
            <div className="link-item">
              <a href="https://www.cnn.com/" target="_balnk">
                CNN
              </a>
            </div>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};

export default Bottompage;
