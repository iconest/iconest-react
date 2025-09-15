# 🎨 iconest-react

A comprehensive React icon library with 1,100+ beautiful, customizable SVG icons. Built with TypeScript and designed for modern React applications.

[![npm version](https://badge.fury.io/js/iconest-react.svg)](https://badge.fury.io/js/iconest-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎯 **1,100+ Icons** - Comprehensive collection of modern, beautiful icons
- 🌳 **Tree Shakable** - Only bundle the icons you use
- 🔧 **TypeScript Support** - Full type definitions included
- 🎨 **Customizable** - Easy to style with props like size, color, stroke width
- ⚡ **Lightweight** - Optimized SVG icons with minimal bundle impact
- 🔄 **Consistent API** - Lucide React-inspired interface
- ♿ **Accessible** - Built with accessibility in mind

## 📦 Installation

```bash
npm install iconest-react
# or
yarn add iconest-react
# or
pnpm add iconest-react
```

## 🚀 Quick Start

```jsx
import { Heart, Star, Settings, User } from 'iconest-react';

function App() {
  return (
    <div>
      <Heart size={24} color="red" />
      <Star size={32} color="gold" />
      <Settings strokeWidth={1.5} />
      <User className="my-icon" />
    </div>
  );
}
```

## 📖 Usage

### Basic Usage

Import individual icons to keep your bundle size minimal:

```jsx
import { Activity, AlertCircle, Archive } from 'iconest-react';

function MyComponent() {
  return (
    <div>
      <Activity />
      <AlertCircle size={20} />
      <Archive color="blue" />
    </div>
  );
}
```

### Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size (width and height) |
| `color` | `string` | `"currentColor"` | Icon color |
| `strokeWidth` | `number \| string` | `2` | Stroke width for outlined icons |
| `absoluteStrokeWidth` | `boolean` | `false` | Whether stroke width scales with size |
| `className` | `string` | - | CSS class name |

Plus any standard SVG attributes (`onClick`, `onMouseOver`, etc.).

### Examples

```jsx
// Different sizes
<Heart size={16} />
<Heart size={24} />
<Heart size={32} />

// Custom colors
<Star color="gold" />
<Star color="#ff6b6b" />
<Star color="rgb(59, 130, 246)" />

// Custom stroke width
<Settings strokeWidth={1} />
<Settings strokeWidth={2.5} />

// With CSS classes
<User className="text-blue-500 hover:text-blue-700" />

// Event handlers
<Settings onClick={() => console.log('Settings clicked!')} />
```

### TypeScript

The library is built with TypeScript and provides full type definitions:

```tsx
import { Icon, IconProps } from 'iconest-react';
import { Heart } from 'iconest-react';

// Icon component type
const MyIcon: Icon = Heart;

// Props interface
const iconProps: IconProps = {
  size: 24,
  color: 'red',
  strokeWidth: 2
};

function TypedComponent({ icon: Icon, ...props }: { icon: Icon } & IconProps) {
  return <Icon {...props} />;
}
```

## 📂 Available Icons

The library includes 1,100+ icons across various categories:

### Popular Icons
- **UI & Navigation**: `ArrowLeft`, `ArrowRight`, `ChevronDown`, `Menu`, `X`, `Settings`
- **Actions**: `Edit`, `Trash`, `Save`, `Download`, `Upload`, `Share`
- **Communication**: `Mail`, `Phone`, `MessageCircle`, `Send`
- **Media**: `Play`, `Pause`, `Volume`, `Camera`, `Image`
- **Business**: `Building`, `Briefcase`, `Calendar`, `Clock`
- **Social**: `Heart`, `Star`, `ThumbsUp`, `Share`

### Icon Categories
- Arrows & Navigation (50+ icons)
- Interface & UI (200+ icons)  
- Communication (80+ icons)
- Media & Entertainment (100+ icons)
- Business & Finance (150+ icons)
- Technology & Development (120+ icons)
- Weather & Nature (60+ icons)
- Transportation (40+ icons)
- Health & Medical (30+ icons)
- Security & Privacy (50+ icons)
- And many more...

## 🎨 Tailwind CSS Integration

iconest-react works seamlessly with Tailwind CSS! All icons accept the `className` prop and use `currentColor` by default, making them perfect for Tailwind's utility classes.

### Color Classes

```jsx
// Text colors
<Heart className="text-red-500" />
<Star className="text-yellow-400" />
<Settings className="text-gray-600" />

// Hover states
<User className="text-blue-500 hover:text-blue-700" />
<Mail className="text-slate-400 hover:text-slate-600" />

// Dark mode support
<Sun className="text-yellow-500 dark:text-yellow-300" />
<Moon className="text-indigo-600 dark:text-indigo-400" />
```

### Size Classes

```jsx
// Fixed sizes
<Heart className="w-4 h-4" />      {/* 16px */}
<Heart className="w-5 h-5" />      {/* 20px */}
<Heart className="w-6 h-6" />      {/* 24px */}
<Heart className="w-8 h-8" />      {/* 32px */}
<Heart className="w-12 h-12" />    {/* 48px */}

// Responsive sizing
<Settings className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />

// Or use the size prop with Tailwind spacing
<User size="1.5rem" className="text-blue-500" />
```

### Interactive States

```jsx
// Hover effects
<Trash className="text-gray-400 hover:text-red-500 transition-colors" />
<Edit className="text-slate-600 hover:text-blue-600 cursor-pointer" />

// Active states
<Bookmark className="text-gray-400 hover:text-yellow-500 active:text-yellow-600" />

// Focus states (for buttons)
<Settings className="text-gray-600 focus:text-blue-600 focus:outline-none" />
```

### Background and Padding

```jsx
// Icon buttons with backgrounds
<div className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200">
  <Plus className="w-5 h-5 text-blue-600" />
</div>

// Circular icon buttons
<button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
  <Heart className="w-6 h-6 text-red-500" />
</button>

// Icon with badge/notification dot
<div className="relative">
  <Bell className="w-6 h-6 text-gray-600" />
  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
</div>
```

### Animation Classes

```jsx
// Rotation animations
<Settings className="w-5 h-5 text-gray-600 animate-spin" />
<RefreshCw className="w-5 h-5 text-blue-500 hover:animate-spin" />

// Pulse animation
<Heart className="w-6 h-6 text-red-500 animate-pulse" />

// Bounce animation
<ArrowDown className="w-4 h-4 text-gray-500 animate-bounce" />

// Custom transitions
<Star className="w-6 h-6 text-yellow-400 transition-transform hover:scale-110" />
```

### Layout Integration

```jsx
// Flexbox layouts
<div className="flex items-center space-x-2">
  <User className="w-5 h-5 text-gray-600" />
  <span className="text-gray-900">Profile</span>
</div>

// Navigation items
<nav className="space-y-1">
  <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
    <Home className="w-5 h-5 mr-3" />
    Dashboard
  </a>
  <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
    <Settings className="w-5 h-5 mr-3" />
    Settings
  </a>
</nav>

// Grid layouts
<div className="grid grid-cols-3 gap-4">
  <div className="flex flex-col items-center p-4">
    <Mail className="w-8 h-8 text-blue-500 mb-2" />
    <span className="text-sm">Messages</span>
  </div>
  <div className="flex flex-col items-center p-4">
    <Calendar className="w-8 h-8 text-green-500 mb-2" />
    <span className="text-sm">Calendar</span>
  </div>
  <div className="flex flex-col items-center p-4">
    <Settings className="w-8 h-8 text-gray-500 mb-2" />
    <span className="text-sm">Settings</span>
  </div>
</div>
```

### Combining Props with Tailwind

```jsx
// Mix size prop with Tailwind classes
<Heart size={20} className="text-red-500 hover:text-red-700" />

// Override default color with Tailwind
<Star color="currentColor" className="text-yellow-400" />

// Responsive design
<Menu className="w-5 h-5 text-gray-600 md:w-6 md:h-6 lg:hidden" />
```

### Dark Mode Support

```jsx
// Dark mode variants
<Sun className="text-yellow-500 dark:text-yellow-300" />
<Moon className="text-slate-600 dark:text-slate-300" />

// Theme toggle button
<button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
  <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200 block dark:hidden" />
  <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200 hidden dark:block" />
</button>
```

## 🛠️ Development

### Building from Source

```bash
git clone https://github.com/your-org/iconest-react
cd iconest-react
npm install
npm run build
```

### Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Inspired by [Lucide React](https://lucide.dev) and built with modern React best practices.
