import React from "react";
import "./style.css";
import imageReport from "@assets/images/report.png";
import { siteSettings } from "../../../settings/site-settings";

function Footer() {
  const getCurrentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-mainColor text-[16px] font-bold">Chính sách</h3>
            <ul>
              <li style={{ marginBottom: "5px" }}>Troubleshoot</li>
              <li style={{ marginBottom: "5px" }}>Cookie Policy</li>
              <li style={{ marginBottom: "5px" }}>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-mainColor text-[16px] font-bold">Cửa hàng</h3>
            <div>Tìm đường</div>
          </div>
          <div>
            <h3 className="text-mainColor text-[16px] font-bold">
              Tổng đài hỗ trợ
            </h3>
            <ul>
              <li style={{ marginBottom: "5px" }}>
                {" "}
                <b>Gọi mua</b>: {siteSettings.author.salePhone} (8:00 - 21:30){" "}
              </li>
              <li style={{ marginBottom: "5px" }}>
                <b>Kỹ thuật</b>: {siteSettings.author.technicalPhone} (9:00 -
                20:00){" "}
              </li>
              <li style={{ marginBottom: "5px" }}>
                <b>Email</b>: {siteSettings.author.email}
              </li>
              <li style={{ marginBottom: "5px" }}>
                <b>Trụ sở</b>: {siteSettings.author.address}
              </li>
            </ul>
            <img
              className="object-fit mb-2 mt-2"
              src={imageReport}
              width={150}
              height={50}
              alt="abc"
            />
          </div>
          <div>
            <h3 className="text-mainColor text-[16px] font-bold">
              Facebook Fanpage{" "}
            </h3>
            <div></div>
          </div>
        </div>
      </div>
      <div className="copyright bg-copyright text-rgray py-4">
        <div className="container">
          Copyright © {getCurrentYear}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
