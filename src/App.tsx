import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileText,
  Truck,
  Wallet,
  Recycle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  ChevronUp,
  Hammer,
  CircuitBoard,
  FileStack,
  Package,
  Scale,
  Shield,
  Clock,
  CreditCard,
  MessageSquare,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';

const TERMS_KEY = 'nescrap_terms_accepted';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem(TERMS_KEY);
    if (accepted === 'true') {
      setTermsAccepted(true);
    } else {
      setShowTermsModal(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAcceptTerms = () => {
    sessionStorage.setItem(TERMS_KEY, 'true');
    setTermsAccepted(true);
    setShowTermsModal(false);
  };

  const openForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfzi7rvFMiMGpdkR1d4RSjmtTJYOIOYUZq84sw1PALf9zAG5g/viewform?usp=publish-editor', '_blank');
  };

  const materials = [
    { name: 'Iron & Steel', icon: Hammer, color: 'text-gray-600' },
    { name: 'Copper & Brass', icon: Recycle, color: 'text-orange-500' },
    { name: 'E-Waste', icon: CircuitBoard, color: 'text-blue-600' },
    { name: 'Paper & Cardboard', icon: FileStack, color: 'text-amber-600' },
    { name: 'Plastics', icon: Package, color: 'text-green-600' },
    { name: 'Aluminum', icon: Recycle, color: 'text-gray-500' },
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Details',
      description: 'Fill out the form below with your scrap details',
      icon: FileText,
    },
    {
      number: '02',
      title: 'We Evaluate & Pickup',
      description: 'Our team reviews and schedules a pickup at your location',
      icon: Truck,
    },
    {
      number: '03',
      title: 'Get Paid',
      description: 'Instant payment upon weighing and verification',
      icon: Wallet,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Terms & Conditions Popup Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex-shrink-0 bg-slate-900 text-white px-6 py-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-green rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Terms & Conditions</h2>
                <p className="text-gray-400 text-sm">Please read carefully before continuing</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              <p className="text-slate-700 leading-relaxed font-medium">
                Welcome to NORTHEAST SCRAP CO. By accessing or using our website, submitting a quote request, or communicating with us via WhatsApp or other channels, you agree to comply with and be bound by the following Terms and Conditions.
              </p>

              <div className="border-l-4 border-accent-green pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-accent-green" />
                  1. Services Overview
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Our website serves as a digital platform for users in Northeast Assam to request evaluations, quotes, and pickups for industrial, commercial, and household scrap materials. The submission of a form does not constitute a legally binding contract of sale.
                </p>
              </div>

              <div className="border-l-4 border-accent-orange pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-accent-orange" />
                  2. Quotations and Final Pricing
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2">
                    <strong className="text-slate-900 whitespace-nowrap">Market Fluctuations:</strong>
                    <span>Scrap material prices are subject to daily market fluctuations. Any estimated price provided via phone, WhatsApp, or email is provisional.</span>
                  </li>
                  <li className="flex gap-2">
                    <strong className="text-slate-900 whitespace-nowrap">Final Evaluation:</strong>
                    <span>The final price and acceptance of the scrap are strictly determined after our team conducts a physical inspection and weighs the material using our calibrated weighbridges or weighing equipment.</span>
                  </li>
                  <li className="flex gap-2">
                    <strong className="text-slate-900 whitespace-nowrap">Right of Refusal:</strong>
                    <span>We reserve the right to refuse any materials that are hazardous, illegally obtained, heavily contaminated, or mischaracterized in the initial online submission.</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  3. User Submissions and Accuracy
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm mb-2">
                  When you submit your information via our online form or WhatsApp:
                </p>
                <ul className="space-y-1.5 text-slate-700 text-sm list-disc list-inside">
                  <li>You agree to provide true, accurate, and current information regarding your location, contact details, and the type/estimated weight of the scrap.</li>
                  <li>You warrant that you are the legal owner of the materials being offered for sale or have the authorized right to sell them.</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-600 pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  4. Pickups and Logistics
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>Scheduling a pickup is subject to vehicle availability, location feasibility, and the estimated volume of scrap.</li>
                  <li>NORTHEAST SCRAP CO. is not liable for any delays in pickup times due to traffic, weather, or operational constraints.</li>
                  <li>You are responsible for ensuring our vehicles and personnel have safe and legal access to the pickup location.</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-green-600" />
                  5. Payments
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Payments for purchased scrap will be disbursed immediately upon final weighing, mutual agreement on the price, and the generation of the weighbridge/payment slip. Payments may be made via cash, bank transfer, or UPI, subject to Indian financial regulations and limits.
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-teal-600" />
                  6. Communication
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  By submitting your phone number, you consent to receive communications from NORTHEAST SCRAP CO. regarding your scrap inquiry via WhatsApp, SMS, or phone call.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  7. Limitation of Liability
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  NORTHEAST SCRAP CO. shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of this website, the failure to secure a scrap pickup, or property damage occurring during the pickup process unless caused by gross negligence on our part.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-purple-600" />
                  8. Governing Law and Jurisdiction
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms, the use of the website, or the transaction of scrap materials shall be subject to the exclusive jurisdiction of the courts located in Assam, India.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-indigo-600" />
                  9. Changes to These Terms
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  We reserve the right to modify these Terms and Conditions at any time. Any changes will be updated on this page with a revised "Effective Date."
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 text-center">
                <p className="text-slate-500 text-xs">
                  Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex-shrink-0 bg-gray-50 border-t border-gray-200 px-6 py-5">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleAcceptTerms}
                  className="bg-accent-green hover:bg-green-700 text-white px-10 py-3.5 rounded-xl font-semibold text-base transition-all hover:shadow-lg hover:shadow-green-200"
                >
                  I Agree & Continue
                </button>
              </div>
              <p className="text-center text-slate-500 text-xs mt-3">
                By clicking "I Agree & Continue", you accept all the terms listed above.
              </p>
            </div>

            {/* Scroll hint for mobile */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 pointer-events-none sm:hidden">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}

      {/* Main Content - blurred until terms accepted */}
      <div className={termsAccepted ? '' : 'filter blur-sm pointer-events-none select-none'}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
          <nav className="container-wide">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/di2rmfase/image/upload/v1779788883/WhatsApp_Image_2026-05-26_at_2.29.48_PM__1_-removebg-preview_kudvet.png"
                  alt="NORTHEAST SCRAP CO. Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <span className="text-xl font-bold text-slate-900">NORTHEAST SCRAP CO.</span>
              </div>

              <div className="hidden md:flex items-center gap-8">
                <a href="#how-it-works" className="text-slate-700 hover:text-accent-green transition-colors font-medium">
                  How it Works
                </a>
                <a href="#materials" className="text-slate-700 hover:text-accent-green transition-colors font-medium">
                  Materials
                </a>
                <a href="#contact" className="text-slate-700 hover:text-accent-green transition-colors font-medium">
                  Contact
                </a>
                <button
                  onClick={openForm}
                  className="bg-accent-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-orange-200"
                >
                  Sell Scrap
                </button>
              </div>

              <button
                className="md:hidden p-2 text-slate-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-100">
                <div className="flex flex-col gap-4">
                  <a
                    href="#how-it-works"
                    className="text-slate-700 hover:text-accent-green transition-colors font-medium px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How it Works
                  </a>
                  <a
                    href="#materials"
                    className="text-slate-700 hover:text-accent-green transition-colors font-medium px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Materials
                  </a>
                  <a
                    href="#contact"
                    className="text-slate-700 hover:text-accent-green transition-colors font-medium px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <button
                    onClick={() => {
                      openForm();
                      setMobileMenuOpen(false);
                    }}
                    className="bg-accent-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all mx-4"
                  >
                    Sell Scrap
                  </button>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-background via-white to-green-50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <img
              src="https://res.cloudinary.com/di2rmfase/image/upload/v1779788883/WhatsApp_Image_2026-05-26_at_2.29.48_PM__1_-removebg-preview_kudvet.png"
              alt=""
              className="w-[600px] md:w-[800px] h-auto object-contain"
            />
          </div>

          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Serving Northeast Assam
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Turn Your Scrap Into{' '}
                <span className="text-accent-green">Value</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                The simplest way to sell your industrial and household scrap. Fast pickups, fair pricing, and instant payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openForm}
                  className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5"
                >
                  Get a Quote
                </button>
                <a
                  href="https://wa.me/919181020270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-green hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-accent-orange" />
                  </div>
                  <span className="font-medium">Same-Day Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="font-medium">Instant Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Recycle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How It Works
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Three simple steps to turn your scrap into cash
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative bg-background rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="mt-4 mb-6 inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md group-hover:shadow-lg transition-all">
                    <step.icon className="w-8 h-8 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-green-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section id="materials" className="py-16 md:py-24 bg-background">
          <div className="container-wide">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What We Buy
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                We accept a wide range of recyclable materials at competitive prices
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {materials.map((material) => (
                <div
                  key={material.name}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-green-50 transition-colors">
                    <material.icon className={`w-7 h-7 ${material.color}`} />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">
                    {material.name}
                  </h3>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-500 mt-8">
              Have other materials? Contact us to check if we accept them.
            </p>
          </div>
        </section>

        {/* Submission Form */}
        <section id="submit-form" className="py-16 md:py-24 bg-white">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Tell Us About Your Scrap
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Fill out the form and we'll get back to you within 24 hours
                </p>

                <button
                  onClick={openForm}
                  className="bg-accent-orange hover:bg-orange-600 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5 inline-flex items-center gap-3"
                >
                  <FileText className="w-6 h-6" />
                  Open Submission Form
                </button>
              </div>

              <p className="text-center text-slate-500 text-sm mt-6">
                Alternatively, contact us directly at{' '}
                <a href="tel:+919181020270" className="text-accent-green hover:underline">
                  +91 91810 20270
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Have questions or want to discuss a large order? We're here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-gray-300 mt-1">
                        NORTHEAST SCRAP CO.<br />
                        Tezpur, Assam<br />
                        PIN - 784001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <a
                        href="tel:+919181020270"
                        className="text-gray-300 hover:text-white transition-colors mt-1 block"
                      >
                        +91 91810 20270
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <a
                        href="mailto:pr.constructions1119@gmail.com"
                        className="text-gray-300 hover:text-white transition-colors mt-1 block"
                      >
                        pr.constructions1119@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Transparent weighing & pricing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Same-day pickup available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Instant payment via UPI or cash</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Serving all of Northeast Assam</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Government licensed & certified</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/di2rmfase/image/upload/v1779788883/WhatsApp_Image_2026-05-26_at_2.29.48_PM__1_-removebg-preview_kudvet.png"
                  alt="NORTHEAST SCRAP CO. Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-bold text-white">NORTHEAST SCRAP CO.</span>
              </div>

              <div className="text-gray-400 text-sm text-center">
                &copy; {new Date().getFullYear()} NORTHEAST SCRAP CO. All rights reserved.
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/share/1GinaiR6co/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-accent-green rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/ne_scrappers?igsh=MTJldXNhc3N4c3gwYg%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-accent-green rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/northeast-scrap-co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-accent-green rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-500">
              <button
                onClick={() => setShowTermsModal(true)}
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </footer>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919181020270"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-40 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-2 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us!
          </span>
        </a>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center shadow-lg transition-all z-40"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
