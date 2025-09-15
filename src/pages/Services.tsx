import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Start up, Lobbyist, & Representative Consultant",
      description: "On a retainer basis only in Delhi, India",
      category: "Consulting"
    },
    {
      id: 2,
      title: "General Macro Level Consultant",
      description: "Specialization in Macro Economic Policy Solutions (Upto 100% deficit financing), International Trade Models, FX, Banking & Stock Equity Market Models",
      category: "Economics",
      hasLink: true
    },
    {
      id: 3,
      title: "International Commodities Broker & Marketeer (ICBM)",
      description: "Comprehensive commodities brokerage and marketing services",
      category: "Trading"
    },
    {
      id: 4,
      title: "Full Spectrum Marketing, Advertising & Promotions (MAP)",
      description: "Complete marketing and promotional consulting services",
      category: "Marketing",
      hasLink: true
    },
    {
      id: 5,
      title: "Original/New Project(s)/Concept(s) Consultant",
      description: "The Indian National Water Pipelines Grid Concept and Ballast Replacement Operation with Fresh Water",
      category: "Innovation",
      hasLink: true
    },
    {
      id: 6,
      title: "Philosopher on Call – Corporate Philosopher",
      description: "Corporate philosophical guidance and strategic thinking",
      category: "Philosophy",
      hasLink: true
    },
    {
      id: 7,
      title: "Real Estate",
      description: "M/s conVcon – Mr. Vidur Raj - Proprietor",
      category: "Real Estate"
    },
    {
      id: 8,
      title: "Education/Available as Remote Guest Faculty",
      description: "Only on the subject of PODS-CBDC",
      category: "Education"
    },
    {
      id: 9,
      title: "Business & Political Strategy",
      description: "Strategic consulting for business and political initiatives",
      category: "Strategy"
    },
    {
      id: 10,
      title: "Land Procurement Strategy",
      description: "Strategic guidance for land acquisition projects",
      category: "Strategy"
    },
    {
      id: 11,
      title: "M/s conVcon-Real Estate Proprietor: Vidur Raj",
      description: "Specialized real estate services (I am my only exception)",
      category: "Real Estate"
    },
    {
      id: 12,
      title: "Dying Sun: Save The Sun and The Earth",
      description: "Outer Space Policy Statement and consulting",
      category: "Space Policy"
    },
    {
      id: 13,
      title: "Author of PODS Book",
      description: "Book 'Planned & Organized Deficit Spending (PODS)' available in Hindi and English on Amazon.in and Amazon.com",
      category: "Publishing"
    },
    {
      id: 14,
      title: "Research & Development",
      description: "Comprehensive R&D consulting services",
      category: "Research"
    },
    {
      id: 15,
      title: "Clean India Initiative and Global Sanitation Initiative",
      description: "CII & GSI - Environmental and sanitation consulting",
      category: "Environment",
      hasLink: true
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-semibold">
              Professional services rendered only to Central banks & International lending organisations on matters of macroeconomic policy & theory with customized practical solutions to implementing PODS CBDC taxless & cashless solutions also.
            </p>
          </div>

          <div className="grid gap-8">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h2 className="text-2xl font-bold text-primary border-l-4 border-primary pl-4">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {services
                    .filter(service => service.category === category)
                    .map((service) => (
                      <div 
                        key={service.id}
                        className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold text-sm">
                              {service.id}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {service.title}
                              {service.hasLink && (
                                <span className="ml-2 text-primary text-sm">📄</span>
                              )}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
