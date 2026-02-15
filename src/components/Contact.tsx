import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  useColorModeValue,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  SimpleGrid,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from 'react-icons/fa'

const MotionBox = motion(Box)

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const toast = useToast()
  const textColor = useColorModeValue('text.primary', 'text.inverse')
  const mutedColor = useColorModeValue('text.secondary', 'text.muted')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('brand.200', 'whiteAlpha.100')

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) newErrors.message = 'At least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast({ title: 'Message sent!', description: "I'll respond within 24 hours.", status: 'success', duration: 5000, isClosable: true })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      toast({ title: 'Error', description: 'Please try again.', status: 'error', duration: 5000, isClosable: true })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box id="contact" py={{ base: 20, md: 28 }} ref={ref}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: 10, md: 14 }}>

          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            textAlign="center"
            maxW="3xl"
          >
            <Text fontSize="sm" color="accent.500" fontWeight="600" textTransform="uppercase" letterSpacing="0.15em" mb={4}>
              Contact
            </Text>
            <Heading as="h2" size="3xl" color={textColor} mb={4}>
              Let's{' '}
              <Box as="span" fontStyle="italic" color="accent.500">connect</Box>
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color={mutedColor}>
              I'm always excited to discuss new opportunities, interesting projects, or just chat about tech and AI.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 12 }} w="full" maxW="5xl">

            {/* Form */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <VStack
                as="form"
                onSubmit={handleSubmit}
                spacing={5}
                p={{ base: 6, md: 8 }}
                bg={cardBg}
                borderRadius="2xl"
                border="1px solid"
                borderColor={cardBorder}
              >
                <Text fontSize="lg" fontWeight="700" fontFamily="heading" color={textColor} alignSelf="start">
                  Send a message
                </Text>

                <FormControl isInvalid={!!errors.name}>
                  <FormLabel fontSize="sm" color={mutedColor}>Name</FormLabel>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" borderRadius="xl" />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.email}>
                  <FormLabel fontSize="sm" color={mutedColor}>Email</FormLabel>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" borderRadius="xl" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.message}>
                  <FormLabel fontSize="sm" color={mutedColor}>Message</FormLabel>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} borderRadius="xl" />
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  w="full"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  leftIcon={<FaPaperPlane />}
                >
                  Send Message
                </Button>
              </VStack>
            </MotionBox>

            {/* Contact Info */}
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <VStack spacing={6} h="full">
                {/* Direct Contact */}
                <VStack
                  spacing={4}
                  p={{ base: 6, md: 8 }}
                  bg={cardBg}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={cardBorder}
                  w="full"
                  align="start"
                >
                  <Text fontSize="lg" fontWeight="700" fontFamily="heading" color={textColor}>
                    Get in touch
                  </Text>

                  <Button
                    as={Link}
                    href="mailto:vishwakumar.petit@gmail.com"
                    leftIcon={<FaEnvelope />}
                    variant="outline"
                    w="full"
                    justifyContent="flex-start"
                    size="md"
                    _hover={{ textDecoration: 'none' }}
                  >
                    vishwakumar.petit@gmail.com
                  </Button>

                  <Button
                    as={Link}
                    href="tel:+919488321830"
                    leftIcon={<FaPhone />}
                    variant="outline"
                    w="full"
                    justifyContent="flex-start"
                    size="md"
                    _hover={{ textDecoration: 'none' }}
                  >
                    +91 9488321830
                  </Button>
                </VStack>

                {/* Social */}
                <VStack
                  spacing={4}
                  p={{ base: 6, md: 8 }}
                  bg={cardBg}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={cardBorder}
                  w="full"
                  align="start"
                >
                  <Text fontSize="sm" fontWeight="600" color={mutedColor} textTransform="uppercase" letterSpacing="0.1em">
                    Social
                  </Text>
                  <HStack spacing={3}>
                    {[
                      { icon: FaGithub, href: 'https://github.com/iam-VK', label: 'GitHub' },
                      { icon: FaLinkedin, href: 'https://linkedin.com/in/vishwakumar-s', label: 'LinkedIn' },
                      { icon: FaEnvelope, href: 'mailto:vishwakumar.petit@gmail.com', label: 'Email' },
                    ].map((s) => (
                      <IconButton
                        key={s.label}
                        as={Link}
                        href={s.href}
                        isExternal={s.href.startsWith('http')}
                        aria-label={s.label}
                        icon={<Icon as={s.icon} />}
                        variant="outline"
                        borderRadius="full"
                        size="lg"
                        _hover={{ bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.100'), textDecoration: 'none' }}
                      />
                    ))}
                  </HStack>
                </VStack>

                {/* Response guarantee */}
                <Box
                  p={5}
                  borderRadius="2xl"
                  bg={useColorModeValue('emerald.50', 'whiteAlpha.50')}
                  border="1px solid"
                  borderColor={useColorModeValue('emerald.100', 'whiteAlpha.100')}
                  w="full"
                >
                  <HStack spacing={3}>
                    <Text fontSize="xl">⚡</Text>
                    <VStack align="start" spacing={0}>
                      <Text fontSize="sm" fontWeight="700" color={textColor}>Usually responds within 24h</Text>
                      <Text fontSize="xs" color={mutedColor}>I read every message personally</Text>
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}