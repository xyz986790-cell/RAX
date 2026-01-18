import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopImageSection from "@/components/TopImageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <HeroSection />

      {/* 🔹 IMAGE SECTION (VIDEO SE UPAR) */}
      <TopImageSection />

      {/* 🔹 Company Intro Video Section */}
      <div className="w-full max-w-5xl mx-auto px-4 mt-10 mb-16 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          PODS CBDC VIDEO
        </h2>

        <iframe
          src="https://drive.google.com/file/d/1ZKDgjRMWSc2kR5KY9WSX5RcP4bM2PwcC/preview"
          width="100%"
          height="400"
          allow="autoplay"
          style={{
            border: "none",
            borderRadius: "10px",
          }}
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
