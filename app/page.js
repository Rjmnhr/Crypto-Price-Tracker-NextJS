import CoinList from "@/components/coin-list";
import Layout from "@/components/layout";

export default async function Home() {
  const crypto = await getCryptoData();

  return (
    <>
      <Layout>
        <main>
          <CoinList coinsData={crypto} />
        </main>
      </Layout>
    </>
  );
}

const getCryptoData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"
  );
  return response.json();
};
