import {
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Box,
  Button,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

export default function Hero() {
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')
  const accentGradient = useColorModeValue(
    'linear-gradient(135deg, #0a5fef 0%, #7c3aed 50%, #f97316 100%)',
    'linear-gradient(135deg, #51b8ff 0%, #a78bfa 50%, #fb923c 100%)'
  )

  return (
    <Flex
      id="hero"
      minHeight="100vh"
      position="relative"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      px={{ base: 6, md: 12 }}
    >
      {/* Background gradient orbs */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w={{ base: '300px', md: '600px' }}
        h={{ base: '300px', md: '600px' }}
        borderRadius="full"
        bg={useColorModeValue(
          'radial-gradient(circle, rgba(81,184,255,0.15) 0%, transparent 70%)',
          'radial-gradient(circle, rgba(81,184,255,0.08) 0%, transparent 70%)'
        )}
        filter="blur(60px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-15%"
        w={{ base: '250px', md: '500px' }}
        h={{ base: '250px', md: '500px' }}
        borderRadius="full"
        bg={useColorModeValue(
          'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)'
        )}
        filter="blur(60px)"
        pointerEvents="none"
      />

      <VStack
        spacing={{ base: 6, md: 8 }}
        maxW="5xl"
        w="full"
        align="center"
        textAlign="center"
        zIndex={1}
      >
        {/* Tagline pill */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            px={5}
            py={2}
            borderRadius="full"
            border="1px solid"
            borderColor={useColorModeValue('brand.300', 'whiteAlpha.200')}
            bg={useColorModeValue('white', 'whiteAlpha.50')}
            fontSize="sm"
            fontWeight="500"
            color={mutedColor}
            display="inline-flex"
            alignItems="center"
            gap={2}
          >
            <Box w="6px" h="6px" borderRadius="full" bg="emerald.400" />
            Available for opportunities
          </Box>
        </MotionBox>

        {/* Main Heading */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontFamily="heading"
            fontWeight="900"
            color={textColor}
            lineHeight={0.95}
            letterSpacing="-0.03em"
          >
            Hi, I'm{' '}
            <Box
              as="span"
              bgGradient={accentGradient}
              bgClip="text"
              sx={{ WebkitTextFillColor: 'transparent' }}
            >
              Vishwa
            </Box>
          </Heading>
        </MotionBox>

        {/* Subtitle */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          maxW="3xl"
        >
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color={mutedColor}
            lineHeight={1.7}
          >
            A backend developer & AI enthusiast turning complex systems into{' '}
            <Box as="span" fontFamily="heading" fontStyle="italic" fontWeight="600" color={textColor}>
              elegant, scalable solutions
            </Box>
            . Currently building intelligent automation at Ramco Systems.
          </Text>
        </MotionBox>

        {/* CTA Buttons */}
        <MotionFlex
          gap={4}
          flexWrap="wrap"
          justify="center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            as={Link}
            href="mailto:vishwakumar.petit@gmail.com"
            variant="accent"
            size="lg"
            leftIcon={<FaEnvelope />}
            _hover={{ textDecoration: 'none' }}
          >
            Get in touch
          </Button>
          <Button
            as={Link}
            href="https://github.com/iam-VK"
            isExternal
            variant="outline"
            size="lg"
            leftIcon={<FaGithub />}
            _hover={{ textDecoration: 'none' }}
          >
            View GitHub
          </Button>
        </MotionFlex>

        {/* Social Icons */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <HStack spacing={4}>
            {[
              { icon: FaGithub, href: 'https://github.com/iam-VK', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:vishwakumar.petit@gmail.com', label: 'Email' },
            ].map((social) => (
              <IconButton
                key={social.label}
                as={Link}
                href={social.href}
                isExternal={social.href.startsWith('http')}
                aria-label={social.label}
                icon={<Icon as={social.icon} />}
                variant="ghost"
                size="lg"
                borderRadius="full"
                color={mutedColor}
                _hover={{
                  color: textColor,
                  bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.100'),
                }}
              />
            ))}
          </HStack>
        </MotionBox>

        {/* Scroll indicator */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          mt={8}
        >
          <VStack spacing={2}>
            <Text fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" color={mutedColor}>
              Scroll
            </Text>
            <Box
              as={motion.div}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" } as any}
            >
              <Icon as={FaArrowDown} w={3} h={3} color={mutedColor} />
            </Box>
          </VStack>
        </MotionBox>
      </VStack>
    </Flex>
  )
}