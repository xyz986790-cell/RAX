import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Globe, Linkedin, GraduationCap, Search } from "lucide-react";

const Books = () => {
  const books = [
    {
      title: "PODS (Hindi Kindle)",
      link: "https://www.amazon.in/dp/B0CYVNT7C2",
      type: "Hindi Kindle"
    },
    {
      title: "PODS (Gujarati Kindle)",
      link: "https://www.amazon.com/Planned-Organized-Deficit-Spending-Republished-ebook/dp/B0DC5DWSNZ",
      type: "Gujarati Kindle"
    },
    {
      title: "PODS (English Kindle)",
      link: "https://www.amazon.in/Planned-Organized-Deficit-Spending-Republished-ebook/dp/B0D8JKTQJC",
      type: "English Kindle"
    },
    {
      title: "PODS (English Paperback)",
      link: "https://www.amazon.com/dp/B0CTK7WFZ3",
      type: "English Paperback"
    },
    {
      title: "PODS (English Hardcover)",
      link: "https://www.amazon.com/dp/B0CTM2HF6T",
      type: "English Hardcover"
    }
  ];

  const profiles = [
    {
      title: "ORCID Profile",
      link: "https://orcid.org/0009-0008-1400-2038",
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/gdr-vidur-sahgal-7b150643/",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      title: "Research Gate Profile",
      link: "https://www.researchgate.net/profile/Vidur-Sahgal",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: "Google Scholar Profile",
      link: "https://scholar.google.com/citations?hl=en&user=15mr04cAAAAJ",
      icon: <Search className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Books, Articles & Posts
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover Dr. Vidur Sahgal's groundbreaking research and publications on Planned & Organized Deficit Spending (PODS)
            </p>
          </div>

          <div className="space-y-16">
            {/* Book Announcement */}
            <section className="bg-card p-8 rounded-lg shadow-sm border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/66e1b07a824b1d24657c52ed/96d49d76-5a6c-4044-967f-ea4bb180b892/CC-copy-Paper-07_2024.pdf-2-768x584.jpg?format=2500w"
                    alt="PODS Book Cover"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    Good News!
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The 2nd & updated new edition of my book on Planned & Organized Deficit Spending-PODS (republished) 
                    is available on Kindle (In India), &/on www.amazon.com (for the paperback and hardcover versions). 
                    Do read from the given links below & revert with a review, or if you like, call me on +919625878887 
                    to brainstorm, strictly between 13:30-23:30 hrs IST.
                  </p>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold text-primary">Available on Amazon</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Books Available on Amazon */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Books Available on Amazon
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">{book.type}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {book.title}
                      </h3>
                      <Button asChild className="w-full">
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View on Amazon
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Profiles */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Professional Profiles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {profiles.map((profile, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow text-center">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                          {profile.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {profile.title}
                      </h3>
                      <Button asChild variant="outline" className="w-full">
                        <a href={profile.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Profile
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* YouTube Videos */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Featured Videos
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary text-center">
                    PODS Presentation
                  </h3>
                  <div className="aspect-video w-full">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/xj6rusyVV1E?si=Ve2-BfjzxS2TAHV0" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="rounded-lg w-full h-full"
                    ></iframe>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary text-center">
                    Economic Insights
                  </h3>
                  <div className="aspect-video w-full">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/tEdgGonHZWc?si=Kq7gPkCct95GDvS-" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="rounded-lg w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
{/*            <section className="bg-card p-8 rounded-lg shadow-sm border text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-6">
                Have questions about PODS or want to discuss economic policy? 
                Call Dr. Vidur Sahgal for a brainstorming session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-primary">Phone:</span>
                  <span className="text-lg text-muted-foreground">+91 9625878887</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-primary">Available:</span>
                  <span className="text-lg text-muted-foreground">13:30-23:30 hrs IST</span>
                </div>
              </div>
            </section>
*/}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Books;
