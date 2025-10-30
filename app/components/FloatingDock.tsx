"use client";

import { useState, useEffect } from 'react'

export default function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Animate in after component mounts
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rushikesh-yeole24/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "#0077b5",
      gradient: "linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)"
    },
    {
      name: "GitHub",
      url: "https://github.com/RushikeshYeole24",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "#333",
      gradient: "linear-gradient(135deg, #333 0%, #555 100%)"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rushikeshyeole",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "#1DA1F2",
      gradient: "linear-gradient(135deg, #1DA1F2 0%, #0084b4 100%)"
    }
  ];

  return (
    <div 
      className="floating-dock-enhanced"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "45%",
        transform: `translateX(-50%) ${isVisible ? 'translateY(0)' : 'translateY(100px)'}`,
        zIndex: 9999,
        display: "flex",
        gap: "8px",
        padding: "16px 20px",
        background: "rgba(255, 255, 255, 0.95)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "50px",
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.12),
          0 2px 6px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.3)
        `,
        backdropFilter: "blur(20px) saturate(180%)",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Animated background glow */}
      <div 
        className="dock-glow"
        style={{
          position: "absolute",
          top: "-2px",
          left: "-2px",
          right: "-2px", 
          bottom: "-2px",
          background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)",
          borderRadius: "50px",
          opacity: 0,
          animation: "rainbow 6s linear infinite, pulse 2s ease-in-out infinite alternate",
          zIndex: -1,
        }}
      />
      
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
          className="dock-item-enhanced"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
            color: "#666",
            textDecoration: "none",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            border: "none",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            animationDelay: `${index * 0.1}s`,
          }}
          onMouseEnter={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            const angle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX)
            const distance = 8
            const offsetX = Math.cos(angle) * distance
            const offsetY = Math.sin(angle) * distance
            
            e.currentTarget.style.transform = `
              translateY(-8px) 
              translateX(${offsetX}px) 
              translateY(${offsetY}px) 
              scale(1.15) 
              rotate(${Math.random() * 10 - 5}deg)
            `
            e.currentTarget.style.background = link.gradient
            e.currentTarget.style.color = "white"
            e.currentTarget.style.boxShadow = `
              0 12px 35px ${link.color}40,
              0 0 0 3px ${link.color}20,
              inset 0 1px 0 rgba(255, 255, 255, 0.3)
            `
            e.currentTarget.style.filter = "brightness(1.1) saturate(1.2)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) translateX(0) scale(1) rotate(0deg)"
            e.currentTarget.style.background = "linear-gradient(145deg, #ffffff, #f0f0f0)"
            e.currentTarget.style.color = "#666"
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)"
            e.currentTarget.style.filter = "none"
          }}
        >
          {/* Ripple effect */}
          <div 
            className="ripple-effect"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "0",
              height: "0",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.6)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
          
          {/* Icon with subtle animation */}
          <div style={{ 
            position: "relative", 
            zIndex: 2,
            transition: "transform 0.3s ease"
          }}>
            {link.icon}
          </div>
          
          {/* Shine effect */}
          <div 
            className="shine-effect"
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
              transform: "translateX(-100%)",
              transition: "transform 0.6s ease",
              pointerEvents: "none",
            }}
          />
        </a>
      ))}
    </div>
  );
}
