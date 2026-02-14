import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Flex,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Progress,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaPython,
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaAws,
  FaBrain,
  FaRobot,
  FaSearch,
  FaCode,
  FaCogs,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiElasticsearch,
  SiPostgresql,
  SiLangchain,
} from 'react-icons/si'

const MotionBox = motion(Box)

interface Skill {
  name: string
  icon: any
  level: number
  proficiency: string
  color: string
}

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: FaPython, level: 90, proficiency: 'Expert', color: 'accent' },
      { name: 'Java', icon: FaJava, level: 80, proficiency: 'Advanced', color: 'warm' },
      { name: 'TypeScript', icon: SiTypescript, level: 75, proficiency: 'Advanced', color: 'accent' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, level: 88, proficiency: 'Expert', color: 'emerald' },
      { name: 'Flask', icon: SiFlask, level: 82, proficiency: 'Advanced', color: 'violet' },
      { name: 'React', icon: FaReact, level: 72, proficiency: 'Advanced', color: 'accent' },
    ],
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'LangChain', icon: SiLangchain, level: 85, proficiency: 'Expert', color: 'emerald' },
      { name: 'NLP', icon: FaBrain, level: 78, proficiency: 'Advanced', color: 'violet' },
      { name: 'Computer Vision', icon: FaSearch, level: 70, proficiency: 'Intermediate', color: 'warm' },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'Docker', icon: FaDocker, level: 80, proficiency: 'Advanced', color: 'accent' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82, proficiency: 'Advanced', color: 'accent' },
      { name: 'Elasticsearch', icon: SiElasticsearch, level: 75, proficiency: 'Advanced', color: 'warm' },
    ],
  },
]

const proficiencyColors: Record<string, { bg: string; text: string }> = {
  Expert: { bg: 'emerald', text: 'emerald.700' },
  Advanced: { bg: 'accent', text: 'accent.700' },
  Intermediate: { bg: 'warm', text: 'warm.700' },
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('brand.200', 'whiteAlpha.100')
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')
  const profColor = proficiencyColors[skill.proficiency] || proficiencyColors.Intermediate

  return (
    <HStack
      p={4}
      bg={cardBg}
      borderRadius="xl"
      border="1px solid"
      borderColor={cardBorder}
      spacing={4}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: useColorModeValue(
          '0 8px 24px rgba(0,0,0,0.06)',
          '0 8px 24px rgba(0,0,0,0.3)'
        ),
        borderColor: useColorModeValue('brand.300', 'whiteAlpha.200'),
      }}
    >
      <Box
        w={10}
        h={10}
        borderRadius="lg"
        bg={useColorModeValue(`${skill.color}.50`, 'whiteAlpha.100')}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        <Icon as={skill.icon} w={5} h={5} color={`${skill.color}.500`} />
      </Box>
      <VStack align="start" spacing={1} flex={1} minW={0}>
        <HStack justify="space-between" w="full">
          <Text fontSize="sm" fontWeight="600" color={textColor} noOfLines={1}>
            {skill.name}
          </Text>
          <Badge
            borderRadius="full"
            px={2}
            py={0.5}
            fontSize="2xs"
            fontWeight="600"
            bg={useColorModeValue(`${profColor.bg}.50`, 'whiteAlpha.100')}
            color={useColorModeValue(profColor.text, `${profColor.bg}.300`)}
            minW="fit-content"
          >
            {skill.proficiency}
          </Badge>
        </HStack>
        <Progress
          value={skill.level}
          size="xs"
          w="full"
          borderRadius="full"
          bg={useColorModeValue('brand.100', 'whiteAlpha.100')}
          sx={{
            '& > div': {
              bg: `${skill.color}.500`,
              borderRadius: 'full',
            },
          }}
        />
      </VStack>
    </HStack>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')

  return (
    <Box id="skills" py={{ base: 20, md: 28 }} ref={ref}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: 10, md: 14 }} align="stretch">

          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            textAlign="center"
          >
            <Text fontSize="sm" color="accent.500" fontWeight="600" textTransform="uppercase" letterSpacing="0.15em" mb={4}>
              Skills & Tools
            </Text>
            <Heading as="h2" size="3xl" color={textColor}>
              My{' '}
              <Box as="span" fontStyle="italic" color="accent.500">toolkit</Box>
            </Heading>
          </MotionBox>

          {/* Skill Categories */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {skillCategories.map((category, catIndex) => (
              <MotionBox
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <VStack align="start" spacing={4}>
                  <Text fontSize="sm" fontWeight="700" color={mutedColor} textTransform="uppercase" letterSpacing="0.1em">
                    {category.title}
                  </Text>
                  <VStack spacing={3} w="full">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                    ))}
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}