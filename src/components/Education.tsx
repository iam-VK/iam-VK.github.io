import {
  VStack,
  HStack,
  Text,
  Box,
  useColorModeValue,
  Circle,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap } from 'react-icons/fa'

const MotionBox = motion(Box)

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Sathyabama Institute of Science and Technology',
    period: 'Sept. 2021 – Apr. 2025',
    cgpa: 'CGPA: 8.5',
  },
  {
    degree: 'High School',
    school: 'Petit Seminaire Hr. Secondary School',
    period: 'June 2018 – May 2021',
    scores: '10th: 87%, 12th: 87.8%',
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <VStack spacing={12} py={{ base: 16, md: 24 }}>
      <VStack spacing={4} textAlign="center">
        <Text fontSize="sm" color="accent.600" fontWeight="500" textTransform="uppercase" letterSpacing="wider">
          Education
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('text.primary', 'text.inverse')}>
          Academic Background
        </Text>
      </VStack>

      <VStack spacing={8} w="full" align="stretch" ref={ref}>
        {education.map((edu, index) => (
          <MotionBox
            key={edu.school}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            position="relative"
            pl={8}
          >
            {/* Timeline */}
            <Box
              position="absolute"
              left="0"
              top="4"
              w="2px"
              h="full"
              bg="accent.500"
            />
            <Circle size="4" bg="accent.500" position="absolute" left="-2" top="4" />

            {/* Content */}
            <HStack spacing={4} align="start">
              <Box flex="1">
                <VStack align="start" spacing={2}>
                  <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue('text.primary', 'text.inverse')}>
                    {edu.degree}
                  </Text>
                  <Text fontSize="md" color={useColorModeValue('text.secondary', 'text.inverse')}>
                    {edu.school}
                  </Text>
                  <Text fontSize="sm" color="accent.600">
                    {edu.period}
                  </Text>
                  <Text fontSize="sm" color={useColorModeValue('text.secondary', 'text.inverse')}>
                    {edu.cgpa || edu.scores}
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </MotionBox>
        ))}
      </VStack>
    </VStack>
  )
}