import { Article } from '@/types';
import { article as kakVybratSeo } from './blog/kak-vybrat-seo';
import { article as seoVsContext } from './blog/seo-vs-context';
import { article as stoimostSeo2026 } from './blog/stoimost-seo-2026';

export const blogArticles: Article[] = [
  kakVybratSeo,
  seoVsContext,
  stoimostSeo2026,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
