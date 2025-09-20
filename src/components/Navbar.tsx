import {
  Box,
  Flex,
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgBlur = useColorModeValue(
    'rgba(255, 255, 255, 0.85)',
    'rgba(0, 0, 0, 0.85)'
  )
  const borderColor = useColorModeValue('brand.200', 'brand.950')

  return (
    <MotionBox
      position="fixed"
      w="100%"
      zIndex={1000}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      sx={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        backgroundColor: isScrolled ? bgBlur : 'transparent',
        borderBottom: isScrolled ? `1px solid ${borderColor}` : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={8}
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          style={{ cursor: 'pointer' }}
        >
          <MotionBox
            fontWeight="medium"
            fontSize="lg"
            color={useColorModeValue('text.primary', 'text.inverse')}
            _hover={{
              opacity: 0.7
            }}
            transition={{ duration: 0.2 }}
          >
            Vishwa Kumar
          </MotionBox>
        </ScrollLink>

        <MotionFlex
          direction="row"
          spacing={{ base: 4, md: 8 }}
          alignItems="center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <MotionBox
                px={4}
                py={2}
                fontSize="sm"
                fontWeight="medium"
                color={useColorModeValue('text.primary', 'text.inverse')}
                cursor="pointer"
                borderRadius="md"
                _hover={{
                  bg: useColorModeValue('gray.100', 'gray.800'),
                  color: useColorModeValue('text.primary', 'text.inverse'),
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whiteSpace="nowrap"
              >
                {item.label}
              </MotionBox>
            </ScrollLink>
          ))}
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="md"
            color={useColorModeValue('text.primary', 'text.inverse')}
            _hover={{
              bg: useColorModeValue('brand.200', 'brand.900'),
            }}
          />
        </MotionFlex>
      </Flex>
    </MotionBox>
  )
}