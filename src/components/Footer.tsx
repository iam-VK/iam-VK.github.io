import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Link,
  Icon,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')
  const borderColor = useColorModeValue('brand.200', 'whiteAlpha.100')

  return (
    <Box
      py={10}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Container maxW="container.xl">
        <VStack spacing={6}>
          {/* Social Icons */}
          <HStack spacing={3}>
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
                icon={<Icon as={social.icon} w={4} h={4} />}
                variant="ghost"
                size="md"
                borderRadius="full"
                color={mutedColor}
                _hover={{ color: textColor }}
              />
            ))}
          </HStack>

          {/* Copyright */}
          <Text fontSize="sm" color={mutedColor} textAlign="center">
            Built with{' '}
            <Icon as={FaHeart} w={3} h={3} color="warm.500" mx={1} display="inline" verticalAlign="middle" />
            {' '}by Vishwa Kumar S · {new Date().getFullYear()}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}