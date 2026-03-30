import {
  ServiceTitleContainer,
  ServiceTitle,
  ServiceDetailButton,
  ServiceList,
  ServiceStackBox,
  ServiceContainerBox,
} from '@/components/portfolio/Career/CareerServiceInfo';
import { Typography } from '@mui/material';
import React from 'react';

interface CareerServiceInfoProps {
  title: string;
  managePeriod: string;
  description: string;
  serviceDescDetails: string[];
  serviceStack: string;
  onClickDetailsButton?: () => void;
}
export const CareerServiceInfo = ({
  title,
  managePeriod,
  description,
  serviceDescDetails,
  serviceStack,
  onClickDetailsButton: handleClickDetails,
}: CareerServiceInfoProps) => {
  return (
    <ServiceContainerBox>
      <ServiceTitleContainer>
        <ServiceTitle variant="h6">{title}</ServiceTitle>

        {handleClickDetails && (
          <ServiceDetailButton onClick={handleClickDetails}>Details</ServiceDetailButton>
        )}
      </ServiceTitleContainer>
      <Typography color="#5D5D5D" gutterBottom>
        {managePeriod}
      </Typography>
      <Typography>{description}</Typography>

      <ServiceList>
        {serviceDescDetails.map((item, id) => (
          <li key={id}>
            <Typography>{item}</Typography>
          </li>
        ))}
      </ServiceList>

      <ServiceStackBox>
        <Typography>{serviceStack}</Typography>
      </ServiceStackBox>
    </ServiceContainerBox>
  );
};
