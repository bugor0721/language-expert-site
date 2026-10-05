import {
  ArrowRight,
  Check,
  Clock3,
  MessageCircleHeart,
  ShieldCheck,
} from "lucide-react";

import { RequestForm } from "@/components/request-form";
import { RequestIllustration } from "@/components/request-illustration";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Разговорная практика",
    price: "2 900 ₽",
    unit: "за занятие 60 минут",
    description:
      "Живое общение с первых минут — для тех, кто хочет говорить уверенно и без страха ошибиться.",
    features: [
      "70% урока — разговорная практика",
      "Расширение активного словаря",
      "Темы под ваши интересы и ситуации",
      "Обратная связь после каждого урока",
    ],
  },
  {
    name: "Индивидуальная программа",
    price: "3 900 ₽",
    unit: "за занятие 60 минут",
    description:
      "Персональный план под вашу цель: собеседование, переезд, путешествия или экзамен.",
    features: [
      "Диагностика уровня и цели",
      "Грамматика в контексте живой речи",
      "Материалы под ваш уровень и задачу",
      "Поддержка в мессенджере между уроками",
    ],
    badge: "Популярный выбор",
    highlighted: true,
  },
  {
    name: "Интенсив к цели",
    price: "5 900 ₽",
    unit: "за занятие 90 минут",
    description:
      "Максимальный темп для сжатых сроков: экзамены, собеседования и переезд.",
    features: [
      "Интенсивные занятия по 90 минут",
      "Пробные экзамены и интервью",
      "Еженедельный контроль прогресса",
      "Ускоренная программа подготовки",
    ],
  },
];

const requestHighlights = [
  {
    icon: MessageCircleHeart,
    text: "Подберу программу под вашу цель",
  },
  { icon: Clock3, text: "Отвечаю в течение дня" },
  { icon: ShieldCheck, text: "Никакого спама и обязательств" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="gradient-section-indigo scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Услуги и цены
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Прозрачные тарифы под вашу задачу
          </h2>
          <p className="mx-auto mt-4 text-lg text-muted-foreground">
            Форматы занятий и стоимость — открыто и без скрытых доплат. Оставьте
            заявку, и я подберу программу под вашу цель.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-20 grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white/70 p-6 ring-1 ring-foreground/10 backdrop-blur sm:p-10">
              <RequestIllustration />
              <ul className="mt-8 flex flex-col gap-3">
                {requestHighlights.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <Card
      className={cn(
        "card-hover h-full p-6",
        plan.highlighted && "ring-2 ring-primary"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
        {plan.badge && <Badge variant="secondary">{plan.badge}</Badge>}
      </div>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{plan.unit}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {plan.description}
      </p>

      <ul className="mt-5 flex flex-col gap-2.5 border-t pt-5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#request"
        className={cn(
          buttonVariants({
            variant: plan.highlighted ? "default" : "outline",
          }),
          "mt-6 w-full"
        )}
      >
        Выбрать формат
        <ArrowRight />
      </a>
    </Card>
  );
}
