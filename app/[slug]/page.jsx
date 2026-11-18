import { notFound } from 'next/navigation';
import { getWeddingBySlug, getAllWeddingSlugs } from '@/data/weddings';
import WeddingView from '@/components/WeddingView';

export async function generateStaticParams() {
  const slugs = getAllWeddingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const wedding = getWeddingBySlug(resolvedParams.slug);

  if (!wedding) {
    return {
      title: 'Invitation Not Found',
      description: 'The requested wedding invitation was not found.',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: wedding.metaTitle,
    description: wedding.metaDescription,
    openGraph: {
      title: wedding.metaTitle,
      description: wedding.metaDescription,
      url: `https://weddinginvitelik.ink/${wedding.slug}`,
      images: [
        {
          url: wedding.media.ogImage,
          width: 1200,
          height: 630,
          alt: wedding.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: wedding.metaTitle,
      description: wedding.metaDescription,
      images: [wedding.media.ogImage],
    },
  };
}

export default async function DynamicWeddingPage({ params }) {
  const resolvedParams = await params;
  const wedding = getWeddingBySlug(resolvedParams.slug);

  if (!wedding) {
    notFound();
  }

  return <WeddingView wedding={wedding} />;
}
