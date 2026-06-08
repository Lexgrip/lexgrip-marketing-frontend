export default function Head() {
  const title = "LexGrip — Learn the Words, Master Your Mistakes";
  const description =
    "LexGrip generates vocabulary for real situations, schedules it with a house-built FSRS engine, and runs an AI tutor that learns from every mistake and drills it until it sticks. Free to start, BYOK for unlimited.";

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
            "AI-generated scenario vocabulary",
            "FSRS spaced repetition",
            "AI tutor that learns from your mistakes",
            "French, German, and Spanish",
            "Bring your own API key for unlimited use",
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
