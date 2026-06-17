# Playza Template

A high-impact, immersive single-page website template designed for music artists, bands, and entertainment brands. Features a dark cyberpunk aesthetic with neon accents, 3D album cube, parallax galleries, and smooth scroll-driven animations.

## Features

- Full-screen hero with animated text decode effect
- 3D rotating album cube (Three.js / React Three Fiber)
- Dual parallax image strips with scroll-driven movement
- Horizontal-scrolling gallery with pinned scroll
- Infinite marquee ticker
- Tour schedule section with venue previews
- Full-screen artist portrait with parallax overlay
- Comprehensive footer with social links, contact info, newsletter
- Lenis smooth scrolling integrated with GSAP ScrollTrigger
- Velocity-based motion blur and letter-spacing effects
- Fully responsive design (mobile, tablet, desktop)

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build**: Vite 7
- **Styling**: Tailwind CSS 3.4 + custom CSS animations
- **3D**: Three.js + React Three Fiber + Drei
- **Animation**: GSAP 3 + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

All site content is managed through a single file: `src/config.ts`. Edit only this file to customize the entire site.

### SiteConfig

```ts
siteConfig: {
  title: string;       // Browser tab title
  description: string; // Site meta description
  language: string;    // Language code (e.g., "en", "zh-CN")
}
```

### HeroConfig

```ts
heroConfig: {
  backgroundImage: string;     // Hero background image path (e.g., "/concert-1.jpg")
  brandName: string;           // Brand name shown in top-left logo
  decodeText: string;          // Main title text with decode animation
  decodeChars: string;         // Characters used in the decode scramble effect
  subtitle: string;            // Subtitle below the main title
  ctaPrimary: string;          // Primary CTA button text
  ctaPrimaryTarget: string;    // Section ID to scroll to (e.g., "tour")
  ctaSecondary: string;        // Secondary CTA button text
  ctaSecondaryTarget: string;  // Section ID to scroll to (e.g., "albums")
  cornerLabel: string;         // Top-right corner label text
  cornerDetail: string;        // Top-right corner detail text
  navItems: [                  // Navigation pill buttons
    {
      label: string;           // Button label text
      sectionId: string;       // Target section ID
      icon: "disc" | "play" | "calendar" | "music";
    }
  ];
}
```

### AlbumCubeConfig

```ts
albumCubeConfig: {
  albums: [                    // Album data for info overlay and progress dots
    {
      id: number;
      title: string;           // Album title (displayed large)
      subtitle: string;         // Subtitle text (background watermark + secondary label)
      image: string;           // Album cover image path
    }
  ];
  cubeTextures: string[];      // Exactly 6 image paths for cube faces
                               // Order: right, left, top, bottom, front, back
  scrollHint: string;          // Scroll hint text (bottom-right)
}
```

### ParallaxGalleryConfig

```ts
parallaxGalleryConfig: {
  sectionLabel: string;        // Small label above parallax section title
  sectionTitle: string;        // Parallax strips section title
  galleryLabel: string;        // Small label above gallery title
  galleryTitle: string;        // Horizontal gallery section title
  marqueeTexts: string[];      // Array of texts displayed in the marquee ticker
  endCtaText: string;          // CTA text at the end of the gallery
  parallaxImagesTop: [         // Top row images (move left on scroll)
    { id: number; src: string; alt: string; }
  ];
  parallaxImagesBottom: [      // Bottom row images (move right on scroll)
    { id: number; src: string; alt: string; }
  ];
  galleryImages: [             // Horizontal gallery images
    { id: number; src: string; title: string; date: string; }
  ];
}
```

### TourScheduleConfig

```ts
tourScheduleConfig: {
  sectionLabel: string;        // Small label above section title
  sectionTitle: string;        // Tour section title
  vinylImage: string;          // Spinning vinyl disc image path
  buyButtonText: string;       // Buy ticket button text
  detailsButtonText: string;   // Details button text
  bottomNote: string;          // Note text below tour list
  bottomCtaText: string;       // CTA button text below tour list
  statusLabels: {              // Status badge labels
    onSale: string;
    soldOut: string;
    comingSoon: string;
    default: string;
  };
  tourDates: [                 // Tour date entries
    {
      id: number;
      date: string;            // Format: "YYYY.MM.DD"
      time: string;            // Format: "HH:MM"
      city: string;
      venue: string;
      status: "on-sale" | "sold-out" | "coming-soon";
      image: string;           // Venue preview image path
    }
  ];
}
```

### FooterConfig

