"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { 
  Heart, 
  Shield, 
  Users, 
  Brain, 
  Smartphone, 
  TrendingUp, 
  CheckCircle, 
  Play,
  ArrowRight,
  Star,
  Globe,
  Target
} from "lucide-react";

export default function Landing() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "1 in 7", label: "adolescents face mental health issues", color: "text-red-500" },
    { number: "70%", label: "of teens experience anxiety from social media", color: "text-orange-500" },
    { number: "45%", label: "report persistent feelings of sadness", color: "text-purple-500" },
    { number: "20%", label: "consider suicide each year", color: "text-red-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ReFrame
              </span>
              <br />
              <span className="text-gray-900 text-3xl md:text-4xl lg:text-5xl">
                Turning the Internet Into a Force for Your Well-Being
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI-powered early detection & intervention for teen mental wellness
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href={createPageUrl("Demo")}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore How it Works</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Privacy-First AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-blue-500" />
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-purple-500" />
                <span>UN SDG 3 Aligned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Mental Health Crisis is Real
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Social media and digital platforms often amplify anxiety, depression, and isolation among teenagers. 
              The very tools meant to connect us are driving us apart.
            </p>
          </div>

          {/* Animated Statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className={`text-6xl md:text-7xl font-bold mb-4 transition-all duration-500 ${stats[currentStat].color}`}>
                    {stats[currentStat].number}
                  </div>
                  <p className="text-xl text-gray-700 font-medium">
                    {stats[currentStat].label}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">42%</div>
                  <p className="text-sm text-gray-600">Experience cyberbullying</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
                  <p className="text-sm text-gray-600">Sleep disruption from devices</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">The Vicious Cycle</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Negative content algorithms amplify harmful material</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Social comparison leads to decreased self-esteem</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Isolation increases as real connections diminish</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mental health deteriorates without early intervention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Solution: <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ReFrame</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform harmful digital experiences into opportunities for growth, connection, and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="relative">
              <div className="mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-5 w-5" />
                          <span className="font-semibold">ReFrame</span>
                        </div>
                        <div className="text-sm">Good Morning, Alex!</div>
                      </div>
                    </div>

                    {/* Content Feed */}
                    <div className="flex-1 p-4 space-y-4 overflow-hidden">
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Heart className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-green-800">Mindfulness Moment</span>
                        </div>
                        <p className="text-sm text-green-700">Take 3 deep breaths. You're doing great today! 🌟</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-blue-800">Community Support</span>
                        </div>
                        <p className="text-sm text-blue-700">"Remember, every small step counts!" - Sarah, Peer Mentor</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                            <Brain className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-purple-800">Mood Check</span>
                        </div>
                        <p className="text-sm text-purple-700">How are you feeling today? Tap to share.</p>
                        <div className="flex space-x-2 mt-2">
                          <div className="w-8 h-8 bg-yellow-400 rounded-full text-center leading-8">😊</div>
                          <div className="w-8 h-8 bg-blue-400 rounded-full text-center leading-8">😐</div>
                          <div className="w-8 h-8 bg-gray-400 rounded-full text-center leading-8">😔</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="bg-gray-50 p-4 flex justify-around">
                      <Heart className="h-6 w-6 text-blue-500" />
                      <Users className="h-6 w-6 text-gray-400" />
                      <Brain className="h-6 w-6 text-gray-400" />
                      <Shield className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Holistic Emotional Detection</h3>
                  <p className="text-gray-600">Privacy-first AI analyzes online behavior patterns to detect early signs of mental health challenges without compromising personal data.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Positive Content Intervention</h3>
                  <p className="text-gray-600">Intelligently replaces harmful feeds with uplifting, personalized content that promotes mental wellness and positive thinking.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Discreet Professional Support</h3>
                  <p className="text-gray-600">Instant, confidential access to certified therapists and mental health professionals when you need them most.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">User Control & Privacy</h3>
                  <p className="text-gray-600">Complete opt-in control with the ability to delete data anytime. Your privacy and autonomy are our top priorities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How ReFrame Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, three-step process that transforms your digital experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Detection</h3>
              <p className="text-gray-600 mb-6">
                Our AI analyzes text sentiment, search patterns, and digital behavior to identify potential mental health concerns early.
              </p>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Sentiment Analysis</div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-red-400 to-yellow-400 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm font-medium">Concern Detected</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intervention</h3>
              <p className="text-gray-600 mb-6">
                Harmful content is replaced with uplifting material, wellness prompts, and positive community interactions.
              </p>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Positive content served</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Mindfulness prompt sent</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Community support activated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600 mb-6">
                Connect with certified professionals or engage in auto-scheduled mindfulness activities for ongoing support.
              </p>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Dr. Sarah Chen</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-xs text-gray-600">"I'm here to help. Would you like to chat?"</p>
                <button className="w-full mt-2 bg-green-500 text-white py-1 px-3 rounded text-sm hover:bg-green-600 transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & UN SDG Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/SDG-icon-03-goodhealthandwellbeing.jpg/256px-SDG-icon-03-goodhealthandwellbeing.jpg" 
                  alt="UN SDG 3" 
                  className="w-16 h-16"
                />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">UN SDG 3 Alignment</h2>
                  <p className="text-lg text-gray-600">Good Health & Well-being</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                ReFrame directly contributes to achieving Sustainable Development Goal 3 by promoting mental health 
                and well-being for all at all ages, with a specific focus on adolescent mental health.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">Target 3.4: Reduce premature mortality from mental health conditions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-purple-500" />
                  <span className="text-gray-700">Target 3.5: Strengthen prevention and treatment of substance abuse</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Target 3.8: Achieve universal health coverage including mental health</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                <p className="text-sm text-blue-800">Teens to be reached in first year</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
                <p className="text-sm text-purple-800">Reduction in crisis interventions</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-sm text-green-800">AI-powered support availability</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                <p className="text-sm text-orange-800">Countries for global deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Teen Mental Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in creating a digital world that nurtures rather than harms young minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createPageUrl("Demo")}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Try Interactive Demo</span>
            </Link>
            <Link
              href={createPageUrl("Contact")}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}