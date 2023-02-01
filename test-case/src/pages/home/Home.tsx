import { useState } from "react";
import ListNews from "../../components/list/ListNews";
import SelectBox from "../../components/selectBar/SelectBar";
import Countries from "../../data/Countries";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function HomePage() {
  document.title = "Home | News App";

  const countries = Countries;
  const [countryValue, setCountryValue] = useState<string>("id");
  const [countryLabel, setCountryLabel] = useState<string>("Indonesia");
  const [category, setCategory] = useState<string>("general");

  function changeCountry(value: string) {
    countries.filter((countries) => {
      if (countries.value === value) {
        setCountryLabel(countries.label);
        setCountryValue(value.toLowerCase());
      }
    });
  }

  return (
    <>
      <div className="site-layout-content">
        <div className="top-content container">
          <div className="top-list">
            <h1
              style={{
                textTransform: "capitalize",
                marginBottom: "20px",
                fontSize: "32px",
              }}
            >
              Top News From {countryLabel}
            </h1>
            <SelectBox
              handleChange={changeCountry}
              options={countries}
              defaultValue="ID"
            />
          </div>
          <div className="categories-list">
            {categories.map((item, index) => (
              <div key={index}>
                <a onClick={() => setCategory(item)}>
                  {item === "general" ? "main" : `${item}`}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="main-content container">
          <h2 className="text-main">
            {category === "general" ? "main" : `${category}`} news
          </h2>
          <ListNews countryValue={countryValue} categoryValue={category} />
        </div>
      </div>
    </>
  );
}
