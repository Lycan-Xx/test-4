import React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaLinkedin,
  FaUserTie,
  FaChalkboardTeacher,
  FaPaperPlane,
} from "react-icons/fa";

// No custom theme

const services = [
  {
    title: "Professional Resume & Cover Letter Writing",
    icon: <FaFileAlt />,
    description:
      "Craft compelling, tailored resumes and cover letters that highlight your strengths and achievements.",
  },
  {
    title: "LinkedIn Profile Optimization",
    icon: <FaLinkedin />,
    description:
      "Enhance your LinkedIn presence to attract recruiters and showcase your professional brand.",
  },
  {
    title: "Executive Branding",
    icon: <FaUserTie />,
    description:
      "Develop a strong executive brand to stand out in your industry and advance your career.",
  },
  {
    title: "Career Coaching",
    icon: <FaChalkboardTeacher />,
    description:
      "Receive personalized coaching to clarify your goals, overcome obstacles, and accelerate your career growth.",
  },
  {
    title: "Job Application Support",
    icon: <FaPaperPlane />,
    description:
      "Get expert guidance and feedback on job applications to maximize your chances of landing interviews.",
  },
];

const MotionBox = motion(Box);

const CareerServices = () => (
  <ChakraProvider>
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
          Career Services
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
          Every service is designed to position you for success, providing ongoing support and personalised feedback.
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

export default CareerServices;