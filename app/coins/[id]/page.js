import React from "react";

const Coins = async ({ params }) => {
  const coin = await getDataById(params.id);

  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="flex flex-col justify-center items-center border border-yellow-600 rounded-md p-2 w-72">
        <img className="mb-8" src={coin.image.large} alt={coin.name} />
        <h1 className="mb-2 font-bold">{coin.name.toUpperCase()}</h1>
        <p className="mb-2">{coin.symbol}</p>
        <p className="mb-2 ">${coin.market_data.current_price.usd}</p>
      </div>
    </div>
  );
};

export default Coins;

const getDataById = async (coinID) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`);
  const data = await res.json();
  return data;
};
