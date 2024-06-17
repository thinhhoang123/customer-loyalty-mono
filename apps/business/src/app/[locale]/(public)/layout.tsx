export default function LayoutPublic({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundImageCss = {
    backgroundImage: "url('/login-background.svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <section
      className="h-screen flex justify-center items-center"
      style={backgroundImageCss}
    >
      {children}
    </section>
  );
}
