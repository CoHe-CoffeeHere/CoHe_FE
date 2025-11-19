import myPageStyle from "../css/components/myPageItem.module.css";
import arrowIcon from "../assets/pages/myPage/arrow-right.svg";

type Props = {
  text: string;
};

export default function MyPageItem({ text }: Props) {
  return (
    <div className={myPageStyle.items}>
      <span>{text}</span>
      <img src={arrowIcon} alt="arrow" />
    </div>
  );
}
