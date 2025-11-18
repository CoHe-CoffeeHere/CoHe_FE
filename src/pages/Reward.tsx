import rewardStyle from "../css/pages/reward.module.css";
import characterIcon from "../assets/pages/subscribe/character.svg";
import timeIcon from "../assets/pages/reward/timeEvent.svg";
import testIcon from "../assets/pages/reward/testEvent.svg";
import americanoIcon from "../assets/pages/reward/americano.svg";
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
      <div className={rewardStyle.progressEventDiv}>
        <div className={rewardStyle.bottomTextDiv}>
          <span className={rewardStyle.bottomName}>진행 중 이벤트</span>
          <span className={rewardStyle.bottomComment}>
            참여하고 포인트를 획득하세요
          </span>
        </div>
        <div className={rewardStyle.eventCardDiv}>
          <div className={rewardStyle.eventCard}>
            <div className={rewardStyle.eventCardHeader}>
              <img src={timeIcon} alt="공부 시간 인증" />
              <div className={rewardStyle.headerTextDiv}>
                <span className={rewardStyle.headerText1}>
                  학습 시간 인증 이벤트
                </span>
                <span className={rewardStyle.headerText2}>
                  4시간 이상 체류 시 500P 적립
                </span>
              </div>
            </div>
            <div className={rewardStyle.eventBtn}>인증하기</div>
          </div>
          <div className={rewardStyle.eventCard}>
            <div className={rewardStyle.eventCardHeader}>
              <img src={testIcon} alt="수능 이벤트" />
              <div className={rewardStyle.headerTextDiv}>
                <span className={rewardStyle.headerText1}>
                  수능 합격기원 할인
                </span>
                <span className={rewardStyle.headerText2}>
                  11/7 ~ 11/21 모든 음료 20% 할인
                </span>
              </div>
              <span className={rewardStyle.hot}>HOT</span>
            </div>
          </div>
        </div>
      </div>
      <div className={rewardStyle.couponDiv}>
        <div className={rewardStyle.bottomTextDiv}>
          <span className={rewardStyle.bottomName}>쿠폰함</span>
          <span className={rewardStyle.bottomComment}>2개의 쿠폰이 있어요</span>
        </div>
        <div className={rewardStyle.couponCardDiv}>
          <div className={rewardStyle.couponCard}>
            <div className={rewardStyle.couponHeader}>
              <span className={rewardStyle.imgDiv}>
                <img src={americanoIcon} alt="아메리카노 쿠폰" />
              </span>
              <div className={rewardStyle.headerTextDiv}>
                <span className={rewardStyle.headerText1}>
                  아메리카노 무료 쿠폰
                </span>
                <span className={rewardStyle.headerText2}>
                  유효기간 : 2025.12.31까지
                </span>
              </div>
            </div>
            <div className={rewardStyle.useBtn}>사용하기</div>
          </div>
          <div className={rewardStyle.couponCard}>
            <div className={rewardStyle.couponHeader}>
              <span className={rewardStyle.imgDiv}>
                <img src={americanoIcon} alt="아메리카노 쿠폰" />
              </span>
              <div className={rewardStyle.headerTextDiv}>
                <span className={rewardStyle.headerText1}>
                  아메리카노 무료 쿠폰
                </span>
                <span className={rewardStyle.headerText2}>
                  유효기간 : 2025.12.31까지
                </span>
              </div>
            </div>
            <div className={rewardStyle.useBtn}>사용하기</div>
          </div>
        </div>
      </div>
    </>
  );
}
