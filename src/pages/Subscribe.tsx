import subscribeStyle from "../css/pages/subscribe.module.css";
import characterIcon from "../assets/pages/subscribe/character.svg";
import greenCheck from "../assets/pages/subscribe/greenCheck.svg";
import whiteCheck from "../assets/pages/subscribe/whiteCheck.svg";
import premium from "../assets/pages/subscribe/premium_pass.svg";
import basic from "../assets/pages/subscribe/basic_pass.svg";
import { useState } from "react";

export default function Subscribe() {
  const [onPremium, setOnPremium] = useState<boolean>(true);
  const selectPass = () => {
    console.log("패스 선택");
  };
  return (
    <>
      <div className={subscribeStyle.topTextDiv}>
        <span className={subscribeStyle.topName}>구독 플랜</span>
        <span className={subscribeStyle.topComment}>
          나에게 맞는 플랜을 선택하세요
        </span>
        <img
          className={subscribeStyle.characterIcon}
          src={characterIcon}
          alt="Character Icon"
        />
      </div>
      <div className={subscribeStyle.passContainer}>
        <div className={subscribeStyle.title}>
          <span>Study Pass</span>
          <div>D-15</div>
        </div>
        <div className={subscribeStyle.leftInfo}>월정액 | 잔여 10회</div>
        <div className={subscribeStyle.cashInfo}>다음 결제일 : 2025.12.01</div>
        <div className={subscribeStyle.leftCircleDiv}>
          <div className={subscribeStyle.circleGrid}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={
                  i < 10
                    ? subscribeStyle.circleWhite
                    : subscribeStyle.circleBrown
                }
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className={subscribeStyle.anotherPlanText}>
        <span className={subscribeStyle.anotherTitle}>다른 플랜 보기</span>
        <span className={subscribeStyle.anotherSub}>
          언제든지 변경 가능해요
        </span>
      </div>
      <div className={subscribeStyle.planDiv}>
        <div
          className={`${subscribeStyle.planBox} ${
            onPremium ? subscribeStyle.selected : ""
          }`}
          onClick={() => {
            setOnPremium(true);
          }}
        >
          <div className={subscribeStyle.passHeader}>
            <img src={premium} alt="premium" />
            <div className={subscribeStyle.titleTextDiv}>
              <span className={subscribeStyle.titleText}>Premium Pass</span>
              <span className={subscribeStyle.titleText2}>
                가장 인기있는 플랜
              </span>
            </div>
            {onPremium && (
              <span className={subscribeStyle.checkedCircle}>
                <img src={whiteCheck} alt="checked" />
              </span>
            )}
          </div>
          <div className={subscribeStyle.priceDiv}>
            <span className={subscribeStyle.price}>70,000원</span>
            <span className={subscribeStyle.monthly}>월 정기 결제</span>
          </div>
          <div className={subscribeStyle.contentDiv}>
            <span>
              <img src={greenCheck} alt="check" />
              하루 2잔 무제한
            </span>
            <span>
              <img src={greenCheck} alt="check" />
              우선 민원 처리
            </span>
            <span>
              <img src={greenCheck} alt="check" />
              리워드 2배 적립
            </span>
            <span>
              <img src={greenCheck} alt="check" />
              VIP 라운지 이용
            </span>
          </div>
          <div className={subscribeStyle.btnDiv} onClick={selectPass}>
            선택하기
          </div>
        </div>
        <div
          className={`${subscribeStyle.planBox} ${
            !onPremium ? subscribeStyle.selected : ""
          }`}
          onClick={() => {
            setOnPremium(false);
          }}
        >
          <div className={subscribeStyle.passHeader}>
            <img src={basic} alt="basic" />
            <div className={subscribeStyle.titleTextDiv}>
              <span className={subscribeStyle.titleText}>Basic Pass</span>
              <span className={subscribeStyle.titleText2}>가볍게 시작하기</span>
            </div>
            {!onPremium && (
              <span className={subscribeStyle.checkedCircle}>
                <img src={whiteCheck} alt="checked" />
              </span>
            )}
          </div>
          <div className={subscribeStyle.priceDiv}>
            <span className={subscribeStyle.price}>45,000원</span>
            <span className={subscribeStyle.monthly}>월 정기 결제</span>
          </div>
          <div className={subscribeStyle.contentDiv}>
            <span>
              <img src={greenCheck} alt="check" />
              하루 1잔 무제한
            </span>
            <span>
              <img src={greenCheck} alt="check" />
              기본 리워드 적립
            </span>
          </div>
          <div className={subscribeStyle.btnDiv} onClick={selectPass}>
            선택하기
          </div>
        </div>
      </div>
    </>
  );
}
