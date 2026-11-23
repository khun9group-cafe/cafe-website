/**
 * KHUN9 — monthly specials & Square links
 * ========================================
 * This is the ONLY file you need to edit each month.
 *
 * 1. Change monthLabel (e.g. "October")
 * 2. Update dish + drink name, blurb, price, image
 * 3. Paste Square payment-link URLs into squareCheckoutUrl
 *
 * How to get a Square payment link (best for monthly specials):
 *   Square Dashboard → Payments → Payment links → Create link
 *   → Sell an item → pick the catalog item from your POS
 *   → Create → Copy link  (looks like https://square.link/u/XXXX)
 *
 * Full menu ordering (optional):
 *   Square Dashboard → Online → create an Order Online page
 *   Paste that site URL into squareOrderOnlineUrl
 *   (orders print on your Square POS)
 *
 * If a URL is left as "", the button becomes “Call to order”.
 */
window.KHUN9 = {
  monthLabel: "September",
  footnote: "Pickup at Oasis Shopping Village. Orders land in Square POS.",

  dish: {
    name: "KHUN9 Sum Tum",
    blurb:
      "House green papaya salad — lime, chilli, peanuts, and the snap of long beans. This month’s signature plate.",
    price: "$20.90",
    image: "images/dish-sum-tum.jpg",
    squareCheckoutUrl: "https://khun9-modern-thai-asian-street.square.site",
  },

  drink: {
    name: "KHUN9 Thai Milk Tea",
    blurb:
      "Deep-brewed Thai tea, condensed milk, crushed ice. The house glass for a Darwin afternoon.",
    price: "$6.50",
    image: "images/drink-thai-tea.jpg",
    squareCheckoutUrl: "https://khun9-modern-thai-asian-street.square.site",
  },

  squareOrderOnlineUrl: "https://khun9-modern-thai-asian-street.square.site",

  venue: {
    name: "KHUN9",
    tagline: "Modern Thai & Asian Street Cuisine",
    kicker: "A modern journey through Thai heritage",
    addressLine: "Oasis Shopping Village, Shop 39/15 Temple Terrace",
    suburb: "Palmerston City NT 0830",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Oasis+Shopping+Village+Shop+39%2F15+Temple+Terrace+Palmerston+City+NT+0830",
    mapsEmbed:
      "https://maps.google.com/maps?q=Oasis%20Shopping%20Village%2C%20Shop%2039%2F15%20Temple%20Terrace%2C%20Palmerston%20City%20NT%200830&z=16&output=embed",
    email: "khun9.group@gmail.com",
    phoneDisplay: "08 8992 7667",
    phoneHref: "tel:+61889927667",
    hoursDisplay: "9:00 am – 3:00 pm",
    daysDisplay: "Monday to Sunday",
  },
};
