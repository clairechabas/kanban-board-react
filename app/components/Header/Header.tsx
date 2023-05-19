'use client'

import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Header: React.FC = () => {
  return (
    <Flex align="center" border="2px" borderColor="red.500">
      <Box w={300} p="34px">
        <Heading as="h1" size="xl">
          JoyBoard
        </Heading>
      </Box>

      <Flex w="full" align="center" justify="space-between" p="34px">
        <Heading as="h2" size="md">
          Project Name
        </Heading>

        <div>
          <Button>+ Add New Task</Button>
          <Button>Settings</Button>
        </div>
      </Flex>
    </Flex>
  )
}
export default Header
