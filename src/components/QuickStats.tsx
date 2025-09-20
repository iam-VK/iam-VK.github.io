import {
  SimpleGrid,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MotionVStack = motion(VStack)

const stats = [
  { value: '8.5', label: 'CGPA', sublabel: '' },
  { value: '3+', label: 'Major Projects', sublabel: '' },
  { value: '2025', label: 'Graduation', sublabel: '' },
]

export default function QuickStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <VStack spacing={8} py={16} ref={ref}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" maxW="4xl">
        {stats.map((stat, index) => (
          <MotionVStack
            key={stat.label}
            spacing={4}
            p={6}
            bg={useColorModeValue('brand.50', 'brand.950')}
            borderRadius="lg"
            border="1px solid"
            borderColor={useColorModeValue('brand.200', 'brand.800')}
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Text fontSize="4xl" fontWeight="bold" color="accent.600">
              {stat.value}
            </Text>
            <Text fontSize="md" fontWeight="semibold" color={useColorModeValue('text.primary', 'text.inverse')}>
              {stat.label}
            </Text>
          </MotionVStack>
        ))}
      </SimpleGrid>
    </VStack>
  )
}