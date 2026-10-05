import type { Metadata } from "next";
import Link from "next/link";
import {
  Database,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика обработки персональных данных на сайте эксперта иностранных языков",
};

const sections = [
  {
    icon: UserRound,
    title: "1. Какие данные мы собираем",
    paragraphs: [
      "Через форму заявки на сайте вы добровольно предоставляете следующие персональные данные: имя, контакт для связи (телефон или e-mail), интересующий язык и, по желанию, вашу цель изучения языка.",
      "Иные данные (например, файлы cookie и обезличенная аналитика посещений) могут собираться автоматически и не относятся к персональным данным в понимании законодательства.",
    ],
  },
  {
    icon: Mail,
    title: "2. Как мы используем данные",
    paragraphs: [
      "Собранные данные используются исключительно для связи с вами: чтобы ответить на заявку, определить ваш уровень, подобрать программу обучения и предложить удобное время занятий.",
      "Мы не передаём ваши персональные данные третьим лицам, не используем их для рассылок без вашего согласия и не продаём их. Данные используются только для обработки вашей заявки и обсуждения сотрудничества.",
    ],
  },
  {
    icon: Database,
    title: "3. Как мы храним данные",
    paragraphs: [
      "Данные, полученные через форму заявки, хранятся в защищённом виде и доступны только владельцу сайта для обработки обращений.",
      "Мы храним персональные данные не дольше, чем это необходимо для целей обработки заявки и общения с вами. После завершения переписки данные удаляются или обезличиваются, если иное не предусмотрено законодательством.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "4. Ваши права",
    paragraphs: [
      "Вы вправе запросить информацию о том, какие ваши персональные данные у нас хранятся, потребовать их уточнения, блокирования или удаления, а также отозвать согласие на обработку в любой момент.",
      "Для этого напишите нам на контакт, указанный ниже, — мы ответим в течение разумного срока и выполним ваш запрос.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="gradient-hero-vibrant relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="secondary"
              className="animate-in fade-in mb-6 duration-500"
            >
              Конфиденциальность и защита данных
            </Badge>
            <h1 className="animate-in fade-in slide-in-from-bottom-4 text-4xl font-bold leading-tight tracking-tight duration-700 sm:text-5xl">
              Политика конфиденциальности
            </h1>
            <p className="animate-in fade-in slide-in-from-bottom-4 mx-auto mt-6 max-w-2xl text-lg font-medium text-[oklch(0.34_0.045_270)] duration-700 delay-100">
              Рассказываем, какие данные мы собираем через форму заявки, как их
              используем и храним, и какими правами вы обладаете.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <Card className="gap-6 p-6 shadow-sm sm:p-8">
            <CardHeader className="px-0">
              <CardTitle className="text-xl font-bold tracking-tight sm:text-2xl">
                Политика обработки персональных данных
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Настоящая политика обработки персональных данных действует в
                отношении информации, которую пользователи оставляют через форму
                заявки на сайте эксперта иностранных языков. Отправляя заявку,
                вы соглашаетесь с условиями настоящей политики.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <Card
                key={section.title}
                className="card-hover p-6 shadow-sm sm:p-8"
              >
                <CardHeader className="px-0 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <section.icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="text-lg font-bold tracking-tight sm:text-xl">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 px-0">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-10" />

          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border bg-muted/40 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <LockKeyhole className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-base font-semibold tracking-tight">
                  Остались вопросы?
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  По всем вопросам обработки персональных данных напишите через
                  форму заявки на сайте — мы ответим в течение дня.
                </p>
              </div>
            </div>
            <Link href="/#request" className="shrink-0">
              <Button>Оставить заявку</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
