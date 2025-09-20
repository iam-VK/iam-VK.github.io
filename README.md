# Vishwa Kumar S - Portfolio 🚀

A psychology-based portfolio designed to maximize credibility and engagement through proven influence principles.

## 🧠 Psychology-Driven Design

This portfolio implements Cialdini's principles of persuasion:
- **Reciprocity**: Offers value upfront through contact information
- **Social Proof**: Displays metrics, testimonials, and achievements
- **Authority**: Showcases credentials and professional experience
- **Scarcity**: Creates urgency with limited-time offers
- **Liking**: Personal storytelling builds emotional connection
- **Consistency**: Maintains cohesive professional brand

## 🚀 Quick Start

### Development (Default Port: 5173)
```bash
npm install
npm run dev
```

### Production HTTP (Port 80)
⚠️ **Requires Administrator Privileges**
```bash
# Windows (Run CMD/Terminal as Administrator)
npm run dev:sudo-80

# Linux/Mac
sudo npm run dev:http
```

### Production HTTPS (Port 443)
⚠️ **Requires SSL Certificates & Admin Privileges**
```bash
# Generate self-signed certificates (for development only)
npm run setup-https

# Run with HTTPS
sudo npm run dev:sudo-443
```

### Build for Production
```bash
npm run build
npm run preview:http    # HTTP on port 80
npm run preview:https   # HTTPS on port 443
```

## 🔧 Technical Features

- **Clean Design**: Apple-inspired aesthetic with monochromatic palette
- **Mobile-First**: Responsive across all device sizes
- **WCAG 2.1**: Full accessibility compliance
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Psychology-Enhanced**: Conversion-focused design patterns
- **Interactive Elements**: Smooth animations and hover effects

## 📱 Ports Configuration

| Port | Protocol | Purpose | Requirements |
|------|----------|---------|-------------|
| 5173 | HTTP | Development | None |
| 80 | HTTP | Production HTTP | Admin privileges |
| 443 | HTTPS | Production HTTPS | Admin privileges + SSL certificates |

## 🔒 HTTPS Setup

For production HTTPS, generate proper SSL certificates:
```bash
# Generate self-signed certs (development)
npm run setup-https

# For production, use Let's Encrypt or commercial certificates
# Place cert.pem and key.pem in ./certs/ directory
```

## 🏗️ Build Info

**Technology Stack:**
- React 18 + TypeScript
- Chakra UI + Framer Motion
- Vite build tool
- Mobile-first responsive design

**Psychology Principles:**
- Robert Cialdini's Influence Principles
- Social proof through metrics
- Authority through credentials
- Reciprocity with contact sharing
- Scarcity with time-limited offers

## 🎯 Outcomes

This portfolio is designed to:
- Instantly establish credibility
- Build emotional connection through storytelling
- Demonstrate technical expertise
- Encourage engagement through reciprocity
- Create urgency for collaboration

---

*Designed with psychology in mind for maximum impact* 💡
