# 🎨 iconest-react

A comprehensive React icon library with 1,100+ beautiful, customizable SVG icons. Built with TypeScript and designed for modern React applications.

[![npm version](https://badge.fury.io/js/iconest-react.svg)](https://badge.fury.io/js/iconest-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📚 Documentation

For complete documentation, icon search, and examples, visit: **[Iconest React Official website](https://www.iconest.dev/)**

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

### Tree-Shaking & Performance

🎯 **Optimized Bundle Size**: Each icon is built as a separate module, ensuring perfect tree-shaking:

- ✅ Import only what you use
- ✅ Individual icons are ~0.5-2KB each  
- ✅ No unused icons in your bundle
- ✅ Works with all modern bundlers (Webpack, Vite, Rollup, etc.)

```jsx
// ✅ This only adds ~1KB to your bundle
import { Heart } from 'iconest-react';

// ❌ Avoid importing everything (though it works, it's not optimal)
import * as Icons from 'iconest-react';
```

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

```jsx
// Colors, sizes, and interactive states
<Heart className="w-6 h-6 text-red-500 hover:text-red-700 transition-colors" />
<Settings className="w-5 h-5 text-gray-600 hover:animate-spin cursor-pointer" />
<Star className="w-8 h-8 text-yellow-400 dark:text-yellow-300" />

// Icon buttons and layouts
<button className="p-3 bg-blue-100 rounded-full hover:bg-blue-200">
  <Plus className="w-5 h-5 text-blue-600" />
</button>
```

## 🛠️ Development

### Building from Source

```bash
git clone https://github.com/iconest/iconest-react
cd iconest-react
npm install
npm run build
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Inspired by [Lucide React](https://lucide.dev) and built with modern React best practices.
