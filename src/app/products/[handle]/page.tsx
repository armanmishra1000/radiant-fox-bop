import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CheckCircle, Phone } from "lucide-react";
import { ProductGallery } from "@/components/product-gallery";
import { WhatsappButton } from "@/components/whatsapp-button";
import type { Metadata } from "next";

type Props = {
  params: { handle: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.handle === params.handle);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | Thumpstar Demo`,
    description: `Details and specifications for the ${product.title}.`,
  };
}

const statusMap = {
  in_stock: { text: "In Stock", className: "bg-green-600 hover:bg-green-600" },
  dealer_only: { text: "Dealer Only", className: "bg-blue-600 hover:bg-blue-600" },
  sold_out: { text: "Sold Out", className: "bg-red-600 hover:bg-red-600" },
};

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = products.find((p) => p.handle === params.handle);

  if (!product) {
    notFound();
  }

  const statusInfo = product.status ? statusMap[product.status] : null;
  const whatsappMessage = `Hello, I'm interested in the ${product.title}. Can you provide more details?`;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div>
          <ProductGallery images={product.gallery} />
        </div>

        {/* Product Info */}
        <div className="py-4">
          {statusInfo && (
            <Badge className={`mb-2 text-white ${statusInfo.className}`}>
              {statusInfo.text}
            </Badge>
          )}
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase">{product.title}</h1>
          
          {product.msrp && (
            <p className="text-3xl font-bold mt-4">${product.msrp.toLocaleString()}</p>
          )}

          {product.highlights && (
            <ul className="mt-6 space-y-2 text-muted-foreground">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col gap-4">
            <WhatsappButton
              size="lg"
              message={whatsappMessage}
              className="bg-accent text-black hover:bg-accent-600 w-full"
            >
              Inquire on WhatsApp
            </WhatsappButton>
            <Button size="lg" variant="outline" className="w-full flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call for Details: 1-800-555-1234
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <Tabs defaultValue="specs">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="warranty">Warranty</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <p>Overview content coming soon.</p>
          </TabsContent>
          <TabsContent value="specs" className="mt-4">
            {product.specs && product.specs.length > 0 ? (
              <div className="max-w-2xl border rounded-lg">
                <Table>
                  <TableBody>
                    {product.specs.map((spec) => (
                      <TableRow key={spec.key}>
                        <TableCell className="font-medium">{spec.key}</TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <p>No specifications available.</p>
            )}
          </TabsContent>
          <TabsContent value="warranty" className="mt-4">
            <p>Warranty information coming soon.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}