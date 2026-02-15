import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  useColorMode,
  IconButton,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as ScrollLink } from 'react-scroll'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)
const MotionBox = motion(Box)

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pillBg = useColorModeValue(
    'rgba(255, 255, 255, 0.75)',
    'rgba(18, 17, 16, 0.75)'
  )
  const pillBorder = useColorModeValue(
    'rgba(0, 0, 0, 0.08)',
    'rgba(255, 255, 255, 0.08)'
  )
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const hoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')

  return (
    <MotionBox
      position="fixed"
      top={isScrolled ? '12px' : '16px'}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <MotionFlex
        alignItems="center"
        gap={{ base: 1, md: 2 }}
        px={{ base: 3, md: 6 }}
        py={2}
        borderRadius="full"
        bg={pillBg}
        border="1px solid"
        borderColor={pillBorder}
        boxShadow={isScrolled
          ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)'
          : '0 4px 16px rgba(0, 0, 0, 0.06)'
        }
        backdropFilter="blur(20px) saturate(180%)"
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {/* Logo / Name */}
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          style={{ cursor: 'pointer' }}
        >
          <Box
            fontWeight="700"
            fontSize="sm"
            fontFamily="heading"
            color={textColor}
            px={3}
            py={1}
            borderRadius="full"
            _hover={{ opacity: 0.7 }}
            letterSpacing="-0.01em"
            whiteSpace="nowrap"
          >
            Vk
          </Box>
        </ScrollLink>

        {/* Divider dot */}
        <Box
          w="4px"
          h="4px"
          borderRadius="full"
          bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
          display={{ base: 'none', md: 'block' }}
        />

        {/* Nav Items */}
        <HStack spacing={0} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <Box
                px={3}
                py={1.5}
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                cursor="pointer"
                borderRadius="full"
                _hover={{ bg: hoverBg }}
                whiteSpace="nowrap"
              >
                {item.label}
              </Box>
            </ScrollLink>
          ))}
        </HStack>

        {/* Theme Toggle */}
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
          borderRadius="full"
          color={textColor}
          _hover={{ bg: hoverBg }}
        />
      </MotionFlex>
    </MotionBox>
  )
}