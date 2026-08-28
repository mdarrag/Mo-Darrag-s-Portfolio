# Company logos

The "Product at" row on the home page currently shows company **names**, set as
wordmarks. Adding a real logo is two steps, per company.

**1. Put the file here.** Suggested names:

| File | Company |
|---|---|
| `just-eat-takeaway.svg` | Just Eat Takeaway |
| `urban-sports-club.svg` | Urban Sports Club |
| `smava.svg` | smava |
| `customer-alliance.svg` | Customer Alliance |
| `careem.svg` | Careem |

**2. Swap that company's line** in `index.html` (search for `companies__item`):

```html
<!-- from -->
<span class="companies__item">smava</span>
<!-- to -->
<span class="companies__item"><img class="companies__logo"
  src="assets/logos/smava.svg" alt="smava" style="--logo-h:22px"></span>
```

Do them one at a time — the untouched companies stay as wordmarks and the row still
reads correctly with a mix of both.

The page deliberately does **not** reference logo files before they exist: pointing
at a missing file would mean the row only avoids broken-image icons if JavaScript
runs, and nothing on this site should depend on that. (There is still a script-level
safety net for a logo that is referenced but fails to load — a misnamed or corrupt
file falls back to the name rather than showing a broken icon.)

## What format to use

**SVG is much better than PNG here.** It stays sharp on any screen, the files are
tiny, and the dark-mode treatment below works cleanly on it. Most companies publish
one on a `/press`, `/brand` or `/media` page. If you can only find a PNG, use a
**transparent** one at roughly 3× the display size (so ~500px wide), and change the
extension in `index.html` to match.

## Sizing

Logos vary a lot in shape — a long wordmark and a square mark set to the same height
look nothing alike. Each one therefore carries its own optical height in
`index.html`:

```html
<img class="companies__logo" src="assets/logos/smava.svg" alt="smava" style="--logo-h:22px">
```

Nudge that number per logo until the row looks evenly weighted. Width is capped at
132px regardless.

## Dark mode

By default a logo is inverted to white in dark mode, which is right for the usual
dark-on-transparent logo. If one is already light-coloured and comes out wrong, add
`is-light` so it renders untouched:

```html
<img class="companies__logo is-light" src="assets/logos/careem.svg" alt="Careem">
```

Full-colour logos also survive `is-light` — they just keep their brand colours in
both themes.

## A note on using them

Showing employer logos to say factually where you have worked is normal practice on
a personal site. Keep them unmodified, don't imply any of these companies endorse
you or the site, and if a company's brand guidelines say otherwise, follow those.
