# Clover Consulting Website

A modern, professional website for Clover Consulting - Expert bookkeeping and financial management services for small business owners.

## 🚀 Tech Stack

- **Next.js 16** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

## ✨ Features

- **Modern Design** - Clean, professional UI with smooth animations
- **Responsive** - Mobile-first design that works on all devices
- **Performance** - Optimized with Next.js 16 and Turbopack
- **Accessibility** - WCAG compliant with proper semantic HTML
- **SEO Optimized** - Meta tags and structured data for better search rankings
- **Interactive** - Engaging animations and hover effects
- **Contact Form** - Easy way for clients to get in touch

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clover
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
clover/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and Tailwind
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Problems.tsx      # Problem statements
│   ├── ValueProp.tsx     # Value proposition
│   ├── Services.tsx      # Services grid
│   ├── WhyChoose.tsx     # Why choose us features
│   ├── HowItWorks.tsx    # Process timeline
│   ├── BeforeAfter.tsx   # Comparison section
│   ├── Contact.tsx       # Contact form and info
│   ├── Footer.tsx        # Footer
│   └── TestimonialFeatured.tsx  # Testimonial cards
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies

```

## 🎨 Customization

### Colors

The site uses a custom color palette defined in `tailwind.config.ts`:
- **Primary**: Green tones (Clover brand color)
- **Accent**: Orange/amber tones for highlights

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations

Framer Motion is used throughout for smooth animations. All animations respect `prefers-reduced-motion` for accessibility.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Self-hosted with Node.js

Build the production version:
```bash
npm run build
npm start
```

## 📝 License

© 2025 Clover Consulting. All rights reserved.

## 🤝 Support

For support or inquiries:
- **Phone**: 845-533-6700 Ext. 101
- **Email**: how@clovercanhelp.com
- **Address**: 67 Route 59, Suite 309, Spring Valley NY 10977

---

Built with ❤️ using Next.js 16

