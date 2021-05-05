import { Flex, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1440}
      align="center"
      justify="center"
      mx="auto"
      h={["14", "24"]}
    >
      <Img src="/images/worldtrip-logo.svg" alt="Worldtrip" height={["6", "12"]}  />
    </Flex>
  )
};