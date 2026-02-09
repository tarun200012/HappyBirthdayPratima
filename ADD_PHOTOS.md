# 📸 How to Add Your Photos - Step by Step Guide

## Quick Steps:

### 1. Save Your Photos
- Save all the photos you shared to your computer
- Make sure they're in JPG or PNG format

### 2. Copy Photos to Project
Copy your photos to this folder:
```
src/assets/photos/
```

### 3. Rename Your Photos
Rename them to match these names (based on the memories I set up):

- **memory1.jpg** - The kissing face selfie (overexposed, gold nose ring)
- **memory2.jpg** - You sleeping on shoulder with smiley stickers
- **memory3.jpg** - Pink hearts background, cheek kiss
- **memory4.jpg** - Restaurant with neon lights, leaning on shoulder
- **memory5.jpg** - Outdoor photo, you leaning on me (first outdoor one)
- **memory6.jpg** - Playful photo behind bars, pouting
- **memory7.jpg** - Tilted selfie with red lipstick
- **memory8.jpg** - Night time selfie with greenish glow
- **memory9.jpg** - Outdoor photo with blue umbrella/canopy

### 4. Verify Paths
The code is already set up to look for these files. Just make sure:
- Files are named exactly: `memory1.jpg`, `memory2.jpg`, etc.
- They're in the `src/assets/photos/` folder
- File extensions match (.jpg or .png)

## Alternative: Use Different Names

If you want to use different file names, update `src/app/app.component.ts` around line 74:

Change:
```typescript
src: 'assets/photos/memory1.jpg',
```

To:
```typescript
src: 'assets/photos/your-photo-name.jpg',
```

## Adding More Photos

To add more photos beyond the 9 I set up:

1. Add photo to `src/assets/photos/` folder
2. Add new entry to the `memories` array in `app.component.ts`:

```typescript
{
  id: 10,
  src: 'assets/photos/memory10.jpg',
  type: 'image',
  description: 'Your personal message here 💕',
  flipped: false
}
```

## Testing

After adding photos:
1. Run `npm start`
2. Navigate to the gallery page
3. You should see your photos!

## Troubleshooting

**Photos not showing?**
- Check file names match exactly (case-sensitive)
- Check file extension (.jpg vs .JPG)
- Make sure files are in `src/assets/photos/` folder
- Check browser console for errors (F12)

**Want to use the photos you already have?**
Just rename them to match the memory1.jpg, memory2.jpg pattern!
