# uangrumah.com

The website for **UangRumah**, a simple, private expense tracker for iPhone and iPad.
It's a plain static site (HTML, CSS and a little JavaScript) served by GitHub Pages from this repository. There's no build step: what's in the repo is what's published.

## Pages

| File | URL | What it is |
|------|-----|------------|
| `index.html` | `/` | Home page |
| `support.html` | `/support.html` | Help Center (searchable FAQ and troubleshooting) |
| `contact.html` | `/contact.html` | Contact details |
| `privacy-policy.html` | `/privacy-policy.html` | Privacy Policy |
| `terms-conditions.html` | `/terms-conditions.html` | Terms of Use |
| `privacy.html`, `terms.html` | `/privacy`, `/terms` | Redirects. **Keep them**: the app links to these URLs. |
| `404.html` | any missing page | Not-found page (uses absolute `/` paths) |

## Folders

```
assets/icons.svg        line icons, used as <svg><use href="assets/icons.svg#i-name"/></svg>
assets/images/          logo, favicons, app icons, og-image.png (social share preview)
styles/main.css         the only stylesheet: tokens (light + dark), layout, components, phone mockups
scripts/i18n.js         language switching (EN / ID / MS)
scripts/main.js         menu, theme toggle, Help Center search, legal table of contents
translations/en.js      English text (source of truth)
translations/id.js      Bahasa Indonesia
translations/ms.js      Bahasa Melayu
tools/check-i18n.mjs    checks that all three languages have the same keys
```

## Editing text

All visible text lives in `translations/*.js`. Elements point at a key:

- `data-i18n="home.hero.lead"` sets the element's text
- `data-i18n-html="help.g1.a1"` sets HTML (lists, bold, links)
- `data-i18n-attr="placeholder:help.searchPlaceholder"` sets attributes (`content`, `aria-label`, `placeholder` …)

The English text inside the HTML is a fallback for visitors without JavaScript and for search engines. When you change English copy, update it in **both** `translations/en.js` and the matching HTML element.

After any change to the translations, run:

```bash
node tools/check-i18n.mjs
```

### Language selection

The site picks a language in this order: `?lang=en|id|ms` in the URL, then the visitor's earlier choice, then their browser language, then English. Example: `https://uangrumah.com/?lang=id`.

### Seasonal badge

The small badge above the home page headline is `home.hero.badge` in each translation file (currently "Plan your 2027 budget today"). Change it for a campaign, or set it to `''` in all three files to hide it.

### Mockup amounts

Amounts in the phone mockups use `data-amount="…"` in rupiah. They're shown as rupiah in English and Indonesian, and converted to ringgit for Bahasa Melayu.

## Replacing mockups with real screenshots

The phone screens are HTML mockups that use the app's real labels. To use real screenshots instead, put the images in `assets/screens/` and replace everything inside a `<div class="phone-screen">` with:

```html
<img src="assets/screens/dashboard-en.png" alt="" style="width:100%;height:100%;object-fit:cover">
```

Use portrait iPhone screenshots (about 1179 × 2556) so they fit the frame.

## Facts the site states

Check these against the app before each release:

- Free, no ads, no in-app purchases, no account
- iPhone and iPad, iOS/iPadOS 16 or later
- Up to **2 books**, book names up to 9 characters, up to **3 cost centers per book**
- 15 default categories, 150+ currencies (one currency for the whole app), 3 languages
- iCloud sync is automatic when signed in to iCloud (there's no in-app switch)
- Budget alert at one chosen level: 50%, 75%, 90% or 100% of what the budget allows so far this month
- App Store ID `6755369467`

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
