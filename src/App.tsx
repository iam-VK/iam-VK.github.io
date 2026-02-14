import { Box, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Wavy section separator SVG
const WaveDivider = ({ flip = false, color }: { flip?: boolean; color: string }) => (
  <Box
    as="div"
    w="100%"
    overflow="hidden"
    lineHeight={0}
    transform={flip ? 'rotate(180deg)' : undefined}
    mt={flip ? '-1px' : undefined}
    mb={!flip ? '-1px' : undefined}
  >
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '60px', display: 'block' }}
    >
      <path
        d="M0,0 C150,80 350,0 500,40 C650,80 800,20 1000,60 C1100,80 1150,40 1200,50 L1200,120 L0,120 Z"
        fill={color}
      />
    </svg>
  </Box>
);

function App() {
  const bgColor = useColorModeValue('brand.50', 'brand.950');
  const sectionBg = useColorModeValue('#f0efe9', '#18171a');
  const mainBg = useColorModeValue('#f6f6f2', '#121110');

  return (
    <Box
      bg={bgColor}
      minH="100vh"
      overflowX="hidden"
      fontFamily="body"
      position="relative"
    >
      {/* Skip Link for Accessibility */}
      <Box
        as="button"
        onClick={() => {
          const main = document.querySelector('main');
          if (main) { main.focus(); main.scrollIntoView(); }
        }}
        position="absolute"
        top="-40px"
        left="6"
        bg="accent.600"
        color="white"
        px={4}
        py={2}
        borderRadius="full"
        fontSize="sm"
        fontWeight="medium"
        zIndex={10000}
        _focus={{ top: "6", outline: "2px solid", outlineColor: "accent.300" }}
        _hover={{ bg: "accent.700" }}
        transition="top 0.3s"
      >
        Skip to main content
      </Box>

      {/* Navigation */}
      <Box as="header" role="banner">
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box
        as="main"
        minH="100vh"
        w="full"
        position="relative"
        zIndex={1}
        tabIndex={-1}
        outline="none"
        aria-label="Main portfolio content"
      >
        {/* Hero Section */}
        <Box as="section" aria-labelledby="hero-heading">
          <Hero />
        </Box>

        {/* Wave into About */}
        <WaveDivider color={sectionBg} />

        {/* About Section */}
        <Box as="section" aria-labelledby="about-heading" bg={sectionBg}>
          <About />
        </Box>

        {/* Wave back */}
        <WaveDivider flip color={mainBg} />

        {/* Education Section */}
        <Box as="section" aria-labelledby="education-heading">
          <Education />
        </Box>

        {/* Wave into Skills */}
        <WaveDivider color={sectionBg} />

        {/* Skills Section */}
        <Box as="section" aria-labelledby="skills-heading" bg={sectionBg}>
          <Skills />
        </Box>

        {/* Wave back */}
        <WaveDivider flip color={mainBg} />

        {/* Experience Section */}
        <Box as="section" aria-labelledby="experience-heading">
          <Experience />
        </Box>

        {/* Wave into Projects */}
        <WaveDivider color={sectionBg} />

        {/* Projects Section */}
        <Box as="section" aria-labelledby="projects-heading" bg={sectionBg}>
          <Projects />
        </Box>

        {/* Wave back */}
        <WaveDivider flip color={mainBg} />

        {/* Contact Section */}
        <Box as="section" aria-labelledby="contact-heading">
          <Contact />
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" role="contentinfo">
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
