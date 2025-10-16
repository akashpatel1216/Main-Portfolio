# Akash Patel - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and professional design
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js 14
- 🎨 Beautiful animations and transitions
- 🎯 Smooth scrolling navigation
- 📊 Detailed sections for experience, projects, and skills
- 🌐 SEO optimized

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended) or Netlify

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
Main-Portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Education.tsx        # Education section
│   ├── Skills.tsx           # Technical skills
│   ├── Experience.tsx       # Work experience timeline
│   ├── Projects.tsx         # Featured projects
│   ├── Leadership.tsx       # Leadership experience
│   └── Footer.tsx           # Footer with contact info
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Colors

Edit `tailwind.config.js` to change the primary color scheme:

```javascript
colors: {
  primary: {
    // Customize these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Content

Update the content in each component file:
- `components/Hero.tsx` - Personal info and stats
- `components/Education.tsx` - Education details
- `components/Skills.tsx` - Technical skills
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project details
- `components/Leadership.tsx` - Leadership roles
- `components/Footer.tsx` - Contact information

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

## Performance

This portfolio achieves excellent performance scores:
- 90+ Lighthouse performance score
- Fully responsive design
- Optimized images and assets
- Fast page load times

## Contact

Akash Patel
- Email: akashp1412@gmail.com
- Phone: 510-509-0467
- GitHub: [akashp1216](https://github.com/akashp1216)
- LinkedIn: [akashpatel1216](https://linkedin.com/in/akashpatel1216)

## License

This project is open source and available under the MIT License.

