# Contributing to Chidori

Thank you for your interest in contributing to Chidori! This guide will help you get started with contributing to the project.

## 🤝 Welcome

Chidori is a modern documentation tool built on Rasengan.js. We welcome contributions of all kinds, including:

- 🐛 Bug reports and fixes
- ✨ New features and improvements
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Test coverage improvements

## 🚀 Getting Started

### Prerequisites

Before you start contributing, make sure you have:

- **Node.js** 20.18.0 or higher
- **pnpm** 8.10.0 or higher
- **Git** for version control
- **Code Editor** (VS Code recommended)

### Development Setup

1. **Fork the Repository**
   ```bash
   # Fork the repository on GitHub
   # Clone your fork locally
   git clone https://github.com/your-username/chidori.git
   cd chidori
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Start Development**
   ```bash
   pnpm dev
   ```
   
   This will start both the main application and documentation site in development mode.

4. **Verify Setup**
   - Main app: http://localhost:5320
   - Documentation: http://localhost:3000 (docs app)

## 📁 Project Structure

Understanding the project structure is essential for effective contributions:

```
chidori-app/
├── apps/
│   ├── chidori/              # Main application
│   │   ├── src/
│   │   │   ├── app/         # App routes and pages
│   │   │   ├── components/  # Reusable components
│   │   │   └── styles/      # Global styles
│   │   └── package.json
│   └── docs/                # Documentation site
│       ├── src/
│       │   ├── app/         # Documentation routes
│       │   ├── components/  # Documentation components
│       │   └── styles/      # Documentation styles
│       └── package.json
├── .husky/                  # Git hooks
├── package.json             # Root package configuration
├── pnpm-workspace.yaml      # PNPM workspace config
└── README.md
```

## 🛠️ Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# For bug fixes
git checkout -b fix/issue-description

# For documentation
git checkout -b docs/documentation-update
```

### 2. Make Your Changes

Follow these guidelines while making changes:

- **Code Style**: The project uses Prettier for consistent formatting
- **TypeScript**: Ensure all code is properly typed
- **Components**: Follow existing component patterns
- **Documentation**: Update relevant documentation

### 3. Test Your Changes

Before submitting, ensure:

```bash
# Run linting
pnpm lint

# Check formatting
pnpm format:check

# Build the project
pnpm build

# Start development to test manually
pnpm dev
```

### 4. Commit Your Changes

Follow conventional commit messages:

```bash
# Feature
git commit -m "feat: add new pagination component"

# Bug fix
git commit -m "fix: resolve dark mode toggle issue"

# Documentation
git commit -m "docs: update installation guide"

# Style changes
git commit -m "style: improve component spacing"

# Refactoring
git commit -m "refactor: simplify component structure"
```

### 5. Submit a Pull Request

1. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a Pull Request on GitHub with:
   - Clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - Explain your approach

## 📝 Types of Contributions

### 🐛 Bug Reports

When reporting bugs, please include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected vs actual behavior**
- **Environment details** (OS, browser, Node.js version)
- **Screenshots** if applicable

### ✨ Feature Requests

For new features:

- **Use case** and motivation
- **Detailed description** of the feature
- **Proposed implementation** (if you have ideas)
- **Alternatives considered**

### 📚 Documentation

Documentation contributions are highly valued:

- **Fix typos** and grammatical errors
- **Improve explanations** and examples
- **Add missing documentation**
- **Update outdated information**

### 🎨 UI/UX Improvements

For design-related changes:

- **Maintain consistency** with existing design system
- **Ensure responsive design**
- **Consider accessibility**
- **Test across different devices**

## 🧩 Component Guidelines

### Creating New Components

When adding new components:

1. **Location**: Place in appropriate `components/` directory
2. **Naming**: Use PascalCase for component names
3. **Props**: Define TypeScript interfaces
4. **Styling**: Use Tailwind CSS classes
5. **Documentation**: Include JSDoc comments
6. **Examples**: Provide usage examples

Example component structure:

```tsx
// src/components/common/molecules/MyComponent.tsx
import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

/**
 * MyComponent - A brief description of what this component does
 */
export function MyComponent({ title, children }: Props) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
```

### MDX Components

For documentation components:

1. **Register** in `apps/docs/mdx-components.jsx`
2. **Export** from the components file
3. **Document** usage in appropriate `.page.mdx` file

## 🎨 Styling Guidelines

### Tailwind CSS

- **Use utility classes** for styling
- **Follow existing patterns** for consistency
- **Maintain responsive design**
- **Consider dark mode** compatibility

### CSS Variables

When adding new CSS variables:

```css
/* apps/docs/src/styles/index.css */
:root {
  --my-variable: oklch(0.5 0.1 200);
}

.dark {
  --my-variable: oklch(0.7 0.1 200);
}
```

## 📋 Code Quality

### TypeScript

- **Enable strict mode** in TypeScript config
- **Provide proper types** for all props and functions
- **Avoid `any` type** when possible
- **Use interfaces** for object shapes

### React Best Practices

- **Use functional components** with hooks
- **Follow hooks rules** (only call at top level)
- **Use proper dependency arrays** in useEffect
- **Implement error boundaries** when needed

### Performance

- **Optimize re-renders** with React.memo, useMemo, useCallback
- **Lazy load** heavy components
- **Optimize images** and assets
- **Monitor bundle size**

## 🧪 Testing

While the project doesn't have extensive test coverage yet, contributions that add tests are welcome:

- **Unit tests** for utility functions
- **Component tests** for UI components
- **Integration tests** for user flows
- **Accessibility tests** for a11y compliance

## 📖 Documentation Standards

### MDX Files

When writing documentation:

- **Use proper headings** hierarchy
- **Include code examples** with syntax highlighting
- **Add relevant links** to other documentation
- **Use Note components** for important information

### Code Examples

```mdx
```tsx title="Component.tsx" showLineNumbers
import React from 'react';

export function Example() {
  return <div>Hello World</div>;
}
```
```

## 🔄 Review Process

### What Happens After You Submit

1. **Automated checks** run (linting, formatting, build)
2. **Code review** by maintainers
3. **Feedback and suggestions** for improvements
4. **Testing** by the community
5. **Merge** once approved

### Review Guidelines

- **Be constructive** in feedback
- **Ask questions** if something is unclear
- **Suggest improvements** respectfully
- **Consider the bigger picture** of the project

## 🚀 Release Process

Releases are managed by maintainers:

1. **Version bump** following semantic versioning
2. **Changelog update** with all changes
3. **Git tag** creation
4. **GitHub release** publication

## 🤝 Community

### Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For general questions and ideas
- **Documentation**: For usage guides and examples

### Code of Conduct

We are committed to providing a welcoming and inclusive environment:

- **Be respectful** and considerate
- **Use inclusive language**
- **Focus on constructive feedback**
- **Help others learn and grow**

## 🏆 Recognition

Contributors are recognized for their valuable input:

- **Contributor list** in documentation
- **Release notes** mention significant contributions
- **Community appreciation** for ongoing support

## 📞 Contact

Have questions about contributing?

- **GitHub Issues**: For specific questions
- **Discussions**: For general conversations
- **Maintainer**: Reach out directly for sensitive matters

---

Thank you for contributing to Chidori! Your contributions help make this project better for everyone. 🎉

**Built by [Dilane Kombou](https://x.com/dilanekombou) with ❤️ using [Rasengan.js](https://www.rasengan.dev)**
