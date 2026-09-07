# KHUN9 website — GitHub Pages

Static site for **KHUN9**, Oasis Shopping Village, Palmerston NT.

## Upload to GitHub Pages

1. Create a GitHub repository (e.g. `khun9` or `yourname.github.io`).
2. Unzip this folder.
3. Upload **all files inside** to the repo root (`index.html` must sit at the root, not inside another folder).
4. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` (or `master`) / folder: `/ (root)`
5. Wait a minute. Your site will be at `https://<username>.github.io/<repo>/`

Custom domain (optional): Settings → Pages → Custom domain (e.g. `khun9.com.au`). Add a `CNAME` file in the repo containing just that domain.

To change the logo later: replace `images/logo.png` (transparent PNG, landscape).

---

## Change the monthly specials (2 minutes)

Edit **`js/promotions.js`** only.

```js
monthLabel: "October",
dish: {
  name: "Green Chicken Curry",
  blurb: "…",
  price: "$23.90",
  image: "images/dish-green-curry.jpg",
  squareCheckoutUrl: "https://square.link/u/YOURCODE",
},
drink: {
  name: "KHUN9 Coconut Smoothie",
  blurb: "…",
  price: "$8.90",
  image: "images/drink-coconut.jpg",
  squareCheckoutUrl: "https://square.link/u/YOURCODE",
},
```

Commit and push. GitHub Pages updates itself.

Photos already in `images/`:

| File | Dish / drink |
|---|---|
| `dish-sum-tum.jpg` | KHUN9 Sum Tum |
| `dish-boat-noodles.jpg` | Boat noodles |
| `dish-pad-thai.jpg` | Pad Thai |
| `dish-chicken-rice.jpg` | Hainanese chicken rice |
| `dish-green-curry.jpg` | Green chicken curry |
| `dish-mango-sticky-rice.jpg` | Mango sticky rice |
| `dish-binsu.jpg` | Binsu |
| `dish-smashed-avo.jpg` | Smashed avo |
| `drink-thai-tea.jpg` | Thai milk tea |
| `drink-coconut.jpg` | Coconut smoothie |

Drop a new photo in `images/` and point `image:` at it.

---

## Square POS — recommended setup

GitHub Pages is a static site (no server). Do **not** embed Square’s Web Payments SDK here — that needs a backend.

### 1. Monthly Signature Dish & Drink — Square Payment Links (use this)

Best for two featured items that change every month.

1. Square Dashboard → **Payments → Payment links → Create link**
2. Choose **Sell an item**
3. Pick the catalog item that already lives in your Square POS (price and tax stay in sync)
4. Fulfilment: **Pickup** at Palmerston
5. Create → **Copy link** (`https://square.link/u/…`)
6. Paste into `squareCheckoutUrl` in `js/promotions.js`

When a guest pays, the order appears in Square. Repeat next month with two new links.

You can also generate an embeddable **Buy button** from the same screen. Payment links are simpler to swap.

### 2. Full menu ordering — Square Online (add when you are ready)

Best for the whole menu, modifiers, and kitchen tickets.

1. Square Dashboard → **Online** → create an **Order Online** page
2. Import your existing Square catalog
3. Turn on **Pickup** (and hours 9am–3pm)
4. Publish (free Square subdomain like `khun9.square.site`, or `order.yourdomain.com`)
5. Paste that URL into `squareOrderOnlineUrl` in `js/promotions.js`

The nav **Order** button then sends people to Square. Online orders print on your Square POS / KDS.

### 3. What not to do

- Square Web Payments SDK / Checkout API from this repo — needs a secret key and a server. GitHub Pages cannot keep that safe.
- Third-party delivery apps as the primary order button — Square Online keeps the margin and the ticket in your POS.

---

## Contact (already on the site)

- **Address:** Oasis Shopping Village, Shop 39/15 Temple Terrace, Palmerston City NT 0830 ([Google Maps](https://www.google.com/maps/search/?api=1&query=Oasis+Shopping+Village+Shop+39%2F15+Temple+Terrace+Palmerston+City+NT+0830))
- **Hours:** 9:00 am – 3:00 pm, Monday to Sunday
- **Phone:** 08 8992 7667
- **Email:** khun9.group@gmail.com
