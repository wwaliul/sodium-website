# Sanity CMS Setup Guide

## Overview

This project uses Sanity CMS with **Visual Editing** for live content preview. The studio is embedded as a Next.js route at `/studio`.

## Quick Start

### 1. Create Sanity Project

If you haven't already:

```bash
# Install Sanity CLI globally
npm i -g @sanity/cli

# Login to Sanity
sanity login

# Create new project (run from project root)
cd sanity
sanity init --create-project "Sodium Learn CMS" --dataset production
```

Or create manually at https://sanity.io

### 2. Set Environment Variables

Add to `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token
```

**Get your API token:**
1. Go to sanity.io/manage
2. Select your project → API → Add API token
3. Give it **Editor** permissions

### 3. Deploy Sanity Studio (Optional)

The studio works locally at `http://localhost:3000/studio`, but you can also deploy it:

```bash
cd sanity
sanity deploy
```

## Features

### Visual Editing

Visual Editing allows you to edit content directly on the page:

1. Open your site at `http://localhost:3000`
2. Click the **Sanity Present** button (toolbar at bottom)
3. Edit content in the side panel
4. Changes appear live on the page

### Draft Mode

When draft mode is enabled, you see unpublished content:

- Draft documents appear on the site
- Preview updates as you type
- Toggle via the Present toolbar

### Studio Structure

The Content Studio has these sections:
- **Blog Posts** - All blog articles
- **Authors** - Blog post authors
- **Categories** - Blog categories
- **Solutions** - Product solution pages
- **Testimonials** - Customer testimonials
- **FAQs** - Frequently asked questions
- **Team Members** - About page team
- **Site Settings** - Global SEO and social settings

## Schema Reference

### Post (Blog)
- `title`, `slug`, `excerpt`, `mainImage`
- `author`, `category`, `publishedAt`
- `body` (rich text), `seo`

### Solution
- `title`, `slug`, `headline`, `description`
- `icon`, `order`, `sections[]`
- `seo`

### Testimonial
- `quote`, `metricHighlight`
- `authorName`, `authorTitle`, `authorCompany`, `authorAvatar`
- `useCase`, `featured`

### FAQ
- `question`, `answer` (rich text)
- `category`, `order`

### Team Member
- `name`, `role`, `photo`
- `bio`, `linkedin`, `order`

### Site Settings (single document)
- `siteTitle`, `siteDescription`, `ogImage`
- `twitterHandle`, `linkedinUrl`

## API Routes

| Route | Description |
|-------|-------------|
| `/studio` | Sanity Studio |
| `/api/draft-mode/enable?token=xxx` | Enable draft mode |
| `/api/draft-mode/disable` | Disable draft mode |

## Troubleshooting

### "Missing environment variable"
Check `.env.local` has all required variables.

### Visual Editing not working
1. Ensure `@sanity/visual-editing` is installed
2. Check `<VisualEditing />` component is rendered when draft mode is on
3. Verify SANITY_API_TOKEN is set

### Changes not appearing
1. Check document is published (not just saved as draft)
2. Clear browser cache
3. Check revalidate setting in page component

## Next Steps

1. **Import content** - Use Sanity's import tool or create content manually
2. **Configure webhooks** - Set up revalidation webhook at `/api/revalidate`
3. **Set up production** - Add environment variables to Railway
