# Company logos

Drop the logo files in this folder using these **exact** filenames. The home page
already points at them:

| File | Company |
|---|---|
| `just-eat-takeaway.svg` | Just Eat Takeaway |
| `urban-sports-club.svg` | Urban Sports Club |
| `smava.svg` | smava |
| `customer-alliance.svg` | Customer Alliance |
| `careem.svg` | Careem |

Until a file exists, that slot falls back to the company name set as a wordmark —
which is exactly how the row looked before. So you can add them one at a time and
nothing ever looks broken in between.

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
