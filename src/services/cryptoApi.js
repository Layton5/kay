import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "7ac056154amsh46a78fe36a41845p138a21jsn709af522c967",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
let baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (
  url,
  params = {},
  headers = { ...cryptoApiHeaders },
  baseUrlToUse = baseUrl
) => {
  baseUrl = baseUrlToUse;
  return {
    url,
    headers: headers,
    ...params,
  };
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getExchanges: builder.query({
      query: (count) => {
        const cryptoApiHeaders = {
          "X-RapidAPI-Key":
            "7ac056154amsh46a78fe36a41845p138a21jsn709af522c967",
          "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
        };
        let baseUrl = "https://coingecko.p.rapidapi.com";
        return createRequest(`/exchanges`, {}, cryptoApiHeaders, baseUrl);
      },
    }),

    getCryptosHistory: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}/history`),
    }),

    getCryptoDetails: builder.query({
      query: (args) => {
        const { coinId, ...rest } = args;
        return createRequest(`/coin/${coinId}`, rest);
      },
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptosHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
