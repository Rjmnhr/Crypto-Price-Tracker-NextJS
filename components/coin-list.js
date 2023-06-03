"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import Link from "next/link";

const CoinList = ({ coinsData }) => {
  const [search, setSearch] = useState("");
  const [cryptoData, setCryptoData] = useState([]);

  const filtered = coinsData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    if (search === "") {
      setCryptoData(coinsData);
    } else {
      const data = filtered.length > 0 ? filtered : null;
      setCryptoData(data);
    }
  }, [search, coinsData, cryptoData, filtered]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <SearchBar onChange={handleSearch} />
      <main className="flex min-h-screen flex-col items-center justify-between p-5  ">
        <div className="sm:w-11/12 w-full flex flex-col justify-center items-center rounded-lg bg-gray-900">
          {cryptoData ? (
            <>
              {cryptoData.map((crypto) => {
                return (
                  <>
                    <Link
                      href={`/coins/${crypto.id}`}
                      legacyBehavior
                      key={crypto.id}
                    >
                      <a className="flex gap-2 sm:gap-5 text-xs sm:text-base border-b border-gray-600 w-full items-center p-3 sm:justify-between justify-center  flex-wrap hover:bg-gray-600   ">
                        <div className="flex gap-3   items-center p-2 sm:justify-start sm:w-1/4 w-full  justify-center   ">
                          {" "}
                          <img
                            src={crypto.image}
                            alt={crypto.name}
                            className="sm:h-7 sm:w-7 w-5 h-5"
                          />
                          <p>{crypto.name}</p>
                        </div>

                        <p>${crypto.current_price}</p>
                        <p>${crypto.total_volume.toLocaleString()}</p>
                        {crypto.price_change_percentage_24h < 0 ? (
                          <p className="text-red-400">
                            {crypto.price_change_percentage_24h.toFixed(2)}
                          </p>
                        ) : (
                          <p className="text-green-400">
                            {crypto.price_change_percentage_24h.toFixed(2)}
                          </p>
                        )}
                        <p>Mkt Cap: ${crypto.market_cap.toLocaleString()}</p>
                      </a>
                    </Link>
                  </>
                );
              })}
            </>
          ) : (
            <h1>No Data Found</h1>
          )}
        </div>
      </main>
    </>
  );
};

export default CoinList;
