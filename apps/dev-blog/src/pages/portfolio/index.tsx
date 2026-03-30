import React from 'react';
import { Meta } from '@/layout';
import { Banner } from '@/components/portfolio/Banner';
import { Introduction } from '@/components/portfolio/Introduction';
import { Strength } from '@/components/portfolio/Strength';
import { Stack } from '@/components/portfolio/Stack';
import { Career } from '@/components/portfolio/Career';
import { Footer } from '@/components/portfolio/Footer';
import { GetStaticProps } from 'next';
import { getAllPortfolio } from '@/components/portfolio/CareerDetails';
import { PortfolioDetails } from '@/types';
import styled from '@emotion/styled';
import 'github-markdown-css/github-markdown-light.css';

interface PortfolioProps {
  portfolioDetails: PortfolioDetails[];
}

export const GridSection = styled.section`
  display: grid;
  grid: 1fr auto / repeat(12, 1fr);
  container-name: section-container;
  container-type: inline-size;
  background-color: #1e293b;
`;

const index = ({ portfolioDetails }: PortfolioProps) => {
  return (
    <>
      <Meta title="Frontend developer" description="Frontend developer 민병찬" />
      <GridSection>
        <Banner />
        <Introduction />
        <Strength />
        <Stack />
        <Career careerDetails={portfolioDetails} />
        <Footer />
      </GridSection>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const portfolioDetails = getAllPortfolio();
  return {
    props: {
      portfolioDetails,
    },
  };
};

export default index;
