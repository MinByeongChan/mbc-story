import { useQuery } from '@tanstack/react-query';
import { getAddressToGeocode } from '../apis/kakaoMap';

interface UseGeoCodeProps {
  address: string;
}

export const useGeoCode = ({ address }: UseGeoCodeProps) => {
  return useQuery({
    queryKey: ['geoCode'],
    queryFn: () => getAddressToGeocode(address),
    select: (data) => data.data.documents[0],
    enabled: !!address,
  });
};
