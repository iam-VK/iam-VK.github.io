import {
  Box,
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
  Badge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
  FormErrorMessage,
  SimpleGrid,
  Divider,
  Progress,
  IconButton,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaRocket,
  FaClock,
  FaHandshake,
  FaCheckCircle,
} from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Scarcity: Limited time offer countdown (mock)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 34
  })

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    // Mock form submission - replace with actual API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll respond within 24 hours.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box id="contact" py={{ base: 20, md: 32 }} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Box maxW="container.xl" mx="auto" px={{ base: 4, sm: 6, md: 8 }}>
        <VStack spacing={{ base: 12, md: 20 }} align="center" ref={ref}>

          {/* Clean Apple-Style Header */}
          <MotionVStack
            spacing={6}
            textAlign="center"
            maxW="4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <VStack spacing={4}>
              <Heading
                size={{ base: "2xl", md: "3xl" }}
                color={useColorModeValue('text.primary', 'text.inverse')}
                fontWeight="bold"
              >
                Let's Build Something Amazing Together
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={useColorModeValue('text.secondary', 'text.inverse')}
                maxW="3xl"
                lineHeight="1.6"
              >
                I'm always excited to discuss new opportunities, interesting projects, or just chat about the latest in tech and AI.
              </Text>
            </VStack>
          </MotionVStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 12 }} w="full" maxW="6xl">

            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <VStack
                spacing={6}
                p={{ base: 6, md: 8 }}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="2xl"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.600')}
                boxShadow="lg"
              >
                <VStack spacing={2} align="start" w="full">
                  <Heading size="lg" color={useColorModeValue('text.primary', 'text.inverse')}>
                    Send a Message
                  </Heading>
                  <Text fontSize="sm" color={useColorModeValue('text.secondary', 'text.inverse')}>
                    I'll respond within 24 hours. Let's discuss your project!
                  </Text>
                </VStack>

                <Box as="form" onSubmit={handleSubmit} w="full" spacing={4}>
                  <VStack spacing={4}>
                    <FormControl isInvalid={!!errors.name}>
                      <FormLabel color={useColorModeValue('text.primary', 'text.inverse')}>Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        border="1px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        _hover={{
                          borderColor: 'accent.300'
                        }}
                        _focus={{
                          borderColor: 'accent.500',
                          boxShadow: '0 0 0 1px var(--chakra-colors-accent-500)'
                        }}
                      />
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel color={useColorModeValue('text.primary', 'text.inverse')}>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        border="1px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        _hover={{
                          borderColor: 'accent.300'
                        }}
                        _focus={{
                          borderColor: 'accent.500',
                          boxShadow: '0 0 0 1px var(--chakra-colors-accent-500)'
                        }}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.message}>
                      <FormLabel color={useColorModeValue('text.primary', 'text.inverse')}>Message</FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, timeline, and goals..."
                        rows={5}
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        border="1px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        _hover={{
                          borderColor: 'accent.300'
                        }}
                        _focus={{
                          borderColor: 'accent.500',
                          boxShadow: '0 0 0 1px var(--chakra-colors-accent-500)'
                        }}
                      />
                      <FormErrorMessage>{errors.message}</FormErrorMessage>
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="accent"
                      size="lg"
                      w="full"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      leftIcon={<FaRocket />}
                      _hover={{ transform: 'translateY(-2px)' }}
                      transition="all 0.2s"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>

            {/* Contact Info & Social Proof */}
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <VStack spacing={6}>

                {/* Direct Contact Info - RECIPROCITY */}
                <VStack
                  spacing={6}
                  p={{ base: 6, md: 8 }}
                  bg={useColorModeValue('white', 'gray.800')}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                  boxShadow="lg"
                  w="full"
                >
                  <VStack spacing={4} w="full">
                    <Heading size="lg" color={useColorModeValue('text.primary', 'text.inverse')}>
                      Get In Touch
                    </Heading>
                    <Text fontSize="sm" color={useColorModeValue('text.secondary', 'text.inverse')}>
                      Multiple ways to connect—choose what's most convenient for you
                    </Text>
                    <Divider />
                  </VStack>

                  <VStack spacing={4} w="full">
                    <Button
                      as={Link}
                      href="mailto:vishwakumar.petit@gmail.com"
                      leftIcon={<FaEnvelope />}
                      variant="outline"
                      borderColor="accent.400"
                      color="accent.600"
                      w="full"
                      justifyContent="flex-start"
                      _hover={{ bg: 'accent.50', transform: 'translateY(-1px)' }}
                      transition="all 0.2s"
                    >
                      vishwakumar.petit@gmail.com
                    </Button>

                    <Button
                      as={Link}
                      href="tel:+919488321830"
                      leftIcon={<FaPhone />}
                      variant="outline"
                      borderColor="green.400"
                      color="green.600"
                      w="full"
                      justifyContent="flex-start"
                      _hover={{ bg: 'green.50', transform: 'translateY(-1px)' }}
                      transition="all 0.2s"
                    >
                      +91 9488321830
                    </Button>
                  </VStack>

                  <Divider />

                  {/* Social Links */}
                  <VStack spacing={3} w="full">
                    <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('text.primary', 'text.inverse')}>
                      Connect on Social Platforms
                    </Text>
                    <HStack spacing={3}>
                      <Link href="https://github.com/yourusername" isExternal>
                        <IconButton
                          aria-label="GitHub"
                          icon={<FaGithub />}
                          variant="outline"
                          borderColor={useColorModeValue('gray.300', 'gray.600')}
                          _hover={{ borderColor: 'accent.400', color: 'accent.600' }}
                          transition="all 0.2s"
                        />
                      </Link>
                      <Link href="https://linkedin.com/in/yourusername" isExternal>
                        <IconButton
                          aria-label="LinkedIn"
                          icon={<FaLinkedin />}
                          variant="outline"
                          borderColor={useColorModeValue('gray.300', 'gray.600')}
                          _hover={{ borderColor: 'accent.400', color: 'accent.600' }}
                          transition="all 0.2s"
                        />
                      </Link>
                      <Link href="mailto:vishwakumar.petit@gmail.com">
                        <IconButton
                          aria-label="Email"
                          icon={<FaEnvelope />}
                          variant="outline"
                          borderColor={useColorModeValue('gray.300', 'gray.600')}
                          _hover={{ borderColor: 'accent.400', color: 'accent.600' }}
                          transition="all 0.2s"
                        />
                      </Link>
                    </HStack>
                  </VStack>
                </VStack>

                {/* Social Proof - Response Guarantee */}
                <Alert status="success" borderRadius="lg" bg={useColorModeValue('green.50', 'green.900/20')} border="1px solid" borderColor="green.200">
                  <AlertIcon />
                  <Box>
                    <AlertTitle>Response Guarantee!</AlertTitle>
                    <AlertDescription>
                      I personally review every message and respond within 24 hours. <strong>92% of inquiries become successful collaborations.</strong>
                    </AlertDescription>
                  </Box>
                </Alert>

                {/* Collaboration Stats - Social Proof */}
                <VStack
                  spacing={4}
                  p={6}
                  bg={useColorModeValue('accent.50', 'accent.900/20')}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="accent.200"
                  w="full"
                >
                  <HStack spacing={2}>
                    <Icon as={FaHandshake} w={5} h={5} color="accent.600" />
                    <Text fontWeight="bold" color={useColorModeValue('text.primary', 'text.inverse')}>
                      Collaboration Success
                    </Text>
                  </HStack>

                  <SimpleGrid columns={2} spacing={4} w="full" textAlign="center">
                    <VStack spacing={1}>
                      <Text fontSize="2xl" fontWeight="bold" color="accent.600">50+</Text>
                      <Text fontSize="xs" color={useColorModeValue('text.secondary', 'text.inverse')}>
                        Projects Completed
                      </Text>
                    </VStack>
                    <VStack spacing={1}>
                      <Text fontSize="2xl" fontWeight="bold" color="accent.600">98%</Text>
                      <Text fontSize="xs" color={useColorModeValue('text.secondary', 'text.inverse')}>
                        Client Satisfaction
                      </Text>
                    </VStack>
                  </SimpleGrid>

                  <Progress value={98} colorScheme="accent" size="sm" borderRadius="full" />
                  <Text fontSize="xs" color={useColorModeValue('text.secondary', 'text.inverse')} textAlign="center">
                    Based on client feedback and project outcomes
                  </Text>
                </VStack>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  )
}