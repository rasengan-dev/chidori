# Chidori

A modern, opinionated tool built on top of [Rasengan.js](https://www.rasengan.dev) for building beautiful, performant documentation websites with a focus on developer experience and best practices.

## ✨ Features

- **🚀 Built on Rasengan.js** - Leverages the power and simplicity of Rasengan.js
- **📝 MDX Support** - First-class support for MDX with custom components
- **🎨 Beautiful UI** - Pre-built components with Shadcn UI and Tailwind CSS
- **🌙 Dark Mode** - Built-in dark theme support with smooth transitions
- **📱 Responsive Design** - Mobile-first approach with responsive layouts
- **🔍 Search Integration** - Algolia search for documentation
- **🎯 TypeScript** - Full TypeScript support out of the box
- **⚡ Performance** - Optimized for speed and accessibility

## 📁 Project Structure

```
chidori/
├── apps/
│   ├── chidori/          # Main application
│   └── docs/             # Documentation site
├── package.json          # Root package configuration
├── pnpm-workspace.yaml   # PNPM workspace configuration
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20.18.0 or higher
- pnpm 8.10.0 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chidori-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development:
```bash
pnpm dev
```

This will start both the main application and documentation site in development mode.

## 📦 Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm start` - Start all applications in production mode
- `pnpm lint` - Run linting across all packages
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## 🏗️ Applications

### Main Application (`apps/chidori`)

The primary Chidori application showcasing the framework's capabilities.

**Features:**
- Modern React components
- Responsive design
- Dark mode support
- TypeScript integration
- Performance optimizations

### Documentation (`apps/docs`)

Comprehensive documentation site built with MDX and custom components.

**Features:**
- MDX-based documentation
- Custom components (Note, Pagination, etc.)
- Search functionality
- Responsive design
- Dark mode support
- Table of contents
- Syntax highlighting

## 🎨 Styling System

Chidori uses a comprehensive styling system built on:

- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible component library
- **CSS Variables** - Theme-aware color system using OKLCH color space
- **Dark Mode** - Automatic theme switching with system preference detection

### Color System

The color system uses OKLCH for better color consistency and includes:
- Core colors (background, foreground, primary, secondary)
- Status colors (destructive, accent)
- Semantic colors (card, popover, border, input)
- Specialized colors (charts, sidebar, code blocks)

## 🌐 Development

### Workspace Management

This project uses PNPM workspaces for monorepo management. The workspace configuration is defined in `pnpm-workspace.yaml`:

```yaml
packages:
  - 'apps/*'
```

### Code Quality

- **Prettier** - Code formatting with consistent style
- **Husky** - Git hooks for pre-commit checks
- **TypeScript** - Type safety and better developer experience

## 📚 Documentation

The documentation is built with MDX and includes:

- **Core Concepts** - Understanding the framework fundamentals
- **Components** - Detailed component documentation
- **Styling** - Comprehensive styling guide
- **Configuration** - Setup and customization
- **Best Practices** - Development guidelines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🔗 Links

- [Rasengan.js Documentation](https://www.rasengan.dev)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

---

**Built by [Dilane Kombou](https://https://x.com/dilanekombou) with ❤️ using [Rasengan.js](https://www.rasengan.dev)**
