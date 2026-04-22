---
description: AI agent customization guide for Bingo Mixer development
---

# AGENTS.md — Bingo Mixer Context Guide

This is a **GitHub Copilot Agent Lab** teaching context engineering and AI-assisted development. Developers work through 5 interactive parts that combine game development, design, and multi-agent patterns.

## 🎮 Project Overview

**Bingo Mixer**: A social bingo game for in-person mixers. Players find people matching 5x5 bingo board questions and get "5 in a row" to win.

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` configuration)
- **Build**: Vite with React plugin
- **Testing**: Vitest with React Testing Library
- **Deployment**: GitHub Pages (automatic on push to `main`)
- **Localization**: English, Português (BR), Español

## 📂 Project Structure

```
src/
├── components/          # UI components (Start, Game, Board, Modal, Square)
├── hooks/useBingoGame   # Core game state management with localStorage
├── utils/bingoLogic.ts  # Pure functions: board generation, win detection
├── data/questions.ts    # Quiz questions pool
├── types/index.ts       # TypeScript domain types
└── test/setup.ts        # Vitest configuration

workshop/               # Learning lab guides (01-setup through 04-multi-agent)
.github/instructions/   # Design & Tailwind v4 customization guides
docs/                   # Published documentation (see `/game/`)
```

## 🔑 Key Architectural Patterns

### Immutable State Management
- `useBingoGame` hook manages game state with localStorage persistence
- Pure functions (`toggleSquare`, `checkBingo`) avoid mutations
- `board` is immutable array of `BingoSquareData` objects

### Game Logic (Pure Functions)
```typescript
generateBoard()           // → BingoSquareData[25] with random questions
toggleSquare(board, id)   // → new board with marked square toggled
checkBingo(board)         // → BingoLine | null (detects winning lines)
getWinningSquareIds()     // → Set<number> for highlighting
```

### Component Hierarchy
- **App** → **StartScreen** | **GameScreen**
- **GameScreen** → **BingoBoard** → **BingoSquare** (grid cells)
- **BingoModal** (separate portal for win state)

### localStorage Persistence
- Versioned schema (`STORAGE_VERSION = 1`)
- Validated deserialization to prevent invalid state
- Saves after every state change

## 📋 Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (HMR enabled) |
| `npm run build` | TypeScript + Vite production build |
| `npm run lint` | ESLint (flat config, React hooks/refresh) |
| `npm run test` | Vitest run mode (watch: false) |

**Pre-commit checklist** (required before shipping):
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `npm run test` passes (41 tests covering bingo logic)

## 🧪 Testing Strategy

- **Unit**: Pure game logic (`bingoLogic.test.ts`) — 41 tests covering board generation, win detection, edge cases
- **Integration**: `useBingoGame` + storage round-trips
- **Manual**: Dogfood through browser UI (see workshop guide)
- **Config**: Vitest with jsdom, globals enabled, setup file for test utilities

**Test location**: `src/utils/bingoLogic.test.ts` (logic) + planned component tests

## 🎨 Frontend & Styling Conventions

- **Tailwind v4**: CSS-first via `@theme` directive (no `tailwind.config.js`)
- **Instructions**: Read [`.github/instructions/tailwind-4.instructions.md`](.github/instructions/tailwind-4.instructions.md) before styling changes
- **Design guide**: [`.github/instructions/frontend-design.instructions.md`](.github/instructions/frontend-design.instructions.md) — avoid generic "AI aesthetics", commit to distinctive themes
- **Responsive**: Mobile-first (320px+), tested on iPhone/tablet/desktop
- **Dark mode**: Prepared for multi-theme support

## 📚 Workshop Learning Path

| Part | Focus | Key Task |
|------|-------|----------|
| [**01-setup**](workshop/01-setup.md) | Context Engineering | Run `/setup` and `/init` agents |
| [**02-design**](workshop/02-design.md) | Design-First Frontend | Full UI redesign in Plan mode |
| [**03-quiz-master**](workshop/03-quiz-master.md) | Custom Quiz Theme | Generate branded quiz set |
| [**04-multi-agent**](workshop/04-multi-agent.md) | Multi-Agent Patterns | Agent hooks, TDD, debug logs |

**Tip**: Work through parts sequentially. Commit working code often. Use Plan mode for major features (iterate 2+ times).

## 🔗 Key Files for Agents

### Understanding Game Logic
- [`src/utils/bingoLogic.ts`](src/utils/bingoLogic.ts) — All bingo mechanics (read first)
- [`src/utils/bingoLogic.test.ts`](src/utils/bingoLogic.test.ts) — Test patterns and edge cases

### Component & Hook References
- [`src/hooks/useBingoGame.ts`](src/hooks/useBingoGame.ts) — State management + localStorage
- [`src/components/GameScreen.tsx`](src/components/GameScreen.tsx) — Game UI layout
- [`src/components/BingoBoard.tsx`](src/components/BingoBoard.tsx) — 5x5 grid rendering
- [`src/types/index.ts`](src/types/index.ts) — TypeScript domain types

### Build & Config
- [`vite.config.ts`](vite.config.ts) — Dynamic `base` path for GitHub Pages, test config
- [`eslint.config.js`](eslint.config.js) — Flat config (ES 2020, React hooks/refresh)
- [`tsconfig.json`](tsconfig.json) — Strict mode, ES modules

### Documentation
- [`README.md`](README.md) — Quick start and deployment info
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — CLA requirements
- [`workshop/GUIDE.md`](workshop/GUIDE.md) — Full learning lab roadmap

## ⚡ Common Agent Tasks

### Add a Feature
1. Read [`src/utils/bingoLogic.ts`](src/utils/bingoLogic.ts) and [`src/hooks/useBingoGame.ts`](src/hooks/useBingoGame.ts)
2. Plan in [`workshop/GUIDE.md`](workshop/GUIDE.md) context
3. Add tests in `*.test.ts` first (TDD)
4. Update components and types
5. Run `npm run test` → `npm run lint` → `npm run build`

### Redesign UI
1. Review [`.github/instructions/frontend-design.instructions.md`](.github/instructions/frontend-design.instructions.md) (avoid "AI slop")
2. Use Plan mode for major redesigns
3. Update Tailwind classes in components
4. Update `.github/instructions/copilot-instructions.md` with new design system
5. Dogfood and iterate

### Debug localStorage Issues
- Check `STORAGE_VERSION` and `validateStoredData()` in [`useBingoGame.ts`](src/hooks/useBingoGame.ts#L33)
- localStorage inspector: `localStorage.getItem('bingo-game-state')`
- SSR guard: All storage calls check `typeof window !== 'undefined'`

### Localization
- Base strings in English (components and [`src/data/questions.ts`](src/data/questions.ts))
- Portuguese/Spanish guides in `workshop/pt_BR/`, `workshop/es/`
- Coordinate with `<!-- l10n-sync: source-file="README.md" -->` comments

## 🛠️ Environment & Prerequisites

- **Node.js**: 22+ (check with `node --version`)
- **Package Manager**: npm (lock file included)
- **Dev Container**: Included (`.devcontainer/devcontainer.json`) for Codespaces
- **VS Code**: v1.113+ recommended (GitHub Copilot features)

**First run**:
```bash
npm install
npm run dev      # Start dev server
npm run test     # Verify tests pass
```

## 📝 When Updating AGENTS.md

Keep this file concise and actionable. Link to detailed docs rather than duplicating. Update after:
- Major architectural changes
- New testing patterns
- Build/deployment changes
- Component boundaries shift
