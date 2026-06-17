// =============================================================================
// Site Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Ritik Kumar | Data Engineer & AI Innovator",
  description: "Portfolio of Ritik Kumar - Data Engineer focused on building scalable ETL/ELT pipelines and modern cloud-based data architectures. Founder of RitSky Global.",
  language: "en",
};

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: assetPath("hero-bg.jpg"),
  brandName: "RITIK KUMAR",
  decodeText: "DATA ENGINEER",
  decodeChars: "<>[]{}|/\\!@#$%^&*",
  subtitle: "Building scalable ETL/ELT pipelines & cloud data architectures. Founder of RitSky Global.",
  ctaPrimary: "View Projects",
  ctaPrimaryTarget: "projects",
  ctaSecondary: "Get in Touch",
  ctaSecondaryTarget: "contact",
  cornerLabel: "BASED IN",
  cornerDetail: "PATNA, INDIA",
  navItems: [
    { label: "Projects", sectionId: "projects", icon: "disc" },
    { label: "Skills", sectionId: "skills", icon: "play" },
    { label: "Experience", sectionId: "experience", icon: "calendar" },
    { label: "Contact", sectionId: "contact", icon: "music" },
  ],
};

// -- Album Cube Section (Projects Showcase) -----------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    {
      id: 1,
      title: "DBT DATA WAREHOUSE",
      subtitle: "SQL SERVER • ETL • DBT",
      image: assetPath("project-dbt.jpg"),
    },
    {
      id: 2,
      title: "DATA ECOSYSTEM",
      subtitle: "LAKEHOUSE • ARCHITECTURE",
      image: assetPath("project-ecosystem.jpg"),
    },
    {
      id: 3,
      title: "PYTHON MASTERY",
      subtitle: "FOUNDATIONS • ADVANCED",
      image: assetPath("project-python.jpg"),
    },
    {
      id: 4,
      title: "SQL SERVER",
      subtitle: "DATABASE • QUERY OPTIMIZATION",
      image: assetPath("project-sql.jpg"),
    },
  ],
  cubeTextures: [
    assetPath("cube-1.jpg"),
    assetPath("cube-2.jpg"),
    assetPath("cube-3.jpg"),
    assetPath("cube-4.jpg"),
    assetPath("cube-5.jpg"),
    assetPath("cube-6.jpg"),
  ],
  scrollHint: "Scroll to explore projects →",
};

// -- Parallax Gallery Section (Skills & Technologies) -------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "TECHNICAL EXPERTISE",
  sectionTitle: "SKILLS & TECHNOLOGIES",
  galleryLabel: "TOOLS & PLATFORMS",
  galleryTitle: "MY TECH STACK",
  marqueeTexts: [
    "PYTHON • SQL • AZURE • AWS • DATABRICKS • POWER BI • TABLEAU • DBT • AIRFLOW • SPARK •",
    "ETL/ELT • DATA WAREHOUSING • DATA MODELING • CLOUD ARCHITECTURE • MACHINE LEARNING •",
  ],
  endCtaText: "Explore My GitHub",
  parallaxImagesTop: [
    { id: 1, src: assetPath("skill-1.jpg"), alt: "Python Programming" },
    { id: 2, src: assetPath("skill-2.jpg"), alt: "SQL Database" },
    { id: 3, src: assetPath("skill-3.jpg"), alt: "Azure Cloud" },
    { id: 4, src: assetPath("skill-4.jpg"), alt: "Data Visualization" },
    { id: 5, src: assetPath("skill-5.jpg"), alt: "ETL Pipeline" },
    { id: 6, src: assetPath("skill-6.jpg"), alt: "Cloud Architecture" },
  ],
  parallaxImagesBottom: [
    { id: 7, src: assetPath("skill-7.jpg"), alt: "Databricks" },
    { id: 8, src: assetPath("skill-8.jpg"), alt: "Power BI Dashboard" },
    { id: 9, src: assetPath("skill-9.jpg"), alt: "Data Analytics" },
    { id: 10, src: assetPath("skill-10.jpg"), alt: "Machine Learning" },
    { id: 11, src: assetPath("skill-11.jpg"), alt: "Big Data" },
    { id: 12, src: assetPath("skill-12.jpg"), alt: "Data Engineering" },
  ],
  galleryImages: [
    { id: 1, src: assetPath("tech-python.jpg"), title: "Python", date: "Pandas • NumPy • PySpark" },
    { id: 2, src: assetPath("tech-sql.jpg"), title: "SQL/T-SQL", date: "PostgreSQL • SQL Server • MongoDB" },
    { id: 3, src: assetPath("tech-azure.jpg"), title: "Azure", date: "Synapse • Data Factory • Databricks" },
    { id: 4, src: assetPath("tech-aws.jpg"), title: "AWS", date: "Redshift • Glue • S3" },
    { id: 5, src: assetPath("tech-powerbi.jpg"), title: "Power BI", date: "DAX • Advanced Visualizations" },
    { id: 6, src: assetPath("tech-dbt.jpg"), title: "DBT", date: "Data Transformation • Testing" },
  ],
};

