'use client'
import { Box, Button, Flex, Heading, Switch } from '@chakra-ui/react'
import React from 'react'
import { default as IconBoard } from '../Icons/IconBoard'
import IconHide from '../Icons/IconHide'
import IconMoon from '../Icons/IconMoon'
import IconSun from '../Icons/IconSun'

type SidebarProps = {
  boardNames: string[]
}

const Sidebar: React.FC<SidebarProps> = ({ boardNames }) => {
  const activeBoard = boardNames[0]

  return (
    <Flex
      position="absolute"
      top="0"
      left="0"
      bg="white"
      height="100vh"
      borderRight="1px"
      borderColor="gray.200"
      w={300}
    >
      <Flex
        position="relative"
        top="100px"
        pt="15px"
        pb="32px"
        maxHeight={boardNames.length ? 'calc(100vh - 100px)' : '100vh'}
        direction="column"
        justify="space-between"
        color="gray.300"
        w="full"
      >
        <header>
          {boardNames.length ? (
            <>
              <Heading as="h3" fontSize="12px" pl="34px" pb="19px">
                ALL BOARDS (3)
              </Heading>
              <ul>
                {boardNames.map((boardName) => (
                  <li key={boardName}>
                    <Box role="group" position="relative" left="-34px" w="full">
                      <Flex
                        align="center"
                        py="14px"
                        pl="68px"
                        borderBottomRightRadius="25px"
                        borderTopRightRadius="25px"
                        color={activeBoard === boardName ? 'white' : 'gray.300'}
                        bg={
                          activeBoard === boardName
                            ? 'purple.200'
                            : 'transparent'
                        }
                        _groupHover={{
                          bg:
                            activeBoard === boardName
                              ? 'purple.200'
                              : 'purple.50',
                          color:
                            activeBoard === boardName ? 'white' : 'purple.200',
                          cursor: 'pointer',
                        }}
                      >
                        <IconBoard />
                        <Heading
                          as="h4"
                          fontSize="15px"
                          fontWeight={500}
                          pl="16px"
                        >
                          {boardName}
                        </Heading>
                      </Flex>
                    </Box>
                  </li>
                ))}
                <li>
                  <Box role="group" position="relative" left="-34px" w="full">
                    <Flex
                      align="center"
                      py="14px"
                      pl="68px"
                      borderBottomRightRadius="25px"
                      borderTopRightRadius="25px"
                      color="purple.200"
                      _groupHover={{
                        bg: 'purple.50',
                        cursor: 'pointer',
                      }}
                    >
                      <IconBoard />
                      <Heading
                        as="h4"
                        fontSize="15px"
                        fontWeight={500}
                        pl="16px"
                      >
                        + Create New Board
                      </Heading>
                    </Flex>
                  </Box>
                </li>
              </ul>
            </>
          ) : (
            <p>No boards yet</p>
          )}
        </header>

        <footer>
          <Flex
            justify="center"
            align="center"
            gap="24px"
            bg="gray.100"
            borderRadius="6px"
            py="14px"
            mx="24px"
          >
            <IconSun />
            <Switch size="md" colorScheme="purple.200" />
            <IconMoon />
          </Flex>

          <Box role="group" w="full" pr="24px">
            <Button
              w="full"
              py="14px"
              variant="ghost"
              position="relative"
              mt="8px"
              borderLeftRadius="none"
              borderBottomRightRadius="25px"
              borderTopRightRadius="25px"
              color="gray.300"
              bg="none"
              _groupHover={{
                color: 'purple.200',
                bg: 'purple.50',
                cursor: 'pointer',
              }}
            >
              <Flex position="absolute" left="34px">
                <IconHide />
                <Heading as="h4" fontSize="15px" fontWeight={500} pl="16px">
                  Hide Sidebar
                </Heading>
              </Flex>
            </Button>
          </Box>
        </footer>
      </Flex>
    </Flex>
  )
}
export default Sidebar
