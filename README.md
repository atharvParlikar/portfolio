# Portfolio

Minimal portfolio. No bullshit.

## Setup

```bash
bun install
bun run dev
```

## Edit

- **Info**: Edit `src/pages/index.astro` - your name, bio, links
- **Projects**: Edit `src/data/projects.ts` - add/remove projects
- **Blog**: Add markdown files to `src/content/blog/` with this format:

```markdown
---
title: Your Post Title
author: Your Name
pubDatetime: 2025-01-15
postSlug: your-post-slug
featured: false
draft: false
tags:
  - tag1
  - tag2
description: Brief description of the post
---

Your content here...
```

## Deploy

```bash
bun run build
```

Deploy the `dist/` folder anywhere.
