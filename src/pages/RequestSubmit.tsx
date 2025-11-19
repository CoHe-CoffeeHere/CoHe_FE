import requestSubmitStyle from "../css/pages/requestSubmit.module.css";
import trashIcon from "../assets/pages/requestSubmit/trash.svg";
import accidentIcon from "../assets/pages/requestSubmit/accident.svg";
import errorIcon from "../assets/pages/requestSubmit/error.svg";
import songIcon from "../assets/pages/requestSubmit/song.svg";
import arrowIcon from "../assets/pages/requestSubmit/arrow-left.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, type FormEvent } from "react";
export default function RequestSubmit() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [textInput, setTextInput] = useState<string>("");
  const [categoryData, setCategoryData] = useState<{
    bg: string;
    icon: string;
    text: string;
  } | null>(null);

  // 카테고리 모아둔 변수
  const categoryMap: Record<
    string,
    { bg: string; icon: string; text: string }
  > = {
    trash: { bg: "#005EEB33", icon: trashIcon, text: "청소 요청" },
    error: { bg: "#F55A0033", icon: errorIcon, text: "고장/장비" },
    accident: { bg: "#E5222233", icon: accidentIcon, text: "사고/결제" },
    song: { bg: "#5B37ED33", icon: songIcon, text: "신청곡 등록" },
  };

  useEffect(() => {
    if (category && categoryMap[category]) {
      setCategoryData(categoryMap[category]);
    }
  }, [category]);

  const handleRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("폼 제출");
  };

  return (
    <>
      <div className={requestSubmitStyle.arrow}>
        <img src={arrowIcon} alt="돌아가기" onClick={() => navigate(-1)} />
        <span>돌아가기</span>
      </div>
      <div className={requestSubmitStyle.textDiv}>
        <span className={requestSubmitStyle.title}>매장 요청 및 민원</span>
        <span className={requestSubmitStyle.subTitle}>
          관리자에게 알람을 전송할 수 있어요
        </span>
      </div>
      <div
        className={requestSubmitStyle.titleCard}
        style={{ backgroundColor: categoryData?.bg }}
      >
        <div className={requestSubmitStyle.titleCardHeader}>
          <div>
            <img src={categoryData?.icon} alt={categoryData?.text} />
          </div>
          <span>{categoryData?.text}</span>
        </div>
        <div className={requestSubmitStyle.titleCardBody}>
          {
            "상세 내용을 작성해주세요.\n구체적으로 적을수록 더 빠르게 해결할 수 있어요."
          }
        </div>
      </div>
      <form className={requestSubmitStyle.requestInfo} onSubmit={handleRequest}>
        <span>요청 사항</span>
        <textarea
          placeholder="요청 사항을 입력해주세요"
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
        <button
          disabled={textInput === "" ? true : false}
          type="submit"
          className={`${
            textInput === ""
              ? requestSubmitStyle.disabled
              : requestSubmitStyle.active
          }`}
        >
          요청하기
        </button>
      </form>
    </>
  );
}