// -- Tour Schedule Section (Experience & Certifications) ----------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "PROFESSIONAL JOURNEY",
  sectionTitle: "EXPERIENCE & MILESTONES",
  vinylImage: assetPath("vinyl-disc.png"),
  buyButtonText: "View Certificate",
  detailsButtonText: "Learn More",
  bottomNote: "Continuously learning and growing in the data engineering space",
  bottomCtaText: "Connect on LinkedIn",
  statusLabels: {
    onSale: "Completed",
    soldOut: "In Progress",
    comingSoon: "Upcoming",
    default: "View",
  },
  tourDates: [
    {
      id: 1,
      date: "2024.01",
      time: "2+ Years",
      city: "Data Engineering",
      venue: "Self-Learning & Projects",
      status: "on-sale",
      image: assetPath("exp-1.jpg"),
    },
    {
      id: 2,
      date: "2024.06",
      time: "Founder",
      city: "RitSky Global",
      venue: "AI-Powered Export Analytics",
      status: "on-sale",
      image: assetPath("exp-2.jpg"),
    },
    {
      id: 3,
      date: "2025.03",
      time: "Learning",
      city: "Azure Data Engineer",
      venue: "Microsoft Certification",
      status: "coming-soon",
      image: assetPath("exp-3.jpg"),
    },
    {
      id: 4,
      date: "2025.06",
      time: "Learning",
      city: "Google Cloud Data Engineer",
      venue: "GCP Certification",
      status: "coming-soon",
      image: assetPath("exp-4.jpg"),
    },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: assetPath("portrait.jpg"),
  portraitAlt: "Ritik Kumar - Data Engineer",
  heroTitle: "LET'S BUILD",
  heroSubtitle: "DATA SOLUTIONS TOGETHER",
  artistLabel: "DATA ENGINEER",
  artistName: "RITIK KUMAR",
  artistSubtitle: "Founder & CEO, RitSky Global",
  brandName: "RITSKY GLOBAL",
  brandDescription: "Empowering global businesses through data-driven insights and AI-powered solutions. Building bridges between raw data and strategic decision-making.",
  quickLinksTitle: "Quick Links",
  quickLinks: ["GitHub", "LinkedIn", "Tableau Public", "Medium"],
  contactTitle: "Get in Touch",
  emailLabel: "Email",
  email: "ritik@ritskyglobal.com",
  phoneLabel: "Phone",
  phone: "+91 XXX XXX XXXX",
  addressLabel: "Location",
  address: "Patna, Bihar, India",
  newsletterTitle: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates on new projects, blog posts, and data engineering insights.",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Thanks for subscribing! You'll receive updates soon.",
  copyrightText: "© 2026 Ritik Kumar. All rights reserved.",
  bottomLinks: ["Privacy Policy", "Terms of Service", "GitHub"],
  socialLinks: [
    { icon: "twitter", label: "Twitter/X", href: "https://x.com/KarlX279873" },
    { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/ritik_sky1/" },
    { icon: "youtube", label: "LinkedIn", href: "https://www.linkedin.com/in/ritik-kumar-b81b32375/" },
    { icon: "music", label: "Tableau", href: "https://public.tableau.com/app/profile/ritik.sky" },
  ],
  galleryImages: [
    { id: 1, src: assetPath("gallery-1.jpg") },
    { id: 2, src: assetPath("gallery-2.jpg") },
    { id: 3, src: assetPath("gallery-3.jpg") },
    { id: 4, src: assetPath("gallery-4.jpg") },
    { id: 5, src: assetPath("gallery-5.jpg") },
    { id: 6, src: assetPath("gallery-6.jpg") },
  ],
};
