import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  Icon,
  Link,
  Flex,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRobot,
  FaRocket,
  FaChartLine,
} from 'react-icons/fa'

const MotionBox = motion(Box)

const projects = [
  {
    title: 'AI-Powered Video Search Engine',
    description: 'Full-stack platform enabling natural language search through video content. Uses computer vision and NLP for transcription, semantic understanding, and real-time search.',
    technologies: ['Vision Transformer', 'SSIM', 'Elasticsearch', 'Flask', 'MySQL', 'React'],
    github: 'https://github.com/iam-VK/video-search',
    demo: '#',
    icon: FaRobot,
    status: 'Production Ready',
    highlight: '500+ daily users · 92% accuracy',
    featured: true,
  },
  {
    title: 'Intelligent Video Summarization',
    description: 'End-to-end video processing pipeline that extracts key moments, generates narrative summaries, and provides multi-language support. Reduces content consumption time by 80%.',
    technologies: ['OpenCV', 'LLMs', 'HuggingFace', 'FFmpeg', 'Python'],
    github: 'https://github.com/iam-VK/video-summarization',
    demo: '#',
    icon: FaRocket,
    status: 'Beta',
    highlight: '95% quality · 200+ org adoption',
    featured: true,
  },
  {
    title: 'Real-Time Semantic Analyzer',
    description: 'Web app analyzing text sentiment in live streams, social media, and customer feedback with multilingual support and visual emotion mapping.',
    technologies: ['FastAPI', 'React', 'WebSocket', 'NLP', 'D3.js'],
    github: 'https://github.com/iam-VK/semantic-analyzer',
    demo: '#',
    icon: FaChartLine,
    status: 'Live',
    highlight: '12 languages · 50+ clients',
    featured: false,
  },
]

const statusConfig: Record<string, { bg: string; color: string }> = {
  'Production Ready': { bg: 'accent', color: 'accent' },
  'Beta': { bg: 'warm', color: 'warm' },
  'Live': { bg: 'emerald', color: 'emerald' },
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('brand.200', 'whiteAlpha.100')
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')
  const status = statusConfig[project.status] || statusConfig.Live

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <VStack
        p={7}
        bg={cardBg}
        borderRadius="2xl"
        border="1px solid"
        borderColor={project.featured ? useColorModeValue('accent.200', 'accent.800') : cardBorder}
        spacing={5}
        align="stretch"
        h="full"
        position="relative"
        _hover={{
          transform: 'translateY(-6px)',
          boxShadow: useColorModeValue(
            '0 16px 48px rgba(0,0,0,0.08)',
            '0 16px 48px rgba(0,0,0,0.4)'
          ),
          borderColor: useColorModeValue('accent.300', 'accent.600'),
        }}
      >
        {/* Featured */}
        {project.featured && (
          <Badge
            position="absolute"
            top={-2}
            right={4}
            bg="accent.600"
            color="white"
            borderRadius="full"
            px={3}
            py={1}
            fontSize="2xs"
            fontWeight="700"
          >
            FEATURED
          </Badge>
        )}

        {/* Header */}
        <HStack spacing={3} align="start">
          <Box
            w={11}
            h={11}
            borderRadius="xl"
            bg={useColorModeValue('accent.50', 'whiteAlpha.100')}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
          >
            <Icon as={project.icon} w={5} h={5} color="accent.500" />
          </Box>
          <VStack align="start" spacing={1}>
            <Text fontSize="lg" fontWeight="700" fontFamily="heading" color={textColor} lineHeight={1.2}>
              {project.title}
            </Text>
            <HStack spacing={2}>
              <Badge
                borderRadius="full"
                px={2}
                py={0.5}
                fontSize="2xs"
                bg={useColorModeValue(`${status.bg}.50`, 'whiteAlpha.100')}
                color={useColorModeValue(`${status.color}.700`, `${status.color}.300`)}
              >
                {project.status}
              </Badge>
            </HStack>
          </VStack>
        </HStack>

        {/* Description */}
        <Text fontSize="sm" color={mutedColor} lineHeight={1.7}>
          {project.description}
        </Text>

        {/* Highlight */}
        <Box
          px={4}
          py={2}
          borderRadius="xl"
          bg={useColorModeValue('accent.50', 'whiteAlpha.50')}
          border="1px solid"
          borderColor={useColorModeValue('accent.100', 'whiteAlpha.100')}
        >
          <Text fontSize="xs" fontWeight="600" color={useColorModeValue('accent.700', 'accent.300')}>
            📊 {project.highlight}
          </Text>
        </Box>

        {/* Tech */}
        <Flex wrap="wrap" gap={2}>
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              borderRadius="full"
              px={2.5}
              py={0.5}
              fontSize="2xs"
              fontWeight="500"
              bg={useColorModeValue('brand.100', 'whiteAlpha.100')}
              color={useColorModeValue('brand.700', 'text.inverse')}
            >
              {tech}
            </Badge>
          ))}
        </Flex>

        {/* Actions */}
        <HStack spacing={3} mt="auto">
          <Button
            as={Link}
            href={project.github}
            isExternal
            leftIcon={<FaGithub />}
            size="sm"
            variant="outline"
            _hover={{ textDecoration: 'none' }}
          >
            Code
          </Button>
          <Button
            as={Link}
            href={project.demo}
            isExternal
            leftIcon={<FaExternalLinkAlt />}
            size="sm"
            variant="accent"
            _hover={{ textDecoration: 'none' }}
          >
            Demo
          </Button>
        </HStack>
      </VStack>
    </MotionBox>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const textColor = useColorModeValue('text.primary', 'text.inverse')

  return (
    <Box id="projects" py={{ base: 20, md: 28 }} ref={ref}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: 10, md: 14 }}>

          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            textAlign="center"
          >
            <Text fontSize="sm" color="accent.500" fontWeight="600" textTransform="uppercase" letterSpacing="0.15em" mb={4}>
              Projects
            </Text>
            <Heading as="h2" size="3xl" color={textColor}>
              Things I've{' '}
              <Box as="span" fontStyle="italic" color="accent.500">built</Box>
            </Heading>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} w="full">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}