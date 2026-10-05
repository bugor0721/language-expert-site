import { Quote, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type Review = {
  name: string;
  language: string;
  initials: string;
  accent: string;
  result: string;
};

const reviews: Review[] = [
  {
    name: "Екатерина",
    language: "Английский",
    initials: "ЕК",
    accent: "from-sky-500 to-blue-600",
    result:
      "Через три месяца подготовки сдала IELTS на 7.5 — хватило, чтобы получить оффер от зарубежной компании. Раньше не могла и двух слов связать на собеседовании.",
  },
  {
    name: "Дмитрий",
    language: "Немецкий",
    initials: "ДМ",
    accent: "from-amber-500 to-orange-600",
    result:
      "Начал с нуля, а через год уже свободно общался с коллегами в Берлине. Программа была собрана под переезд, поэтому учил именно то, что нужно в жизни и работе.",
  },
  {
    name: "Марина",
    language: "Французский",
    initials: "МР",
    accent: "from-indigo-500 to-violet-600",
    result:
      "Мечтала читать книги в оригинале — сейчас читаю по книге в месяц и переписываюсь с подругой из Лиона. Занятия проходили настолько живо, что язык вошёл в привычку.",
  },
  {
    name: "Артём",
    language: "Корейский",
    initials: "АТ",
    accent: "from-pink-500 to-rose-600",
    result:
      "Смотрю дорамы без субтитров и спокойно объясняюсь в поездках по Сеулу. Боялся, что корейский слишком сложный, но первые фразы зазвучали уже на первом занятии.",
  },
  {
    name: "Ольга",
    language: "Китайский",
    initials: "ОЛ",
    accent: "from-emerald-500 to-green-600",
    result:
      "За полгода дошла до уверенного разговорного уровня для работы с поставщиками в Китае. Тонкая настройка произношения и иероглифы больше не пугают — система работает.",
  },
  {
    name: "Сергей",
    language: "Английский",
    initials: "СР",
    accent: "from-violet-500 to-purple-600",
    result:
      "Готовились к переезду в Канаду: за четыре месяца прошёл собеседование на визу и чувствую себя спокойно в любой бытовой ситуации. Результат, а не просто часы занятий.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="gradient-section-rose scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Отзывы
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Результаты, о которых говорят ученики
          </h2>
          <p className="mx-auto mt-4 text-lg text-muted-foreground">
            Истории тех, кто заговорил, переехал или сдал экзамен, — и как это
            изменило их жизнь.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card
              key={review.name}
              className="card-hover flex h-full flex-col p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${review.accent}`}
                >
                  {review.initials}
                </span>
                <span className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </span>
              </div>

              <blockquote className="mt-5 flex-1">
                <Quote className="mb-3 size-5 text-primary/50" />
                <p className="text-sm leading-relaxed">«{review.result}»</p>
              </blockquote>

              <figcaption className="mt-5 flex items-center justify-between gap-3 border-t pt-4">
                <span className="font-semibold">{review.name}</span>
                <Badge variant="secondary">{review.language}</Badge>
              </figcaption>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
