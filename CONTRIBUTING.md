# Contributing to Context Engine

Thank you for your interest in contributing to Context Engine! This document provides guidelines and information about contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Testing](#testing)

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior through GitHub Issues.

## Getting Started

### Prerequisites

- Node.js 24+ (LTS Krypton)
- pnpm 10+
- Docker (for running Dgraph and Redis locally)

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/context-engine/context-engine.git
   cd context-engine
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Start infrastructure**:
   ```bash
   docker-compose up -d zero alpha redis
   ```

5. **Run tests**:
   ```bash
   pnpm test
   ```

6. **Start development**:
   ```bash
   pnpm dev
   ```

## Development Workflow

### Branch Naming

- `feature/description` — New features
- `fix/description` — Bug fixes
- `docs/description` — Documentation changes
- `refactor/description` — Code refactoring
- `chore/description` — Maintenance tasks

### Making Changes

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/my-feature
   ```

2. Make your changes

3. Run tests and linting:
   ```bash
   pnpm test
   pnpm lint
   pnpm typecheck
   ```

4. Add a changeset (if your change affects published packages):
   ```bash
   pnpm changeset
   ```

5. Commit your changes (see [Commit Messages](#commit-messages))

6. Push and create a Pull Request

## Pull Request Process

### Before Submitting

- [ ] All tests pass (`pnpm test`)
- [ ] Linting passes (`pnpm lint`)
- [ ] Type checking passes (`pnpm typecheck`)
- [ ] Changeset added (if applicable)
- [ ] Documentation updated (if applicable)

### PR Title Format

Follow conventional commits format:

- `feat: add new feature`
- `fix: resolve issue with X`
- `docs: update README`
- `refactor: simplify Y logic`
- `chore: update dependencies`

### Review Process

1. Automated CI checks must pass
2. At least one maintainer approval required
3. All review comments must be addressed
4. Branch must be up to date with `main`

## Coding Standards

### TypeScript

- Use strict TypeScript (`strict: true`)
- Prefer `type` imports for type-only imports
- Use explicit return types for public APIs
- Avoid `any` — use `unknown` if type is truly unknown

```typescript
// ✅ Good
import type { Node } from '@context-engine/core';

export function processNode(node: Node): ProcessedNode {
  // ...
}

// ❌ Bad
import { Node } from '@context-engine/core';

export function processNode(node: any) {
  // ...
}
```

### File Organization

- One export per file for large modules
- Use `index.ts` for re-exports
- Keep files focused and under 300 lines when possible

### Error Handling

- Use custom error classes
- Include helpful error messages
- Don't swallow errors silently

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat` — New feature
- `fix` — Bug fix
- `docs` — Documentation only
- `style` — Formatting, no code change
- `refactor` — Code change that neither fixes bug nor adds feature
- `perf` — Performance improvement
- `test` — Adding or updating tests
- `chore` — Build process or auxiliary tools

### Examples

```
feat(lifecycle): add support for conditional transitions

fix(dgraph): handle connection timeout gracefully

docs: update API reference for NodeRepository
```

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for a specific package
pnpm --filter @context-engine/core test

# Run tests in watch mode
pnpm test:watch

# Run with coverage
pnpm test:coverage
```

### Writing Tests

- Place tests next to the code they test (`foo.ts` → `foo.test.ts`)
- Or in a `tests/` directory
- Use descriptive test names
- Test edge cases and error conditions

```typescript
describe('NodeRepository', () => {
  describe('create', () => {
    it('should create a node with a generated ID', async () => {
      // ...
    });

    it('should throw if required fields are missing', async () => {
      // ...
    });
  });
});
```

## Questions?

- Open a [Discussion](https://github.com/context-engine/context-engine/discussions) for questions
- Check existing [Issues](https://github.com/YOUR_ORG/context-engine/issues) for known problems

Thank you for contributing! 🎉

