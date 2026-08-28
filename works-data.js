/* ============================================================
   IN THE MAKING — WORKS DATA
   ============================================================
   This is the ONLY file you need to edit to add, remove, or
   change portfolio items. The page automatically builds the
   cards from these arrays — no HTML editing required.

   TO ADD A NEW FILM/PODCAST CARD:
   1. Drop your image in /images  (e.g. images/my-new-thing.jpg)
   2. Copy one of the objects in `filmWorks` below and edit it.

   TO ADD A NEW DESIGN/LOGO CARD:
   1. Drop your image in /images
   2. Copy one of the objects in `designWorks` below and edit it.

   TO ADD BTS PHOTOS:
   1. Drop photos in /images/bts
   2. Add them into `btsSlides` — each inner array is one slide
      (4 photos per slide).
   ============================================================ */

const SITE_DATA = {

  filmWorks: [
    {
      size: "wide",                 // "wide" or "tall"
      href: "https://www.youtube.com/@Denmen2-ar",  // click to open link (optional)
      lightbox: null,               // OR click to open full image (optional)
      image: "images/denmen-podcast.jpg",
      alt: "Denmen Podcast",
      badge: null,                  // small corner badge text (optional)
      showExternalIcon: true,
      category: "Podcast · Creator &amp; Host ◈ Present",
      title: "Denmen Podcast",
      description: "Currently producing and hosting Denmen Podcast on YouTube. Full production — concept, filming, editing, publishing. Real conversations, real stories.",
      cue: "Visit YouTube Channel"
    },
    {
      size: "tall",
      href: null,
      lightbox: "images/nasa-backdrop.jpg",
      lightboxCaption: "NASA Space Apps Challenge — NIAR Wichita Backdrop Design",
      image: "images/nasa-backdrop.jpg",
      alt: "NASA Space Apps Backdrop",
      badge: "NASA × NIAR",
      showExternalIcon: false,
      category: "Event Design · NIAR Wichita ◈ 2022",
      title: "NASA Space Apps",
      description: "Designed the official backdrop for the NASA International Space Apps Challenge — Wichita. Full event branding.",
      cue: "View Full Image"
    },
    {
      size: "tall",
      href: null,
      // NOTE: this file lives at the site root (not /images) — see README for why.
      lightbox: "NIAR_WICHITA.png",
      lightboxCaption: "NASA Space Apps Wichita — Event Poster Design",
      image: "NIAR_WICHITA.png",
      alt: "NASA Space Apps Wichita Poster",
      badge: null,
      showExternalIcon: false,
      category: "Event Poster · NIAR Wichita ◈ 2022",
      title: "Space Apps Wichita",
      description: "Official event poster for NASA Space Apps Challenge Wichita. Concept, layout, and final execution.",
      cue: "View Full Image"
    }
  ],

  designWorks: [
    {
      isVideo: true,
      poster: "images/yavat-tavat-poster.jpg",
      video: "videos/yavat-tavat.mp4",
      alt: "Yavat Tavat Logo",
      name: "Yavat Tavat",
      typeLabel: "Logo Design · Motion Animation"
    },
    {
      isVideo: false,
      lightbox: "images/mechi-tea.jpg",
      image: "images/mechi-tea.jpg",
      caption: "Mechi Tea Industries — Logo Design",
      alt: "Mechi Tea Logo",
      name: "Mechi Tea",
      typeLabel: "Logo Design · Brand Identity"
    },
    {
      isVideo: false,
      lightbox: "images/chineko-wears.jpg",
      image: "images/chineko-wears.jpg",
      caption: "Chineko Wears — Logo &amp; Brand Identity",
      alt: "Chineko Wears Logo",
      name: "Chineko Wears",
      typeLabel: "Logo Design · Brand Identity"
    }
  ],

  // Each inner array = one slide = 4 photos.
  // NOTE: these are still placeholder photos from the original build.
  // Replace with real BTS shots in /images/bts when you have them.
  btsSlides: [
    [
      { img: "https://picsum.photos/seed/bts1/600/800", cap: "On set — replace this photo" },
      { img: "https://picsum.photos/seed/bts2/600/800", cap: "Behind the camera — replace this photo" },
      { img: "https://picsum.photos/seed/bts3/600/800", cap: "Setting up the shot — replace this photo" },
      { img: "https://picsum.photos/seed/bts4/600/800", cap: "Golden hour — replace this photo" }
    ],
    [
      { img: "https://picsum.photos/seed/bts5/600/800", cap: "Directing the scene — replace this photo" },
      { img: "https://picsum.photos/seed/bts6/600/800", cap: "Crew moment — replace this photo" },
      { img: "https://picsum.photos/seed/bts7/600/800", cap: "Location scouting — replace this photo" },
      { img: "https://picsum.photos/seed/bts8/600/800", cap: "After the wrap — replace this photo" }
    ],
    [
      { img: "https://picsum.photos/seed/bts9/600/800", cap: "Studio session — replace this photo" },
      { img: "https://picsum.photos/seed/bts10/600/800", cap: "Lighting setup — replace this photo" },
      { img: "https://picsum.photos/seed/bts11/600/800", cap: "Between takes — replace this photo" },
      { img: "https://picsum.photos/seed/bts12/600/800", cap: "The magic hour — replace this photo" }
    ]
  ]
};
