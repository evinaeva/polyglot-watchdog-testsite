# Intentional Bug Map

This file documents every intentionally planted localization/content bug.

| ID | Page path | Selector / asset path | Bug type | Expected correct meaning | Actual wrong value |
|---|---|---|---|---|---|
| B01 | `/en/index.html` | FAQ paragraph in final section | Typo (minor baseline bug) | "20 minutes" | "20 minuts" |
| B02 | `/de/index.html` | `[data-testid="nav-pricing"]` | Wrong-language menu label | German label should be "Preise" | Label is "Pricing" |
| B03 | `/de/index.html` | `[data-testid="hero-cta-primary"]` | CTA meaning changed | Equivalent of "Start free trial" | "Jetzt kaufen" (Buy now) |
| B04 | `/de/index.html` | `../assets/hero-wrong-english-on-de.svg` via `[data-testid="hero-image"]` | Image with embedded English text | Hero image text should be German | Hero image contains English UI copy |
| B05 | `/de/index.html` | `<h2>` under trusted section | Untranslated English in body | German heading, e.g., "Vertrauen von Teams" | "Trusted by teams" |
| B06 | `/de/index.html` | Feature cards order `[data-testid="feature-card-1..3"]` | Card order differs from EN baseline | EN order: visual diff, OCR, reports | DE order starts with OCR, then visual diff |
| B07 | `/de/index.html` | `[data-testid="screenshot-image"]` src | Wrong localized image reused | German-localized screenshot asset expected | English screenshot asset is used |
| B08 | `/de/index.html` | `[data-testid="badge-image"]` src | Image localization issue | German badge variant expected | English badge reused |
| B09 | `/de/index.html` | `[data-testid="dropdown-option-2"]` | Untranslated option | German option text | "Screenshot OCR audit" |
| B10 | `/de/index.html` | `[data-testid="help-tooltip"]` | Tooltip in wrong language | German tooltip text | English tooltip sentence |
| B11 | `/de/index.html` | `[data-testid="modal-body"]` | Modal meaning mismatch | Should report detected issues | Says all translations are perfect |
| B12 | `/de/index.html` | Footer docs link text | Header/footer inconsistency language | German docs label (e.g., "Dokumentation") | "Support Center" |
| B13 | `/de/pricing.html` | `[data-testid="pricing-card-pro"] .price` | Wrong currency formatting | Euro price comparable to EN baseline | "$97" |
| B14 | `/de/pricing.html` | `[data-testid="pricing-card-pro"]` locale count | Wrong quantity vs EN | Pro supports 12 locales | DE says 10 locales |
| B15 | `/de/pricing.html` | `[data-testid="pricing-image-1"]` + figcaption | Caption mismatch with image | Caption should reflect image counts (12/9/1 warnings) | Caption claims only 2 warnings total |
| B16 | `/de/pricing.html` | `[data-testid="pricing-image-2"]` alt | Alt text mismatch language/content | Alt should match English badge image content | Alt says it is a Russian badge |
| B17 | `/de/pricing.html` | Support row in comparison table, Pro cell | Untranslated English in table | German support label | "Priority email" |
| B18 | `/ru/index.html` | Hero paragraph | Wrong punctuation / awkward grammar | Natural Russian sentence ending | Ends with trailing comma and awkward clause |
| B19 | `/ru/index.html` | Features section `.cards` | Missing feature block in one locale | Three feature cards as baseline | Only two feature cards |
| B20 | `/ru/index.html` | `[data-testid="badge-image"]` src | Wrong localized image version | Russian badge variant expected | English badge reused |
| B21 | `/ru/index.html` | `[data-testid="dropdown-option-3"]` | Untranslated English left in RU | Russian option text | "Currency format validation" |
| B22 | `/ru/index.html` | `[data-testid="ru-only-button"]` | Button exists only one locale | Button parity with EN/DE expected | Extra RU-only "Экспорт в CSV" button |
| B23 | `/ru/pricing.html` | `[data-testid="pricing-card-pro"] .price` | Wrong currency | Localized ruble pricing expected | "79 €" |
| B24 | `/ru/pricing.html` | `[data-testid="pricing-card-pro"] button` | CTA meaning changed | Equivalent of start trial | "Купить сейчас" (Buy now) |
| B25 | `/ru/pricing.html` | `[data-testid="pricing-image-1"]` src + alt | Wrong asset + alt mismatch | Russian screenshot expected with matching alt | English screenshot used, alt claims Russian screenshot |
| B26 | `/ru/pricing.html` | `[data-testid="pricing-image-2"]` figcaption | Caption mismatch quantity | Badge says 200+ teams | Caption says only 50 teams |
| B27 | `/ru/pricing.html` | Comparison table support row, Starter cell | Untranslated English word | Russian word for email | "Email" |
| B28 | `/ru/pricing.html` | Footer pricing link text | Header/footer language inconsistency | Russian "Цены" | German "Preise" |
| B29 | `/de/pricing.html` | `[data-testid="pricing-image-ocr-only-de"]` + `../assets/badge-de.svg` | OCR-only image text mismatch | German asset should show German text inside image while keeping localized metadata | File path, alt and caption are German, but visible SVG text remains English (`Unlimited checks`) |
| B30 | `/de/index.html` | `[data-testid="hero-cta-secondary"]` nested wrapper spans | Structural drift / matching-risk case | Visible CTA meaning should match EN baseline and remain "Demo buchen" | Meaning stays correct, but markup intentionally differs via extra nested `<span>` wrappers |
| B31 | `/de/pricing.html` | Comparison table screenshots row, Pro cell | Formatting / locale-convention bug | German thousands formatting should use dot (`10.000`) | Value is formatted as `10,000` |
| B32 | `/en/test.html` | `[data-testid="test-line-2"]` | Typo in sanity text line | "Localization check passed." | "Localization chek passed." |
| B33 | `/en/test.html` | `[data-testid="test-image-wrong"]` (`../assets/badge-ru.svg`) | Wrong-language image on EN page | English image text expected | Russian badge image is used |
| B34 | `/de/test.html` | `[data-testid="test-line-2"]` | Typo in sanity text line | "Lokalisierung ist bereit." | "Lokalisierng ist bereit." |
| B35 | `/de/test.html` | `[data-testid="test-image-wrong"]` (`../assets/badge-en.svg`) | Wrong-language image on DE page | German image text expected | English badge image is used |
| B36 | `/ru/test.html` | `[data-testid="test-line-2"]` | Typo in sanity text line | "Локализация готова." | "Локализаця готова." |
| B37 | `/ru/test.html` | `[data-testid="test-image-wrong"]` (`../assets/badge-de-correct.svg`) | Wrong-language image on RU page | Russian image text expected | German badge image is used |


## Positive controls

These are intentional correct-localization control cases used to verify that German OCR/image checks can also pass when content is correct.

| ID | Page path | Selector / asset path | Type | Expected correct behavior | Actual implemented behavior |
|---|---|---|---|---|---|
| PC01 | `/de/pricing.html` | `[data-testid="pricing-image-de-control-1"]` + `../assets/screenshot-de-correct.svg` | Correct German image control | Asset text, alt text, and caption should all be localized in German | Image text is German (`Problem-Heatmap`, warning lines), with matching German alt and caption |
| PC02 | `/de/pricing.html` | `[data-testid="pricing-image-de-control-2"]` + `../assets/badge-de-correct.svg` | Correct German image control | Badge text, alt text, and caption should all be localized in German | Badge contains German text (`Über 200 Teams`), with matching German alt and caption |
