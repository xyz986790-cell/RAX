const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col justify-center items-center px-4 py-20">
      <div className="text-center max-w-6xl mx-auto">
        {/* Large OMDIC Text */}
        <h1 className="text-[8rem] sm:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-primary leading-none tracking-tight mb-8 select-none overflow-hidden">
          OMDIC
        </h1>
        
        {/* Company Name */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary mb-12 tracking-wide px-4">
          OPTIMUM MECHANIZATION & DATA INTEGRATED CONSULTANT PVT. LTD.
        </h2>
        
        {/* Welcome Message */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary/90 mb-8">
          Welcome To Our Web Site....
        </h3>
        
        {/* Subtle decoration line */}
        <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;