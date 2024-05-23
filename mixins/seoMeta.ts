import { onMounted } from "vue";

interface ISEO {
  title: string;
  ogTitle: string;
  description: string;
  ogDescription: string;
  ogImage: string;
}

export const useSeo = (page: string): void => {
  onMounted(async () => {
    try {
      const response = await fetch(`/api/seo/${page}`);
      const data = await response.json();
      const seo: ISEO = data.message.seo;

      useSeoMeta({
        title: seo.title,
        ogTitle: seo.ogTitle,
        description: seo.description,
        ogDescription: seo.ogDescription,
        ogImage: seo.ogImage,
      });
    } catch (error) {
      console.error('Failed to fetch SEO data:', error);
    }
  });
};
