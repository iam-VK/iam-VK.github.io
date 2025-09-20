import { Box, VStack, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const bgColor = useColorModeValue('brand.50', 'brand.990');

  // Skip link for accessibility
  const skipToMain = () => {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  };

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
        onClick={skipToMain}
        position="absolute"
        top="-40px"
        left="6"
        bg="accent.600"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        fontSize="sm"
        fontWeight="medium"
        zIndex={1000}
        _focus={{
          top: "6",
          outline: "2px solid",
          outlineColor: "accent.300"
        }}
        _hover={{
          bg: "accent.700"
        }}
        transition="top 0.3s"
      >
        Skip to main content
      </Box>

      {/* Animated background elements - Hidden from screen readers */}
      <Box
        className="bg-floating-circle"
        aria-hidden="true"
      />
      <Box
        className="bg-floating-circle-2"
        aria-hidden="true"
      />
      <Box
        className="bg-floating-circle-3"
        aria-hidden="true"
      />
      <Box
        className="bg-floating-circle-4"
        aria-hidden="true"
      />
      <Box
        className="bg-floating-hexagon"
        aria-hidden="true"
      />
      <Box
        className="bg-floating-triangle"
        aria-hidden="true"
      />
      <Box
        className="bg-floating-diamond"
        aria-hidden="true"
      />

      {/* Header - Navigation */}
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
        _focus={{
          outline: "2px solid",
          outlineColor: "accent.500"
        }}
        aria-label="Main portfolio content"
      >
        {/* Hero Section - Introduction */}
        <Box as="section" aria-labelledby="hero-heading">
          <Hero />
        </Box>

        {/* Quick Stats Section */}
        <Box as="section" aria-labelledby="stats-heading">
          <QuickStats />
        </Box>

        {/* About Section */}
        <Box as="section" aria-labelledby="about-heading">
          <About />
        </Box>

        {/* Education Section */}
        <Box as="section" aria-labelledby="education-heading">
          <Education />
        </Box>

        {/* Skills Section */}
        <Box as="section" aria-labelledby="skills-heading">
          <Skills />
        </Box>

        {/* Experience Section */}
        <Box as="section" aria-labelledby="experience-heading">
          <Experience />
        </Box>

        {/* Projects Section */}
        <Box as="section" aria-labelledby="projects-heading">
          <Projects />
        </Box>

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
