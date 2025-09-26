import React, { useState } from 'react'
import { Menu, X, Dumbbell, Activity, Award, Clock, Star, MapPin, Phone, Mail } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">FITZONE</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-orange-500 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-orange-500 transition-colors duration-200">Services</button>
              <button onClick={() => scrollToSection('trainers')} className="text-white hover:text-orange-500 transition-colors duration-200">Trainers</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-orange-500 transition-colors duration-200">Reviews</button>
              <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-orange-500 transition-colors duration-200">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-500 transition-colors duration-200">Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 border-t border-orange-500/20">
            <nav className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block text-white hover:text-orange-500 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('services')} className="block text-white hover:text-orange-500 transition-colors duration-200">Services</button>
              <button onClick={() => scrollToSection('trainers')} className="block text-white hover:text-orange-500 transition-colors duration-200">Trainers</button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-white hover:text-orange-500 transition-colors duration-200">Reviews</button>
              <button onClick={() => scrollToSection('pricing')} className="block text-white hover:text-orange-500 transition-colors duration-200">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-orange-500 transition-colors duration-200">Contact</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse">
            TRANSFORM YOUR
            <span className="block bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              BODY & MIND
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands who've achieved their fitness goals with our world-class trainers and cutting-edge equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive fitness programs designed to help you reach your goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Dumbbell className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-4">Strength Training</h3>
              <p className="text-gray-700">Build muscle and increase strength with our comprehensive weight training programs.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Activity className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-4">Group Classes</h3>
              <p className="text-gray-700">Join our energetic group fitness classes including yoga, HIIT, and dance.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Award className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-4">Personal Training</h3>
              <p className="text-gray-700">One-on-one coaching tailored to your specific fitness goals and needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Meet Our Trainers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert trainers with years of experience helping clients achieve their goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MJ</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 text-center">Mike Johnson</h3>
              <p className="text-orange-500 font-semibold mb-4 text-center">Strength & Conditioning</p>
              <p className="text-gray-700 text-center">10+ years experience in powerlifting and strength training. Certified NASM trainer.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SD</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 text-center">Sarah Davis</h3>
              <p className="text-blue-500 font-semibold mb-4 text-center">Yoga & Flexibility</p>
              <p className="text-gray-700 text-center">Certified yoga instructor specializing in Vinyasa and restorative practices.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CR</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 text-center">Carlos Rodriguez</h3>
              <p className="text-green-500 font-semibold mb-4 text-center">HIIT & Cardio</p>
              <p className="text-gray-700 text-center">Former professional athlete with expertise in high-intensity training and conditioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real transformations from real people
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">"Lost 30 pounds in 3 months! The trainers are amazing and the community is so supportive."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Jessica Davis</p>
                  <p className="text-gray-400">Member since 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">"Gained 15 pounds of muscle and feel stronger than ever. Best investment I've made!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MT</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Mark Thompson</p>
                  <p className="text-gray-400">Member since 2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">"The yoga classes changed my life. More flexible and stress-free than I've been in years."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">LW</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Lisa Wang</p>
                  <p className="text-gray-
