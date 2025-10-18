import { workshopResources } from "@/data/workshop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop | Thumpstar Demo",
  description: "Assembly guides, servicing tips, and owner's manuals.",
};

const iconMap = {
  guide: <Wrench className="h-6 w-6 text-primary" />,
  video: <Video className="h-6 w-6 text-primary" />,
  pdf: <FileText className="h-6 w-6 text-primary" />,
};

export default function WorkshopPage() {
  const categories = [...new Set(workshopResources.map((res) => res.category))];

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Workshop
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Your resource hub for assembly, maintenance, and technical information.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="font-heading text-2xl font-bold uppercase border-b pb-2 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshopResources
                .filter((res) => res.category === category)
                .map((resource) => (
                  <Card key={resource.id} className="flex flex-col">
                    <CardHeader className="flex-row items-start gap-4">
                      <div>{iconMap[resource.type]}</div>
                      <div>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription className="mt-1">{resource.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <Button asChild variant="outline" className="w-full">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.type === 'pdf' ? 'Download' : 'View Resource'}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}