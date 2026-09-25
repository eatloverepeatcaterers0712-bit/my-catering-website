/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscountBanner } from './components/DiscountBanner';
import { ServicesSection } from './components/ServicesSection';
import { SpecialitiesSection } from './components/SpecialitiesSection';
import { MenuSection } from './components/MenuSection';
import { CostCalculator } from './components/CostCalculator';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [prefillDetails, setPrefillDetails] = useState<
    | {
        packageName?: string;
        guestCount?: number;
        estimatedPrice?: number;
        discountAmount?: number;
      }
    | undefined
  >(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setPrefillDetails(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithDetails = (details: {
    packageName: string;
    guestCount: number;
    estimatedPrice: number;
    discountAmount: number;
  }) => {
    setPrefillDetails(details);
    setSelectedServiceId(undefined);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedServiceId(undefined);
    setPrefillDetails(undefined);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f4efe8] flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreMenu={handleExploreMenu}
        />

        {/* Promo Ribbon: Flat 10% Off First Catering */}
        <DiscountBanner onClaim={() => handleOpenBooking()} />

        {/* 4 Core Services: Birthday, Wedding, Outdoor, Bhandara */}
        <ServicesSection
          onSelectService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Brand Specialities: 100% Pure Veg, Delhi Swad, 24/7 Availability, Hygiene, Starting ₹5000 */}
        <SpecialitiesSection />

        {/* Sample Menu: Everything You Need - Authentic North Indian Delicacies */}
        <MenuSection onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Pricing Estimator & WhatsApp Quote Generator */}
        <CostCalculator
          onOpenBookingWithDetails={handleOpenBookingWithDetails}
        />

        {/* Photo Gallery: Birthday, Wedding, Outdoor, Bhandara */}
        <GallerySection />

        {/* About Us & Mission Statement */}
        <AboutSection />

        {/* Verified Social Proof & FAQs */}
        <TestimonialsFaq />

        {/* Contact Section & 24/7 Availability Details */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (<= 15% mobile viewport cap) */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking / Quotation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={selectedServiceId}
        prefillDetails={prefillDetails}
      />
    </div>
  );
}
