import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PropertyModal } from './components/PropertyModal';
import { ContactModal } from './components/ContactModal';
import { MortgageModal } from './components/MortgageModal';
import { SavedDrawer } from './components/SavedDrawer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { propertiesData } from './data/mockData';
import { Property, Agent, SearchFilterState } from './types';

// Multi-page Views
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { AgentsPage } from './pages/AgentsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { CalculatorPage } from './pages/CalculatorPage';

export default function App() {
  const [properties] = useState<Property[]>(propertiesData);
  const [filters, setFilters] = useState<SearchFilterState>({
    location: '',
    propertyType: '',
    priceRange: '',
    status: 'All',
    keyword: ''
  });

  // Saved properties state with localStorage persistence
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pressmart_saved_properties') || localStorage.getItem('nexhomy_saved_properties');
      return saved ? JSON.parse(saved) : ['prop-1'];
    } catch {
      return ['prop-1'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pressmart_saved_properties', JSON.stringify(savedPropertyIds));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }, [savedPropertyIds]);

  const toggleSaveProperty = (id: string) => {
    setSavedPropertyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Global Modals state
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedMortgageProperty, setSelectedMortgageProperty] = useState<Property | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [contactTargetProperty, setContactTargetProperty] = useState<Property | null>(null);
  const [contactTargetAgent, setContactTargetAgent] = useState<Agent | null>(null);

  // Direct Agent contact trigger
  const handleContactAgent = (agent: Agent) => {
    setContactTargetAgent(agent);
    setContactTargetProperty(null);
    setIsContactModalOpen(true);
  };

  // Direct Tour booking trigger
  const handleBookTour = (property: Property) => {
    setContactTargetProperty(property);
    setContactTargetAgent(null);
    setSelectedProperty(null);
    setIsContactModalOpen(true);
  };

  // General contact trigger from header/footer
  const handleOpenGeneralContact = () => {
    setContactTargetProperty(null);
    setContactTargetAgent(null);
    setIsContactModalOpen(true);
  };

  const savedPropertiesList = properties.filter((p) => savedPropertyIds.includes(p.id));

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F8F9FA] text-[#1E232A] flex flex-col selection:bg-[#FDD835] selection:text-black">
        {/* Top Navigation Bar with multi-page routes */}
        <Navbar
          onOpenContact={handleOpenGeneralContact}
          savedCount={savedPropertyIds.length}
          onOpenSaved={() => setIsSavedDrawerOpen(true)}
        />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  properties={properties}
                  filters={filters}
                  onFilterChange={setFilters}
                  onSelectProperty={setSelectedProperty}
                  savedPropertyIds={savedPropertyIds}
                  onToggleSave={toggleSaveProperty}
                  onOpenMortgage={(prop) => setSelectedMortgageProperty(prop)}
                  onOpenContact={handleOpenGeneralContact}
                />
              }
            />

            <Route
              path="/properties"
              element={
                <PropertiesPage
                  properties={properties}
                  filters={filters}
                  onFilterChange={setFilters}
                  onSelectProperty={setSelectedProperty}
                  savedPropertyIds={savedPropertyIds}
                  onToggleSave={toggleSaveProperty}
                  onOpenMortgage={(prop) => setSelectedMortgageProperty(prop)}
                />
              }
            />

            <Route
              path="/properties/:id"
              element={
                <PropertyDetailPage
                  properties={properties}
                  savedPropertyIds={savedPropertyIds}
                  onToggleSave={toggleSaveProperty}
                  onBookTour={handleBookTour}
                  onOpenMortgage={(prop) => setSelectedMortgageProperty(prop)}
                />
              }
            />

            <Route
              path="/agents"
              element={<AgentsPage onContactAgent={handleContactAgent} />}
            />

            <Route
              path="/about"
              element={<AboutPage onOpenContact={handleOpenGeneralContact} />}
            />

            <Route
              path="/blogs"
              element={<BlogsPage />}
            />

            <Route
              path="/calculator"
              element={<CalculatorPage />}
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer with Multi-Page routing */}
        <Footer onOpenContact={handleOpenGeneralContact} />

        {/* Interactive Modals & Drawers */}
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onOpenMortgage={(prop) => {
            setSelectedProperty(null);
            setSelectedMortgageProperty(prop);
          }}
          isSaved={selectedProperty ? savedPropertyIds.includes(selectedProperty.id) : false}
          onToggleSave={toggleSaveProperty}
          onBookTour={handleBookTour}
        />

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => {
            setIsContactModalOpen(false);
            setContactTargetProperty(null);
            setContactTargetAgent(null);
          }}
          targetProperty={contactTargetProperty}
          targetAgent={contactTargetAgent}
        />

        <MortgageModal
          property={selectedMortgageProperty}
          onClose={() => setSelectedMortgageProperty(null)}
        />

        <SavedDrawer
          isOpen={isSavedDrawerOpen}
          onClose={() => setIsSavedDrawerOpen(false)}
          savedProperties={savedPropertiesList}
          onRemove={toggleSaveProperty}
          onSelectProperty={setSelectedProperty}
        />

        {/* Floating WhatsApp Contact Desk */}
        <WhatsAppWidget phoneNumber="+2347086429976" />
      </div>
    </HashRouter>
  );
}
