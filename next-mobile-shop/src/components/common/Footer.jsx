import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { Config } from "@/settings/config";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container p-4 mx-auto grid gap-2 grid-cols-3">
        <div>
          <h3 className="uppercase xs:mb-1 md:mb-4">Thông tin liên hệ</h3>
          <ul className="footer-info">
            <li className="address pl-[40px] relative">
              <MapPin
                className="absolute w-[20px] h-[20px] top-[4px] left-[9px]"
                color="white"
                size={20}
              />
              <strong className="block">Trụ sở chính</strong>
              <a rel="nofflow" href="#">
                {Config.location}
              </a>
            </li>

            <li className="phone num-1 pl-[40px] relative">
              <Smartphone
                className="absolute w-[20px] h-[20px] top-[4px] left-[9px]"
                color="white"
                size={20}
              />
              <strong className="block">Hotline</strong>
              <a
                rel="nofflow"
                className="hotline hover:underline"
                href={`tel:${Config.phoneContact}`}
              >
                {Config.phoneContact}
              </a>
            </li>
            <li className="mail pl-[40px] relative">
              <Mail
                className="absolute w-[20px] h-[20px] top-[4px] left-[9px]"
                color="white"
                size={20}
              />
              <a
                rel="nofflow"
                className="hover:underline"
                href={`mailto:${Config.emailContact}`}
              >
                {Config.emailContact}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase xs:mb-1 md:mb-4">Chính sách</h3>
          <ul className="flex flex-col">
            <Link href="/" target="_blank" rel="noopener noreferrer">
              Chính sách đổi trả và hoàn tiền
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              Chính sách mua hàng và thanh toán
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              Chính sách bảo hành
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              Chính sách bảo mật thông tin
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="uppercase xs:mb-1 md:mb-4">Kết nối với chúng tôi</h3>
          <p>Hãy theo dõi chúng tôi trên mạng xã hội.</p>
          <div className="gap-2 inline-flex mb-5">
            <a href="#">
              <Image
                src="/icons/facebook.png"
                quality={80}
                className="object-cover aspect-auto"
                width="39"
                height="39"
                alt="facebook"
              />
            </a>
            <a href="#">
              <Image
                src="/icons/zalo.png"
                quality={80}
                className="object-cover aspect-auto"
                width="39"
                height="39"
                alt="zalo"
              />
            </a>
          </div>

          <Image
            src="/shop-cert.png"
            quality={80}
            className="object-cover aspect-auto"
            width="150"
            height="80"
            alt="comm"
          />
        </div>
      </div>
      <div className="copyright">
        <p className="text-center bg-[#111] p-2">
          © Since 2025. Tuna91Mobile. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
