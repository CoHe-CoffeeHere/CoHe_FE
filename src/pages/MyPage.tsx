import myPageStyle from "../css/pages/myPage.module.css";
import profileIcon from "../assets/pages/myPage/profile.svg";
import MyPageItem from "../components/MyPageItem";

export default function MyPage() {
  const logOut = () => {
    console.log("로그아웃");
  };
  return (
    <>
      <div className={myPageStyle.topTextDiv}>
        <span className={myPageStyle.topName}>마이페이지</span>
        <span className={myPageStyle.topComment}>
          내 정보와 설정을 관리하세요
        </span>
      </div>
      <div className={myPageStyle.profileCard}>
        <div className={myPageStyle.profileHeader}>
          <img src={profileIcon} alt="profile" />
          <div className={myPageStyle.profileInfo}>
            <span className={myPageStyle.profileName}>홍길동님</span>
            <span className={myPageStyle.profileEmail}>coffeehere@pah.com</span>
          </div>
        </div>
        <div className={myPageStyle.profilePass}>
          <span className={myPageStyle.currentPass}>현재 플랜</span>
          <span className={myPageStyle.passName}>Study Pass</span>
        </div>
      </div>
      <div className={myPageStyle.textDiv}>
        <span className={myPageStyle.title}>설정 및 정보</span>
        <span className={myPageStyle.subTitle}>
          계정과 앱 설정을 관리하세요
        </span>
      </div>
      <div className={myPageStyle.settingAndInfo}>
        <MyPageItem text="내 정보 수정" />
        <MyPageItem text="나의 요청 사항" />
        <MyPageItem text="알림 설정" />
        <MyPageItem text="이용 약관 및 정책" />
      </div>
      <div className={myPageStyle.logOut} onClick={logOut}>
        로그아웃
      </div>
    </>
  );
}
