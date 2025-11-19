import couponStyle from "../css/components/couponAlarm.module.css";
import coupon from "../assets/components/couponAlarm/coupon.png";
export default function CouponAlarm() {
  return (
    <div className={couponStyle.container}>
      <img src={coupon} alt="Coupon Icon" />
      <span>빛나는 노력에 박수를! 수능 응원 쿠폰이 도착했어요.</span>
    </div>
  );
}
