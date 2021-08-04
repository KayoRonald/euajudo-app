import React from "react";
import {
  Box, Text, Heading,
  Stack, SimpleGrid, Avatar,
} from '@chakra-ui/react';
import { AiOutlineTeam } from 'react-icons/ai';
import contributors from '../../../json/contributors/contributors.json';

const Contributors: React.FC = () => {
  return (
    <React.Fragment key="ky">
      <Heading size="lg" display="inline-flex">
        Contribuidores
        <AiOutlineTeam />
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing="40px" pt="3">
        {contributors.map((member) => (
          <Box
            borderLeftWidth="4px"
            borderLeftColor="purple.500"
            padding="7px"
            borderRadius="4px"
            key={member.id}
          >
            <Stack direction="row" spacing={6}>
              <Avatar
                size="xl" src={member.avatar}
                name={member.name}
                borderColor={member.background}
                borderWidth={4}
              />
              <Stack spacing={3} maxW="320px">
                <Text fontWeight="bold" fontSize="md">
                  {member.name}
                </Text>
                <Text>
                  {member.collaboration}
                </Text>
              </Stack>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default Contributors;