# Deployment Guide

## Branch Strategy

| Branch      | Environment | Description                          |
|-------------|-------------|--------------------------------------|
| `develop`   | Staging     | Active development, auto-deploys     |
| `main`      | Production  | Production-ready, auto-deploys       |

## Workflow

1. **Develop features** on `develop` branch (or feature branches → PR to `develop`)
2. **Test on staging** at your Railway staging URL
3. **Promote to production** by merging `develop` → `main` via PR

## Railway Setup

### Create Two Projects in Railway

1. **Sodium Learn (Production)**
   - Connect to `main` branch
   - Set environment variables from `.env.example`
   - Generate a token: `railway token` (or use Railway dashboard)

2. **Sodium Learn (Staging)**
   - Connect to `develop` branch
   - Set environment variables (use staging URLs)
   - Generate a separate token

### Required Environment Variables

**GitHub Secrets (Settings → Secrets → Actions):**

| Secret Name                  | Description                    |
|------------------------------|--------------------------------|
| `RAILWAY_PRODUCTION_TOKEN`   | Railway token for production   |
| `RAILWAY_STAGING_TOKEN`      | Railway token for staging      |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID           |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (production)    |
| `NEXT_PUBLIC_SITE_URL`       | Production URL                 |

**Railway Environment Variables:**

Set these in your Railway project dashboard for each environment:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxx
SANITY_REVALIDATE_SECRET=xxx
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## CI/CD Pipeline

### CI (On every push/PR)
- Runs ESLint
- Runs production build
- Blocks merge if build fails

### Deploy Staging (On `develop` push)
- Deploys to Railway staging environment
- Use for testing before production

### Deploy Production (On `main` push)
- Deploys to Railway production environment
- Only merge tested code from `develop`

## First-Time Setup

```bash
# 1. Push branches to GitHub
git push -u origin main
git push -u origin develop

# 2. Create GitHub repository secrets (via GitHub UI)
# 3. Create Railway projects and set environment variables
# 4. Add GitHub secrets for Railway tokens
```

## Manual Deploy (Fallback)

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Link to project
railway link

# Deploy
railway up
```
