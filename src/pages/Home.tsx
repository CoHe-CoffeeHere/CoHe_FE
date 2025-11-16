import CouponAlarm from "../components/CouponAlarm";
import homeStyle from "../css/pages/home.module.css";
import characterIcon from "../assets/pages/home/character.svg";

export default function Home() {
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
    </>
  );
}
