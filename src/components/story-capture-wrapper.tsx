import html2canvas from "html2canvas";
import React, { useRef } from "react";

// This component wraps children and provides a ref for html2canvas
// 1080x1920 for mobile story format (Instagram, Snapchat, etc.)
// Story wrapper with vibrant event-style background for story download
export const StoryCaptureWrapper = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        width: 1080,
        height: 1920,
        background: 'radial-gradient(ellipse at 60% 0%, #2d0036 60%, #1a0022 100%)',
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 8px 64px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
      }}
    >
      {/* Top left shape */}
      <svg width="320" height="320" viewBox="0 0 320 320" style={{ position: 'absolute', top: -60, left: -60, zIndex: 1 }}>
        <defs>
          <radialGradient id="purple1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#e040fb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c1fa0" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <ellipse cx="160" cy="160" rx="140" ry="120" fill="url(#purple1)" />
      </svg>
      {/* Bottom left shape */}
      <svg width="260" height="260" viewBox="0 0 260 260" style={{ position: 'absolute', bottom: -40, left: -40, zIndex: 1 }}>
        <defs>
          <radialGradient id="purple2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#e040fb" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7c1fa0" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <ellipse cx="130" cy="130" rx="110" ry="90" fill="url(#purple2)" />
      </svg>
      {/* Top right shape */}
      <svg width="220" height="220" viewBox="0 0 220 220" style={{ position: 'absolute', top: 40, right: -60, zIndex: 1 }}>
        <defs>
          <radialGradient id="purple3" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#00e6ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1a0022" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <ellipse cx="110" cy="110" rx="90" ry="80" fill="url(#purple3)" />
      </svg>
      {/* Bottom right shape */}
      <svg width="320" height="320" viewBox="0 0 320 320" style={{ position: 'absolute', bottom: -60, right: -60, zIndex: 1 }}>
        <defs>
          <radialGradient id="purple4" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#00e6ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1a0022" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <ellipse cx="160" cy="160" rx="140" ry="120" fill="url(#purple4)" />
      </svg>
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {children}
      </div>
    </div>
  )
);
