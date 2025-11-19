import requestStyle from "../css/pages/request.module.css";
import characterIcon from "../assets/pages/subscribe/character.svg";
import Requestcard from "../components/Requestcard";
import trashIcon from "../assets/pages/request/trash.svg";
import accidentIcon from "../assets/pages/request/accident.svg";
import errorIcon from "../assets/pages/request/error.svg";
import songIcon from "../assets/pages/request/song.svg";

export default function Request() {
  return (
    <>
      <div className={requestStyle.topTextDiv}>
        <span className={requestStyle.topName}>매장 요청 및 민원</span>
        <span className={requestStyle.topComment}>
          관리자에게 알람을 전송할 수 있어요
        </span>
        <img
          className={requestStyle.characterIcon}
          src={characterIcon}
          alt="Character Icon"
        />
      </div>
      <div className={requestStyle.requestDiv}>
        <Requestcard
          text1="청소 요청"
          text2="매장 청소가 필요해요"
          icon={trashIcon}
        />
        <Requestcard
          text1="고장/장비"
          text2="커피 머신이 이상해요"
          icon={errorIcon}
        />
        <Requestcard
          text1="사고/결제"
          text2="결제 오류가 발생했어요"
          icon={accidentIcon}
        />
        <Requestcard
          text1="신청곡 등록"
          text2="듣고 싶은 노래가 있어요"
          icon={songIcon}
        />
      </div>
    </>
  );
}
