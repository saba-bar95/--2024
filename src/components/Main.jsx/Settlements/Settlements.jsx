import "./Settlements.scss";
import mestia from "/src/assets/images/mestia.png";
import map from "/src/assets/images/settlements-map.png";
import { useState } from "react";

export default function Settlements() {
  const [selected, setSelected] = useState(0);
  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="settlements--section">
      <h1>აღწერა ძნელად მისადგომ დასახლებებში</h1>
      <p>
        იმის გათვალისწინებით, რომ ნოემბერ-დეკემბრის პერიოდში ზოგიერთ მთიან,
        ძნელად მისადგომ მუნიციპალიტეტსა და დასახლებაში ამინდის შესაძლო
        გაუარესების გამო გართულდება საველე სამუშაოების ჩატარება, შემდეგ
        ადმინისტრაციულ ერთეულებში აღწერა ჩატარდება 2024 წლის სექტემბერში:
      </p>
      <div className="container">
        <ul>
          {["მესტია", "ყაზბეგი", "ლენტეხი", "ახმეტა", "დუშეთი"].map(
            (item, index) => (
              <li
                key={index}
                className={selected === index ? "selected" : ""}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            )
          )}
        </ul>
        <div className="border-container"></div>
        <div className="wrapper">
          <div className="left-side">
            <img src={mestia} alt="" />
            <h2>მესტიის მუნიპილიტეტი</h2>
            <h3>სამეგრელო-ზემო სვანეთი</h3>
            <p>
              დაბა მესტია; ბეჩო — ბაგვდანარი, გალაში, დოლასვიფი, დოლი, ლანხვრი,
              მაზერი, ნაშთქოლი, ტვებიში, უშხვანარი, ქართვანი, ცხეკვანი,
              ჭკიდანარი, ჭოხულდი; ეცერი — ბარში, გვალდერი, ისკარი, კალაში,
              ლადრერი, ლანტელი, ლაშხრერი, უსგვირი, უღვალი, ფხუტრერი, ქურაში,
              ცალანარი, ჭელირი, ჰებუდი; იდლიანი — იდლიანი, ლებურცხილა, ნაშიხვი,
              ჭალე; იფარი — ადიში, ბოგრეში, ზეგანი, ნაკიფარი; კალა — დავბერი,
              ვიჩნაში, იფრარი, ლალხორალი, ხალდე, ხე; ლატალი — იენაში, იფხი,
              კვანჭიანარი, ლახუშდი, ლაჰილი, ლელბაგი, ლეშუკვი, მაცხვარიში,
              ნანყვამ-ზაგრალი, სიდიანარი, შყალერი; ლახამულა — გენწვიში, დიზი,
              თოთელეში, ლახამულა, ნოდაში, ნოღარი-კეცლანი, ქვედა იფარი, შდიხირი,
              ხელრა, ჰამაში; ლენჯერი — კაერი, ლაშთხვერი, ლემსია, ნესგუნი, სოლი,
              ქაშვეთი, ჰეშკილი; მულახი — არცხელი, ზარდლაში, ლახირი, მაჯვდიერი,
              მურშკელი, ჟაბეში, ჟამუში, ღვებრა, ჩვაბიანი, ცალდაში, ჭოლაში; ნაკრა
              — ანილი, თავრალი, კვიცანი, კიჩხულდაში, ლაშხრაში, ლაწომბა,
              ლენკვაში, ნაკრა, ცალერი, ხერხვაში; უშგული — ლამჯურიში, მურყმელი,
              ჟიბიანი, ჩაჟაში, ჩვიბიანი; ფარი — ზაგარი, ზედა ლუჰა, კაცხი,
              ლამხერი, ლაყვრი, სვიფი, ფალედი, ფარი, ქვედა ლუჰა, ღეშდერი, ყვანა,
              ხოსრარი; ცხუმარი — ლაბსყალდი, ლეზგარა, მაგარდელი, სვიფი, ტვიბერი,
              ღვებალდი; წვირმი — ასკარტი, აცი, იელი, ჩობანი, წვირმი; ჭუბერი —
              დევრა, ზედა მარღი, ლარილარი, ლახამი, ლეკულმახე, ლეწფერი, სგურიში,
              ტიტა, ქვემო მარღი, ყარი; ხაიში — ბარჯაში, გაღმა ხაიში, ზედა ვედი,
              ზედა წვირმინდი, ზედა ხაიში, ზემო ვედი, თოთანი, ლალხორალი, ლახანი,
              ლუხი, მუხაშერა, ნაკი, ნალქორვალი, ნანყბული, სკორძეთი, ტობარი,
              ქედანი, ქვედა ვედი, ქვედა წვირმინდი, შგედი, ციცხვარი, ჭერი, ხაიში,
              ჯორკვალი.
            </p>
          </div>
          <div className="right-side">
            <img src={map} alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
}