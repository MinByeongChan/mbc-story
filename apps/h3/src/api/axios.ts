import { VworldAddressApiRequest, VworldAddressApiResponse } from '@/types';
import axios from 'axios';

const VWORLD_KEY = import.meta.env.VITE_VWORLD_KEY as string | undefined;

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAddress = async (request: VworldAddressApiRequest) => {
  const response = await api.get<VworldAddressApiResponse>(`/req/address?
service=address&request=getAddress&version=2.0&crs=epsg:4326&point=${request.lng},${request.lat}
&format=json&type=both&zipcode=true&simple=false&key=${VWORLD_KEY}`);
  return response.data.response;
};
