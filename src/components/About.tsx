import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react'
import { FaRocket, FaUserGraduate, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MotionBox = motion(Box)

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('brand.200', 'whiteAlpha.100')
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')

  const values = [
    {
      icon: FaCode,
      title: 'Scalable Systems',
      description: 'Building foundations that last—database architectures handling millions of queries, APIs serving global users.',
      color: 'accent.500',
    },
    {
      icon: FaRocket,
      title: 'AI Integration',
      description: 'Seamlessly weaving AI into existing systems, from automating tasks to actionable data insights.',
      color: 'violet.500',
    },
    {
      icon: FaUserGraduate,
      title: 'Problem Solving',
      description: 'Tackling complex challenges head-on, breaking impossible problems into elegant solutions.',
      color: 'warm.500',
    },
  ]

  return (
    <Box id="about" py={{ base: 20, md: 28 }} ref={ref}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">

          {/* Section Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            maxW="3xl"
          >
            <Text
              fontSize="sm"
              color="accent.500"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="0.15em"
              mb={4}
            >
              Beyond the Code
            </Text>
            <Heading
              as="h2"
              size="3xl"
              color={textColor}
              mb={6}
            >
              A curious mind's journey{' '}
              <Box as="span" fontStyle="italic" color="accent.500">into technology</Box>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={mutedColor} lineHeight={1.8}>
              Software Engineer with over a year of experience building production AI pipelines, integrating large language models
              with scalable backend systems, and developing data-driven solutions. From prototyping conversational AI as an intern
              to shipping production-grade NLP platforms as an SDE I at Ramco Systems—I'm passionate about solving real-world
              problems using cutting-edge technologies. 
            </Text>
          </MotionBox>

          {/* Quote Block */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            borderLeft="3px solid"
            borderColor="accent.500"
            pl={6}
            py={2}
            maxW="3xl"
          >
            <Text
              fontSize={{ base: 'md', lg: 'lg' }}
              fontFamily="heading"
              fontStyle="italic"
              color={textColor}
              lineHeight={1.7}
            >
              "Every great developer I admire started exactly where I am now—confused, excited, and determined to learn."
            </Text>
            <Text fontSize="sm" color="accent.500" fontWeight="600" mt={2}>
              — My philosophy as a lifelong learner
            </Text>
          </MotionBox>

          {/* Value Cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
            {values.map((value, index) => (
              <MotionBox
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <VStack
                  align="start"
                  spacing={4}
                  p={7}
                  bg={cardBg}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={cardBorder}
                  h="full"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: useColorModeValue(
                      '0 12px 40px rgba(0,0,0,0.08)',
                      '0 12px 40px rgba(0,0,0,0.3)'
                    ),
                    borderColor: useColorModeValue('brand.300', 'whiteAlpha.200'),
                  }}
                >
                  <Box
                    w={12}
                    h={12}
                    borderRadius="xl"
                    bg={useColorModeValue(`${value.color.split('.')[0]}.50`, 'whiteAlpha.100')}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={value.icon} w={5} h={5} color={value.color} />
                  </Box>
                  <Text fontSize="lg" fontWeight="700" fontFamily="heading" color={textColor}>
                    {value.title}
                  </Text>
                  <Text color={mutedColor} fontSize="sm" lineHeight={1.7}>
                    {value.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Looking Ahead */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            p={8}
            borderRadius="2xl"
            bg={useColorModeValue('accent.50', 'whiteAlpha.50')}
            border="1px solid"
            borderColor={useColorModeValue('accent.100', 'whiteAlpha.100')}
          >
            <HStack spacing={4} align="start">
              <Icon as={FaRocket} color="accent.500" w={5} h={5} mt={1} />
              <VStack align="start" spacing={2}>
                <Text fontSize="md" fontWeight="700" fontFamily="heading" color={textColor}>
                  Ready to build something amazing together?
                </Text>
                <Text fontSize="sm" color={mutedColor} lineHeight={1.7}>
                  I'm always looking for opportunities to build AI-driven solutions that make
                  technology more accessible. Let's create something that matters.
                </Text>
              </VStack>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}