# Company logos

The "Product at" row shows a square logo tile beside each company name.

| File | Company |
|---|---|
| `urban-sports-club.png` | Urban Sports Club |
| `smava.png` | smava |
| `customer-alliance.png` | Customer Alliance |
| `careem.png` | Careem |
| *(none yet)* | **Just Eat Takeaway** — shows its name only |

A company with no file simply shows its name, which is how Just Eat Takeaway
currently renders. Nothing looks broken in the meantime.

## Adding one

Drop a square image in here, then add the `<img>` to that company's line in
`index.html` (search for `companies__item`):

```html
<!-- from -->
<span class="companies__item">Just Eat Takeaway</span>
<!-- to -->
<span class="companies__item"><img class="companies__logo"
  src="assets/logos/just-eat-takeaway.png" alt="" width="36" height="36"
  loading="lazy">Just Eat Takeaway</span>
```

`alt` is intentionally empty: the company name sits right beside the mark, so
a screen reader announcing it twice would be noise.

## What the files are

Each is a **144×144 PNG** — four times the 36px display size, so it stays sharp
on high-density screens. The source images supplied were square app-icon style
marks, so they are presented as tiles rather than as inline wordmarks.

Processing applied to the originals:

- **Careem** — a full-bleed green gradient. Fills its tile edge to edge, which
  is why the tile has rounded corners.
- **smava** — arrived with a transparent background; flattened onto white.
- **Customer Alliance** — already a mark on white, used as supplied.
- **Urban Sports Club** — arrived as a lockup: the flower mark above "wellhub"
  and "URBAN SPORTS CLUB". Cropped to the flower, because at 36px the text
  below it was an unreadable smudge, and the name is shown beside the tile.

## Why the tiles are always light

An earlier version recoloured logos to white in dark mode. That does not work
for these files: Careem's background is part of the artwork, and the Urban
Sports Club original has black text baked in that would vanish on a dark page.
So every mark sits on a constant white tile in both themes — the same
convention app icons use — and keeps its real brand colours.

If you later get a **transparent single-colour SVG** for a company, it could be
recoloured per theme instead. That would be a different treatment from these
four, so it is worth doing for all of them or none.

## A note on using them

Showing employer logos to say factually where you have worked is normal practice
on a personal site. Keep them unmodified beyond fitting them to the tile, don't
imply any of these companies endorse you, and if a company's brand guidelines
say otherwise, follow those.
