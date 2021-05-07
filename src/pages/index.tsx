import { Center, Divider, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { FaBuilding, FaCocktail, FaUmbrellaBeach } from 'react-icons/fa';

import { Banner } from "../components/Banner";
import { BiWorld } from 'react-icons/bi';
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
  const fontSize = useBreakpointValue({ base: "md", sm: "lg" })
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />

      <LifeStyles lifeStyles={lifeStyles} />

      <Center mt={["4", "16"]} mb={["4", "16"]} visibility={["hidden", "visible"]}>
        <Divider width="16" color="gray.500" />
      </Center>

      <Flex px={4} justify="center">
        <Heading textAlign="center" size={fontSize} fontWeight="500">Vamos nessa?<br />Então escolha seu continente</Heading>
      </Flex>
    </Flex>
  )
};