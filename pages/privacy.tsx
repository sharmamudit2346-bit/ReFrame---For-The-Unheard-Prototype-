"use client";

import React from 'react';
import { Shield, Lock, Eye, UserCheck, Database, Globe, Heart } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="h-12 w-12 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Privacy & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Security</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and mental health data are sacred to us. Here's how we protect them with the highest standards of security and transparency.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Privacy Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy by Design</h3>
              <p className="text-gray-600 text-sm">
                Privacy is built into every aspect of ReFrame from the ground up, not added as an afterthought.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User Control</h3>
              <p className="text-gray-600 text-sm">
                You have complete control over your data - what's collected, how it's used, and when it's deleted.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">
                We're completely transparent about what data we collect and how we use it to help you.
              </p>
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">What Data We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Voluntary Information</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Account information (email, age range, general location)</li>
                  <li>• Mood check-ins and wellness goals you choose to share</li>
                  <li>• Messages you send to our support team or therapists</li>
                  <li>• Feedback and survey responses</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Behavioral Patterns (Opt-in Only)</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• General sentiment analysis of your interactions with the app</li>
                  <li>• Usage patterns to improve content recommendations</li>
                  <li>• Response to wellness interventions (anonymized)</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What We DON'T Collect</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Personal messages from other apps or platforms</li>
                  <li>• Browsing history outside of ReFrame</li>
                  <li>• Location data beyond general region</li>
                  <li>• Contact lists or social media connections</li>
                  <li>• Any data without your explicit consent</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="h-8 w-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Data</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">To Help You</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Personalize wellness content and recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Detect early signs of mental health concerns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Connect you with appropriate support resources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Track your progress and celebrate improvements</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">To Improve ReFrame</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improve our AI algorithms (using anonymized data)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Develop new features and interventions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conduct research to advance teen mental health</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ensure platform safety and prevent misuse</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Security Measures</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technical Security</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• End-to-end encryption for all communications</li>
                  <li>• Advanced AI anonymization techniques</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• SOC 2 Type II compliance</li>
                  <li>• HIPAA-compliant infrastructure</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Operational Security</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Minimal data retention policies</li>
                  <li>• Staff background checks and training</li>
                  <li>• Multi-factor authentication requirements</li>
                  <li>• Regular data backup and disaster recovery</li>
                  <li>• 24/7 security monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <UserCheck className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Your Rights & Controls</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Access & Download</h3>
                  <p className="text-gray-600 text-sm">Request a copy of all your data in a portable format anytime.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Correct & Update</h3>
                  <p className="text-gray-600 text-sm">Update or correct any information we have about you.</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Limit Processing</h3>
                  <p className="text-gray-600 text-sm">Choose exactly how your data is used and processed.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Delete Everything</h3>
                  <p className="text-gray-600 text-sm">Permanently delete all your data with one click - no questions asked.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Opt Out Anytime</h3>
                  <p className="text-gray-600 text-sm">Withdraw consent for any data processing at any time.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Data Portability</h3>
                  <p className="text-gray-600 text-sm">Take your data with you if you choose to leave ReFrame.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Compliance */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Global Privacy Compliance</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-sm">GDPR</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">European Union</h3>
                <p className="text-gray-600 text-xs">Full compliance with General Data Protection Regulation</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-sm">CCPA</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">California</h3>
                <p className="text-gray-600 text-xs">California Consumer Privacy Act compliance</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-sm">PIPEDA</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Canada</h3>
                <p className="text-gray-600 text-xs">Personal Information Protection Act compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Privacy */}
        <section>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Your Privacy?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our Data Protection Officer is here to help. We're committed to transparency and will respond to all privacy inquiries within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@reframewellness.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Email Privacy Team
              </a>
              <a
                href="#"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Privacy Settings
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}