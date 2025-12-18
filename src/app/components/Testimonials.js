"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  // Handle touch swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  const currentTestimonial = testimonials[current];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Testimonial Card */}
      <div className="bg-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-white/10 min-h-[400px] flex flex-col items-center justify-center text-center">
        {/* Profile Picture */}
        <div className="mb-6">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#ff5a0d]"
          />
        </div>

        {/* Name and Source */}
        <div className="mb-6">
          <p className="text-xl md:text-2xl font-semibold text-white mb-1">
            {currentTestimonial.name}
          </p>
          <p className="text-white/60 text-sm md:text-base">
            ({currentTestimonial.source})
          </p>
        </div>

        {/* Quote */}
        <blockquote className="text-lg md:text-xl text-white/90 mb-6 italic leading-relaxed">
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Star Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, idx) => (
            <Star
              key={idx}
              className={`w-5 h-5 md:w-6 md:h-6 ${
                idx < currentTestimonial.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-600 text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Left Arrow - Hidden on mobile */}
      <button
        onClick={prev}
        className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow - Hidden on mobile */}
      <button
        onClick={next}
        className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-[#ff5a0d] w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
