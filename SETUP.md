# Setup Instructions

## Project Structure

This project follows the shadcn/ui structure:
- Components are located in `/components/ui` (shadcn/ui standard)
- Block components (like hero sections) are in `/components/blocks`
- Utilities are in `/lib/utils.ts`

## Why `/components/ui` is Important

The `/components/ui` folder is the standard location for shadcn/ui components. This structure:
- Follows shadcn/ui conventions
- Makes it easy to add more components via `npx shadcn-ui@latest add [component]`
- Keeps UI primitives separate from composed components
- Ensures proper TypeScript path resolution with `@/components/ui`

## Installation Steps

1. **Install Dependencies**

   Run the following command in the project root:
   ```bash
   npm install
   ```

   This will install:
   - Next.js, React, TypeScript
   - Tailwind CSS and PostCSS
   - shadcn/ui dependencies (Radix UI, class-variance-authority, etc.)
   - Framer Motion for animations
   - Lucide React for icons
   - clsx and tailwind-merge for utility functions

2. **Verify Installation**

   Check that all dependencies are installed:
   ```bash
   npm list --depth=0
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the hero section.

## Project Configuration

### TypeScript
- Configured in `tsconfig.json`
- Path aliases: `@/*` maps to project root

### Tailwind CSS
- Configured in `tailwind.config.ts`
- Uses CSS variables for theming
- Supports dark mode via class strategy

### shadcn/ui
- Configuration in `components.json`
- Components use the `@/components/ui` alias
- Utilities use the `@/lib/utils` alias

## Component Usage

The hero section is already integrated in `app/page.tsx`:

```tsx
import { HeroSection } from "@/components/blocks/hero-section-1"

export default function Home() {
  return <HeroSection />
}
```

## Adding More shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

For example:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

Components will be automatically added to `/components/ui`.

## Troubleshooting

### If npm install fails:
1. Try clearing npm cache: `npm cache clean --force`
2. Delete `node_modules` and `package-lock.json`, then reinstall
3. Check Node.js version (should be 18+)

### If TypeScript errors occur:
1. Run `npm install` to ensure all types are installed
2. Restart your IDE/editor
3. Check that `tsconfig.json` paths are correct

### If Tailwind styles don't apply:
1. Ensure `globals.css` is imported in `app/layout.tsx`
2. Check that `tailwind.config.ts` includes all content paths
3. Restart the dev server
