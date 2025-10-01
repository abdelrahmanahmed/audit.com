import { Wrench } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Icon */}
        <div className="mb-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary/20 blur-2xl" />
            <Wrench className="relative h-20 w-20 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Heading */}
        <h1 
          className="mb-6 animate-fade-in text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          Under Construction
        </h1>
        
        {/* Subheading */}
        <p 
          className="mb-12 max-w-2xl animate-fade-in text-lg text-muted-foreground sm:text-xl md:text-2xl"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          We're crafting something extraordinary. Our website is currently being built with care and attention to detail.
        </p>
        
        {/* Progress Bar */}
        <div 
          className="mb-8 w-full max-w-md animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div 
              className="h-full animate-progress rounded-full bg-gradient-primary"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>
        
        {/* Status Text */}
        <p 
          className="animate-fade-in text-sm font-medium text-primary"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Expected Launch: Coming Soon
        </p>
      </main>
      
      {/* Footer */}
      <footer className="absolute bottom-8 left-0 right-0 z-10">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Index;
