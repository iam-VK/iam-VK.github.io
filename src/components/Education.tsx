import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MotionBox = motion(Box)

const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    school: 'Sathyabama Institute of Science and Technology',
    period: '2021 – 2025',
    score: 'CGPA: 8.5',
  },
  {
    degree: 'Higher Secondary (Class XII)',
    school: 'Petit Seminaire Higher Secondary School',
    period: '2019 – 2021',
    score: '90.5%',
  },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('brand.200', 'whiteAlpha.100')
  const dotColor = useColorModeValue('accent.500', 'accent.400')

  return (
    <Box id="education" py={{ base: 20, md: 28 }} ref={ref}>
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
              Education
            </Text>
            <Heading as="h2" size="3xl" color={textColor}>
              Academic{' '}
              <Box as="span" fontStyle="italic" color="accent.500">Background</Box>
            </Heading>
          </MotionBox>

          {/* Timeline */}
          <VStack spacing={0} align="stretch" position="relative">
            {/* Vertical line */}
            <Box
              position="absolute"
              left={{ base: '20px', md: '24px' }}
              top="0"
              bottom="0"
              w="2px"
              bg={useColorModeValue('brand.200', 'whiteAlpha.100')}
            />

            {education.map((edu, index) => (
              <MotionBox
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                position="relative"
                pl={{ base: 14, md: 16 }}
                pb={index < education.length - 1 ? 10 : 0}
              >
                {/* Timeline dot */}
                <Box
                  position="absolute"
                  left={{ base: '14px', md: '18px' }}
                  top="8px"
                  w="14px"
                  h="14px"
                  borderRadius="full"
                  bg={dotColor}
                  border="3px solid"
                  borderColor={useColorModeValue('brand.50', 'brand.950')}
                  boxShadow={`0 0 0 3px ${useColorModeValue('rgba(10,95,239,0.2)', 'rgba(81,184,255,0.2)')}`}
                  zIndex={1}
                />

                {/* Card */}
                <Box
                  p={6}
                  bg={cardBg}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={cardBorder}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: useColorModeValue(
                      '0 8px 30px rgba(0,0,0,0.06)',
                      '0 8px 30px rgba(0,0,0,0.3)'
                    ),
                    borderColor: useColorModeValue('brand.300', 'whiteAlpha.200'),
                  }}
                >
                  <VStack align="start" spacing={2}>
                    <HStack spacing={3} flexWrap="wrap">
                      <Box px={3} py={1} bg={useColorModeValue('accent.50', 'whiteAlpha.100')} borderRadius="full" fontSize="xs" fontWeight="600" color="accent.500">
                        {edu.period}
                      </Box>
                      <Box px={3} py={1} bg={useColorModeValue('emerald.50', 'whiteAlpha.100')} borderRadius="full" fontSize="xs" fontWeight="600" color="emerald.600">
                        {edu.score}
                      </Box>
                    </HStack>
                    <Text fontSize="lg" fontWeight="700" fontFamily="heading" color={textColor}>
                      {edu.degree}
                    </Text>
                    <Text fontSize="sm" color={mutedColor}>
                      {edu.school}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}