import naviStyle from "../css/components/navigation.module.css";

import onHome from "../assets/components/navigation/onHome.svg";
import offHome from "../assets/components/navigation/offHome.svg";

import onSubscribe from "../assets/components/navigation/onSubscribe.svg";
import offSubscribe from "../assets/components/navigation/offSubscribe.svg";

import onReward from "../assets/components/navigation/onReward.svg";
import offReward from "../assets/components/navigation/offReward.svg";

import onRequest from "../assets/components/navigation/onRequest.svg";
import offRequest from "../assets/components/navigation/offRequest.svg";

import onMyPage from "../assets/components/navigation/onMyPage.svg";
import offMyPage from "../assets/components/navigation/offMyPage.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navigation() {
  const [selected, setSelected] = useState("home");
  const navigate = useNavigate();
  const movePage = (e: React.MouseEvent<HTMLElement>) => {
    const page = e.currentTarget.dataset.value;
    if (page === "home") {
      navigate("/");
    } else if (page === "subscribe") {
      navigate("/subscribe");
    } else if (page === "reward") {
      navigate("/reward");
    } else if (page === "request") {
      navigate("/request");
    } else if (page === "mypage") {
      navigate("/mypage");
    }
  };
  return (
    <div className={naviStyle.container}>
      <div
        className={`${naviStyle.item} ${
          selected === "home" ? naviStyle.selected : ""
        }`}
        onClick={(e) => {
          setSelected("home");
          movePage(e);
        }}
        data-value="home"
      >
        <img src={selected === "home" ? onHome : offHome} alt="Home" />
        <span>홈</span>
      </div>
      <div
        className={`${naviStyle.item} ${
          selected === "subscribe" ? naviStyle.selected : ""
        }`}
        onClick={(e) => {
          setSelected("subscribe");
          movePage(e);
        }}
        data-value="subscribe"
      >
        <img
          src={selected === "subscribe" ? onSubscribe : offSubscribe}
          alt="Subscibe"
        />
        <span>구독</span>
      </div>
      <div
        className={`${naviStyle.item} ${
          selected === "reward" ? naviStyle.selected : ""
        }`}
        onClick={(e) => {
          setSelected("reward");
          movePage(e);
        }}
        data-value="reward"
      >
        <img src={selected === "reward" ? onReward : offReward} alt="Reward" />
        <span>리워드</span>
      </div>
      <div
        className={`${naviStyle.item} ${
          selected === "request" ? naviStyle.selected : ""
        }`}
        onClick={(e) => {
          setSelected("request");
          movePage(e);
        }}
        data-value="request"
      >
        <img
          src={selected === "request" ? onRequest : offRequest}
          alt="Request"
        />
        <span>요청</span>
      </div>
      <div
        className={`${naviStyle.item} ${
          selected === "mypage" ? naviStyle.selected : ""
        }`}
        onClick={(e) => {
          setSelected("mypage");
          movePage(e);
        }}
        data-value="mypage"
      >
        <img src={selected === "mypage" ? onMyPage : offMyPage} alt="MyPage" />
        <span>마이페이지</span>
      </div>
    </div>
  );
}
