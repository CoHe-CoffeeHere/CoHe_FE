import rewardStyle from "../css/pages/reward.module.css";
import characterIcon from "../assets/pages/subscribe/character.svg";
export default function Reward() {
  return (
    <>
      <div className={rewardStyle.topTextDiv}>
        <span className={rewardStyle.topName}>나의 리워드</span>
        <span className={rewardStyle.topComment}>
          포인트를 모으고 혜택을 받아요
        </span>
        <img
          className={rewardStyle.characterIcon}
          src={characterIcon}
          alt="Character Icon"
        />
      </div>
      <div className={rewardStyle.rewardCard}>
        <div className={rewardStyle.textDiv}>
          <span className={rewardStyle.cardTitle}>사용 가능한 포인트</span>
          <span className={rewardStyle.point}>2,340P</span>
        </div>
        <div className={rewardStyle.progressDiv}>
          <div className={rewardStyle.progressText}>
            <span>VIP등급까지</span>
            <span>1,660P 남음</span>
          </div>
          <div className={rewardStyle.progressBar}>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
