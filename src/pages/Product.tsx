import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const { addItem, getItemQuantity } = useCart();

  const books = [
    {
      id: 1,
      title: "Planned & Organized Deficit Spending (PODS) 2nd Edition-Republished (Kindle Edition)",
      author: "Dr. Vidur Sahgal",
      shortDescription: "A comprehensive guide to understanding distributed equilibrium allowable deficit spending and its applications in modern economic policy.",
      fullDescription: `The book PODS demonstrates how to manage an economy without taxes or shortages of CBDC (Central Bank Digital Currency). India has a population of over 1.4 billion people, which gives us the right to be ambitious, and the PODS can show us how to be so. Both the numbers and the population are at an extremely high level. Using PODS, the total population of the planet, which has 8 billion people, represents an even larger market that may be addressed. It should be noted that PODS can be customized and made universally applicable.`,
      image: "/books/1.jpg",
      price: 499.00,
      kindleLink: "https://www.amazon.in/dp/B0D8JKTQJC",
      isbn: "978-1-234567-89-0",
      pages: 320,
      publishedYear: 2023
    },
    {
      id: 2,
      title: "आत्मनिर्भर अर्थशास्त्र नियोजित और संगठित समान्तर खर्च दूसरा संस्करण Kindle Edition",
      author: "Dr. Vidur Sahgal",
      shortDescription: "Exploring the balance between employer business interests and employee dignity in the modern workplace.",
      fullDescription: `जैसे-जैसे मशीन लर्निंग, आईओटी और कृत्रिम बुद्धिमत्ता में प्रगति हो रही है, क्या संबंधित उद्योगों या क्षेत्रों में श्रम, कर्मचारी और प्रबंधन को बेरोजगारी का सामना करना पड़ रहा है? उदाहरण के लिए, क्या कीबोर्ड पहले ही बदल दिया गया है और डेटा एंट्री ऑपरेटरों और टाइपिस्टों को हटा दिया गया है? क्या हम एआई सक्षम रोबोट और मशीनों से विकसित हुए हैं जिन्होंने कोडिंग की बाधाओं पर काबू पाया और खुद को जैव-रासायनिक रूप से कॉन्फ़िगर किया जैसा कि आज मनुष्य हैं।`,
      image: "/books/2.jpg",
      price: 125.00,
      kindleLink: "https://www.amazon.in/dp/B0CYVNT7C2",
      isbn: "978-1-234567-90-6",
      pages: 280,
      publishedYear: 2023
    },
    {
      id: 3,
      title: "Planned & Organized Deficit Spending (PODS) 2nd Edition (Republished) Kindle Edition Gujarati Version",
      author: "Dr. Vidur Sahgal",
      shortDescription: "Understanding healthy competition practices that benefit all stakeholders in the marketplace.",
      fullDescription: `આયોજિત અને સંગઠિત ખાધ ખર્ચ (PODS)- 2જી આવૃત્તિ (પુનઃપ્રકાશિત) PODS પુસ્તક દર્શાવે છે કે CBDC (સેન્ટ્રલ બેંક ડિજિટલ કરન્સી) ની અછત થવા કર વિના અર્થતંત્રનું સંચાલન કેવી રીતે કરવું. ભારતમાં 1.4 બિલિયનથી વધુ લોકોની વસ્તી છે, જે આપણને મહત્વાકાંક્ષી બનવાનો અધિકાર આપે છે અને પીપલ્સ મોક્રેટિક પાર્ટી (PDS) આપણને બતાવી શકે છે કે કેવી રીતે મહત્વાકાંક્ષી બનવું જોઈએ. સંખ્યા અને વસ્તી બંને અત્યંત ઊંચા સ્તરે છે. PODS નો ઉપયોગ કરીને,ગ્રહની કુલ વસ્તી, જેમાં 8 અબજ લોકો છે, તે એક વધુ મોટા બજારનું પ્રતિનિધિત્વ કરે છે જેને સંબોધવામાં આવી શકે છે. એ નોંધવું જોઈએ કે પીઓડીએસ સંદર્ભને ધ્યાનમાં લીધા વિના સંબંધિત છે.`,
      image: "/books/3.jpg",
      price: 449.00,
      kindleLink: "https://www.amazon.in/Planned-Organized-Deficit-Spending-Republished-ebook/dp/B0DC5DWSNZ",
      isbn: "978-1-234567-91-3",
      pages: 300,
      publishedYear: 2023
    }
  ];

  const book = books.find(b => b.id === parseInt(id || "0"));
  const currentQuantity = book ? getItemQuantity(book.id) : 0;

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Book Not Found</h1>
            <p className="text-muted-foreground mb-8">The book you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/buy">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Books
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
      quantity: quantity
    });
    
    toast({
      title: "Added to cart!",
      description: `${quantity} copy(ies) of "${book.title}" added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/buy">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Books
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Book Image */}
            <div className="space-y-6">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg p-8">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>

            {/* Book Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {book.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">by {book.author}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-primary">₹{book.price}</span>
                  <Badge variant="secondary">Available</Badge>
                </div>
              </div>

              {/* Kindle Link */}
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-primary mb-3">Available on Kindle</h3>
                <Button asChild variant="outline" className="w-full">
                  <a href={book.kindleLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read on Kindle
                  </a>
                </Button>
              </div>

              {/* Add to Cart */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Add to Cart</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="quantity" className="text-base font-medium">
                        Quantity:
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        max="10"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-20"
                      />
                    </div>
                    
                    {currentQuantity > 0 && (
                      <div className="text-sm text-muted-foreground">
                        Already in cart: {currentQuantity}
                      </div>
                    )}
                    
                    <Button onClick={handleAddToCart} className="w-full" size="lg">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart - ₹{(book.price * quantity).toFixed(2)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Full Description */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">About This Book</h2>
                <div className="prose prose-lg max-w-none">
                  {book.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
