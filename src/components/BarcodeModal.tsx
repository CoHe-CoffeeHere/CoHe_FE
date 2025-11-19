import barcodeStyle from "../css/components/barcodeModal.module.css";
import closeIcon from "../assets/components/barcodeModal/close.svg";
import character from "../assets/components/barcodeModal/character.svg";
import barcode from "../assets/components/barcodeModal/barcode.svg";

type Props = {
  setOnBarcode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BarcodeModal({ setOnBarcode }: Props) {
  return (
    <div className={barcodeStyle.overlay}>
      <div className={barcodeStyle.backGround}>
        <div className={barcodeStyle.container}>
          <div className={barcodeStyle.header}>
            <img
              src={closeIcon}
              alt="close"
              onClick={() => {
                setOnBarcode(false);
              }}
            />
          </div>
          <div className={barcodeStyle.body}>
            <img
              src={character}
              alt="character"
              className={barcodeStyle.characterIcon}
            />
            <div className={barcodeStyle.textDiv}>
              <span className={barcodeStyle.title}>키오스크에 스캔하세요</span>
              <span className={barcodeStyle.subTitle}>
                바코드를 스캐너에 가까이 대주세요
              </span>
            </div>
            <img
              src={barcode}
              alt="barcode"
              className={barcodeStyle.barcodeIcon}
            />
            <span className={barcodeStyle.code}>COHEE-PAH-2025-1114</span>
          </div>
        </div>
      </div>
    </div>
  );
}
