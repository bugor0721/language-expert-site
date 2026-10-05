import {
  Building2,
  Clapperboard,
  Globe,
  GraduationCap,
  Landmark,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LanguagesIllustration } from "@/components/languages-illustration";
import { cn } from "@/lib/utils";

type Language = {
  name: string;
  code: string;
  icon: LucideIcon;
  accent: string;
  result: string;
};

const languages: Language[] = [
  {
    name: "Английский",
    code: "EN",
    icon: Globe,
    accent: "from-sky-500 to-blue-600",
    result:
      "Международный язык карьеры и путешествий. Уверенно проходите собеседования, работайте с зарубежными коллегами и свободно общайтесь в любой стране.",
  },
  {
    name: "Немецкий",
    code: "DE",
    icon: GraduationCap,
    accent: "from-amber-500 to-orange-600",
    result:
      "Ключ к образованию и карьере в Германии. Сдайте экзамен, поступите в университет или получите весомое преимущество на любом собеседовании.",
  },
  {
    name: "Французский",
    code: "FR",
    icon: Landmark,
    accent: "from-indigo-500 to-violet-600",
    result:
      "Язык культуры и дипломатии. Заговорите красиво и уверенно, читайте книги в оригинале и легко общайтесь во Франции, Канаде и Швейцарии.",
  },
  {
    name: "Корейский",
    code: "KO",
    icon: Clapperboard,
    accent: "from-pink-500 to-rose-600",
    result:
      "Дорога к дорамам и K-pop без перевода. Смотрите любимые шоу в оригинале и общайтесь с носителями языка уже с первых месяцев занятий.",
  },
  {
    name: "Китайский",
    code: "ZH",
    icon: Building2,
    accent: "from-emerald-500 to-green-600",
    result:
      "Самый перспективный язык для бизнеса. Станьте незаменимым специалистом и получите доступ к крупнейшему рынку мира.",
  },
];

export function LanguagesSection() {
  return (
    <section id="languages" className="gradient-section-sky scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Языки
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Пять языков — выберите свой путь к результату
            </h2>
            <p className="mx-auto mt-4 text-lg text-muted-foreground lg:mx-0">
              Индивидуальная программа под вашу цель и уровень. Живая
              разговорная практика — и вы заговорите уже в первый месяц.
            </p>
          </div>
          <LanguagesIllustration />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((language) => {
            const Icon = language.icon;
            return (
              <Card key={language.name} className="card-hover p-6 gap-5">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
                      language.accent
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <Badge variant="outline">{language.code}</Badge>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {language.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {language.result}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
