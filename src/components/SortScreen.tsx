import { Box, Button, Center, HStack, VStack } from "@chakra-ui/react"
import { useState } from "react"

export const SortScreen = () => {
  const defaultArray = [10, 2, 8, 17, 6]
  const [sortTargetArray, setSortTargetArray] = useState<number[]>(defaultArray)

  /**
   * バブルソートを実行
   */
  const bubbleSort = () => {
    const array = [...sortTargetArray]
    const length = array.length

    // ↓はarray.sort((a, b) => a - b)でも実装可能
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          // 隣接する要素の交換
          [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
      }
    }

    setSortTargetArray(array)
  }

  /**
   * マージソートを実行
   */
  const mergeSort = (array: number[]): number[] => {
    // 再帰処理の終了条件
    if (array.length <= 1) {
      return array
    }

    const middleLength = Math.floor(array.length / 2)
    const leftArray = array.slice(0, middleLength)
    const rightArray = array.slice(middleLength)

    // 再帰的な処理
    const sortedLeftArray = mergeSort(leftArray)
    const sortedRightArray = mergeSort(rightArray)

    return merge(sortedLeftArray, sortedRightArray)
  }

  /**
   * マージ処理を行う
   */
  const merge = (sortedLeftArray: number[] | undefined, sortedRightArray: number[] | undefined) => {
    if (!sortedLeftArray || !sortedRightArray) {
      return []
    }

    const result = []
    let leftIndex = 0
    let rightIndex = 0

    // 左右の配列を比較しながらマージ
    while (leftIndex < sortedLeftArray.length && rightIndex < sortedRightArray.length) {
      if (sortedLeftArray[leftIndex] < sortedRightArray[rightIndex]) {
        result.push(sortedLeftArray[leftIndex])
        leftIndex++
      } else {
        result.push(sortedRightArray[rightIndex])
        rightIndex++
      }
    }

    const newArray = result.concat(sortedLeftArray.slice(leftIndex)).concat(sortedRightArray.slice(rightIndex))

    return newArray
  }

  /**
   * 配列を初期状態に戻す
   */
  const reset = () => setSortTargetArray(defaultArray)

  return (
    <Center mt={10}>
      <VStack>
        <HStack>
          {sortTargetArray.map((num, index) => (
            <Box key={index} w='40px' h='40px' textAlign='center' lineHeight='40px' border='1px solid gray'>
              {num}
            </Box>
          ))}
        </HStack>
        <Button colorScheme="teal" size='sm' onClick={bubbleSort}>
          バブルソート
        </Button>
        <Button colorScheme="teal" size='sm' onClick={() => setSortTargetArray(mergeSort(sortTargetArray))}>
          マージソート
        </Button>
        <Button colorScheme="red" size='sm' onClick={reset}>
          リセット
        </Button>
      </VStack>
    </Center>
  )
}