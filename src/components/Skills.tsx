import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Badge,
  useColorModeValue,
  Flex,
  Progress,
  HStack,
  Icon,
  Circle,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaClock, FaCheckCircle, FaLaptopCode, FaCogs, FaBrain, FaTools, FaBullseye } from 'react-icons/fa'

const MotionBox = motion(Box)

const skillCategories = [
  {
    title: 'Languages',
    icon: FaLaptopCode,
    skills: [
      { name: 'Python', level: 95, experience: '3+ years', projects: 12, proficiency: 'Expert' },
      { name: 'Java', level: 80, experience: '2+ years', projects: 6, proficiency: 'Advanced' },
      { name: 'React/TypeScript', level: 85, experience: '2+ years', projects: 8, proficiency: 'Advanced' },
      { name: 'SQL (MySQL)', level: 90, experience: '3+ years', projects: 15, proficiency: 'Expert' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: FaCogs,
    skills: [
      { name: 'Flask/FastAPI', level: 90, experience: '2.5+ years', projects: 10, proficiency: 'Expert' },
      { name: 'Chakra UI', level: 85, experience: '1.5+ years', projects: 5, proficiency: 'Advanced' },
      { name: 'Playwright', level: 75, experience: '1+ year', projects: 4, proficiency: 'Intermediate' },
      { name: 'LangChain', level: 80, experience: '1.5+ years', projects: 6, proficiency: 'Advanced' },
    ],
  },
  {
    title: 'AI/ML Technologies',
    icon: FaBrain,
    skills: [
      { name: 'NLP & LLM', level: 85, experience: '2+ years', projects: 8, proficiency: 'Advanced' },
      { name: 'Computer Vision (ViT)', level: 75, experience: '1.5+ years', projects: 3, proficiency: 'Advanced' },
      { name: 'Transformers', level: 80, experience: '2+ years', projects: 6, proficiency: 'Advanced' },
      { name: 'Vector Databases (FAISS)', level: 70, experience: '1+ year', projects: 4, proficiency: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    icon: FaTools,
    skills: [
      { name: 'Git/GitHub', level: 95, experience: '3+ years', projects: 20, proficiency: 'Expert' },
      { name: 'Docker', level: 80, experience: '1.5+ years', projects: 7, proficiency: 'Advanced' },
      { name: 'Elasticsearch', level: 75, experience: '1+ year', projects: 3, proficiency: 'Advanced' },
      { name: 'Linux/Shell', level: 85, experience: '2+ years', projects: 12, proficiency: 'Advanced' },
    ],
  },
]

const SkillCard = ({ skill, index }: { skill: typeof skillCategories[0]['skills'][0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return { color: 'green.500', bg: 'green.50', textColor: 'green.800' }
      case 'Advanced': return { color: 'blue.500', bg: 'blue.50', textColor: 'blue.800' }
      case 'Intermediate': return { color: 'orange.500', bg: 'orange.50', textColor: 'orange.800' }
      case 'Beginner': return { color: 'gray.500', bg: 'gray.50', textColor: 'gray.800' }
      default: return { color: 'gray.500', bg: 'gray.50', textColor: 'gray.800' }
    }
  }

  const proficiencyStyle = getProficiencyColor(skill.proficiency)

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <VStack
        p={4}
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="xl"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        spacing={3}
        w="full"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'md',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Skill Header */}
        <HStack w="full" justify="space-between" align="start">
          <VStack align="start" spacing={1} flex={1}>
            <Text
              fontSize="md"
              fontWeight="bold"
              color={useColorModeValue('text.primary', 'text.inverse')}
              lineHeight="1.3"
            >
              {skill.name}
            </Text>
            <HStack spacing={1}>
              <Icon as={FaClock} w={3} h={3} color={useColorModeValue('text.secondary', 'text.inverse')} />
              <Text fontSize="xs" color={useColorModeValue('text.secondary', 'text.inverse')}>
                {skill.experience}
              </Text>
            </HStack>
          </VStack>

          {/* Proficiency Badge */}
          <Badge
            bg={proficiencyStyle.bg}
            color={proficiencyStyle.textColor}
            fontSize="xs"
            fontWeight="bold"
            px={2}
            py={1}
            borderRadius="full"
            border={`1px solid ${proficiencyStyle.color}`}
          >
            <HStack spacing={1}>
              <Circle size="4px" bg={proficiencyStyle.color} />
              <Text>{skill.proficiency}</Text>
            </HStack>
          </Badge>
        </HStack>

        {/* Proficiency Progress Bar */}
        <VStack spacing={1} w="full" align="stretch">
          <HStack justify="space-between" align="center">
            <Text fontSize="xs" color={useColorModeValue('text.secondary', 'text.inverse')} fontWeight="medium">
              Proficiency
            </Text>
            <Text fontSize="xs" color={useColorModeValue('text.secondary', 'text.inverse')} fontWeight="bold">
              {skill.level}%
            </Text>
          </HStack>
          <Progress
            value={skill.level}
            colorScheme={
              skill.level >= 90 ? 'green' :
              skill.level >= 75 ? 'blue' :
              skill.level >= 60 ? 'orange' : 'gray'
            }
            size="sm"
            borderRadius="full"
            bg={useColorModeValue('gray.200', 'gray.600')}
          />
        </VStack>

        {/* Projects Count */}
        <HStack spacing={2} w="full" justify="flex-start">
          <Icon as={FaCheckCircle} w={3} h={3} color={useColorModeValue('green.500', 'green.400')} />
          <Text fontSize="xs" color={useColorModeValue('text.secondary', 'text.inverse')}>
            {skill.projects}+ projects completed
          </Text>
        </HStack>
      </VStack>
    </MotionBox>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Box id="skills" py={{ base: 16, md: 24 }} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl" px={{ base: 4, sm: 6, md: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          {/* Enhanced Header */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <VStack spacing={6}>
              <VStack spacing={4}>
                <Badge
                  fontSize="sm"
                  colorScheme="accent"
                  variant="outline"
                  px={4}
                  py={2}
                  borderRadius="full"
                  letterSpacing="wider"
                >
                  <HStack spacing={1}>
                    <Icon as={FaBullseye} w={3} h={3} />
                    <Text>EXPERT-LEVEL PROFICIENCY</Text>
                  </HStack>
                </Badge>
                <Heading
                  as="h2"
                  size="3xl"
                  color={useColorModeValue('text.primary', 'text.inverse')}
                  fontWeight="bold"
                >
                  Technical Expertise
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue('text.secondary', 'text.inverse')}
                  maxW="3xl"
                  mx="auto"
                  lineHeight="1.6"
                >
                  <strong>Mastering cutting-edge technologies</strong> with hands-on experience in scalable systems,
                  AI integration, and modern development workflows. Each skill is backed by real-world application
                  and proven results.
                </Text>
              </VStack>

              {/* Quick Stats */}
              <HStack
                spacing={8}
                justify="center"
                flexWrap="wrap"
                fontSize="sm"
                color={useColorModeValue('text.secondary', 'text.inverse')}
              >
                <VStack spacing={1}>
                  <Text fontWeight="bold" color="accent.600" fontSize="xl">15+</Text>
                  <Text>Technologies Mastered</Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontWeight="bold" color="accent.600" fontSize="xl">50+</Text>
                  <Text>Projects Delivered</Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontWeight="bold" color="accent.600" fontSize="xl">3+</Text>
                  <Text>Years Experience</Text>
                </VStack>
              </HStack>
            </VStack>
          </MotionBox>

          {/* Categorized Skills */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} w="full" ref={ref}>
            {skillCategories.map((category, index) => (
              <MotionBox
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <VStack
                  align="start"
                  spacing={6}
                  p={8}
                  bg={useColorModeValue('white', 'gray.800')}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                  boxShadow="sm"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Category Header */}
                  <HStack spacing={3} w="full">
                    <Icon
                      as={category.icon}
                      w={6}
                      h={6}
                      color="accent.600"
                    />
                    <Heading
                      size="lg"
                      color={useColorModeValue('text.primary', 'text.inverse')}
                      flex={1}
                    >
                      {category.title}
                    </Heading>
                    <Badge
                      colorScheme="accent"
                      variant="subtle"
                      fontSize="xs"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {category.skills.length}
                    </Badge>
                  </HStack>

                  {/* Skills Grid */}
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={skillIndex}
                      />
                    ))}
                  </SimpleGrid>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}