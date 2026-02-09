# Quick Setup Guide 🚀

## Step 1: Add Your Photos

1. **Create the photos folder** (if it doesn't exist):
   ```
   src/assets/photos/
   ```

2. **Add your photos** with these names:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - ... and so on

3. **Update the photo count** in `src/app/app.component.ts`:
   ```typescript
   photoCount = 12; // Change this to match your number of photos
   ```

## Step 2: Customize Your Message

Edit the `fullText` variable in `src/app/app.component.ts` (around line 20) with your personalized birthday message.

## Step 3: Test Locally

```bash
npm start
```

Visit `http://localhost:4200` to see your surprise!

## Step 4: Deploy to GitHub Pages

### Easy Method:

1. **Install deployment tool:**
   ```bash
   ng add angular-cli-ghpages
   ```

2. **Update repository name** in `package.json`:
   - Change `/valentine-proposal/` to `/your-repo-name/` in the build scripts

3. **Deploy:**
   ```bash
   ng deploy --base-href=/your-repo-name/
   ```

4. **Enable GitHub Pages:**
   - Go to your GitHub repo → Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

## Tips

- **Photo Size**: Keep photos under 500KB each for fast loading
- **Photo Format**: Use JPG format (smaller file size)
- **Test on Mobile**: Make sure it looks good on her phone!
- **Timing**: Send the link at the perfect moment 🎯

## Need Help?

Check the main README.md for more detailed instructions!
