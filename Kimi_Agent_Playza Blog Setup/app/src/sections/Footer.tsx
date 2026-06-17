import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Twitter, Youtube, Music2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_ICON_MAP = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  music: Music2,
};

const Footer = () => {
  // Null check: if config is empty, do not render
  if (!footerConfig.brandName && !footerConfig.heroTitle && footerConfig.socialLinks.length === 0) {
    return null;
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const scrollTriggerRefs = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax title effect
      if (titleRef.current && portraitRef.current) {
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            if (titleRef.current) {
              // Title moves faster than portrait
              gsap.set(titleRef.current, {
                y: -self.progress * 100,
              });
            }
          },
        });
        scrollTriggerRefs.current.push(st);
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      scrollTriggerRefs.current.forEach(st => st.kill());
      scrollTriggerRefs.current = [];
    };
  }, []);

  const handleContactClick = () => {
    if (footerConfig.subscribeAlertMessage) {
      alert(footerConfig.subscribeAlertMessage);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-void-black overflow-hidden"
    >
      {/* Artist portrait section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background portrait */}
        <div
          ref={portraitRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full max-w-2xl aspect-[2/3] mx-auto">
            <img
              src={footerConfig.portraitImage}
              alt={footerConfig.portraitAlt}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-void-black via-transparent to-transparent opacity-50" />
          </div>
        </div>

        {/* Parallax title overlay */}
        <div
          ref={titleRef}
          className="relative z-10 text-center will-change-transform"
        >
          <h2 className="font-display text-[15vw] text-white leading-none tracking-tighter">
            {footerConfig.heroTitle}
          </h2>
          <p className="font-mono-custom text-lg text-neon-soft/60 uppercase tracking-[0.5em] mt-4">
            {footerConfig.heroSubtitle}
          </p>
        </div>

        {/* Artist name */}
        <div className="absolute bottom-20 left-12 z-20">
          <p className="font-mono-custom text-xs text-white/40 uppercase tracking-wider mb-2">
            {footerConfig.artistLabel}
          </p>
          <h3 className="font-display text-4xl text-white">{footerConfig.artistName}</h3>
          <p className="font-mono-custom text-sm text-neon-soft/60">{footerConfig.artistSubtitle}</p>
        </div>
      </div>

      {/* Footer content */}
      <div className="relative bg-void-black py-20 px-6 md:px-12">
        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Footer grid - Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                  <Music2 className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="font-display text-2xl text-white">{footerConfig.brandName}</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                {footerConfig.brandDescription}
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {footerConfig.socialLinks.map((social) => {
                  const IconComponent = SOCIAL_ICON_MAP[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-wider text-white mb-6">
                {footerConfig.quickLinksTitle}
              </h4>
              <ul className="space-y-3">
                {footerConfig.quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-neon-soft transition-colors flex items-center gap-2 group"
                    >
                      <span>{link}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-wider text-white mb-6">
                {footerConfig.contactTitle}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neon-soft/60 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50">{footerConfig.emailLabel}</p>
                    <a href={`mailto:${footerConfig.email}`} className="text-sm text-white hover:text-neon-soft transition-colors">
                      {footerConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-neon-soft/60 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50">{footerConfig.phoneLabel}</p>
                    <span className="text-sm text-white">{footerConfig.phone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neon-soft/60 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50">{footerConfig.addressLabel}</p>
                    <span className="text-sm text-white">{footerConfig.address}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-wider text-white mb-6">
                {footerConfig.newsletterTitle}
              </h4>
              <p className="text-sm text-white/50 mb-4">
                {footerConfig.newsletterDescription}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan/50"
                />
                <button
                  onClick={handleContactClick}
                  className="px-4 py-3 bg-neon-cyan/20 text-neon-cyan rounded-lg text-sm font-medium hover:bg-neon-cyan/30 transition-colors"
                >
                  {footerConfig.newsletterButtonText}
                </button>
              </div>
            </div>
          </div>

          {/* Footer image grid */}
          {footerConfig.galleryImages.length > 0 && (
            <div className="mb-12">
              <p className="font-mono-custom text-xs text-white/30 uppercase tracking-wider mb-4">
                Gallery
              </p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {footerConfig.galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative aspect-square overflow-hidden rounded-lg footer-grid-item cursor-pointer"
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        hoveredImage === index ? 'scale-110 brightness-110' : 'brightness-75'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 font-mono-custom">
              {footerConfig.copyrightText}
            </p>
            <div className="flex gap-6">
              {footerConfig.bottomLinks.map((link) => (
                <a key={link} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
