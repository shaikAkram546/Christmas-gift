# 🎄 A Special Christmas Surprise - Gift Reveal App

A magical, interactive Christmas gift reveal experience built with modern web technologies. Features PIN verification, beautiful animations, gift card display, and downloadable gift images.

## ✨ Features

- 🎅 Festive landing page with animated Santa-themed image gallery
- 🎁 Interactive gift box animation
- 🔐 PIN verification modal (8-digit PIN entry)
- 🎉 Fireworks and sparkle animations on gift reveal
- 💝 Beautiful gift card display with copy-to-clipboard functionality
- 📥 Download gift images functionality
- 🎵 Background music support
- ❄️ Snowfall effects and festive decorations
- 🎨 Red gradient theme with gold accents
- 📱 Fully responsive design

## 🛠️ Technologies

This project is built with:

- **Vite** - Lightning-fast build tool
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn-ui** - High-quality UI components
- **Lucide Icons** - Beautiful SVG icons

## 🚀 Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation & Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd gift-bharath

# Install dependencies
npm install

# Start development server with hot reload
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```sh
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## 📝 Configuration

### Update PIN

Edit the PIN verification in `src/pages/Index.tsx`:
```tsx
correctPin={"17291729"}
```

### Update Gift Code & Amount

Edit the gift card details in `src/components/GiftReveal.tsx`:
```tsx
const giftCode = "7YRJ-NXFCQN-U3H3";
const giftAmount = "1000";
```

### Update Download Image

Place your gift image in the `public/` folder and update `src/pages/Index.tsx`:
```tsx
downloadImageUrl="/gift-card.jpg"
```

## 🎨 Customization

- **Colors**: Update Tailwind CSS custom colors in `tailwind.config.ts`
- **Animations**: CSS animations defined in `src/index.css`
- **Text**: Update greeting and messages in `src/pages/Index.tsx`
- **Images**: Replace image URLs or add local images to `public/` folder

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── AnimatedGiftBox.tsx
│   ├── PinVerificationModal.tsx
│   ├── GiftReveal.tsx
│   ├── Snowfall.tsx
│   └── ui/             # shadcn-ui components
├── pages/
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx
├── lib/                # Utilities
├── hooks/              # React hooks
└── App.tsx
```

## 🌐 Deployment

Deploy to your preferred platform:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag & drop or connect Git repository
- **GitHub Pages**: Run `npm run build` and push `dist/` folder

## 📄 License

This project is open source and available under the MIT License.

## 🎁 Enjoy!

Spread Christmas joy and make someone's day magical! 🎄✨
