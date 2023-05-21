'use client'
import Board from '@/components/Board/Board'
import { Button, Container, Flex, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  const activeBoard = ''
  // const activeBoard = 'Board 1'

  return (
    <Container w="full" h="full" color="gray.400">
      {activeBoard ? (
        <Board />
      ) : (
        <Flex direction="column" align="center" justifyContent="center">
          <Heading as="h2" size="xl">
            Welcome to kanban!
          </Heading>
          <Text mt="16px">{`You're just one click away from giving life to your dream project`}</Text>
          <Text>Start by creating your first board:</Text>
          <Button variant="primary" size="lg" mt="32px">
            + Create New Board
          </Button>
        </Flex>
      )}
    </Container>
  )
}
