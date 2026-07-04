import { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";
import { getBaseUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  // 1. Home Page
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // 2. Static Pages
    {
      url: `${baseUrl}/philanthropy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // 3. Category Pages
  CATEGORIES.forEach((category) => {
    routes.push({
      url: `${baseUrl}/mud/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // 4. Subpages
    category.subpages.forEach((subpage) => {
      routes.push({
        url: `${baseUrl}/mud/${category.slug}/${subpage.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    });
  });

  // 5. Deep-Dive Detail Pages
  DETAIL_PAGES.forEach((page) => {
    routes.push({
      url: `${baseUrl}/mud/${page.parentCategorySlug}/${page.parentSubpageSlug}/${page.slug}`,
      lastModified: new Date(page.publishDate),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });

  return routes;
}

