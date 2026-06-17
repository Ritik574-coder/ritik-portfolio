import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Ticket, ExternalLink } from 'lucide-react';
import { tourScheduleConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const TourSchedule = () => {
  // Null check: if config is empty, do not render
  if (tourScheduleConfig.tourDates.length === 0 && !tourScheduleConfig.sectionTitle) {
    return null;
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeVenue, setActiveVenue] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => setIsVisible(true),
    });

    scrollTriggerRef.current = st;

    return () => {
      st.kill();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.tour-item') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isVisible]);

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'on-sale':
        return { text: tourScheduleConfig.statusLabels.onSale, color: 'text-emerald-600 bg-emerald-100' };
      case 'sold-out':
        return { text: tourScheduleConfig.statusLabels.soldOut, color: 'text-rose-600 bg-rose-100' };
      case 'coming-soon':
        return { text: tourScheduleConfig.statusLabels.comingSoon, color: 'text-amber-600 bg-amber-100' };
      default:
        return { text: tourScheduleConfig.statusLabels.default, color: 'text-gray-600 bg-gray-100' };
    }
  };

  const TOUR_DATES = tourScheduleConfig.tourDates;

  return (
    <section
      id="tour"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#9DC4FF] py-20 overflow-hidden"
    >
      {/* Rotating vinyl disc */}
      {tourScheduleConfig.vinylImage && (
        <div className="absolute top-20 right-20 w-64 h-64 md:w-80 md:h-80 z-10 opacity-80">
          <img
            src={tourScheduleConfig.vinylImage}
            alt="Vinyl Disc"
            className="w-full h-full animate-spin-slow"
          />
        </div>
      )}

      {/* Content container */}
      <div ref={contentRef} className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono-custom text-xs text-[#1F1F1F]/60 uppercase tracking-wider mb-2">
            {tourScheduleConfig.sectionLabel}
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-[#1F1F1F]">
            {tourScheduleConfig.sectionTitle}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Venue preview */}
          {TOUR_DATES.length > 0 && (
            <div className="hidden lg:flex lg:items-center">
              <div className="sticky top-32 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1F1F1F]/10">
                <img
                  src={TOUR_DATES[activeVenue]?.image}
                  alt={TOUR_DATES[activeVenue]?.venue}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                {/* Venue info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1F1F1F] to-transparent">
                  <p className="font-display text-2xl text-white">
                    {TOUR_DATES[activeVenue]?.venue}
                  </p>
                  <p className="font-mono-custom text-sm text-white/70">
                    {TOUR_DATES[activeVenue]?.city}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Right: Tour list */}
          <div className="space-y-4">
            {TOUR_DATES.map((tour, index) => {
              const status = getStatusLabel(tour.status);

              return (
                <div
                  key={tour.id}
                  className="tour-item group relative p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-[#1F1F1F]/10 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setActiveVenue(index)}
                  onMouseLeave={() => setActiveVenue(0)}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Date */}
                    <div className="flex-shrink-0 w-28">
                      <p className="font-mono-custom text-2xl font-bold text-[#1F1F1F]">
                        {tour.date.split('.').slice(1).join('.')}
                      </p>
                      <p className="font-mono-custom text-xs text-[#1F1F1F]/50">
                        {tour.date.split('.')[0]}
                      </p>
                    </div>

                    {/* Venue info */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-[#1F1F1F]/50" />
                        <span className="font-display text-lg text-[#1F1F1F]">
                          {tour.city}
                        </span>
                      </div>
                      <p className="text-sm text-[#1F1F1F]/60 ml-6">
                        {tour.venue}
                      </p>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-2 text-[#1F1F1F]/60">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono-custom text-sm">{tour.time}</span>
                    </div>

                    {/* Status badge */}
                    <div className="flex-shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        {status.text}
                      </span>
                    </div>

                    {/* Action button */}
                    <div className="flex-shrink-0">
                      {tour.status === 'on-sale' ? (
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F1F1F] text-white rounded-full text-sm font-medium hover:bg-[#1F1F1F]/80 transition-colors">
                          <Ticket className="w-4 h-4" />
                          <span>{tourScheduleConfig.buyButtonText}</span>
                        </button>
                      ) : (
                        <button className="flex items-center gap-2 px-4 py-2 border border-[#1F1F1F]/20 text-[#1F1F1F]/60 rounded-full text-sm hover:border-[#1F1F1F]/40 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          <span>{tourScheduleConfig.detailsButtonText}</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1F1F1F] rounded-full group-hover:h-12 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="font-mono-custom text-sm text-[#1F1F1F]/60 mb-4">
            {tourScheduleConfig.bottomNote}
          </p>
          <button className="px-8 py-4 bg-[#1F1F1F] text-white font-display text-sm uppercase tracking-wider rounded-full hover:bg-[#1F1F1F]/80 transition-colors">
            {tourScheduleConfig.bottomCtaText}
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F1F1F]/20 to-transparent" />
    </section>
  );
};

export default TourSchedule;
