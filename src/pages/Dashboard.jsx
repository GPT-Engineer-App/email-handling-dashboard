import { Box, Heading, Text, VStack, SimpleGrid, GridItem, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Client Dashboard</Heading>
      <Text fontSize="lg" mb={6}>Track the progress of your email campaigns.</Text>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        <GridItem>
          <Stat>
            <StatLabel>Total Emails Sent</StatLabel>
            <StatNumber>1,234</StatNumber>
            <StatHelpText>Last 30 days</StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Open Rate</StatLabel>
            <StatNumber>56%</StatNumber>
            <StatHelpText>Last 30 days</StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Click Rate</StatLabel>
            <StatNumber>23%</StatNumber>
            <StatHelpText>Last 30 days</StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Replies</StatLabel>
            <StatNumber>123</StatNumber>
            <StatHelpText>Last 30 days</StatHelpText>
          </Stat>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;