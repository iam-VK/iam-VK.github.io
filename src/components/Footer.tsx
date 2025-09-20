import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGraduationCap, FaBriefcase, FaRocket, FaMapMarkerAlt, FaCoffee, FaHeart } from 'react-icons/fa'

const MotionBox = motion(Box)

const socialLinks = [
  {
    icon: FaGithub,
    url: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    url: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  {
    icon: FaEnvelope,
    url: 'mailto:your.email@example.com',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="brand.50"
      borderTop="1px"
      borderColor="brand.200"
      py={{ base: 16, md: 20 }}
    >
      <Box maxW="container.xl" mx="auto" px={{ base: 4, sm: 6, md: 8 }}>
        <VStack spacing={12}>
          {/* Quick Facts */}
          <VStack spacing={6}>
            <Text fontSize="sm" color="accent.600" fontWeight="500" textTransform="uppercase" letterSpacing="wider">
              Quick Facts About Me
            </Text>

            <VStack spacing={4} align="center" textAlign="center">
              <VStack spacing={1}>
                <Icon as={FaGraduationCap} w={4} h={4} color="accent.600" />
                <Text fontSize="md" color={useColorModeValue('text.primary', 'text.inverse')}>
                  CS Student graduating in 2025
                </Text>
              </VStack>

              <VStack spacing={1}>
                <Icon as={FaBriefcase} w={4} h={4} color="accent.600" />
                <Text fontSize="md" color={useColorModeValue('text.primary', 'text.inverse')}>
                  Currently interning at Ramco Systems
                </Text>
              </VStack>

              <VStack spacing={1}>
                <Icon as={FaRocket} w={4} h={4} color="accent.600" />
                <Text fontSize="md" color={useColorModeValue('text.primary', 'text.inverse')}>
                  Passionate about AI & Backend Development
                </Text>
              </VStack>

              <VStack spacing={1}>
                <Icon as={FaMapMarkerAlt} w={4} h={4} color="accent.600" />
                <Text fontSize="md" color={useColorModeValue('text.primary', 'text.inverse')}>
                  Based in Chennai, Tamil Nadu
                </Text>
              </VStack>
            </VStack>
          </VStack>

          {/* Footer Bottom */}
          <VStack spacing={4} textAlign="center">
            <VStack spacing={2}>
              <HStack spacing={1} justify="center">
                <Text fontSize="sm" color={useColorModeValue('text.secondary', 'text.inverse')}>
                  Made with
                </Text>
                <Icon as={FaHeart} w={3} h={3} color="accent.500" />
                <Text fontSize="sm" color={useColorModeValue('text.secondary', 'text.inverse')}>
                  and lots of
                </Text>
                <Icon as={FaCoffee} w={3} h={3} color="accent.300" />
              </HStack>
              <Text fontSize="sm" color={useColorModeValue('text.tertiary', 'text.inverse')}>
                © {new Date().getFullYear()} Vishwa Kumar S. All rights reserved.
              </Text>
            </VStack>

            <Text fontSize="sm" color={useColorModeValue('text.tertiary', 'text.inverse')}>
              {`{Always learning, always growing}`}
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  )
}