import { Flex, Heading, Img, Text, useMediaQuery } from "@chakra-ui/react";

export function Banner() {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <Flex
      width="100vw"
      backgroundImage="url(/images/sky.jpg)"
      bgRepeat="no-repeat"
      height={["40", "96"]}
      bgSize="cover"
      filter="brightness(2.5)"
      position="relative"
    >
      <Flex align="center" px={["6", "24"]} py={["4", "10"]}>
        <Flex direction="column">
          <Heading fontSize={["2xl", "4xl"]} fontWeight="500" lineHeight="1.4">5 continentes, <br /> infinitas possibilidades</Heading>
          <Text fontSize={["md", "lg"]} maxWidth="30rem" mt={["2", "5"]} color="gray.500">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Flex>

        { isLargerThan1200 ? (
          <Img
            src="/images/airplane.svg"
            alt="Avião decolando"
            filter="brightness(0.4)"
            transform="rotate(5deg)"
            position="absolute"
            right="40"
            bottom="-8"
          />
        ) : null}
      </Flex>
    </Flex>
  )
};