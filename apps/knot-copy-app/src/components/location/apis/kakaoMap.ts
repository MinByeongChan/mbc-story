import axios from 'axios';

export const KAKAO_BASE_API_URL = 'https://dapi.kakao.com';

export const getAddressToGeocode = async (query: string) => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

  const response = await axios.get(`${KAKAO_BASE_API_URL}/v2/local/search/address`, {
    params: {
      query,
      page: 1,
      size: 10,
    },
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`,
    },
  });

  return response;
};
