import {
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const assurances = [
  {
    icon: CalendarCheck,
    title: "Бесплатная диагностика",
    text: "Определю уровень и подберу программу под вашу цель.",
  },
  {
    icon: MessageCircle,
    title: "Первый результат через месяц",
    text: "Вы заговорите уже в первый месяц — без долгой теории.",
  },
  {
    icon: ShieldCheck,
    title: "Без риска и спама",
    text: "Никаких навязанных оплат — только честный план занятий.",
  },
];

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="border-t">
      <div className="gradient-hero-vibrant relative overflow-hidden">
        <div
          aria-hidden
          className="pattern-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Начните сегодня
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Следующий язык вы уже начинаете{" "}
            <span className="bg-gradient-to-r from-primary via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              учить прямо сейчас
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Один месяц отделяет вас от первого уверенного диалога. Оставьте
            заявку на бесплатную диагностику — и получите индивидуальную
            программу под вашу цель.
          </p>

          <a href="#request" className="mt-10 block">
            <Button size="lg" className="h-14 px-10 text-lg">
              Записаться на бесплатную диагностику
              <ArrowRight data-icon="inline-end" />
            </Button>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Отвечаю в течение дня · Никакого спама
          </p>

          <dl className="mx-auto mt-14 grid max-w-3xl gap-8 text-left sm:grid-cols-3">
            {assurances.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <dt className="flex items-center gap-2 font-semibold">
                    <Icon className="size-5 shrink-0 text-primary" />
                    {item.title}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
