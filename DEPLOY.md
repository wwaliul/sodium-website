# Deployment Guide

## Branch Strategy

| Branch      | Environment | Description                          |
|-------------|-------------|--------------------------------------|
| `develop`   | Staging     | Active development branch            |
| `main`      | Production  | Production-ready code                |

## Workflow

1. **Develop features** on `develop` branch
2. **Test locally** before pushing
3. **Promote to production** by merging `develop` → `main` via PR

## Railway Setup

Railway is connected to the `main` branch for automatic deployments.

### Set Environment Variables in Railway

Go to your Railway project → Variables → Add the following:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
SANITY_REVALIDATE_SECRET=your_webhook_secret
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## CI/CD Pipeline

### CI (On `develop` push and PRs)
- Runs ESLint
- Runs production build
- Ensures code compiles before merging to main

### Deploy Production
- Railway auto-deploys when `main` branch is updated
- No GitHub Actions needed for deployment

## First-Time Setup

```bash
# Push branches to GitHub
git push -u origin main
git push -u origin develop
```

Then set environment variables in Railway dashboard.
