import { Banner } from "../components/Banner";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
    </Flex>
  )
}
