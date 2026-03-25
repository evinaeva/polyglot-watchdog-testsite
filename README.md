# Polyglot Watchdog Demo Test Site

A tiny static multilingual website for localization QA, visual regression testing, and Playwright crawling.

## Purpose

This repository intentionally includes **both correct and incorrect localized content** so QA tools and humans can detect:
- untranslated strings
- wording and grammar issues
- price/currency mismatches
- wrong localized images
- DOM/content inconsistencies across locales

## Stack

- Plain HTML
- Plain CSS
- Vanilla JavaScript
- No framework, no package install, no build step

## Folder structure

- `assets/` SVG images (including localized and intentionally wrong variants)
- `css/styles.css` shared styles
- `js/main.js` shared interactivity (dropdown, tooltip, modal)
- `en/` English pages
- `de/` German pages
- `ru/` Russian pages
- `BUGS.md` bug map for intentional defects

## Pages

- `en/index.html`
- `en/pricing.html`
- `de/index.html`
- `de/pricing.html`
- `ru/index.html`
- `ru/pricing.html`
- `en/test.html`
- `de/test.html`
- `ru/test.html`

## Run locally

From the repository root:

```bash
python -m http.server 4173
```

Then open:
- http://localhost:4173/en/index.html
- http://localhost:4173/de/index.html
- http://localhost:4173/ru/index.html

Pricing pages:
- http://localhost:4173/en/pricing.html
- http://localhost:4173/de/pricing.html
- http://localhost:4173/ru/pricing.html

Test sanity pages:
- http://localhost:4173/en/test.html
- http://localhost:4173/de/test.html
- http://localhost:4173/ru/test.html

## Manual click-through checklist

1. Open each `/index.html`, `/pricing.html`, and `/test.html` page.
2. Validate top navigation and language switcher links.
3. On each home page, test:
   - dropdown button and options
   - tooltip on hover/focus
   - modal open/close
4. Compare text, card order, and images across EN/DE/RU.
5. Cross-check with `BUGS.md`.

## Playwright usage notes

This site is deterministic and crawler-friendly:
- semantic HTML structure
- stable `data-testid` attributes on major blocks and controls
- shared DOM shape across locales where possible

Example Playwright selectors:
- `[data-testid="header-nav"]`
- `[data-testid="language-switcher"]`
- `[data-testid="hero-title"]`
- `[data-testid="feature-card-1"]`
- `[data-testid="dropdown-toggle"]`
- `[data-testid="open-modal-button"]`
- `[data-testid="demo-modal"]`
- `[data-testid="help-tooltip"]`
- `[data-testid="pricing-card-pro"]`
