import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaBrain,
  FaRobot,
  FaCode,
  FaServer,
  FaLinux,
  FaComments,
} from 'react-icons/fa'
import {
  SiFastapi,
  SiMongodb,
  SiElasticsearch,
  SiPostgresql,
  SiMysql,
  SiApachekafka,
  SiNginx,
  SiJavascript,
  SiHuggingface,
} from 'react-icons/si'

const MotionBox = motion(Box)

interface SkillItem {
  name: string
  icon: any
  color: string // brand color for the icon
}

interface SkillCategory {
  label: string
  skills: SkillItem[]
}

const categories: SkillCategory[] = [
  {
    label: 'Backend',
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'RESTful APIs', icon: FaServer, color: '#6C63FF' },
    ],
  },
  {
    label: 'Data',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Elasticsearch', icon: SiElasticsearch, color: '#FEC514' },
      { name: 'Vector DBs', icon: FaBrain, color: '#A855F7' },
      { name: 'Apache Kafka', icon: SiApachekafka, color: '#231F20' },
    ],
  },
  {
    label: 'AI',
    skills: [
      { name: 'LLMs', icon: FaRobot, color: '#10B981' },
      { name: 'RAG', icon: FaCode, color: '#8B5CF6' },
      { name: 'HuggingFace', icon: SiHuggingface, color: '#FFD21E' },
      { name: 'Conversational AI', icon: FaComments, color: '#06B6D4' },
      { name: 'AWS Bedrock', icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    label: 'DevOps',
    skills: [
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Linux', icon: FaLinux, color: '#FCC624' },
      { name: 'NGINX', icon: SiNginx, color: '#009639' },
    ],
  },
]

function SkillPill({ skill, isDark }: { skill: SkillItem; isDark: boolean }) {
  // Kafka's icon color is nearly black — make it visible in dark mode
  const iconColor = isDark && skill.color === '#231F20' ? '#999' : skill.color

  return (
    <HStack
      px={4}
      py={2.5}
      borderRadius="full"
      bg={isDark ? 'whiteAlpha.50' : 'white'}
      border="1px solid"
      borderColor={isDark ? 'whiteAlpha.100' : 'gray.200'}
      boxShadow={isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.04)'}
      spacing={2.5}
      cursor="default"
      role="group"
      _hover={{
        bg: isDark ? 'whiteAlpha.100' : 'white',
        borderColor: isDark ? `${skill.color}60` : `${skill.color}50`,
        transform: 'translateY(-3px)',
        boxShadow: isDark
          ? `0 8px 24px ${skill.color}20`
          : `0 8px 24px ${skill.color}18, 0 2px 8px rgba(0,0,0,0.06)`,
      }}
      transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Icon
        as={skill.icon}
        w={5}
        h={5}
        color={iconColor}
        flexShrink={0}
      />
      <Text
        fontSize="sm"
        fontWeight="600"
        color={isDark ? 'whiteAlpha.900' : 'gray.700'}
        whiteSpace="nowrap"
        lineHeight={1}
      >
        {skill.name}
      </Text>
    </HStack>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const textColor = useColorModeValue('gray.900', 'white')
  const mutedColor = useColorModeValue('gray.500', 'whiteAlpha.500')
  const labelColor = useColorModeValue('gray.400', 'whiteAlpha.400')
  const isDark = useColorModeValue(false, true)

  return (
    <Box id="skills" py={{ base: 20, md: 28 }} ref={ref}>
      <Container maxW="container.lg">
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">

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

          {/* Skill categories */}
          <VStack spacing={{ base: 8, md: 10 }} align="stretch">
            {categories.map((cat, catIndex) => (
              <MotionBox
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.1 }}
              >
                <HStack
                  align="start"
                  spacing={0}
                  flexDir={{ base: 'column', md: 'row' }}
                  gap={{ base: 4, md: 0 }}
                >
                  {/* Category label */}
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    color={labelColor}
                    textTransform="uppercase"
                    letterSpacing="0.12em"
                    minW={{ base: 'auto', md: '100px' }}
                    mr={{ base: 0, md: 6 }}
                    pt={2.5}
                    flexShrink={0}
                  >
                    {cat.label}
                  </Text>

                  {/* Skill pills */}
                  <Wrap spacing={3}>
                    {cat.skills.map((skill) => (
                      <WrapItem key={skill.name}>
                        <SkillPill skill={skill} isDark={isDark} />
                      </WrapItem>
                    ))}
                  </Wrap>
                </HStack>
              </MotionBox>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}