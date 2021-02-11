import { Container, Flex, Text, useColorMode } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SESSION, BREAK } from "../../Constants/modes";

function RunningTimer(props) {
  //useStates defined here
  const { colorMode } = useColorMode();
  const [sessionSeconds, setSessionSeconds] = useState(59);
  const [mins, setMins] = useState(props.sessionMins - 1);
  const [time, setTime] = useState(props.sessionMins * 60);
  const [bSeconds, setBSeconds] = useState(59);
  const [bMins, setBMins] = useState(props.breakMins - 1);

  //variables defined here
  let sTime = props.sessionMins * 60 - 2;
  let bTime = props.breakMins * 60 - 2;

  //javascript functions defined here
  const sessionCountdownHandler = () => {
    if (sTime <= 0) {
      props.setIsRunning(false);
      props.setMode(BREAK);
      props.setBreakIsRunning(true);
    }
  };
  const breakCountdownHandler = () => {
    if (bTime <= 0) {
      props.setBreakIsRunning(false);
      props.setMode(SESSION);
      props.setIsRunning(true);
    }
  };

  //useEffects defined here
  useEffect(() => {
    if (props.isRunning) {
      const id = window.setInterval(() => {
        sessionCountdownHandler();
        setSessionSeconds(sTime % 60);
        setMins(Math.floor(sTime / 60));
        sTime--;
      }, 1000);

      return () => window.clearInterval(id);
    }
  }, [props.isRunning]);

  useEffect(() => {
    if (props.breakIsRunning) {
      const id2 = window.setInterval(() => {
        breakCountdownHandler();
        setBSeconds(bTime % 60);
        setBMins(Math.floor(bTime / 60));
        bTime--;
      }, 1000);

      return () => window.clearInterval(id2);
    }
  }, [props.breakIsRunning]);

  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Container h="100%" bg="transparent" centerContent>
        <Text
          m="5"
          fontSize="2xl"
          {...props.theme.styles.bgNoHover}
          bgClip="text"
          fontWeight="extrabold">
          - {props.mode.toUpperCase()} -
        </Text>

        <Text color={colorMode === "light" ? "black" : "white"} fontSize="8xl">
          {props.mode === SESSION
            ? sessionSeconds < 10
              ? mins + ":" + "0" + sessionSeconds
              : mins + ":" + sessionSeconds
            : bSeconds < 10
            ? bMins + ":" + "0" + bSeconds
            : bMins + ":" + bSeconds}
        </Text>
      </Container>
    </Flex>
  );
}

export default RunningTimer;
