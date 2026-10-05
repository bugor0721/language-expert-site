import { AboutSection } from "@/components/about-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HeroBackground } from "@/components/hero-background";
import { LanguagesSection } from "@/components/languages-section";
import { MethodologySection } from "@/components/methodology-section";
import { PricingSection } from "@/components/pricing-section";
import { ReviewsSection } from "@/components/reviews-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const quickFacts = [
  { value: "500+", label: "учеников уже говорят" },
  { value: "10 лет", label: "обучаю иностранным языкам" },
  { value: "5 языков", label: "от английского до китайского" },
  { value: "1 месяц", label: "до первого результата" },
];

export default function HomePage() {
  return (
    <>
      <section className="gradient-hero-vibrant relative overflow-hidden">
        <HeroBackground />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="secondary"
              className="animate-in fade-in mb-6 duration-500"
            >
              Индивидуальные занятия онлайн
            </Badge>
            <h1 className="animate-in fade-in slide-in-from-bottom-4 text-4xl font-bold leading-tight tracking-tight duration-700 sm:text-5xl lg:text-6xl">
              Заговорите на новом языке{" "}
              <span className="bg-gradient-to-r from-primary via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                с первого месяца
              </span>
            </h1>
            <p className="animate-in fade-in slide-in-from-bottom-4 mx-auto mt-6 max-w-2xl text-lg font-medium text-[oklch(0.34_0.045_270)] duration-700 delay-100 sm:text-xl">
              Индивидуальная программа под вашу цель, живая разговорная практика
              и результат, а не просто часы. Выберите язык — и начните говорить
              уже в первый месяц.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-4 mt-10 flex flex-col items-center justify-center gap-3 duration-700 delay-150 sm:flex-row">
              <a href="#pricing" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Записаться
                </Button>
              </a>
              <a href="#methodology" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-border/70 bg-background/60 backdrop-blur-sm sm:w-auto"
                >
                  Как проходит обучение
                </Button>
              </a>
            </div>
            <dl className="animate-in fade-in mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 duration-700 delay-200 sm:grid-cols-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="text-center">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {fact.value}
                  </dd>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {fact.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <LanguagesSection />

      <AboutSection />
      <MethodologySection />

      <PricingSection />

      <ReviewsSection />
      <FinalCtaSection />
    </>
  );
}
