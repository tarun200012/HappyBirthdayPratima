# How to Add Your Memories 📸

## Adding Photos

1. **Place your photos** in `src/assets/photos/` folder
2. **Name them**: `memory1.jpg`, `memory2.jpg`, `memory3.jpg`, etc.
3. **Update the memories array** in `src/app/app.component.ts`

## Adding Videos (3-4 second clips)

1. **Place your videos** in `src/assets/videos/` folder
2. **Name them**: `memory10.mp4`, `memory11.mp4`, etc.
3. **Add to memories array** with `type: 'video'`

## Example Memory Entry

```typescript
{
  id: 10,
  src: 'assets/videos/memory10.mp4',
  type: 'video',
  description: 'That moment when you were laughing so hard. Your laugh is my favorite sound in the world 😂',
  flipped: false
}
```

## Tips

- **Photo format**: Use JPG for photos (smaller file size)
- **Video format**: Use MP4 for videos
- **File size**: Keep videos under 5MB for fast loading
- **Video length**: 3-4 seconds works best
- **Descriptions**: Write what you think/feel about that memory - be personal and romantic!

## Current Memories Setup

I've already added 9 memories based on the photos you shared. You can:
1. Replace the placeholder paths with your actual photo paths
2. Update the descriptions to be more personal
3. Add more memories by copying the format

## Video Features

- Videos auto-play on hover (when card is not flipped)
- Videos pause when you move mouse away
- Videos loop automatically
- Click to play/pause when card is flipped
