import { notFound } from "next/navigation";
import { legalPages } from "@/data/legal";
import type { Metadata } from "next";

type RouteParams = {
  slug: string;
};

type AsyncParamsProps = {
  params: Promise<RouteParams>;
};

export async function generateMetadata({ params }: AsyncParamsProps): Promise<Metadata> {
  const { slug } = await params;

  const page = legalPages.find((p) => p.slug === slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${page.title} | Gapuchee Demo`,
  };
}

export default async function LegalPage({ params }: AsyncParamsProps) {
  const { slug } = await params;

  const page = legalPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-8 border-b pb-4">
                {page.title}
            </h1>
            <div className="space-y-6">
                {page.content.map((block, index) => {
                if (block.type === 'heading') {
                    return <h2 key={index} className="font-heading text-2xl font-bold text-foreground pt-4">{block.text}</h2>;
                }
                return <p key={index} className="text-muted-foreground leading-relaxed">{block.text}</p>;
                })}
            </div>
        </div>
    </div>
  );
}