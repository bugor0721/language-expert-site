import {
  Award,
  BookOpenCheck,
  GraduationCap,
  Languages,
  Quote,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const teacher = {
  name: "Анна Соколова",
  role: "Преподаватель иностранных языков",
  initials: "АС",
};

const education = [
  {
    icon: GraduationCap,
    title: "МГЛУ, диплом преподавателя",
    text: "Московский государственный лингвистический университет",
  },
  {
    icon: BookOpenCheck,
    title: "CELTA (Cambridge)",
    text: "Международный сертификат преподавания английского языка",
  },
  {
    icon: Award,
    title: "Подтверждённые уровни C1–C2",
    text: "DALF, Goethe-Zertifikat, TOPIK, HSK — каждый язык подтверждён сертификатом",
  },
];

const keyFacts = [
  { icon: Users, value: "500+", label: "учеников заговорили на новом языке" },
  {
    icon: TrendingUp,
    value: "10 лет",
    label: "опыта индивидуального обучения",
  },
  { icon: Languages, value: "5 языков", label: "от английского до китайского" },
  { icon: Star, value: "4.9/5", label: "средняя оценка от учеников" },
];

const studentResults = [
  {
    quote:
      "За три месяца подготовки сдала IELTS на 7.5 и получила оффер от зарубежной компании.",
    meta: "Екатерина · английский · карьера",
  },
  {
    quote:
      "С нуля дошёл до разговорного немецкого за год и свободно общаюсь с коллегами в Берлине.",
    meta: "Дмитрий · немецкий · переезд",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="gradient-section-violet scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Обо мне
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Преподаватель, которому доверяют прогресс
          </h2>
          <p className="mx-auto mt-4 text-lg text-muted-foreground">
            Больше 10 лет я помогаю взрослым и подросткам заговорить на
            иностранном языке — без зубрёжки и страха ошибиться.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-8 lg:sticky lg:top-24">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-violet-500/20 to-fuchsia-500/20 blur-lg"
              />
              <div className="relative flex size-56 flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary via-violet-600 to-fuchsia-600 shadow-xl sm:size-64">
                <GraduationCap className="size-20 text-white/95 sm:size-24" />
                <span className="mt-4 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                  {teacher.initials} · {teacher.role.split(",")[0]}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Дипломированный лингвист</Badge>
              <Badge variant="outline">CELTA</Badge>
              <Badge variant="outline">5 языков</Badge>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                {teacher.name}
              </h3>
              <p className="mt-1 text-muted-foreground">{teacher.role}</p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Я влюблена в языки с детства, а последние 10 лет превращаю эту
                  любовь в результат для учеников. Моя задача — не «пройти
                  учебник», а сделать так, чтобы вы реально говорили, писали и
                  думали на новом языке.
                </p>
                <p>
                  Каждый раз я начинаю с цели ученика: собеседование, переезд,
                  экзамен или путешествия. Под эту цель собираю программу,
                  подбираю материалы и проверяю прогресс — поэтому занятия дают
                  видимый результат, а не просто заполненные часы.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Образование и квалификация
              </h4>
              <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                {education.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="flex flex-col gap-2">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <p className="text-sm font-semibold leading-snug">
                        {item.title}
                      </p>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {item.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <dl className="grid grid-cols-2 gap-4">
              {keyFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <Card key={fact.label} className="card-hover p-5">
                    <dt className="sr-only">{fact.label}</dt>
                    <dd className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                      <Icon className="size-5 text-primary" />
                      {fact.value}
                    </dd>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {fact.label}
                    </p>
                  </Card>
                );
              })}
            </dl>

            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <Quote className="size-4" />
                Результаты учеников
              </h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {studentResults.map((result) => (
                  <figure
                    key={result.meta}
                    className="rounded-xl border bg-background p-5"
                  >
                    <blockquote className="text-sm leading-relaxed">
                      «{result.quote}»
                    </blockquote>
                    <figcaption className="mt-3 text-xs text-muted-foreground">
                      {result.meta}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
