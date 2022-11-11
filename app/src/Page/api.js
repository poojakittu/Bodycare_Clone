import axios from "axios";

export const getCandle = (params = {}) => {
  return axios.get(`http://localhost:3000/candle`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};