# 🎵 How to Add Background Music

## Step 1: Get Your Song

1. Download a romantic song (MP3 format)
2. Make sure it's a file you have rights to use
3. Keep it under 5MB for faster loading

## Step 2: Add to Project

1. Place your song file in: `src/assets/music/`
2. Rename it to: `birthday-song.mp3`
3. That's it! The code will automatically find it.

## Step 3: Test

1. Run `npm start`
2. Click the envelope
3. Music should start playing automatically!

## Music Control

- A music button (🔊/🔇) appears in the top-right corner after opening the envelope
- Click it to pause/play the music
- Music loops automatically
- Volume is set to 70% (you can adjust in code if needed)

## File Location

```
src/assets/music/birthday-song.mp3
```

## Supported Formats

- MP3 (recommended)
- OGG
- WAV (larger file size)

## Tips

- Use a romantic, soft song
- Keep file size reasonable (under 5MB)
- Test that it plays on different devices
- Make sure you have rights to use the song

## Adjust Volume

In `app.component.ts`, line ~60, change:
```typescript
this.audioPlayer.volume = 0.7; // Change 0.7 to any value between 0.0 and 1.0
```

## Troubleshooting

**Music not playing?**
- Check browser console for errors
- Make sure file is named exactly `birthday-song.mp3`
- Check file is in `src/assets/music/` folder
- Some browsers block autoplay - clicking envelope should work

**Music too loud/quiet?**
- Adjust volume in code (see above)
- Or use the browser's volume controls
