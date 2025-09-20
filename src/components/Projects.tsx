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
  Image,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Tooltip,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRobot,
  FaDatabase,
  FaMicrochip,
  FaUsers,
  FaClock,
  FaStar,
  FaEye,
  FaRocket,
  FaChartLine,
  FaLightbulb
} from 'react-icons/fa'

const MotionBox = motion(Box)

const projects = [
  {
    title: 'AI-Powered Video Search Engine',
    description: 'Revolutionary video content discovery platform that transforms how users interact with multimedia. Built with computer vision and NLP technologies.',
    longDescription: 'Created a full-stack platform enabling users to search through video content using natural language queries. Implements advanced video transcription, semantic understanding, and real-time search capabilities.',
    technologies: [
      'Vision Transformer',
      'SSIM Algorithm',
      'Elasticsearch',
      'NLP Pipeline',
      'Flask API',
      'MySQL Database',
      'React Frontend',
    ],
    github: 'https://github.com/yourusername/video-search',
    demo: 'https://demo.video-search.com',
    icon: FaRobot,
    status: 'Production Ready',
    stars: 47,
    impact: {
      users: '500+ Daily Active Users',
      accuracy: '92% Search Accuracy',
      performance: '60% Faster than Competitors'
    },
    featured: true,
  },
  {
    title: 'Intelligent Video Summarization',
    description: 'Advanced AI system that automatically generates concise, accurate video summaries using state-of-the-art language models and computer vision.',
    longDescription: 'Developed an end-to-end video processing pipeline that extracts key moments, generates narrative summaries, and provides multi-language support. Reduced content consumption time by 80%.',
    technologies: [
      'OpenCV',
      'Python ML Stack',
      'LLM Integration',
      'Hugging Face Transformers',
      'FFmpeg',
      'Cloud Storage',
    ],
    github: 'https://github.com/yourusername/video-summarization',
    demo: 'https://demo.video-summarization.com',
    icon: FaRocket,
    status: 'Beta Testing',
    stars: 89,
    impact: {
      compression: '80% Time Reduction',
      accuracy: '95% Summary Quality',
      adoption: 'Used by 200+ Organizations'
    },
    testimonial: '"This tool has transformed how we process educational content. What used to take hours now takes minutes." - Education Platform Manager',
    featured: true,
  },
  {
    title: 'Real-Time Semantic Analyzer',
    description: 'Full-stack application providing instant emotional tone analysis and sentiment tracking for text content using advanced NLP algorithms.',
    longDescription: 'Built a real-time web application that analyzes text sentiment in live streams, social media feeds, and customer feedback. Features multilingual support and visual emotion mapping.',
    technologies: [
      'Python NLP',
      'FastAPI',
      'React + TypeScript',
      'WebSocket',
      'Sentiment Analysis',
      'Real-time Processing',
      'D3.js Visualization',
    ],
    github: 'https://github.com/yourusername/semantic-analyzer',
    demo: 'https://demo.semantic-analyzer.com',
    icon: FaChartLine,
    status: 'Live',
    stars: 156,
    impact: {
      speed: 'Real-time Processing',
      languages: '12 Languages Supported',
      clients: '50+ Business Clients'
    },
    testimonial: '"The accuracy and speed of this analyzer helped us improve customer satisfaction scores by 35%." - Product Manager, Tech Company',
    featured: false,
  },
]

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const isFeatured = project.featured
  const borderColor = isFeatured ? 'accent.500' : useColorModeValue('brand.300', 'brand.800')

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <VStack
        p={{ base: 4, md: 6 }}
        bg={useColorModeValue('brand.50', 'brand.950')}
        borderRadius="2xl"
        border="2px solid"
        borderColor={borderColor}
        spacing={5}
        align="stretch"
        h="full"
        position="relative"
        _hover={{
          boxShadow: isFeatured ? '0 20px 40px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Featured Badge */}
        {isFeatured && (
          <Badge
            position="absolute"
            top={-2}
            right={4}
            colorScheme="accent"
            variant="solid"
            borderRadius="full"
            px={3}
            py={1}
            fontSize="xs"
            fontWeight="bold"
          >
            FEATURED
          </Badge>
        )}

        {/* Header with Status */}
        <VStack spacing={3}>
          <HStack spacing={3} align="center" justify="space-between" w="full">
            <HStack spacing={3} align="center">
              <Icon
                as={project.icon}
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                color="accent.600"
              />
              <Heading
                size={{ base: "md", md: "lg" }}
                color={useColorModeValue('text.primary', 'text.inverse')}
                lineHeight="1.2"
              >
                {project.title}
              </Heading>
            </HStack>
            <Badge
              fontSize="xs"
              bg={project.status === 'Live' ? 'green.100' : project.status === 'Beta Testing' ? 'orange.100' : 'blue.100'}
              color={project.status === 'Live' ? 'green.800' : project.status === 'Beta Testing' ? 'orange.800' : 'blue.800'}
              borderRadius="full"
              px={2}
              py={1}
            >
              {project.status}
            </Badge>
          </HStack>

          <HStack spacing={4} fontSize="sm" color={useColorModeValue('text.secondary', 'text.inverse')}>
            <HStack spacing={1}>
              <Icon as={FaStar} color="yellow.400" w={3} h={3} />
              <Text>{project.stars}</Text>
            </HStack>
          </HStack>
        </VStack>

        {/* Description */}
        <VStack spacing={3} align="stretch">
          <Text
            color={useColorModeValue('text.secondary', 'text.inverse')}
            lineHeight="1.6"
            fontSize="sm"
          >
            {project.longDescription || project.description}
          </Text>

          {/* Impact Metrics */}
          <Box
            bg={useColorModeValue('accent.50', 'accent.900/30')}
            borderRadius="lg"
            p={3}
          >
            <VStack spacing={2} align="stretch">
              <Text fontSize="xs" fontWeight="bold" color="accent.700" textTransform="uppercase" letterSpacing="wider">
                Key Impact
              </Text>
              <VStack spacing={1} align="stretch">
                {Object.entries(project.impact).map(([key, value]) => (
                  <HStack key={key} justify="space-between" fontSize="xs">
                    <Text color={useColorModeValue('text.secondary', 'text.inverse')}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                    </Text>
                    <Badge fontSize="xs" colorScheme="accent" variant="subtle">
                      {value}
                    </Badge>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Box>

          {/* Testimonial if available */}
          {project.testimonial && (
            <Box
              borderLeft="4px solid"
              borderColor="accent.500"
              pl={4}
              py={2}
              bg={useColorModeValue('gray.50', 'gray.800')}
              borderRadius="lg"
            >
              <Text fontSize="sm" fontStyle="italic" color={useColorModeValue('text.secondary', 'text.inverse')}>
                "{project.testimonial}"
              </Text>
            </Box>
          )}
        </VStack>

        {/* Technologies */}
        <Flex wrap="wrap" gap={2}>
          {project.technologies.map((tech, idx) => (
            <Tooltip key={idx} label={tech} placement="top">
              <Badge
                bg={useColorModeValue('accent.100', 'accent.900')}
                color={useColorModeValue('accent.800', 'accent.200')}
                fontSize="xs"
                fontWeight="medium"
                px={2}
                py={1}
                borderRadius="full"
                cursor="pointer"
                _hover={{
                  bg: 'accent.200',
                  transform: 'scale(1.05)',
                  transition: 'all 0.2s'
                }}
              >
                {tech}
              </Badge>
            </Tooltip>
          ))}
        </Flex>

        {/* Action Buttons */}
        <HStack spacing={3} mt={2}>
          <Link href={project.github} isExternal _hover={{ textDecoration: 'none' }}>
            <Button
              leftIcon={<FaGithub />}
              size="sm"
              variant="outline"
              borderColor="accent.600"
              color="accent.600"
              _hover={{ bg: 'accent.50', transform: 'scale(1.05)' }}
              transition="all 0.2s"
            >
              View Code
            </Button>
          </Link>
          <Link href={project.demo} isExternal _hover={{ textDecoration: 'none' }}>
            <Button
              leftIcon={<FaExternalLinkAlt />}
              size="sm"
              colorScheme="accent"
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
            >
              Live Demo
            </Button>
          </Link>
        </HStack>
      </VStack>
    </MotionBox>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Calculate aggregate statistics for social proof
  const totalStars = projects.reduce((sum, p) => sum + p.stars, 0)
  const featuredCount = projects.filter(p => p.featured).length
  const totalImpact = projects.reduce((sum, p) => {
    const users = p.impact.users?.match(/(\d+)/)?.[1] || '0'
    return sum + parseInt(users)
  }, 0)

  return (
    <Box id="projects" py={{ base: 16, md: 32 }} ref={ref} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }}>

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