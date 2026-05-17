"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

const BitcoinNews = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
              price_change_percentage: "24h",
            },
          }
        );

        setCoins(res.data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="bg-[linear-gradient(135deg,#00EAFF,#A79CFF,#00EAFF)] px-4 py-3">
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-4">
          {coins.map((coin) => {
            const isPositive = coin.price_change_percentage_24h >= 0;

            return (
              <div
                key={coin.id}
                className={`flex items-center gap-2 border p-2 rounded-2xl bg-white/10 backdrop-blur ${
                  coin.id === "bitcoin" ? "ml-4" : ""
                }`}
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-8 h-8"
                />

                <div>
                  <h3 className="text-[16px] font-semibold uppercase">
                    {coin.name}
                  </h3>

                  <p className="text-sm flex items-center gap-2">
                    <span>
                      {coin.symbol.toUpperCase()} / USD · $
                      {coin.current_price.toLocaleString()}
                    </span>

                    <span
                      className={`font-medium ${
                        isPositive ? "text-[#00ff06]" : "text-[#ff0000]"
                      }`}
                    >
                      {isPositive ? "+" : ""}
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default BitcoinNews;




// import React from 'react';
 
 

// import { useQuery } from '@tanstack/react-query';
 
// import Marquee from 'react-fast-marquee';
// import { ramaCoinGeckoPrice } from '@/libs/api/rest/ramaCoinGeckoPrice';
// import LineChartCom from './LineChartCom';


// export default function BitcoinNews() {



//   const { data: ramaCoinGeckoPriceData } = useQuery({
//     queryKey: ['ramaCoinGeckoPrice'],
//     queryFn: () => {
//       return ramaCoinGeckoPrice()
//     }
//     ,
//   })

 
// //  const tester = ramaCoinGeckoPriceData;
// //   console.log(tester, "jssssss");



//   const coin__price__btc = ramaCoinGeckoPriceData?.[0]?.current_price;
//   const btc__title = ramaCoinGeckoPriceData?.[0]?.id;
//   const btcicon = ramaCoinGeckoPriceData?.[0]?.image;
//   const change__pricebtc = ramaCoinGeckoPriceData?.[0]?.price_change_24h;



//   const coin__price__eth = ramaCoinGeckoPriceData?.[1]?.current_price;
//   const eth__title = ramaCoinGeckoPriceData?.[1]?.id;
//   const ethicon = ramaCoinGeckoPriceData?.[1]?.image;
//    const change__priceeth = ramaCoinGeckoPriceData?.[1]?.price_change_24h;
  

//   const coin__price__ava = ramaCoinGeckoPriceData?.[16]?.current_price;
//   const ava__title = ramaCoinGeckoPriceData?.[16]?.id;
//   const avaicon = ramaCoinGeckoPriceData?.[16]?.image;
//     const change__priceava = ramaCoinGeckoPriceData?.[16]?.price_change_24h;


//   const coin__price__arb = ramaCoinGeckoPriceData?.[67]?.current_price;
//   const arb__title = ramaCoinGeckoPriceData?.[67]?.id;
//   const arbicon = ramaCoinGeckoPriceData?.[67]?.image;
//     const change__pricearb = ramaCoinGeckoPriceData?.[67]?.price_change_24h;

//   const coin__price__poly = ramaCoinGeckoPriceData?.[62]?.current_price;
//   const polyicon = ramaCoinGeckoPriceData?.[62]?.image;
//     const change__pricepoly = ramaCoinGeckoPriceData?.[62]?.price_change_24h;



//   const cards = [
//     {
//       name: `${btc__title}`,
//       price: `$${coin__price__btc}`,
//       change: `${parseFloat(change__pricebtc).toFixed(2)}`,
//       icon: btcicon,
//     },
//     {
//       name: eth__title,
//       price: `$${coin__price__eth}`,
//       change: `${parseFloat(change__priceeth).toFixed(2)}`,
//       icon: ethicon,
//     },
//     {
//       name: ava__title,
//       price: `$${coin__price__ava}`,
//      change: `${parseFloat(change__priceava).toFixed(2)}`,
//       icon: avaicon
//     },
//     {
//       name: arb__title,
//       price: `$${coin__price__arb}`,
//       change: `${parseFloat(change__pricearb).toFixed(2)}`,
//       icon: arbicon,
//     },
//     {
//       name: "Polygon",
//       price: `$${coin__price__poly}`,
//       change: `${parseFloat(change__pricepoly).toFixed(2)}`,
//       icon: polyicon,
//     },
    
//   ];

//   // React Slick settings
//   const settings = {
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//      <div className=" bg-[linear-gradient(135deg,#00EAFF,#A79CFF,#00EAFF)] px-4 py-3">
// //                 <Marquee gradient={false} speed={50}>
// //                     <div className="grid  grid-cols-7 gap-4">
//         {cards.map((card, index) => (
//           <div style={{ width: "230px" }} key={index} className="slider-slide p-4   mx-2 w-[230px] ">
//             <div className="flex justify-between">
//               <img src={card.icon} className='h-10 w-10 ' />
//               <LineChartCom />
//             </div>
//             <div className="text-[24px] font-bold text-white pt-5">{card.price}</div>
//             <div className='flex justify-between items-center pt-3'>
//               <div className="text-[20px] font-normal text-white">{card.name}</div>
//               <div
//                 className={`text-sm rounded-[4px] p-1 flex justify-center items-center ${card.change.includes('-') ? 'text-[#FF3D33] bg-[#FF3D3333]' : 'text-[#01FD48] bg-[#01FD4833]'
//                   }`}
//               >
//                 <img src={card.change.includes('-') ? "/images/trading/down.png" : "/images/trading/up.png"} />
//                 {card.change}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
// //                 </Marquee>
// //             </div>
//   );
// }
