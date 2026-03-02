# Contributing to Fluctux

First off — thank you. Fluctux is open source and every contribution matters, whether it's a typo fix, a bug report, or a major new feature.

This guide covers everything you need to contribute confidently.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting a Pull Request](#submitting-a-pull-request)
- [Commit Message Rules](#commit-message-rules)
  - [Format](#format)
  - [Types](#types)
  - [Scope](#scope-optional)
  - [Subject](#subject)
  - [Body](#body-optional)
  - [Footer](#footer-optional)
  - [Breaking Changes](#breaking-changes)
  - [Examples](#examples)
  - [Quick Reference](#quick-reference)
- [Development Setup](#development-setup)
- [Questions](#questions)

---

## Code of Conduct

By participating in this project, you agree to uphold a respectful and inclusive environment. Be kind, be constructive, and assume good intent.

---

## Getting Started

1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/your-username/fluctux.git
   cd fluctux
   ```
3. **Install dependencies** and set up the project (see [Development Setup](#development-setup))
4. **Create a branch** for your work:
   ```bash
   git checkout -b feat/your-feature-name
   ```

---

## How to Contribute

### Reporting Bugs

Before opening a new issue, search existing issues to avoid duplicates. When filing a bug report, please include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Your environment (OS, Node version, Fluctux version)
- Any relevant logs or screenshots

### Suggesting Features

Open a GitHub Discussion or Issue with the label `enhancement`. Describe:

- The problem you're trying to solve
- Your proposed solution
- Any alternatives you considered

### Submitting a Pull Request

1. Ensure your branch is up to date with `main`
2. Follow the [commit message rules](#commit-message-rules)
3. Write or update tests where applicable
4. Ensure all checks pass (`lint`, `test`, `build`)
5. Open a pull request with a clear title and description
6. Link any related issues using `Closes #123`

Pull requests are reviewed as promptly as possible. Please be patient and responsive to feedback.

---

## Commit Message Rules

Fluctux uses [commitlint](https://commitlint.js.org/) with conventional commits to keep the changelog clean and releases automatable. All commits are validated on push.

### Format

```
<type>[(<scope>)]: <subject>

[body]

[footer]
```

Fields in `[square brackets]` are **optional**.

---

### Types

| Type | Description |
|------|-------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only changes |
| `style` | Formatting, whitespace — no logic changes |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or correcting tests |
| `build` | Build system or external dependency changes |
| `ci` | CI configuration changes |
| `chore` | Other changes that don't modify src or test files |

---

### Scope *(optional)*

Scope narrows the context of a change. It must be **lowercase** and wrapped in parentheses.

For multiple scopes, separate with commas:

```
feat(auth,api): add token refresh logic
```

---

### Subject

- **Required**
- Must be **lowercase**
- Max **70 characters**
- No trailing punctuation
- No emojis
- Must use **imperative tense** — write what the commit *does*, not what you *did*

```
✅  add support for dark mode
❌  added support for dark mode
❌  Adding support for dark mode 🌙
```

---

### Body *(optional — required for breaking changes)*

- Must start with a **blank line** after the subject
- Must use **sentence case** (capitalize first word only)
- Describe *what* changed and *why*, not *how*

```
fix(parser): handle null values in response

Previously the parser threw an uncaught exception when the API
returned null for optional fields. This adds a null guard and
returns an empty object as a safe fallback.
```

---

### Footer *(optional)*

Use the footer for metadata such as issue references or co-authors:

```
Closes #42
Co-authored-by: Jane Doe <jane@example.com>
```

---

### Breaking Changes

When a commit introduces a breaking change, **all of the following are required**:

1. **`!` after the type** (and optional scope):
   ```
   feat!: remove legacy config format
   feat(api)!: rename all endpoint paths
   ```

2. **A body** — describe what changed and why consumers need to act.

3. **Consistency** — if the word `breaking` appears anywhere in the subject, body, or footer, the `!` marker must also be present. Mismatches will fail the linter.

```
feat(config)!: replace flat config with nested schema

The previous flat key structure caused ambiguity with namespaced
options. All config keys are now nested under their respective
module. See the migration guide in docs/migration.md.
```

> ⚠️ Breaking change commits without a body will be rejected.

---

### Examples

**Simple feature:**
```
feat(ui): add collapsible sidebar
```

**Bug fix with body:**
```
fix(auth): prevent token expiry race condition

The access token could expire between the check and the request,
causing a 401 on valid sessions. Added a 30-second buffer to the
expiry check.
```

**Breaking change:**
```
refactor(api)!: remove v1 endpoint support

V1 endpoints have been deprecated since v2.0 and are now removed.
All consumers must migrate to v2 endpoints before upgrading.
Refer to docs/api-migration.md for the full mapping.
```

**Docs update:**
```
docs: fix typo in getting started guide
```

**Chore with scope:**
```
chore(deps): upgrade eslint to v9
```

---

### Quick Reference

| Field | Required | Case | Limit | Notes |
|-------|:--------:|------|-------|-------|
| `type` | ✅ | lowercase | — | Must be from the allowed list |
| `scope` | ⬜ optional | lowercase | — | Comma-separated for multiple |
| `subject` | ✅ | lowercase | 70 chars | Imperative tense, no emojis |
| `body` | ⬜ optional* | Sentence case | — | *Required for breaking changes |
| `footer` | ⬜ optional | — | — | References, co-authors |
| `!` marker | ⬜ optional* | — | — | *Required for breaking changes |

---

## Development Setup

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run all tests
npm test

# Lint your code
npm run lint

```
> [!NOTE]
> Fluctux is currently under active development. The development setup guide is a work in progress and will be updated as the project evolves.

---

## Questions

Not sure where to start? Open a [GitHub Discussion](https://github.com/teamfluctux/fluctux/discussions). All questions are welcome.

---

*Fluctux is built by contributors like you. Thank you for being part of it.*