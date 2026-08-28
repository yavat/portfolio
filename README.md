# In The Making — Portfolio

## What changed

Your old site had every photo and the logo animation video embedded
directly inside the HTML as base64 text. That's why every edit felt
so painful — the file was ~1.5MB of mostly unreadable text, and any
change meant hunting through a giant blob to find the right spot.

This version splits it into normal files:

```
index.html        ← page structure only (~9KB, was ~1.5MB)
style.css          ← all the styling
script.js          ← cursor, lightbox, scroll animations, BTS slider
works-data.js       ← ← YOU EDIT THIS to add/remove/change portfolio items
render.js           ← builds the cards from works-data.js (don't need to touch)
images/             ← actual image files
videos/             ← actual video files
```

## How to update the site from now on

**To add a new film/podcast card or a new logo/design card:**
1. Drop the image into `/images` (give it a clear filename, e.g. `my-new-project.jpg`)
2. Open `works-data.js`
3. Copy one of the existing entries in `filmWorks` or `designWorks`, paste it, and edit the text/filename
4. Save, commit, push. Done — no HTML editing.

**To swap the BTS (behind-the-scenes) placeholder photos for real ones:**
1. Drop your real photos into `/images`
2. In `works-data.js`, find `btsSlides` and replace the `picsum.photos` URLs with your image paths, and update the captions

## One thing to fix before you push

`NIAR_WICHITA.png` (the NASA Space Apps poster) was hosted directly at
`in-the-makings.com/NIAR_WICHITA.png` on your old site rather than
embedded — I couldn't download it from my end (network restrictions
on my side). Grab that file from your current hosting or your own
archive and drop it in the same folder as `index.html` (site root,
not inside `/images` — the code already points there) before you
push this up.

## Deploying

Same as before — push this whole folder to your GitHub Pages repo.
Nothing about the hosting changes, just the internal file structure.
