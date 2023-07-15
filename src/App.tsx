import { Box, Button, Center, HStack, VStack } from "@chakra-ui/react"
import { useState } from "react"

function App() {
  const [sortTargetArr, setSortTargetArr] = useState<number[]>([10, 2, 8, 17, 6])

  /**
   * バブルソートを実行
   */
  const bubbleSort = () => {
    const array = [...sortTargetArr]
    const length = array.length

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          // 隣接する要素の交換
          [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
      }
    }

    setSortTargetArr(array)
  }

  return (
    <Center mt={10}>
      <VStack>
        <HStack>
          {sortTargetArr.map((num, index)=> (
            <Box key={index} w='40px' h='40px' textAlign='center' lineHeight='40px' border='1px solid gray'>{num}</Box>
          ))}
        </HStack>
        <Button colorScheme="teal" size='sm' onClick={bubbleSort}>バブルソート</Button>
        <Button colorScheme="teal" size='sm'>ソート</Button>
      </VStack>
    </Center>
  )
}

export default App
