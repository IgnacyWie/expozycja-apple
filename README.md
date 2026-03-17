# Exponata AI

A modern Next.js website with a beautiful hero section built with shadcn/ui, Tailwind CSS, and TypeScript.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🧩 shadcn/ui components
- 📱 Fully responsive design
- 🌙 Dark mode support
- ✨ Smooth animations with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
websitemantai/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page with hero section
├── components/
│   ├── blocks/
│   │   └── hero-section-1.tsx  # Hero section component
│   └── ui/
│       ├── button.tsx           # Button component
│       └── animated-group.tsx   # Animation wrapper component
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── package.json
```

## Components

### Hero Section

The hero section includes:

- Animated header with navigation
- Hero content with call-to-action buttons
- Customer logos section
- Responsive design for all screen sizes

## Dependencies

- `next` - React framework
- `react` & `react-dom` - React library
- `tailwindcss` - Utility-first CSS framework
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `@radix-ui/react-slot` - Radix UI primitives
- `class-variance-authority` - Component variant management

## Build

```bash
npm run build
```

## License

MIT
