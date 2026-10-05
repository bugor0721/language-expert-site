import heroPhoto from "../.vibecraft/assets/фон.jpg";

export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPhoto.src})` }}
      />
      <div className="hero-photo-overlay absolute inset-0" />
    </div>
  );
}
