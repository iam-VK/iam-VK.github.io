import {
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Box,
  Badge,
  Button,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaDownload, FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)
const MotionHeading = motion(Heading)
const MotionHStack = motion(HStack)

export default function Hero() {
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const subTextColor = useColorModeValue('text.secondary', 'text.inverse')
  const bgGradient = useColorModeValue(
    'linear(to-br, brand.25, brand.100)',
    'linear(to-br, brand.900, brand.800)'
  )

  return (
    <Flex
      bg={bgGradient}
      px={{ base: 4, sm: 6, md: 8 }}
      minHeight="100vh"
      position="relative"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
    >
      <MotionVStack
        spacing={5}
        maxW="7xl"
        w="full"
        align="center"
        textAlign="center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image and Basic Info */}

        {/* Main Heading */}
        {/* Name and Title */}
        <MotionVStack
          spacing={3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MotionHeading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontFamily="heading"
            fontWeight="700"
            color={textColor}
            lineHeight="0.9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Vishwa Kumar S
          </MotionHeading>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="accent.600"
            fontWeight="500"
            fontFamily="mono"
          >
            Backend Developer & AI Enthusiast
          </Text>
        </MotionVStack>

        {/* Compelling Elevator Pitch - Authority & Value Proposition */}
        <MotionBox
          maxW="4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={subTextColor}
            fontFamily="body"
            lineHeight="1.6"
            mb={4}
          >
            Passionate CS student transforming complex backend architectures and AI systems into
            scalable solutions. Currently accelerating development cycles at <strong>Ramco Systems</strong> through
            intelligent automation, while exploring cutting-edge AI applications for real-world impact.
          </Text>

          {/* Social Proof - Quick Stats */}
          <Flex
            justify="center"
            wrap="wrap"
            gap={6}
            mb={6}
            fontSize={{ base: "sm", md: "md" }}
            color={subTextColor}
          >
            <HStack spacing={1}>
              <Icon as={FaMapMarkerAlt} w={4} h={4} color="accent.600" />
              <Text>Chennai, Tamil Nadu</Text>
            </HStack>
            <HStack spacing={1}>
              <Text fontWeight="bold" color="accent.600">3+ Major Projects</Text>
              <Text>AI & Backend Focus</Text>
            </HStack>
          </Flex>
        </MotionBox>

        {/* RECIPROCITY PRINCIPLE - Prominent Contact Info Upfront */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <VStack spacing={3}>
            <HStack spacing={4} justify="center" flexWrap="wrap">
              {/* Direct Contact Buttons - Primary CTAs */}
              <Button
                leftIcon={<FaEnvelope />}
                colorScheme="accent"
                variant="solid"
                size={{ base: "md", md: "lg" }}
                as={Link}
                href="mailto:vishwakumar.petit@gmail.com"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
              >
                vishwakumar.petit@gmail.com
              </Button>

              <Button
                leftIcon={<FaPhone />}
                colorScheme="accent"
                variant="outline"
                size={{ base: "md", md: "lg" }}
                as={Link}
                href="tel:+919488321830"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
              >
                +91 9488321830
              </Button>
            </HStack>
          </VStack>
        </MotionBox>

        {/* Social Links - Secondary CTAs */}
        <MotionHStack
          spacing={6}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <IconButton
            as={Link}
            href="https://github.com/yourusername"
            isExternal
            aria-label="GitHub Profile"
            icon={<FaGithub />}
            variant="ghost"
            size="lg"
            _hover={{ color: 'accent.600', transform: 'scale(1.1)' }}
            transition="all 0.3s"
          />

          <IconButton
            as={Link}
            href="https://linkedin.com/in/yourusername"
            isExternal
            aria-label="LinkedIn Profile"
            icon={<FaLinkedin />}
            variant="ghost"
            size="lg"
            _hover={{ color: 'accent.600', transform: 'scale(1.1)' }}
            transition="all 0.3s"
          />

          <IconButton
            as={Link}
            href="mailto:vishwakumar.petit@gmail.com"
            aria-label="Send Email"
            icon={<FaEnvelope />}
            variant="ghost"
            size="lg"
            _hover={{ color: 'accent.600', transform: 'scale(1.1)' }}
            transition="all 0.3s"
          />
        </MotionHStack>

        {/* Scroll Indicator */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          mt={8}
        >
          <VStack spacing={2} opacity={0.7}>
            <Text fontSize="xs" color={subTextColor} letterSpacing="wider">
              SCROLL TO EXPLORE
            </Text>
            <Box
              as={motion.div}
              animate={{
                y: [0, 8, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Icon as={FaChevronDown} w={4} h={4} color="accent.600" />
            </Box>
          </VStack>
        </MotionBox>
      </MotionVStack>
    </Flex>
  )
}