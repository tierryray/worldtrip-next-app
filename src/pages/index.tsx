import { Box, Flex } from "@chakra-ui/react";
import { FaBuilding, FaCocktail, FaUmbrellaBeach } from 'react-icons/fa';

import { Banner } from "../components/Banner";
import { BiWorld } from 'react-icons/bi';
import { GetServerSideProps } from "next";
import { GiColiseum } from 'react-icons/gi';
import { Header } from "../components/Header";
import { LifeStyles } from "../components/LifeStyles";

export type LifeStyles = {
  description: string;
  icon: any;
}

const lifeStyles: LifeStyles[] = [
  {
    description: 'vida noturna',
    icon: FaCocktail,
  },
  {
    description: 'praia',
    icon: FaUmbrellaBeach,
  },
  {
    description: 'moderno',
    icon: FaBuilding,
  },
  {
    description: 'clássico',
    icon: GiColiseum,
  },
  {
    description: 'e mais...',
    icon: BiWorld,
  }
];

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />

      <LifeStyles lifeStyles={lifeStyles} />
    </Flex>
  )
};