import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Plus } from "lucide-react";

const BuyNow = () => {
  const { addItem, getItemQuantity } = useCart();
  const { toast } = useToast();

  const books = [
    {
      id: 1,
      title: "Planned & Organized Deficit Spending (PODS) 2nd Edition-Republished (Kindle Edition)",
      author: "Dr. Vidur Sahgal",
      description: "A comprehensive guide to understanding distributed equilibrium allowable deficit spending and its applications in modern economic policy.",
      image: "/books/1.jpg",
      price: 499.00
    },
    {
      id: 2,
      title: "आत्मनिर्भर अर्थशास्त्र नियोजित और संगठित समान्तर खर्च दूसरा संस्करण Kindle Edition",
      author: "Dr. Vidur Sahgal",
      description: "Exploring the balance between employer business interests and employee dignity in the modern workplace.",
      image: "/books/2.jpg",
      price: 125.00
    },
    {
      id: 3,
      title: "Planned & Organized Deficit Spending (PODS) 2nd Edition (Republished) Kindle Edition Gujarati Version",
      author: "Dr. Vidur Sahgal",
      description: "Understanding healthy competition practices that benefit all stakeholders in the marketplace.",
      image: "/books/3.jpg",
      price: 449.00
    }
  ];

  const handleAddToCart = (book: typeof books[0]) => {
    addItem({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
      quantity: 1
    });
    
    toast({
      title: "Added to cart!",
      description: `${book.title} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Buy Now
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover Dr. Vidur Sahgal's groundbreaking research and insights through these essential publications.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {books.map((book) => {
              const currentQuantity = getItemQuantity(book.id);
              return (
                <Card key={book.id} className="flex-1 max-w-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg p-8">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-primary line-clamp-2">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      by {book.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">₹{book.price}</span>
                    </div>
                    
                    {currentQuantity > 0 && (
                      <div className="text-sm text-muted-foreground mb-3 text-center">
                        In cart: {currentQuantity}
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Button 
                        onClick={() => handleAddToCart(book)} 
                        className="w-full"
                        variant="outline"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button asChild className="w-full">
                        <Link to={`/product/${book.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Why Choose OMDIC Publications?
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Dr. Vidur Sahgal's research represents decades of groundbreaking work in economic theory and human resource management. 
                These publications offer unique insights into sustainable economic practices and ethical business operations that benefit 
                all stakeholders in the modern economy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyNow;
