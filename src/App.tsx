import { Box, Button, Center, HStack, VStack } from "@chakra-ui/react"

function App() {
  const array = [10, 2, 8, 17, 6]

  return (
    <Center mt={10}>
      <VStack>
        <HStack>
          {array.map(num => (
            <Box w='40px' h='40px' textAlign='center' lineHeight='40px' border='1px solid gray'>{num}</Box>
          ))}
        </HStack>
        <Button colorScheme="teal" size='sm'>バブルソート</Button>
        <Button colorScheme="teal" size='sm'>ソート</Button>
      </VStack>
    </Center>
  )
}

export default App
