import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Contact Us</Heading>
      <Text fontSize="lg" mb={6}>Have any questions or need support? Reach out to us!</Text>
      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal" size="lg">Submit</Button>
      </VStack>
    </Box>
  );
};

export default Contact;