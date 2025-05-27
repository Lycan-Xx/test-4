import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Center,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaProjectDiagram,
  FaCogs,
  FaFileAlt,
  FaLightbulb,
} from "react-icons/fa";

const theme = extendTheme({
  fonts: {
    heading: `"Lato", sans-serif`,
    body: `"Poppins", sans-serif`,
  },
});

const services = [
  {
    title: "Talent Sourcing & Recruitment",
    icon: <FaUserFriends />,
    description:
      "We identify and engage top talent globally, ensuring the perfect fit for your team's culture and needs.",
  },
  {
    title: "Project Planning & Delivery",
    icon: <FaProjectDiagram />,
    description:
      "From kickoff to launch, we help you map out timelines, resources, and execution for rock-solid delivery.",
  },
  {
    title: "Agile & Scrum Implementation",
    icon: <FaCogs />,
    description:
      "Adopt agile frameworks with hands-on coaching, tooling setup, and sprint facilitation for max productivity.",
  },
  {
    title: "HR Templates & Onboarding Support",
    icon: <FaFileAlt />,
    description:
      "Ready-made HR policies, checklists, and workflows plus expert support to welcome and retain new hires.",
  },
  {
    title: "Strategic HR Advisory",
    icon: <FaLightbulb />,
    description:
      "We partner at the leadership level to design people strategies that align talent with your business goals.",
  },
];

const MotionBox = motion(Box);

export const BusinessServices = () => (
  <ChakraProvider theme={theme}>
    <Box
      as="section"
      minH="100vh"
      bgGradient="linear(to-br, gray.50, white)"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <Center flexDir="column" mb={12}>
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, orange.400, orange.600)"
          bgClip="text"
          textAlign="center"
          mb={4}
        >
          Business Services
        </Heading>
        <Box
          w="60px"
          h="3px"
          bgGradient="linear(to-r, orange.400, orange.600)"
          borderRadius="full"
        />
        <Text
          mt={4}
          color="gray.600"
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
        >
          Whatever stage your business is in, we offer the expertise to drive
          your growth.
        </Text>
      </Center>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
        {services.map((svc) => (
          <MotionBox
            key={svc.title}
            whileHover={{ scale: 1.05, rotateY: 8 }}
            whileTap={{ scale: 0.98 }}
            bg="white"
            rounded="2xl"
            shadow="lg"
            p={6}
            cursor="pointer"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Center fontSize="4xl" color="orange.500" mb={4}>
              {svc.icon}
            </Center>
            <Heading as="h3" size="md" textAlign="center" mb={2}>
              {svc.title}
            </Heading>
            <Text fontSize="sm" color="gray.600" textAlign="center" lineHeight="tall">
              {svc.description}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  </ChakraProvider>
);

export default BusinessServices;