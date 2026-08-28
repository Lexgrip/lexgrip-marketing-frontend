export default function Head() {
  const title = "Join the LexGrip Beta - Become a Founding Member";
  const description =
    "LexGrip is in beta. Access goes out through our Discord server - join to grab an invite and come in as a founding member.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="canonical" href="https://lexgrip.com/beta" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lexgrip.com/beta" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://lexgrip.com/logo.png" />
      <meta property="og:site_name" content="LexGrip" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://lexgrip.com/logo.png" />
    </>
  );
}
