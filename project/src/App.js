import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const listStyle = "card-list";
  const cardStyle = "card-item";

  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);

  async function fetchData() {
    if (!loading) {
      setLoading(true);
    }

    const response = await fetch(
      "https://api.coinpaprika.com/v1/tickers?limit=100&quotes=KRW",
    );

    if (!response.ok) {
      console.error("ERROR");
      return;
    }

    const data = await response.json();
    // console.log(data);
    setCoinList(data);
    setLoading(false);

    // setTimeout(() => {
    //   const data = [
    //     {
    //       index: 1,
    //       name: "ABC",
    //       quotes: {
    //         KRW: {
    //           price: 123123123,
    //         },
    //       },
    //     },
    //   ];
    //   setList(data);
    //   setLoading(false);
    // }, 3000);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>The Coin Lists!</h1>
      {loading ? (
        "loading,,,"
      ) : (
        <div>
          <h4>counts: {coinList.length}</h4>
          <ul className={listStyle}>
            {coinList.map((item, index) => (
              <li className={cardStyle} key={index}>
                {item.name}({item.symbol}){" "}
                {item.quotes.KRW.price} KRW
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
