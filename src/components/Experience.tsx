import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  Flex,
  List,
  ListItem,
  ListIcon,
  Circle,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const experiences = [
  {
    company: 'Ramco Systems',
    role: 'Software Developer Intern',
    location: 'Feb. 2025 – Present · Chennai, India',
    period: 'Feb. 2025 – Present',
    description: [
      'Internal R&D Team',
      'AI Integration Specialist',
      'Spearheaded AI integrations into legacy systems, eliminating repetitive manual tasks and boosting team productivity across multiple verticals.',
      'Automation Pipeline Developer',
      'Built robust automation pipelines that accelerate testing cycles and ensure consistent results across internal systems.',
      'Internal Tooling Expert',
      'Maintaining and enhancing internal automated testing software used as shared utilities by development and QA teams company-wide.',
    ],
    impact: 'Result: Multi-vertical impact, 100% automation coverage, R&D team empowerment. Fun fact: My automation tools are now used by teams I\'ve never even met!',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Amazon Bedrock', 'FAISS', 'Qdrant', 'REST APIs', 'Microservices'],
  },
]

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: typeof experiences[0]
  index: number
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      position="relative"
      pl={{ base: 8, md: 12 }}
    >
      {/* Timeline line */}
      <Box
        position="absolute"
        left="0"
        top="6"
        bottom="0"
        width="2px"
        bg="accent.200"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-3px',
          width: '8px',
          height: '8px',
          borderRadius: 'full',
          bg: 'accent.500',
        }}
      />

      <VStack align="start" spacing={4} w="full">
        <VStack align="start" spacing={2} w="full">
          <HStack w="full" justify="space-between" align="start" flexWrap="wrap">
            <VStack align="start" spacing={1}>
              <Heading size="lg" color="text.primary">
                {experience.role}
              </Heading>
              <Text fontWeight="medium" color="text.secondary">
                {experience.company}
              </Text>
            </VStack>
            <VStack align="end" spacing={1}>
              <Text color="text.tertiary" fontSize="sm">
                {experience.period}
              </Text>
              <Text color="text.tertiary" fontSize="sm">
                {experience.location}
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <VStack align="start" spacing={3} w="full">
          {experience.description.map((item, idx) => (
            <HStack key={idx} align="start" spacing={3}>
              <Circle size="4px" bg="accent.500" mt={2} flexShrink={0} />
              <Text color="text.secondary" lineHeight="tall">
                {item}
              </Text>
            </HStack>
          ))}
        </VStack>

        {experience.impact && (
          <Box w="full" pt={2}>
            <Text fontWeight="semibold" color="text.primary" mb={2}>
              Key Impact
            </Text>
            <Box
              p={4}
              bg="accent.50"
              borderRadius="xl"
              border="1px solid"
              borderColor="accent.200"
            >
              <Text color="accent.700">
                {experience.impact}
              </Text>
            </Box>
          </Box>
        )}

        {experience.technologies && (
          <Flex wrap="wrap" gap={2}>
            {experience.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                fontSize="xs"
                fontWeight="medium"
                bg="accent.100"
                color="accent.800"
                borderRadius="full"
                px={3}
                py={1}
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        )}
      </VStack>
    </MotionBox>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <Box id="experience" py={{ base: 16, md: 24 }}>
      <Box
        maxW="container.lg"
        mx="auto"
        px={{ base: 4, sm: 6, md: 8 }}
        bg="brand.50"
      >
        <MotionVStack
          spacing={{ base: 8, md: 12 }}
          align="stretch"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={3} textAlign="center">
            <Heading
              as="h2"
              size="3xl"
              color="text.primary"
              fontWeight="bold"
            >
              Experience
            </Heading>
            <Text fontSize="xl" color="text.secondary" maxW="2xl">
              Professional journey in developing intelligent systems and scalable applications
            </Text>
          </VStack>

          <VStack spacing={{ base: 12, md: 16 }} align="stretch">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}

            {/* Timeline continuation line */}
            <Box position="relative" height="4" display={{ base: 'none', md: 'block' }}>
              <Box
                position="absolute"
                left="50%"
                top="0"
                bottom="0"
                width="2px"
                bg="accent.200"
                transform="translateX(-50%)"
              />
            </Box>
          </VStack>
        </MotionVStack>
      </Box>
    </Box>
  )
}