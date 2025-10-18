"use client";

import * as React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemDef {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItemDef[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.reduce((acc, item, index) => {
          acc.push(
            <BreadcrumbItem key={item.label}>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          );

          if (index < items.length - 1) {
            acc.push(<BreadcrumbSeparator key={`sep-${index}`} />);
          }

          return acc;
        }, [] as React.ReactNode[])}
      </BreadcrumbList>
    </Breadcrumb>
  );
}