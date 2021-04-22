import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";

import CardLayout from "./Card";
import S from "../../styles";
import { Select, Card } from "antd";

const { Option } = Select;

export default function Index() {
  const [currencies, setCurrencies] = useState({});
  const [currenciesArr, setCurrenciesArr] = useState([]);
  const [charCode, setCharCode] = useState("");
  const [resultCharCode, setResultCharCode] = useState("");
  const [convertedValue, setconvertedValue] = useState(0);
  const [nominal, setNominal] = useState(0);

  useEffect(() => {
    axios
      .get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then(({ data }) => {
        const dataArr = Object.values(data.Valute);
        setCharCode(dataArr[0].CharCode);
        setResultCharCode(dataArr[1].CharCode);
        setCurrencies(data.Valute);
        setCurrenciesArr(dataArr);
        setconvertedValue(dataArr[0]?.Value.toFixed(4));
        setNominal(dataArr[0]?.Nominal);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSelectMain = (element) => {
    setCharCode(element);
    setconvertedValue(currencies[element].Value * nominal);
    setNominal(currencies[element].Nominal);
  };

  const handleSelectResult = (element) => {
    setResultCharCode(element);
    setconvertedValue(currencies[element].Value);
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      let result = Object.values(currencies).filter((element) => {
        return element.CharCode.toLowerCase().includes(
          e.target.value.toLowerCase()
        );
      });
      setCurrenciesArr(result);
    } else {
      setCurrenciesArr(Object.values(currencies));
    }
  };

  const handleResult = (e) => {
    setNominal(e.target.value);
    let result = currencies[charCode].Value * e.target.value;
    setconvertedValue(result);
  };

  return (
    <S.Inner>
      <h1 className="title">Currencies</h1>
      <div className="inner">
        <div className="converter">
          <div className="converter__block">
            <div className="converter__title">{currencies[charCode]?.Name}</div>
            <div className="converter__inner">
              <Select
                defaultValue="AUD"
                onChange={handleSelectMain}
                className="converter__select"
              >
                {currenciesArr.map((item) => (
                  <Option key={item.ID} value={item?.CharCode}>
                    {item?.CharCode}
                  </Option>
                ))}
              </Select>
              <input
                className="converter__inp"
                value={nominal}
                type="text"
                onChange={handleResult}
                name="nominal"
              />
            </div>
          </div>
          <BsArrowRight className="converter__icon" />
          <div className="converter__block">
            <div className="converter__title">
              {currencies[resultCharCode]?.Name}
            </div>
            <div className="converter__inner">
              <Select
                defaultValue="AZN"
                onChange={handleSelectResult}
                className="converter__select"
              >
                {currenciesArr.map((item) => (
                  <Option key={item.ID} value={item?.CharCode}>
                    {item?.CharCode}
                  </Option>
                ))}
              </Select>
              <input
                value={convertedValue}
                type="text"
                className="converter__inp"
              />
            </div>
          </div>
        </div>
        <div className="search-inner">
          <input
            className="search-inner__inp"
            onChange={handleSearch}
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <S.Main>
        <Card className="card">
          {currenciesArr.map((item) => (
            <Card.Grid className="card__item">
              <CardLayout key={item.ID} data={item} />
            </Card.Grid>
          ))}
        </Card>
      </S.Main>
    </S.Inner>
  );
};