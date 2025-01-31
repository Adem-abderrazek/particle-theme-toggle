import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-3/4 w-4 h-4 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default ParticleBackground;