```ts
footerConfig: {
  portraitImage: string;         // Full-screen portrait image path
  portraitAlt: string;           // Portrait alt text
  heroTitle: string;             // Large overlay title text
  heroSubtitle: string;          // Subtitle below overlay title
  artistLabel: string;           // Small label above artist name
  artistName: string;            // Artist display name
  artistSubtitle: string;        // Artist subtitle text
  brandName: string;             // Brand name in footer
  brandDescription: string;      // Brand description paragraph
  quickLinksTitle: string;       // Quick links column title
  quickLinks: string[];          // Array of quick link labels
  contactTitle: string;          // Contact column title
  emailLabel: string;            // Email field label
  email: string;                 // Email address
  phoneLabel: string;            // Phone field label
  phone: string;                 // Phone number
  addressLabel: string;          // Address field label
  address: string;               // Physical address
  newsletterTitle: string;       // Newsletter column title
  newsletterDescription: string; // Newsletter description text
  newsletterButtonText: string;  // Subscribe button text
  subscribeAlertMessage: string; // Alert shown on subscribe click
  copyrightText: string;         // Copyright line text
  bottomLinks: string[];         // Bottom bar link labels
  socialLinks: [                 // Social media links
    {
      icon: "instagram" | "twitter" | "youtube" | "music";
      label: string;
      href: string;
    }
  ];
  galleryImages: [               // Footer image grid
    { id: number; src: string; }
  ];
}
```

## Required Images

Place all images in the `public/` directory. Recommended dimensions:

| Image | Recommended Size | Usage |
|-------|-----------------|-------|
| Hero background | 1920x1080px | Hero section background |
| Album covers (4) | 800x800px (square) | Album cube faces and album data |
| Cube extra texture | 800x800px (square) | Additional cube face texture |
| Concert/gallery photos (6+) | 800x500px | Parallax strips and gallery |
| Venue photos (4) | 800x600px | Tour schedule venue previews |
| Artist portrait | 800x1200px (2:3 ratio) | Footer portrait section |
| Vinyl disc | 400x400px (PNG, transparent) | Tour section spinning disc |

## Design Specifications

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Void Black | `#050508` | Primary background |
| Void Dark | `#0A0A0F` | Secondary dark background |
| Neon Cyan | `#00D4FF` | Primary accent, glows, links |
| Neon Blue | `#4D9FFF` | Secondary accent |
| Soft Blue | `#9DC4FF` | Tertiary accent, tour section background |

### Fonts

- **Display**: Inter (weight 800, tracking -0.02em) -- headings, brand name, buttons
- **Monospace**: JetBrains Mono -- labels, dates, code-style text, decode animation

### Animations

- Text decode effect (hero title scramble animation)
- GSAP-powered nav slide-in and subtitle fade-in
- Scroll-driven 3D cube rotation with velocity blur
- Dual-direction parallax image strips
- Horizontal pinned gallery scroll
- Infinite marquee ticker
- Tour items stagger-in on visibility
- Footer parallax title overlay
- Lenis smooth scrolling with GSAP ticker integration

## Project Structure

```
playza/
  index.html              # Entry HTML
  package.json            # Dependencies
  tailwind.config.js      # Tailwind theme (colors, fonts, animations)
  vite.config.ts          # Vite configuration
  postcss.config.js       # PostCSS configuration
  tsconfig.json           # TypeScript config
  public/
    images/               # Place your images here
      .gitkeep
  src/
    config.ts             # ** ALL CONTENT CONFIGURATION **
    main.tsx              # React entry point
    App.tsx               # Root component with Lenis init
    App.css               # Default Vite styles (can be removed)
    index.css             # Global styles, custom classes, animations
    sections/
      Hero.tsx            # Hero section with decode text effect
      AlbumCube.tsx       # 3D album cube with scroll rotation
      ParallaxGallery.tsx # Parallax strips + horizontal gallery
      TourSchedule.tsx    # Tour dates with venue preview
      Footer.tsx          # Artist portrait + footer content
    hooks/
      useLenis.ts         # Lenis smooth scroll hook
      useScrollTrigger.ts # ScrollTrigger utility hook
      use-mobile.ts       # Mobile breakpoint detection hook
    components/
      ui/                 # Radix UI component primitives
    lib/
      utils.ts            # Utility functions (cn)
```

## Notes

- Edit ONLY `src/config.ts` to change all site content.
- Do not modify section component files unless changing layout or animations.
- All animations are scroll-driven via GSAP ScrollTrigger and remain unchanged when updating content.
- The 3D cube requires exactly 6 textures in `cubeTextures` array.
- Images should be placed in `public/` and referenced with paths like `"/image-name.jpg"`.
- The template renders nothing when config fields are empty (null checks in each section).
