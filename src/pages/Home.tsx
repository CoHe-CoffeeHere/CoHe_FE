import CouponAlarm from "../components/CouponAlarm";
import homeStyle from "../css/pages/home.module.css";
import characterIcon from "../assets/pages/home/character.svg";
import barcode from "../assets/pages/home/barcode.svg";
import BarcodeModal from "../components/BarcodeModal";
import { useState } from "react";

export default function Home() {
  const [onBarcode, setOnBarcode] = useState(false);
  return (
    <>
      <CouponAlarm />
      <div className={homeStyle.topTextDiv}>
        <span className={homeStyle.topName}>안녕하세요, 길동님!</span>
        <span className={homeStyle.topComment}>
          오늘도 열정 넘치는 하루 보내세요
        </span>
        <img
          className={homeStyle.characterIcon}
          src={characterIcon}
          alt="Character Icon"
        />
      </div>
      <div className={homeStyle.subscribeCard}>
        {onBarcode && <BarcodeModal setOnBarcode={setOnBarcode} />}
        <div className={homeStyle.overlay}>
          <div className={homeStyle.subscribeText}>
            <div className={homeStyle.leftText}>
              <span className={homeStyle.passName}>Study Pass</span>
              <span className={homeStyle.passInfo}>월간 정기 구독</span>
            </div>
            <div className={homeStyle.tag}>VIP</div>
          </div>
          <div className={homeStyle.cntBox}>
            <div className={homeStyle.leftCnt}>
              <span className={homeStyle.cntTitle}>잔여 횟수</span>
              <span className={homeStyle.cntNumber}>
                9<span>회</span>
              </span>
            </div>
            <div className={homeStyle.leftDay}>
              <span className={homeStyle.cntTitle}>남은 기간</span>
              <span className={homeStyle.cntNumber}>
                15<span>일</span>
              </span>
            </div>
          </div>
          <div className={homeStyle.barcode}>
            <img
              src={barcode}
              alt="barcode"
              onClick={() => {
                setOnBarcode(true);
              }}
            />
          </div>
          <div className={homeStyle.code}>
            <span>COHEE-PAH-2025-1114</span>
          </div>
          <div className={homeStyle.goToPass}>
            코히 패스가 6일밖에 남지 않았어요 →
          </div>
        </div>
      </div>
    </>
  );
}
