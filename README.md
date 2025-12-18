# Context Engine

[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](https://opensource.org/licenses/AGPL-3.0)

**Context Engine** is an open-source platform for building context-aware knowledge systems. It provides a graph-based foundation for managing interconnected nodes, workflows, and lifecycles with real-time collaboration support.

## ✨ Features

- **Graph-Based Knowledge** — Store and relate any type of information using nodes and relationships
- **State Machine Lifecycles** — Define custom lifecycles for your content with guards and transitions
- **Human-AI Parity** — Same APIs for human users and AI agents
- **Extensible Architecture** — Plugin-based design for customization

## 🚀 Quick Start

### Prerequisites

- Node.js 24+ (LTS Krypton)
- pnpm 10+
- Docker (for Dgraph and Redis)

### Self-Hosted (Docker Compose)

The fastest way to get started:

```bash
# Clone the repository
git clone https://github.com/context-engine/context-engine.git
cd context-engine

# Start all services
docker-compose up -d

# Access the application
# Web UI: http://localhost:5173
# API: http://localhost:3000
# Dgraph UI: http://localhost:8080
```

### Local Development

```bash
# Install dependencies
pnpm install

# Start infrastructure (Dgraph + Redis)
docker-compose up -d zero alpha redis

# Start the development servers
pnpm dev
```

## 📦 Packages

| Package | Description |
|---------|-------------|
| [@context-engine/core](./packages/core) | Types, schemas, and provider interfaces |
| [@context-engine/dgraph](./packages/dgraph) | Dgraph client and repositories |
| [@context-engine/lifecycle](./packages/lifecycle) | State machine engine |
| [@context-engine/auth](./packages/auth) | Authentication providers |
| [@context-engine/api](./packages/api) | Fastify server factory |
| [@context-engine/events](./packages/events) | Event publishing and handling |
| [@context-engine/config](./packages/config) | Configuration inheritance |
| [@context-engine/context](./packages/context) | Context assembly |
| [@context-engine/ui](./packages/ui) | React UI components |
| [@context-engine/canvas](./packages/canvas) | Visual canvas with Yjs |
| [@context-engine/yjs-server](./packages/yjs-server) | Yjs WebSocket server |

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         apps/web                                │
│                      (React + Vite)                             │
├─────────────────────────────────────────────────────────────────┤
│                        apps/server                              │
│                        (Fastify)                                │
├───────────┬───────────┬───────────┬───────────┬─────────────────┤
│   core    │  dgraph   │ lifecycle │   auth    │     events      │
├───────────┴───────────┴───────────┴───────────┴─────────────────┤
│                          Dgraph                 │     Redis     │
└─────────────────────────────────────────────────┴───────────────┘
```

## 📖 Documentation

- [Contributing](./CONTRIBUTING.md)
- [License](./LICENSE)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

AGPL-3.0 © 2025 Context Engine Contributors

See [LICENSE](./LICENSE) for details.

