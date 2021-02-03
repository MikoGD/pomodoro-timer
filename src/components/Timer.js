import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Container, Editable, EditableInput, EditablePreview, Flex, Spacer, Square, Text } from '@chakra-ui/react';
import React from 'react'

function Timer() {

    return (
        <Box w="100%" h="50vh" bg="blue.500" rounded="lg" boxShadow="md" centerContent>
            <Flex height="80%" color="white" justifyContent="center" alignItems="center">
                <Container h="100%" flex="1" bg="transparent" centerContent>

                    <Flex height="100%" direction="column" align="center" justify="center">
                        <Spacer />
                        <Text my="10px" color="white" fontWeight="500"> 
                            SESSION (mins)
                        </Text>
                        <Spacer />
                        <Square size="40px" bg="orange" rounded="md" fontSize="lg" as={Button} _hover={{ bg: "#f09b00" }}>
                            <AddIcon />
                        </Square>
                        <Spacer />
                        <Square size="100px" bg="transparent" rounded="md" fontSize="6xl" textAlign="center">
                            <Editable defaultValue="25" className="noSelect">
                                <EditablePreview className="noSelect"/>
                                <EditableInput className="noSelect" />
                            </Editable>
                        </Square>
                        <Spacer />
                        <Square size="40px" bg="orange" rounded="md" fontSize="lg" as={Button} _hover={{ bg: "#f09b00" }}>
                            <MinusIcon />
                        </Square>
                        <Spacer />

                    </Flex>
                
                </Container>
                <Container  h="100%" flex="1" bg="transparent" centerContent>
                
            <Flex height="100%" direction="column" align="center" justify="center">
                    
                    <Spacer />
                    <Text my="10px" color="white" fontWeight="500"> 
                        BREAK (mins)
                    </Text>
                    <Spacer />
                    <Square size="40px" bg="orange" rounded="md" fontSize="lg" as={Button} _hover={{ bg: "#f09b00" }}>
                        <AddIcon />
                    </Square>
                    <Spacer />
                    <Square size="100px" bg="transparent" rounded="md" fontSize="6xl" textAlign="center">
                        <Editable defaultValue="10" className="noSelect">
                            <EditablePreview className="noSelect"/>
                            <EditableInput className="noSelect" />
                        </Editable>
                    </Square>
                    <Spacer />
                    <Square size="40px" bg="orange" rounded="md" fontSize="lg" as={Button} _hover={{ bg: "#f09b00" }}>
                        <MinusIcon />
                    </Square>
                    <Spacer />

                </Flex>

            </Container>
            </Flex>
            
            <Center m="10px">
                <Button _hover={{ bg: "#ebedf0" }} >START</Button>
            </Center>
        </Box>
    )
}

export default Timer;
