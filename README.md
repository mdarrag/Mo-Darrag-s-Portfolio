# Mo Darrag — Portfolio

A static portfolio site for Mo Darrag, senior product leader (Berlin).
No build step, no dependencies: plain HTML, one stylesheet, one small progressive-enhancement script.

## Structure

```
index.html                     Home — hero, work, approach, experience, toolkit, contact
work/booking-funnel.html       Case study 01 — marketplace booking-funnel analysis
work/logistics-strategy.html   Case study 02 — Group PM strategy for two logistics products
assets/css/site.css            Design tokens + all components
assets/js/site.js              Theme toggle, sticky header, scroll reveals, nav spy
assets/cv/Mo-Darrag-CV.pdf     Downloadable CV
.nojekyll                      Serve files as-is on GitHub Pages
```

## Running it locally

Any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

**GitHub Pages.** Pages will not serve a *private* repository unless the account is on GitHub
Enterprise Cloud — that is what the "upgrade" prompt means. On a public repository it is free on
every plan. So: Settings → General → Change visibility → public, then Settings → Pages → Source:
*Deploy from a branch*, pick the branch and `/ (root)`.

The site is then live at `https://<user>.github.io/<repo>/`. Every link and asset path here is
relative, so it works both under that subpath and at a domain root — verified by serving the whole
site from a subdirectory. Two ways to get a shorter URL:

- Rename the repository to `<user>.github.io`, which GitHub serves at `https://<user>.github.io/`.
- Add a `CNAME` file containing your domain and point a DNS record at GitHub Pages.

**Keeping the repository private** is possible on any free tier that supports private repos —
Cloudflare Pages, Netlify or Vercel. Connect the repo, leave the build command empty and set the
output directory to `/`. Note this only hides the source: the published site is publicly reachable
either way.

## Design notes

- **Theme.** Light is the base palette; dark is a separately chosen palette, not an inversion.
  It follows the OS setting by default and the toggle overrides it, persisted in `localStorage`
  (wrapped in `try/catch`, so private-browsing mode degrades cleanly).
- **Charts.** The funnel uses a single-hue ordinal ramp; the comparison bars use two categorical
  hues. Both palettes were validated for colour-vision deficiency separation and contrast against
  their surfaces in light and dark mode, and every bar is directly labelled so identity is never
  carried by colour alone.
- **No-JS.** Everything renders without JavaScript — bars carry their real width inline, and the
  script only holds them at zero to animate them in.
- **Fonts.** Instrument Serif for display, Inter for body, loaded from Google Fonts with system
  fallbacks in the stack.

## Before making this public — please review

Both case studies are edited versions of private documents. Check that you're comfortable with
what's published:

| Case study | What was done |
|---|---|
| `booking-funnel.html` | The company is **not named** — it is described as "a travel-experiences marketplace". All figures and reasoning are as submitted. Competitor names were removed from the comparison table ("Competitor A / B"). |
| `logistics-strategy.html` | The employer is described generically. **Removed:** absolute currency figures (GTV/GMV/tip revenue), prospective retail partner names, specific target-market names, and internal system/vendor names. Product names replaced with descriptions. **Kept:** relative impact percentages, platform scale figures, roadmap structure and the 90/180/360 plan. |

If you want either one named or restored in full, it is a small edit in one file — but the
decision is yours to make, not the site's.

## Editing

Content lives directly in the HTML — there is no CMS or templating layer. The most common edits:

- **Availability line** — the `.status` paragraph at the top of `index.html`.
- **Career numbers** — the `.figure-card` block in the hero.
- **A new role** — copy an `<article class="role">` block in the experience timeline.
- **A new case study** — copy `work/booking-funnel.html`, replace the prose, and add a
  `<article class="work-card">` to the work grid on the home page.
- **Colours and type** — the token block at the top of `assets/css/site.css`. Changing a token
  changes the whole site; if you change a chart colour, re-check contrast in both themes.
