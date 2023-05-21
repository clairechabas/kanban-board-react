'use client'

import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import IconDots from '../Icons/IconDots'

const Header: React.FC = () => {
  const activeBoard = ''
  const isSidebarOpen = true

  return (
    <Flex
      align="center"
      height="100px"
      borderBottom="1px"
      borderColor="gray.200"
      bg="white"
    >
      <Flex align="center" w={300} p="34px" position="relative" zIndex="1">
        <Image
          src="/images/kanban-logo-icon.svg"
          w={6}
          h={6}
          mr={2}
          alt="Logo icon"
        />
        <Heading as="h1" size="lg" fontWeight="extrabold">
          kanban
        </Heading>
      </Flex>

      <Flex w="full" align="center" justify="space-between" p="34px">
        {activeBoard && (
          <Heading as="h2" size="md">
            Project Name
          </Heading>
        )}

        <Box ml="auto">
          <Button variant="primary" size="lg" ml="6" disabled>
            + Add New Task
          </Button>
          <Button
            role="group"
            variant="ghost"
            ml="16px"
            p="0"
            color="gray.300"
            _hover={{ bg: 'none', cursor: 'pointer' }}
          >
            <IconDots />
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}
export default Header
