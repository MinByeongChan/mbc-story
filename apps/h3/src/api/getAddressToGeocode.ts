import axios from 'axios';
import { VWORLD_API_BASE, VWORLD_KEY } from './constants';

export const getAddressToGeocode = async (address: string) => {
  const response = await axios.get(
    `${VWORLD_API_BASE}/req/address?service=address&request=getcoord&version=2.0&address=${encodeURIComponent(address)}&type=road&format=json&crs=epsg:4326&key=${VWORLD_KEY}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
