import {
  ArrowRight,
  CheckCircle2,
  Compass,
  MessageCircle,
  RefreshCcw,
  Rocket,
  Target,
  Trophy,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Диагностика и цель",
    text: "На первом занятии определяем уровень и формулируем конкретную цель: собеседование, переезд, экзамен или путешествия.",
  },
  {
    icon: Target,
    step: "02",
    title: "Индивидуальная программа",
    text: "Собираю программу под вашу задачу: нужные темы, лексика и ситуации — без отвлекающей «общей» теории.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Говорим с первого занятия",
    text: "70% урока — живая практика речи. Вы используете язык с первых минут, а не изучаете правила неделями в одиночку.",
  },
  {
    icon: RefreshCcw,
    step: "04",
    title: "Система запоминания",
    text: "Контекст, ассоциации и интервальные повторения вместо зубрёжки: новая лексика остаётся в активном словаре.",
  },
  {
    icon: Trophy,
    step: "05",
    title: "Контроль прогресса",
    text: "После каждого блока разбираем результат и корректируем план. Каждый месяц вы видите измеримый сдвиг к цели.",
  },
];

const principles = [
  "Результат, а не просто часы",
  "Индивидуальный план под вас",
  "Обратная связь после каждого урока",
  "Погружение в язык с первого дня",
];

const resultReasons = [
  {
    title: "Программа строится вокруг вашей цели",
    text: "Каждый урок приближает к конкретному результату — собеседованию, переезду или экзамену, а не к концу учебника.",
  },
  {
    title: "Навык формируется через речь",
    text: "Вы говорите с первых занятий, поэтому язык закрепляется как привычка — так же, как это происходит в языковой среде.",
  },
  {
    title: "Знания превращаются в автоматизм",
    text: "Интервальные повторения и контекст переносят слова и конструкции из памяти в спонтанную речь.",
  },
  {
    title: "Прогресс измеряется и корректируется",
    text: "Регулярные срезы показывают, что уже работает, а что нужно усилить, — поэтому вы не застреваете на одном уровне.",
  },
];

export function MethodologySection() {
  return (
    <section id="methodology" className="gradient-section-fuchsia scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Методика
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Система, которая приводит к речи
          </h2>
          <p className="mx-auto mt-4 text-lg text-muted-foreground">
            Пять понятных шагов от первого диалога до уверенного общения — без
            воды и лишней теории.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.step}>
                <Card className="card-hover h-full p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-2xl font-bold tracking-tight text-muted-foreground/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </Card>
              </li>
            );
          })}

          <li>
            <Card className="h-full bg-gradient-to-br from-primary via-violet-600 to-fuchsia-600 p-6 text-white ring-0">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                  <Rocket className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    Принципы обучения
                  </p>
                  <ul className="mt-3 space-y-2">
                    {principles.map((principle) => (
                      <li
                        key={principle}
                        className="flex items-start gap-2 text-sm font-medium"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-white/90" />
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </li>
        </ol>

        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border bg-card/60 p-8 sm:p-12">
          <Badge variant="secondary" className="mb-4">
            Почему это даёт результат
          </Badge>
          <h3 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
            Занятия приводят к цели, потому что построены как система
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {resultReasons.map((reason) => (
              <div key={reason.title} className="flex flex-col gap-2">
                <p className="flex items-center gap-2 font-semibold">
                  <ArrowRight className="size-4 shrink-0 text-primary" />
                  {reason.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
