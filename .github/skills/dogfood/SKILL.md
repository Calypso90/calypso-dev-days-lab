---
name: dogfood
description: 'Test social apps and games through critical user testing. Use when evaluating fun factor, engagement, UX friction, and providing actionable feedback. Focus on what kills fun, not just technical correctness.'
argument-hint: '[app name or focus area]'
user-invocable: true
---

# Critical Dogfooding for Games & Social Apps

Systematically play through an app or game as a critical user, identifying what works, what kills fun, and actionable priorities for improvement.

## When to Use

- **Early/mid development**: Evaluate fun factor and engagement before shipping
- **Design reviews**: Get critical feedback on UX, animation, visual polish
- **Game mechanics**: Test if gameplay is engaging and social mechanics work
- **User experience**: Identify friction points and missing feedback loops
- **Post-feature**: Validate that new features enhance or detract from fun

## Procedure

### 1. App Context
Start by understanding:
- **Core mechanic**: What's the main gameplay loop or user action?
- **Target audience**: Who plays this and in what context?
- **Success criteria**: What makes this game/app "fun"?
- **Current state**: Alpha prototype, beta polish, or shipping candidate?

### 2. Play Through (User Perspective)
- **Start screen**: Does the onboarding explain purpose and how to play?
- **Core loop**: Perform 3-5 cycles of the main action (play a game, complete a task)
- **Win/loss**: Experience success and failure states
- **Edge cases**: Try unusual actions, rapid taps, leave and return
- **Mobile**: Test on actual device or viewport if possible

### 3. What Works Well
Identify 3-5 strengths:
- **Design decisions** that feel right
- **Mechanics** that are intuitive or clever
- **Polish moments** (animations, sounds, feedback)
- **Engagement hooks** (progression, rewards, social elements)

### 4. Critical Issues (Kills Fun)
Flag 2-4 deal-breakers:
- **No feedback**: Taps that don't feel responsive
- **Unclear purpose**: User doesn't understand why they're doing this
- **Visual flatness**: Looks like a prototype, not a finished product
- **Missing celebration**: No energy around winning
- **Friction**: Confusing flows or unclear next steps

### 5. UX Friction Audit
Create a table of pain points:

| Issue | Impact | Solution |
|-------|--------|----------|
| *e.g., No sound effects* | Feels hollow | Add beep on tap, chime on win |
| *...* | | |

### 6. Fun Factor Scorecard
Rate across dimensions (1-10):

| Aspect | Rating | Notes |
|--------|--------|-------|
| Core Mechanic | ? | Clever/intuitive or tedious? |
| Aesthetics | ? | Polished or placeholder? |
| Polish (animations/feedback) | ? | Responsive or feels dead? |
| Engagement | ? | Hooks to keep playing? |
| **Overall Fun** | **?** | Would you play this again? |

### 7. Prioritized Roadmap
Organize fixes into:
- **Quick Wins** (high impact, low effort): What would boost fun 20-50%?
- **Strategic Fixes** (high impact, medium effort): What's needed for 1.0?
- **Nice-to-haves** (low impact): Polish that can wait

### 8. Final Verdict
Summarize:
- **One-liner**: Is this fun, and for whom?
- **Current state**: Prototype / Beta / Shippable?
- **Next priority**: What one thing would most improve the experience?
- **Recommendation**: Actionable next steps (e.g., "Spend 2 hours on animations and pick a bold color theme")

## Example Prompts

```
/dogfood Bingo Mixer — focus on social fun and engagement

/dogfood My game — is this engaging enough for mobile?

/dogfood Player onboarding — does it explain the game clearly?
```

## Tips

- **Play multiple times**: First playthrough vs third reveals different issues
- **Ignore tech**: Focus on *feel*, not code quality
- **Be honest**: Rate fun as you'd rate it to a friend, not kindly
- **Actionable**: Every criticism should have a "quick fix" or "strategic fix"
- **Compare**: If you've played similar games, reference what worked there

## Related

- See [AGENTS.md](../../AGENTS.md) for Bingo Mixer's workshop structure
- Review [`.github/instructions/frontend-design.instructions.md`](.github/instructions/frontend-design.instructions.md) for design-first thinking
