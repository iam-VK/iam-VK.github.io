import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaRocket, FaUserGraduate, FaCode } from 'react-icons/fa'

// Custom SVG icons
const ArchitectureIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IntelligenceIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InnovationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 6.5L5 10L7.5 12.5L12 8L9.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 17.5L19 14L16.5 11.5L12 16L14.5 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
    <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/>
  </svg>
);

export default function About() {
  return (
    <Box id="about" py={{ base: 20, md: 32 }} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl" px={{ base: 4, sm: 6, md: 8 }}>
        <VStack spacing={{ base: 16, md: 20 }} align="stretch">

          {/* Personal Introduction - The Beginning */}
          <VStack spacing={6} align="start">
            <Text fontSize="sm" color="accent.600" fontWeight="500" textTransform="uppercase" letterSpacing="wider">
              Beyond the Code
            </Text>
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color={useColorModeValue('text.primary', 'text.inverse')}
              lineHeight="1.3"
            >
              A Curious Mind's Journey Into Technology
            </Text>

            {/* Personal Story - Origin */}
            <VStack spacing={4} align="start" maxW="4xl">
              <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue('text.secondary', 'text.inverse')} lineHeight="1.7">
                It all started in a small town in Tamil Nadu, where I discovered my love for technology through an old
                family computer. What began as curiosity about how websites worked turned into a passion for creating
                solutions that make people's lives easier. Today, I'm a Computer Science student at Sathyabama
                Institute, balancing the excitement of learning with the satisfaction of building real-world applications.
              </Text>

              <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue('text.secondary', 'text.inverse')} lineHeight="1.7">
                My time at Ramco Systems as a Software Development Intern has been transformative. Working with a
                team of experienced engineers, I've learned that great software isn't just about writing code—it's
                about understanding problems deeply and crafting elegant solutions that scale. Currently, I'm building
                AI-powered automation tools that save my colleagues hours of manual work every week.
              </Text>

              {/* Personal Philosophy Quote */}
              <Box
                bg={useColorModeValue('accent.50', 'accent.900/20')}
                borderLeft="4px solid"
                borderColor="accent.500"
                p={6}
                borderRadius="lg"
                my={4}
              >
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  fontStyle="italic"
                  color={useColorModeValue('text.primary', 'text.inverse')}
                  lineHeight="1.6"
                  mb={3}
                >
                  "Every great developer I admire started exactly where I am now—confused, excited, and determined to learn.
                  Technology isn't just my career; it's how I make sense of the world and help others do the same."
                </Text>
                <Text fontSize="sm" color="accent.600" fontWeight="bold">
                  — My philosophy as a lifelong learner
                </Text>
              </Box>
            </VStack>
          </VStack>

          {/* The Learning Journey - Personal Growth Story */}
          <VStack spacing={6} align="start">
            <HStack spacing={3} align="center">
              <Icon as={FaCode} color="accent.600" w={5} h={5} />
              <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue('text.primary', 'text.inverse')}>
                The Learning Journey
              </Text>
            </HStack>

            <VStack spacing={4} align="start" maxW="4xl">
              <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue('text.secondary', 'text.inverse')} lineHeight="1.6">
                My path hasn't been a straight line. Three years ago, I struggled with my first programming concepts,
                spending late nights debugging simple syntax errors. But every challenge became a stepping stone.
                Learning Python wasn't just about mastering a language—it taught me problem-solving, patience,
                and the joy of seeing code come alive.
              </Text>

              <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue('text.secondary', 'text.inverse')} lineHeight="1.6">
                What keeps me motivated isn't the technologies themselves, but the impact they create. Building a
                video search engine that helps students find educational content instantly, or deploying AI tools
                that automate hours of manual work—these aren't just projects; they're opportunities to make
                a meaningful difference.
              </Text>

              {/* Personal Achievement */}
              <Box p={4} bg={useColorModeValue('green.50', 'green.900/20')} borderRadius="lg" border="1px solid" borderColor="green.200">
                <HStack spacing={3} align="start">
                  <Icon as={FaUserGraduate} color="green.600" w={5} h={5} mt={1} />
                  <VStack align="start" spacing={1}>
                    <Text fontSize="md" fontWeight="semibold" color="green.700">
                      Academic Excellence
                    </Text>
                    <Text fontSize="sm" color={useColorModeValue('text.secondary', 'text.inverse')}>
                      Maintaining an 8.5 CGPA while interning full-time and developing personal projects has taught me
                      the perfect balance of academics, work, and passion-driven learning.
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </VStack>
          </VStack>

          {/* Outside of Code - Personal Life */}
          <VStack spacing={6} align="start">
            <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue('text.primary', 'text.inverse')}>
              Life Beyond the IDE
            </Text>

            <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue('text.secondary', 'text.inverse')} lineHeight="1.6" maxW="4xl">
              When I'm not debugging code or learning new frameworks, you can find me exploring Chennai's food scene
              with friends, practicing mindfulness through meditation, or contributing to local tech communities.
              I believe great developers aren't just technical experts—they're well-rounded individuals who bring
              diverse perspectives to problem-solving.
            </Text>
          </VStack>

          {/* Core Values & Motivations */}
          <VStack spacing={8} align="stretch">
            <VStack spacing={4} align="center" textAlign="center">
              <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue('text.primary', 'text.inverse')}>
                What Drives My Work
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue('text.secondary', 'text.inverse')} maxW="3xl">
                Every line of code I write serves a larger purpose—solving real problems and creating positive impact.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 12 }}>
              {[
                {
                  icon: ArchitectureIcon,
                  title: 'Scalable Systems',
                  description: 'I believe in building foundations that last. Whether it\'s designing database architectures that handle millions of queries or architecting APIs that serve global users, I focus on solutions that grow with your needs.',
                  personalNote: 'My first big lesson came from scaling a video processing system for 10,000+ daily users—it taught me that thoughtful architecture prevents future headaches.'
                },
                {
                  icon: IntelligenceIcon,
                  title: 'AI Integration',
                  description: 'The future is intelligent. I specialize in seamlessly integrating AI capabilities into existing systems, from automating repetitive tasks to providing actionable insights through data analysis.',
                  personalNote: 'Working at Ramco Systems showed me how AI can transform traditional enterprise software into next-generation platforms that learn and adapt.'
                },
                {
                  icon: InnovationIcon,
                  title: 'Problem Solving',
                  description: 'Every challenge is an opportunity for innovation. I thrive on tackling complex problems that seem impossible at first glance, breaking them down into elegant, workable solutions.',
                  personalNote: 'My proudest moment was turning a "mission impossible" legacy system integration into a success story that saved the company thousands of hours annually.'
                },
              ].map((value, index) => (
                <VStack
                  key={value.title}
                  spacing={6}
                  align="start"
                  p={6}
                  bg={useColorModeValue('white', 'gray.800')}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                  h="full"
                  _hover={{
                    boxShadow: 'lg',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <HStack spacing={3} align="center">
                    <div style={{ color: 'var(--chakra-colors-accent-600)' }}>
                      {typeof value.icon === 'function' ? <value.icon /> : value.icon}
                    </div>
                    <Text
                      fontSize="lg"
                      fontWeight="semibold"
                      color={useColorModeValue('text.primary', 'text.inverse')}
                    >
                      {value.title}
                    </Text>
                  </HStack>

                  <VStack spacing={3} align="start" flex={1}>
                    <Text
                      color={useColorModeValue('text.secondary', 'text.inverse')}
                      lineHeight="1.6"
                      fontSize="sm"
                    >
                      {value.description}
                    </Text>

                    <Box
                      bg={useColorModeValue('accent.50', 'accent.900/20')}
                      borderRadius="lg"
                      p={3}
                      border="1px solid"
                      borderColor="accent.200"
                    >
                      <Text
                        fontSize="xs"
                        fontStyle="italic"
                        color={useColorModeValue('text.secondary', 'text.inverse')}
                        lineHeight="1.5"
                      >
                        💡 {value.personalNote}
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Future Vision */}
          <VStack spacing={6} align="start">
            <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue('text.primary', 'text.inverse')}>
              Looking Ahead
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue('text.secondary', 'text.inverse')} lineHeight="1.6" maxW="4xl">
              As I graduate in 2025, I'm excited about building AI-driven solutions that make technology more accessible and human-centered.
              Whether that's creating tools that help small businesses compete with tech giants or developing educational platforms that make
              learning accessible worldwide, I want to contribute to a future where technology serves humanity's greatest needs.
            </Text>

            <Box
              bg={useColorModeValue('blue.50', 'blue.900/20')}
              borderRadius="lg"
              p={6}
              border="1px solid"
              borderColor="blue.200"
            >
              <HStack spacing={4} align="start">
                <Icon as={FaRocket} color="blue.600" w={6} h={6} mt={1} />
                <VStack align="start" spacing={2}>
                  <Text fontSize="md" fontWeight="semibold" color="blue.700">
                    Ready to build something amazing together?
                  </Text>
                  <Text fontSize="sm" color={useColorModeValue('text.secondary', 'text.inverse')} lineHeight="1.5">
                    If you're looking for a developer who brings not just technical skills, but genuine passion,
                    creativity, and a fresh perspective from a recent journey through the challenges of learning to
                    code—I'm eager to hear about your project. Let's create solutions that matter.
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}