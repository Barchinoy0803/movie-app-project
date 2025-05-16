import React from "react";
import footerlogo from "@/assets/footerlogo.svg";
import googleplaylogo from "@/assets/googleplaylogo.svg";
import appstorelogo from "@/assets/appstorelogo.svg";
import reclamalogo from "@/assets/reclamalogo.svg";
import kinologo from "@/assets/kinologo.svg";
import teatrlogo from "@/assets/teatrlogo.svg";
import phonelogo from "@/assets/phonelogo.svg";
import faqlogo from "@/assets/faqlogo.svg";
import concertlogo from "@/assets/consertlogo.svg";
import facebooklogo from "@/assets/facebooklogo.svg";
import instagramlogo from "@/assets/instagramlogo.svg";
import listlogo from "@/assets/listlogo.svg";
import youtubelogo from "@/assets/youtubelogo.svg";
import sportlogo from "@/assets/sportlogo.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto py-[30px] bg-gray-200 mt-[118px] rounded-2xl mb-[10px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-[30px]">
          <img className="w-[55px]" src={footerlogo} alt="Логотип" />
          <div className="flex flex-col gap-2">
            <img className="w-[150px]" src={googleplaylogo} alt="Google Play" />
            <img className="w-[150px]" src={appstorelogo} alt="App Store" />
          </div>
        </div>

        <div className="lg:block">
          <ul className="hidden sm:flex flex-col gap-3">
            <li className="font-semibold">О нас</li>
            <li className="flex gap-2 items-center">
              <img src={listlogo} alt="Оферта" className="w-5 h-5" />
              <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                Публичная оферта
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src={reclamalogo} alt="Реклама" className="w-5 h-5" />
              <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                Реклама
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src={faqlogo} alt="F.A.Q" className="w-5 h-5" />
              <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                F.A.Q
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src={phonelogo} alt="Контакты" className="w-5 h-5" />
              <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                Контакты
              </p>
            </li>
          </ul>
          <details className="sm:hidden">
            <summary className="font-semibold cursor-pointer py-2">
              О нас
            </summary>
            <ul className="flex flex-col gap-3 pl-4 mt-2">
              <li className="flex gap-2 items-center">
                <img src={listlogo} alt="Оферта" className="w-5 h-5" />
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                  Публичная оферта
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={reclamalogo} alt="Реклама" className="w-5 h-5" />
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                  Реклама
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={faqlogo} alt="F.A.Q" className="w-5 h-5" />
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                  F.A.Q
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={phonelogo} alt="Контакты" className="w-5 h-5" />
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                  Контакты
                </p>
              </li>
            </ul>
          </details>
        </div>

        <div className="lg:block">
          <ul className="hidden sm:flex flex-col gap-3">
            <li className="font-semibold">Категории</li>
            <li className="flex gap-2 items-center">
              <img src={kinologo} alt="Кино" className="w-5 h-5" />
              <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                Кино
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src={teatrlogo} alt="Театр" className="w-5 h-5" />
              <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                Театр
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src={concertlogo} alt="Концерты" className="w-5 h-5" />
              <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                Концерты
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src={sportlogo} alt="Спорт" className="w-5 h-5" />
              <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                Спорт
              </p>
            </li>
          </ul>
          <details className="sm:hidden">
            <summary className="font-semibold cursor-pointer py-2">
              Категории
            </summary>
            <ul className="flex flex-col gap-3 pl-4 mt-2">
              <li className="flex gap-2 items-center">
                <img src={kinologo} alt="Кино" className="w-5 h-5" />
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                  Кино
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={teatrlogo} alt="Театр" className="w-5 h-5" />
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                  Театр
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={concertlogo} alt="Концерты" className="w-5 h-5" />
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                  Концерты
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <img src={sportlogo} alt="Спорт" className="w-5 h-5" />
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">
                  Спорт
                </p>
              </li>
            </ul>
          </details>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-semibold">Связаться с нами</p>
            <p className="text-red-500 text-[20px] sm:text-[24px]">
              +998 (95) 897-33-38
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">Социальные сети</p>
            <div className="flex gap-4">
              <img className="w-[20px]" src={instagramlogo} alt="Instagram" />
              <img className="w-[20px]" src={facebooklogo} alt="Facebook" />
              <img className="w-[20px]" src={youtubelogo} alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
