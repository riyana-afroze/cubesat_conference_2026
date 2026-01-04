# Bilingual Website Structure - Best Practices

This website follows Astro's best practices for internationalization (i18n):

## 📁 File Structure

```
src/
├── components/          # Reusable components (ALL STYLES ARE HERE)
│   ├── Header.astro
│   ├── HomePage.astro
│   ├── TeamPage.astro
│   └── ContactPage.astro
├── data/               # Content separated by language
│   ├── en.ts          # English content
│   └── fr.ts          # French content
├── i18n/              # i18n utilities
│   ├── content.ts     # Content loader
│   └── ui.ts          # UI translations (navigation, etc.)
├── pages/             # Routes
│   ├── [lang]/        # Dynamic routes for both languages
│   │   ├── index.astro
│   │   ├── team.astro
│   │   └── contact.astro
│   └── index.astro    # Root redirect
├── layouts/
│   └── Layout.astro   # Base layout
└── styles/
    └── global.css     # Global styles (loaded once)
```

## ✅ Key Benefits

1. **No Style Duplication**: All styles live in components, loaded only once
2. **Centralized Content**: Content is separated in `data/` folder by language
3. **Dynamic Routes**: Using `[lang]` folder with `getStaticPaths()` generates both `/en/` and `/fr/` routes
4. **Easy to Maintain**: Add a new language by:
   - Creating `src/data/newlang.ts`
   - Adding to `getStaticPaths()` in each `[lang]` page
   - Adding translations to `src/i18n/ui.ts`

## 🔧 How It Works

### 1. Page Structure (`src/pages/[lang]/index.astro`)
```astro
---
import { getContent } from '../../i18n/content';

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'fr' } },
  ];
}

const { lang } = Astro.params;
const content = getContent(lang);
---
<Layout>
  <Component content={content.page} />
</Layout>
```

### 2. Content Loader (`src/i18n/content.ts`)
- Imports all language data files
- Provides `getContent(lang)` function
- Returns content for the requested language

### 3. Components
- Receive `content` as props
- Contain ALL their styles in `<style>` tags
- Are language-agnostic (work with any language)

## 🌐 Adding a New Page

1. Create component in `src/components/NewPage.astro` with styles
2. Add content to `src/data/en.ts` and `src/data/fr.ts`
3. Export from `src/i18n/content.ts`
4. Create `src/pages/[lang]/newpage.astro` with `getStaticPaths()`

## 📝 Why This Approach?

- **Astro Standard**: Uses Astro's official i18n patterns
- **DRY Principle**: Don't Repeat Yourself - styles written once
- **Scalability**: Easy to add new languages
- **Performance**: Components are only rendered once per language
- **SEO-Friendly**: Proper URLs like `/en/team` and `/fr/team`
