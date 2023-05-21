import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Board: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" h="full">
      <Heading as="h3" fontSize="18px" color="gray.300" fontWeight={600}>
        This board is empty. Create a new column to get started.
      </Heading>
      <Button variant="primary" size="lg" mt="32px">
        + Add New Column
      </Button>
    </Flex>
  )
}

export default Board
