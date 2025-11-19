import cardStyle from "../css/components/requestCard.module.css";
import trashIcon from "../assets/pages/request/trash.svg";
import accidentIcon from "../assets/pages/request/accident.svg";
import errorIcon from "../assets/pages/request/error.svg";
import songIcon from "../assets/pages/request/song.svg";
import arrowIcon from "../assets/pages/request/arrow-right.svg";
import { Link } from "react-router-dom";

type Props = {
  text1: string;
  text2: string;
  icon:
    | string
    | typeof trashIcon
    | typeof accidentIcon
    | typeof errorIcon
    | typeof songIcon;
};

export default function Requestcard({ text1, text2, icon }: Props) {
  const textToCategory: Record<string, string> = {
    "청소 요청": "trash",
    "고장/장비": "error",
    "사고/결제": "accident",
    "신청곡 등록": "song",
  };
  const category = textToCategory[text1] ?? "";

  return (
    <Link to={`/request/${category}`} className={cardStyle.requestCard}>
      <img src={icon} alt={text1} />
      <div className={cardStyle.TextDiv}>
        <span className={cardStyle.Text1}>{text1}</span>
        <span className={cardStyle.Text2}>{text2}</span>
      </div>
      <img src={arrowIcon} alt="화살표 아이콘" className={cardStyle.arrow} />
    </Link>
  );
}
