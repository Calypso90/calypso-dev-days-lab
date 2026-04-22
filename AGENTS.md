---
description: AI agent customization guide for Bingo Mixer development
---

# AGENTS.md — Bingo Mixer Context Guide

## ✅ Pre-Ship Checklist

All changes must pass before committing:
- [ ] `npm run lint` — No ESLint errors
- [ ] `npm run build` — TypeScript + production build succeeds
- [ ] `npm run test` — All 41 tests pass

---

## 🎮 Project Overview

**Bingo Mixer**: A social bingo game for in-person mixers. Players find people matching 5x5 bingo board questions and get "5 in a row" to win. This is a **GitHub Copilot Agent Lab** teaching context engineering through 5 interactive workshop parts.

- **Tech**: React 19 + TypeScript, Tailwind CSS v4, Vite, Vitest
- **Deploy**: GitHub Pages (auto on push to `main`)
- **Localization**: English, Português (BR), Español

## 📂 Structure

```
src/
├── components/          # Start/Game/Board/Modal/Square UI
├── hooks/useBingoGame   # Game state + localStorage
├── utils/bingoLogic.ts  # Pure functions: board, win detection
├── data/questions.ts    # Quiz pool
├── types/               # TypeScript domain types
workshop/                # 5-part learning lab (01-setup through 04-multi-agent)
.github/instructions/    # Design & Tailwind v4 guides
```

## 🔑 Key Patterns

**Immutable State**: `useBingoGame` + localStorage persistence with versioning  
**Pure Logic**: `generateBoard()`, `toggleSquare()`, `checkBingo()` — no side effects  
**Components**: Hierarchy: App → StartScreen|GameScreen → BingoBoard → BingoSquare  
**Testing**: 41 unit tests in `bingoLogic.test.ts` (board generation, win detection, edge cases)

## 📋 Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server (HMR enabled) |
| `npm run build` | TypeScript + production build |
| `npm run lint` | ESLint (flat config) |
| `npm run test` | Vitest (watch: false) |

## 🎨 Frontend

- **Tailwind v4**: CSS-first `@theme` (read [`.github/instructions/tailwind-4.instructions.md`](.github/instructions/tailwind-4.instructions.md))
- **Design**: Read [`.github/instructions/frontend-design.instructions.md`](.github/instructions/frontend-design.instructions.md) — avoid generic "AI aesthetics"
- **Responsive**: Mobile-first (320px+)

## 📚 Workshop Learning Path

| Part | Focus |
|------|-------|
| [**01-setup**](workshop/01-setup.md) | Context Engineering (`/setup`, `/init`) |
| [**02-design**](workshop/02-design.md) | Design-First Frontend (Plan mode redesign) |
| [**03-quiz-master**](workshop/03-quiz-master.md) | Custom Quiz Theme |
| [**04-multi-agent**](workshop/04-multi-agent.md) | Multi-Agent Patterns |

**Tip**: Commit working code often. Use Plan mode for major features (iterate 2+ times).

## 🔗 Key Files

**Game Logic**:
- [`src/utils/bingoLogic.ts`](src/utils/bingoLogic.ts) — All bingo mechanics
- [`src/utils/bingoLogic.test.ts`](src/utils/bingoLogic.test.ts) — Test patterns

**State & Components**:
- [`src/hooks/useBingoGame.ts`](src/hooks/useBingoGame.ts) — State + localStorage
- [`src/components/GameScreen.tsx`](src/components/GameScreen.tsx) — Game UI
- [`src/components/BingoBoard.tsx`](src/components/BingoBoard.tsx) — 5x5 grid
- [`src/types/index.ts`](src/types/index.ts) — Domain types

**Config**:
- [`vite.config.ts`](vite.config.ts) — Vite + test setup + GitHub Pages base
- [`eslint.config.js`](eslint.config.js) — Flat config
- [`tsconfig.json`](tsconfig.json) — Strict mode

**Docs**:
- [`README.md`](README.md) — Quick start
- [`workshop/GUIDE.md`](workshop/GUIDE.md) — Full roadmap

## ⚡ Common Agent Tasks

**Add a Feature**: 
1. Read [`src/utils/bingoLogic.ts`](src/utils/bingoLogic.ts) & [`src/hooks/useBingoGame.ts`](src/hooks/useBingoGame.ts)
2. Plan, then TDD: tests first, then code
3. Update types, components, run checklist

**Redesign UI**: 
1. Review [design guide](.github/instructions/frontend-design.instructions.md)
2. Use Plan mode, iterate 2+ times
3. Update `copilot-instructions.md` with new design system
4. Dogfood and validate

**Debug localStorage**: 
- Check `STORAGE_VERSION` & `validateStoredData()` in [`useBingoGame.ts`](src/hooks/useBingoGame.ts#L33)
- All storage ops check `typeof window !== 'undefined'` (SSR guard)

**Localization**:
- English strings in components & [`questions.ts`](src/data/questions.ts)
- PT/ES guides in `workshop/pt_BR/`, `workshop/es/`

## 🛠️ Environment

- **Node.js**: 22+ 
- **Dev Container**: Included (`.devcontainer/devcontainer.json`)

**First run**:
```bash
npm install
npm run dev      # Start dev server
npm run test     # Verify tests pass
```
