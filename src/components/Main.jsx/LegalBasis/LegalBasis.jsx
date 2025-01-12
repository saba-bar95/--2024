import "./LegalBasis.scss";
import hammer from "/src/assets/images/hammer.svg";
import sakstat from "/src/assets/images/logo-transparent-ka.png";
import sakstatEn from "/src/assets/images/logo-transparent-en.png";
import defence from "/src/assets/images/defence.svg";
import program from "/src/assets/images/program.png";
import { Link } from "react-router-dom";
import translations from "../../../translation";

export default function LegalBasis() {
  const language = localStorage.getItem("language");
  const text = translations[language].main.legal;

  const isEnglish =
    language === "en" ? "legal-container lang-en" : "legal-container";

  const firstLink =
    language === "en"
      ? "https://www.geostat.ge/media/56202/The-Law-of-Georgia-on-Official-Statistics.pdf"
      : "https://www.geostat.ge/media/54263/%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-%E1%83%99%E1%83%90%E1%83%9C%E1%83%9D%E1%83%9C%E1%83%98-%E1%83%9D%E1%83%A4%E1%83%98%E1%83%AA%E1%83%98%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%A2%E1%83%90%E1%83%A2%E1%83%98%E1%83%A1%E1%83%A2%E1%83%98%E1%83%99%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%A1%E1%83%90%E1%83%AE%E1%83%94%E1%83%91.pdf";

  const secondLink =
    language === "en"
      ? "https://www.geostat.ge/media/20845/10%2Csaqstatis-konsolidirebuli-debuleba.pdf"
      : "https://www.geostat.ge/media/20600/10%2Csaqstatis-konsolidirebuli-debuleba.pdf";

  const thirdLink =
    language === "en"
      ? "https://matsne.gov.ge/en/document/view/5827307?publication=2"
      : "https://matsne.gov.ge/ka/document/view/5827307?publication=2";

  const fourthLink =
    "https://www.geostat.ge/media/61668/%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-2024-%E1%83%AC%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%90%E1%83%AE%E1%83%9A%E1%83%94%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1-%E1%83%93%E1%83%90-%E1%83%A1%E1%83%90%E1%83%A1%E1%83%9D%E1%83%A4%E1%83%9A%E1%83%9D-%E1%83%A1%E1%83%90%E1%83%9B%E1%83%94%E1%83%A3%E1%83%A0%E1%83%9C%E1%83%94%E1%83%9D-%E1%83%90%E1%83%A6%E1%83%AC%E1%83%94%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%92%E1%83%A0%E1%83%90%E1%83%9B%E1%83%90.pdf";

  return (
    <>
      <div className="legal--section">
        <div className={isEnglish}>
          <div className="right-side">
            <h1>{text.header}</h1>
            <p>{text.para1}</p>
            <div className="container">
              <div
                onClick={() => {
                  window.open(firstLink);
                }}>
                <img src={hammer} alt="hammer" />
                <p>{text.para2}</p>
              </div>
              <div
                onClick={() => {
                  window.open(secondLink);
                }}>
                <img
                  src={language === "ka" ? sakstat : sakstatEn}
                  alt="sakstat"
                  style={{ width: "120px" }}
                />
                <p>{text.para3}</p>
              </div>
              <div
                onClick={() => {
                  window.open(thirdLink);
                }}>
                <img src={defence} alt="defence" />
                <p>{text.para4}</p>
              </div>
              <div
                onClick={() => {
                  window.open(fourthLink);
                }}>
                <img src={program} alt="program" />
                <p>{text.para5}</p>
              </div>
            </div>
            <Link to={`/${language}/legalbasis`}>
              <button>{text.more}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
