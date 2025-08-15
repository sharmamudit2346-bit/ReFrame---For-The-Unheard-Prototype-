"use client";

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  Brain, 
  Shield, 
  MessageCircle, 
  TrendingUp, 
  Bell,
  Settings,
  Home,
  User,
  ChevronLeft,
  Send,
  Smile,
  Camera,
  Mic
} from "lucide-react";

export default function Demo() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi Alex! I noticed you might be feeling a bit down today. Would you like to talk about it?", sender: 'therapist', time: '2:30 PM' },
    { id: 2, text: "I guess I've been feeling overwhelmed with school and social media lately", sender: 'user', time: '2:32 PM' },
    { id: 3, text: "That's completely understandable. Many teens feel this way. Let's work through this together. What specifically about social media is bothering you?", sender: 'therapist', time: '2:33 PM' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [moodData, setMoodData] = useState([
    { day: 'Mon', mood: 3, color: 'bg-yellow-400' },
    { day: 'Tue', mood: 2, color: 'bg-orange-400' },
    { day: 'Wed', mood: 4, color: 'bg-green-400' },
    { day: 'Thu', mood: 5, color: 'bg-green-500' },
    { day: 'Fri', mood: 4, color: 'bg-green-400' },
    { day: 'Sat', mood: 3, color: 'bg-yellow-400' },
    { day: 'Sun', mood: 4, color: 'bg-green-400' }
  ]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, userMessage]);
      setNewMessage('');

      // Simulate therapist response
      setTimeout(() => {
        const responses = [
          "Thank you for sharing that with me. Your feelings are valid.",
          "That sounds challenging. How can we work together to make this better?",
          "I'm here to support you. What would help you feel better right now?",
          "You're taking a positive step by talking about this. How are you feeling now?"
        ];
        const therapistMessage = {
          id: messages.length + 2,
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: 'therapist',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, therapistMessage]);
      }, 1500);
    }
  };

  const renderHomeScreen = () => (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Good afternoon, Alex!</h1>
              <p className="text-blue-100 text-sm">How are you feeling today?</p>
            </div>
          </div>
          <Bell className="h-6 w-6" />
        </div>
        
        {/* Quick Mood Check */}
        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-sm mb-3">Quick mood check:</p>
          <div className="flex justify-between">
            {['😢', '😕', '😐', '🙂', '😊'].map((emoji, index) => (
              <button
                key={index}
                className="w-10 h-10 bg-white/20 rounded-full text-xl hover:bg-white/30 transition-colors"
                onClick={() => {
                  // Simulate mood selection
                  const today = new Date().getDay();
                  setMoodData(prev => prev.map((item, i) => 
                    i === today ? { ...item, mood: index + 1 } : item
                  ));
                }}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Feed */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Positive Content Card */}
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-green-800">Mindfulness Moment</p>
              <p className="text-xs text-green-600">Recommended for you</p>
            </div>
          </div>
          <p className="text-green-700 mb-3">
            "Take a moment to breathe deeply. You've accomplished so much today, and that's worth celebrating! 🌟"
          </p>
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 transition-colors">
              Try 2-min breathing
            </button>
            <button className="border border-green-500 text-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-50 transition-colors">
              Save for later
            </button>
          </div>
        </div>

        {/* Community Support */}
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-blue-800">Community Support</p>
              <p className="text-xs text-blue-600">From your peer group</p>
            </div>
          </div>
          <p className="text-blue-700 mb-3">
            "Remember, every small step counts! You're not alone in this journey." - Sarah, Peer Mentor
          </p>
          <div className="flex items-center space-x-4 text-sm text-blue-600">
            <button className="flex items-center space-x-1 hover:text-blue-800 transition-colors">
              <Heart className="h-4 w-4" />
              <span>24 hearts</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-800 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>Join conversation</span>
            </button>
          </div>
        </div>

        {/* Professional Support Available */}
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-purple-800">Dr. Sarah Chen</p>
              <p className="text-xs text-purple-600">Licensed Therapist • Available now</p>
            </div>
          </div>
          <p className="text-purple-700 mb-3">
            "I noticed you might benefit from a quick check-in. I'm here whenever you're ready to chat."
          </p>
          <button 
            className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition-colors"
            onClick={() => setCurrentScreen('chat')}
          >
            Start confidential chat
          </button>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800">Your Week at a Glance</h3>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="flex justify-between items-end space-x-2">
            {moodData.map((day, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                <div 
                  className={`w-6 rounded-full ${day.color}`}
                  style={{ height: `${day.mood * 8}px` }}
                ></div>
                <span className="text-xs text-gray-500">{day.day}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Great progress this week! Your mood has been trending upward. 📈
          </p>
        </div>
      </div>
    </div>
  );

  const renderChatScreen = () => (
    <div className="h-full flex flex-col bg-white">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-4 text-white flex items-center space-x-3">
        <button onClick={() => setCurrentScreen('home')}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <User className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold">Dr. Sarah Chen</h2>
          <p className="text-purple-100 text-sm">Licensed Therapist • Online</p>
        </div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Camera className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Mic className="h-5 w-5" />
          </button>
          <button
            onClick={sendMessage}
            className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          🔒 This conversation is private and encrypted
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ReFrame</span> Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how ReFrame transforms the digital experience for teen mental wellness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  {currentScreen === 'home' ? renderHomeScreen() : renderChatScreen()}

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
                    <div className="flex justify-around">
                      <button
                        onClick={() => setCurrentScreen('home')}
                        className={`p-2 rounded-lg transition-colors ${
                          currentScreen === 'home' ? 'text-blue-500 bg-blue-50' : 'text-gray-400'
                        }`}
                      >
                        <Home className="h-6 w-6" />
                      </button>
                      <button
                        onClick={() => setCurrentScreen('chat')}
                        className={`p-2 rounded-lg transition-colors ${
                          currentScreen === 'chat' ? 'text-purple-500 bg-purple-50' : 'text-gray-400'
                        }`}
                      >
                        <MessageCircle className="h-6 w-6" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                        <Brain className="h-6 w-6" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                        <Shield className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Features */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Try These Features</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setCurrentScreen('home')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    currentScreen === 'home'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Home className="h-6 w-6 text-blue-500" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalized Feed</h4>
                      <p className="text-sm text-gray-600">AI-curated positive content and wellness prompts</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setCurrentScreen('chat')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    currentScreen === 'chat'
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-6 w-6 text-purple-500" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Support</h4>
                      <p className="text-sm text-gray-600">Confidential chat with licensed therapists</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demo Highlights</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Click mood emojis to track your emotional state</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Switch between Home and Chat screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Send messages to experience AI-powered support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Notice how positive content replaces harmful feeds</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Security</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">End-to-end encrypted conversations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-700">No data stored without explicit consent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-gray-700">Complete user control over data deletion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Join us in transforming teen mental health through technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Partner With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}