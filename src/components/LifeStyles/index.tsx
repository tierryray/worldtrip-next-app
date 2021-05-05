import { Box, List, ListIcon, ListItem, Text, useMediaQuery } from "@chakra-ui/react";

import { GoPrimitiveDot } from 'react-icons/go';
import { LifeStyles as LifeStylesHomeProps } from '../../pages/index';

type LifeStylesProps = {
  lifeStyles: LifeStylesHomeProps[];
};

export function LifeStyles({ lifeStyles }: LifeStylesProps) {
  const [isMobile] = useMediaQuery("(max-width: 375px)");

  return (
    <Box px={["10", "24"]} mt={["10", "24"]}>
      <List display="flex" justifyContent="space-evenly" alignItems="center" flexWrap="wrap">
        {lifeStyles?.map(lifeStyle => (
          <ListItem key={lifeStyle.description} display="flex" flexDirection={["row", "column"]} alignItems="center" mb={["5", "0"]}>
            {isMobile ? (
              <>
                <ListIcon as={GoPrimitiveDot} color="yellow.300" />
                <Text fontSize="large" fontWeight="500">{lifeStyle.description}</Text>
              </>
            ) : (
              <>
                <ListIcon as={lifeStyle.icon} color="yellow.300" width="85px" height="85px" mb="4" />
                <Text fontWeight="500">{lifeStyle.description}</Text>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

// if (isMobile) {
//   console.log(true);
//   return (
//     <ListItem key={lifeStyle.description} display="flex" alignItems="center">
//       <ListIcon as={GoPrimitiveDot} color="yellow.300" mb="4" />
//       <Text fontWeight="500">{lifeStyle.description}</Text>
//     </ListItem>
//   );
// }
// return (
//   <ListItem display="flex" flexDirection="column" alignItems="center">
//     <ListIcon as={lifeStyle.icon} color="yellow.300" width="85px" height="85px" mb="4" />
//     <Text fontWeight="500">{lifeStyle.description}</Text>
//   </ListItem>
// );