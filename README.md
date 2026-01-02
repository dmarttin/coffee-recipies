# ☕ Aeropress Recipe Guide

A mobile-optimized web application for guided Aeropress coffee brewing with step-by-step timers and visual instructions.

## 🎯 Project Overview

This app provides an interactive guide for 5 different Aeropress brewing methods, featuring real-time countdown timers, step-by-step instructions, and a clean mobile-first interface built with shadcn/ui components.

## ✨ Features

- **5 Curated Recipes**: From classic inverted method to cold brew concentrate
- **Step-by-Step Timers**: Visual countdown for each brewing step
- **Mobile-First Design**: Optimized for one-handed use while brewing
- **Progressive Instructions**: Clear visual hierarchy for each step
- **Recipe Details**: Coffee weight, water temperature, brew time, and method type
- **Timer Controls**: Start, pause, and reset functionality for each step

## 🥤 Included Recipes

1. **Inverted Method Classic** - Balanced and full-bodied (2:30 total)
2. **James Hoffmann Method** - Clean and sweet (2:30 total)
3. **Cold Brew Concentrate** - Smooth overnight brew (24h)
4. **Espresso-Style** - Rich and concentrated (1:00 total)
5. **Bypass Method** - Tea-like and delicate (1:30 total)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd aeropress-guide

# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 shadcn/ui Components to Use

### Core Components
- **Card** - Recipe containers and step cards
- **Button** - Timer controls (start, pause, reset)
- **Badge** - Recipe tags (method type, difficulty, time)
- **Tabs** - Switch between different recipes
- **Progress** - Visual timer progress bars
- **Separator** - Divide recipe sections
- **Alert** - Important brewing tips and warnings

### Advanced Components
- **Accordion** - Expandable recipe details and tips
- **Dialog** - Recipe information modals
- **ScrollArea** - Smooth scrolling for long recipe lists
- **Toast** - Timer completion notifications

## 📱 Project Structure

```
aeropress-guide/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx             # Home page with recipe list
│   └── recipe/
│       └── [id]/
│           └── page.tsx     # Individual recipe page with timer
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── recipe-card.tsx      # Recipe preview card
│   ├── recipe-detail.tsx    # Full recipe view
│   ├── brewing-timer.tsx    # Step-by-step timer component
│   └── timer-controls.tsx   # Play/pause/reset controls
├── lib/
│   ├── recipes.ts           # Recipe data and types
│   └── utils.ts             # Utility functions
└── public/
    └── images/              # Recipe images and icons
```

## 🔧 Component Architecture

### Recipe Data Structure
```typescript
interface RecipeStep {
  id: string;
  title: string;
  description: string;
  duration: number; // in seconds
  action: 'pour' | 'wait' | 'stir' | 'press' | 'flip';
}

interface Recipe {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'advanced';
  totalTime: number; // in seconds
  coffeeAmount: number; // in grams
  waterAmount: number; // in ml
  waterTemp: number; // in celsius
  method: 'standard' | 'inverted';
  steps: RecipeStep[];
  tips?: string[];
}
```

### Timer Component Features
- Auto-progress to next step
- Audio/vibration notification on step completion
- Visual progress indicator
- Current step highlight
- Elapsed/remaining time display

## 🎯 Implementation Roadmap

### Phase 1: Setup & Foundation
- [x] Define project requirements
- [ ] Initialize Next.js project with TypeScript
- [ ] Install and configure shadcn/ui
- [ ] Set up Tailwind CSS configuration
- [ ] Create base layout and routing structure

### Phase 2: Recipe Data & Components
- [ ] Define recipe data structure and types
- [ ] Create recipes.ts with all 5 recipes and steps
- [ ] Build RecipeCard component for list view
- [ ] Build RecipeDetail component for full view
- [ ] Implement recipe list page

### Phase 3: Timer Functionality
- [ ] Create BrewingTimer component with countdown logic
- [ ] Implement TimerControls (play, pause, reset)
- [ ] Add step auto-progression
- [ ] Create visual progress indicators
- [ ] Add step completion notifications

### Phase 4: Mobile Optimization
- [ ] Optimize touch targets for mobile
- [ ] Add swipe gestures for recipe navigation
- [ ] Implement responsive typography
- [ ] Test on various mobile devices
- [ ] Add PWA capabilities (optional)

### Phase 5: Polish & Deploy
- [ ] Add recipe images/illustrations
- [ ] Implement dark mode toggle
- [ ] Add brewing tips and FAQs
- [ ] Performance optimization
- [ ] Deploy to Vercel

## 🎨 Design Principles

- **Mobile-First**: Designed for one-handed operation while brewing
- **Clear Hierarchy**: Important information (time, temp) stands out
- **Minimal Interaction**: Reduce steps to start brewing
- **Visual Feedback**: Clear indication of active steps and progress
- **Accessible**: High contrast, readable fonts, touch-friendly targets

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Aeropress Brewing Guide](https://aeropress.com/pages/brewing-guide)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new recipes
- Improve timer UX
- Enhance mobile experience
- Fix bugs or typos

## 📄 License

MIT

---

**Built with ☕ for coffee lovers**
