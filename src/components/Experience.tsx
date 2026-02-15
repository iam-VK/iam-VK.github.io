import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase } from 'react-icons/fa'

const MotionBox = motion(Box)

const experiences = [
  {
    company: 'Ramco Systems',
    role: 'SDE I',
    period: 'Aug 2025 – Present',
    location: 'Chennai, India',
    highlights: [
      'Built a production-grade conversational data platform that converts natural language into executable database queries across PostgreSQL and MongoDB.',
      'Designed and implemented the full backend system using FastAPI, AWS Bedrock, and containerized microservices, supporting real-time query generation for non-technical users.',
      'Engineered an end-to-end NLP pipeline with semantic parsing, validation, and fallback logic, achieving high reliability for complex analytical queries.',
      'Integrated vector-based semantic search to optimize data retrieval, reducing query latency from seconds to sub-second for large datasets.',
    ],
    impact: 'Deployed scalable Docker-based infrastructure with automated testing, enabling frequent releases and stable production usage.',
    technologies: ['Python', 'FastAPI', 'AWS Bedrock', 'PostgreSQL', 'MongoDB', 'Docker', 'Vector DBs'],
  },
  {
    company: 'Ramco Systems',
    role: 'Intern',
    period: 'Feb 2025 – Jul 2025',
    location: 'Chennai, India',
    highlights: [
      'Developed an AI-powered prototype for conversational data access, which became the technical foundation for a full production system.',
      'Implemented natural language interfaces for structured databases, allowing business users to retrieve complex information through plain English.',
      'Researched and evaluated multiple LLM architectures and prompt strategies, focusing on accuracy, cost, and system reliability.',
      'Maintained and optimized an internal Playwright-based automation platform used by QA teams across multiple product verticals.',
    ],
    impact: 'Prototype evolved into a production system; automation platform improvements boosted test throughput across verticals.',
    technologies: ['Python', 'LLMs', 'Playwright', 'Prompt Engineering', 'REST APIs'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('brand.200', 'whiteAlpha.100')

  return (
    <Box id="experience" py={{ base: 20, md: 28 }} ref={ref}>
      <Container maxW="container.lg">
        <VStack spacing={{ base: 10, md: 14 }} align="stretch">

          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            textAlign="center"
          >
            <Text fontSize="sm" color="accent.500" fontWeight="600" textTransform="uppercase" letterSpacing="0.15em" mb={4}>
              Experience
            </Text>
            <Heading as="h2" size="3xl" color={textColor}>
              Where I've{' '}
              <Box as="span" fontStyle="italic" color="accent.500">worked</Box>
            </Heading>
          </MotionBox>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Box
                p={{ base: 6, md: 8 }}
                bg={cardBg}
                borderRadius="2xl"
                border="1px solid"
                borderColor={cardBorder}
                _hover={{
                  boxShadow: useColorModeValue(
                    '0 12px 40px rgba(0,0,0,0.06)',
                    '0 12px 40px rgba(0,0,0,0.3)'
                  ),
                }}
              >
                <VStack align="start" spacing={6}>
                  {/* Company Header */}
                  <Flex justify="space-between" w="full" align="start" flexWrap="wrap" gap={3}>
                    <HStack spacing={4}>
                      <Box
                        w={12}
                        h={12}
                        borderRadius="xl"
                        bg={useColorModeValue('accent.50', 'whiteAlpha.100')}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <FaBriefcase color="var(--chakra-colors-accent-500)" />
                      </Box>
                      <VStack align="start" spacing={0}>
                        <Text fontSize="xl" fontWeight="700" fontFamily="heading" color={textColor}>
                          {exp.role}
                        </Text>
                        <Text fontSize="sm" color="accent.500" fontWeight="500">
                          {exp.company}
                        </Text>
                      </VStack>
                    </HStack>
                    <VStack align={{ base: 'start', md: 'end' }} spacing={1}>
                      <Badge borderRadius="full" px={3} py={1} bg={useColorModeValue('emerald.50', 'whiteAlpha.100')} color="emerald.600" fontSize="xs">
                        {exp.period}
                      </Badge>
                      <Text fontSize="xs" color={mutedColor}>{exp.location}</Text>
                    </VStack>
                  </Flex>

                  {/* Highlights */}
                  <VStack align="start" spacing={3} w="full">
                    {exp.highlights.map((item, idx) => (
                      <HStack key={idx} align="start" spacing={3}>
                        <Box w="6px" h="6px" borderRadius="full" bg="accent.400" mt={2} flexShrink={0} />
                        <Text fontSize="sm" color={mutedColor} lineHeight={1.7}>
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>

                  {/* Impact */}
                  <Box
                    w="full"
                    p={4}
                    borderRadius="xl"
                    bg={useColorModeValue('accent.50', 'whiteAlpha.50')}
                    border="1px solid"
                    borderColor={useColorModeValue('accent.100', 'whiteAlpha.100')}
                  >
                    <Text fontSize="sm" color={useColorModeValue('accent.700', 'accent.300')} fontWeight="500">
                      💡 {exp.impact}
                    </Text>
                  </Box>

                  {/* Technologies */}
                  <Flex wrap="wrap" gap={2}>
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        borderRadius="full"
                        px={3}
                        py={1}
                        fontSize="xs"
                        fontWeight="500"
                        bg={useColorModeValue('brand.100', 'whiteAlpha.100')}
                        color={useColorModeValue('brand.700', 'text.inverse')}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}