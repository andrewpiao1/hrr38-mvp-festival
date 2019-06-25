import React from 'react';
const calendar = 'https://fechrr38hana.s3.us-east-2.amazonaws.com/electric-zoo/calendar.png'
const location = '15ac930d1030a9f1e5eabf8eca9c93b7038716dddb00d9efaa9a12106966c783'

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">

          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                <div
                  className="vn_icon"
                  style ={{background: `url(${calendar})`}}
                ></div>
                <div className="vn_title">
                  Date & Time
                </div>
                <div className="vn_desc">
                  30 August 2019 @10:00pm
                </div>
              </div>
            </div>
          </div>

          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_yellow"></div>
                <div
                  className="vn_icon"
                  style ={{background: `url(${calendar})`}}
                ></div>
                <div className="vn_title">
                  Event Location
                </div>
                <div className="vn_desc">
                    20 Randalls Island Park, New York
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default VenueInfo;