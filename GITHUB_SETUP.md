# GitHub & CI/CD Setup Guide

## Repository

**URL:** https://github.com/wwaliul/sodium-website

## Branch Strategy

| Branch | Environment | Description |
|--------|-------------|-------------|
| `main` | Production | Production-ready code, auto-deploys to Railway |
| `develop` | Staging | Active development branch (optional) |

## GitHub Authentication Setup

### Using GitHub CLI (gh)

1. **Install gh:**
   ```bash
   brew install gh
   ```

2. **Login:**
   ```bash
   gh auth login
   ```
   - Select GitHub.com
   - Use HTTPS protocol
   - Authorize Git credentials

3. **Push code:**
   ```bash
   git push -u origin main
   ```

### Using SSH (Alternative)

1. **Generate SSH key:**
   ```bash
   ssh-keygen -t ed25519 -C "waliul.i@outlook.com"
   ```

2. **Add to GitHub:**
   - Copy: `cat ~/.ssh/id_ed25519.pub | pbcopy`
   - Go to: https://github.com/settings/keys
   - Paste and save

3. **Switch remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:wwaliul/sodium-website.git
   ```

## CI/CD Pipeline

### GitHub Actions Workflow

**File:** `.github/workflows/ci.yml`

Runs on every push to `develop` and PRs to `main`:
- ESLint check
- Production build

```yaml
name: CI
on:
  push:
    branches: [develop]
  pull_request:
    branches: [main, develop]
jobs:
  lint-and-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

### Railway Deployment

Railway is connected directly to the `main` branch:
- Auto-deploys on every push to `main`
- Uses Dockerfile for build
- No GitHub Actions needed for deployment

**Railway Project:** Sodium Learn
**Region:** europe-west4

## Environment Variables

### Required for Build (Railway Variables)

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | konosq1z |
| `NEXT_PUBLIC_SANITY_DATASET` | production |
| `NEXT_PUBLIC_SANITY_API_VERSION` | 2024-01-01 |
| `SANITY_API_TOKEN` | (from Sanity dashboard) |
| `NEXT_PUBLIC_SITE_URL` | https://staging.sodiumlearn.com |
| `SANITY_REVALIDATE_SECRET` | (your webhook secret) |

### Local Development (.env.local)

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=konosq1z
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://staging.sodiumlearn.com
SANITY_API_TOKEN=skVWStNo5FUdHgmMxeJag7lHBMeNcXmjW16uDw34HyCgDSD47pYT7giyMSpEQnxtD95GAT55uPSEJXoo8auvqKaqHWVVamdWQUdpuSC2r4xyFLqkKnmbhysJoUKxkMHfBS3zQCFJvyujYfXNu1HXwTEbs6MLm2wXFKZwZW2Ehlk3CgpeeFIg
SANITY_REVALIDATE_SECRET=your_webhook_secret
```

## Common Commands

```bash
# Push changes
git add -A
git commit -m "description"
git push origin main

# Create PR (if using develop branch)
git checkout develop
git commit -m "feature"
gh pr create --base main --head develop

# View PRs
gh pr list

# Check build locally
npm run build
```

## Troubleshooting

### Build Fails on Railway
1. Check build logs in Railway dashboard
2. Verify all environment variables are set
3. Test build locally: `npm run build`

### Authentication Issues
```bash
# Re-authenticate gh
gh auth logout
gh auth login

# Check status
gh auth status
```

### Git Remote Issues
```bash
# Check remote
git remote -v

# Switch between HTTPS and SSH
git remote set-url origin https://github.com/wwaliul/sodium-website.git
git remote set-url origin git@github.com:wwaliul/sodium-website.git
```
