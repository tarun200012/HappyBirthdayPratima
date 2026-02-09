# Birthday Surprise Website 🎂💕

A beautiful, interactive Angular website created as a special birthday gift with photo reveals, typewriter effects, and romantic messages.

## Features

- 🎁 **Interactive Envelope Opening** - Click to reveal the surprise
- 🎉 **Confetti Animation** - Beautiful celebration effects
- ⌨️ **Typewriter Effect** - Romantic message types out letter by letter
- 📸 **Photo Reveals** - Click interactive elements to reveal your photos
- 🖼️ **Photo Gallery** - Beautiful grid layout of all your memories
- ✨ **Aesthetic Design** - Gradient backgrounds, floating particles, smooth animations

## Setup Instructions

### 1. Add Your Photos

1. Place your photos in the `src/assets/photos/` folder
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Or update the photo paths in `src/app/app.component.ts` (line ~40)

**Important:** 
- Resize photos to around 1200px width for faster loading
- Use JPG format for smaller file sizes
- Keep file names consistent (photo1.jpg, photo2.jpg, etc.)

### 2. Customize the Message

Edit the `fullText` variable in `src/app/app.component.ts` (around line 20) to customize your romantic message.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Locally

```bash
npm start
```

Open `http://localhost:4200` in your browser.

### 5. Build for Production

```bash
npm run build:prod
```

## Deploying to GitHub Pages

### Option 1: Using angular-cli-ghpages (Easiest)

1. Install the deployment tool:
```bash
ng add angular-cli-ghpages
```

2. Update `package.json` build script with your repository name:
```json
"build:prod": "ng build --configuration production --base-href=/your-repo-name/"
```

3. Deploy:
```bash
ng deploy --base-href=/your-repo-name/
```

4. Go to your GitHub repository → Settings → Pages
5. Select "Deploy from a branch" → choose `gh-pages` branch

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build:prod
```

2. The built files will be in `dist/valentine-proposal/` (or your project name)

3. Copy all files from the dist folder to a `docs` folder in your repo root

4. In GitHub Settings → Pages → select `docs` folder as source

## Customization Tips

### Change Number of Photos
Edit `photoCount` in `app.component.ts` (line ~35)

### Adjust Typewriter Speed
Change `typewriterSpeed` in `app.component.ts` (line ~30) - lower = faster

### Change Colors
Edit the gradient colors in `app.component.css`:
- Background gradients (line ~8)
- Button colors (various locations)
- Envelope colors (around line ~100)

### Add More Interactive Elements
The photo reveal system is extensible - add more items to the `photos` array in `app.component.ts`

## Project Structure

```
src/
├── app/
│   ├── app.component.ts      # Main component logic
│   ├── app.component.html    # Template
│   ├── app.component.css     # Styles
│   ├── app.module.ts         # Module configuration
│   └── line-breaks.pipe.ts   # Pipe for line breaks
├── assets/
│   └── photos/               # Place your photos here
└── index.html                # Main HTML file
```

## Technologies Used

- Angular 17
- TypeScript
- CSS3 Animations
- Angular Animations Module

## Tips for Best Experience

1. **Photo Optimization**: Compress photos before adding them
2. **Test on Mobile**: Make sure it looks good on her phone
3. **Preview First**: Test the full flow before sending the link
4. **Timing**: Send the link at the perfect moment! 🎯

## License

Made with love 💕
