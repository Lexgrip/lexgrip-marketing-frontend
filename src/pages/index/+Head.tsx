export default function Head() {
  const title = "LexGrip - Language Flashcards That Actually Work";
  const description =
    "Learn a language with AI-generated flashcards, spaced repetition, and a tutor that helps when you get stuck. Free to start.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href="/logo.png" />
      <meta
        name="keywords"
        content="language learning flashcards, vocabulary flashcards, AI flashcards, language learning app, study cards, pronunciation cards"
      />
      <meta name="author" content="LexGrip" />
      <link rel="canonical" href="https://lexgrip.com/" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lexgrip.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://lexgrip.com/logo.png" />
      <meta property="og:site_name" content="LexGrip" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://lexgrip.com/logo.png" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "LexGrip",
          applicationCategory: "EducationApplication",
          operatingSystem: "Web",
          url: "https://lexgrip.com",
          description,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          featureList: [
            "AI-generated vocabulary flashcards",
            "Spaced repetition reviews",
            "AI tutor explanations",
            "Custom study decks",
            "Streaks and daily goals",
          ],
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "LexGrip",
          url: "https://lexgrip.com",
        })}
      </script>
    </>
  );
}
