"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Send } from "lucide-react";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const languageOptions = [
  { value: "english", label: "Английский" },
  { value: "german", label: "Немецкий" },
  { value: "french", label: "Французский" },
  { value: "korean", label: "Корейский" },
  { value: "chinese", label: "Китайский" },
  { value: "help", label: "Помогите выбрать" },
];

const requestSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя"),
  contact: z.string().trim().min(5, "Укажите телефон или e-mail для связи"),
  language: z.string().min(1, "Выберите интересующий язык"),
  goal: z.string().trim().max(400, "Цель — не более 400 символов").optional(),
});

type RequestValues = z.infer<typeof requestSchema>;
type RequestErrors = Partial<Record<keyof RequestValues, string>>;

const initialErrors: RequestErrors = {};

export function RequestForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [language, setLanguage] = useState("");
  const [goal, setGoal] = useState("");
  const [errors, setErrors] = useState<RequestErrors>(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = requestSchema.safeParse({ name, contact, language, goal });

    if (!result.success) {
      const nextErrors: RequestErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RequestValues;
        if (field && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    toast.success("Заявка отправлена!", {
      description: "Я свяжусь с вами в течение дня.",
    });
  }

  function handleReset() {
    setName("");
    setContact("");
    setLanguage("");
    setGoal("");
    setErrors({});
    setSubmitted(false);
  }

  function clearFieldError(field: keyof RequestValues) {
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      return { ...prev, [field]: undefined };
    });
  }

  return (
    <Card id="request" className="scroll-mt-24 p-6 shadow-sm sm:p-8">
      {submitted ? (
        <div className="animate-in fade-in flex flex-col items-center gap-4 py-8 text-center duration-500">
          <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-7" />
          </span>
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Заявка отправлена!
            </h3>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Спасибо, {name.trim()}! Я свяжусь с вами в течение дня по
              указанному контакту и предложу удобный формат занятий.
            </p>
          </div>
          <Button variant="outline" onClick={handleReset}>
            Отправить ещё одну заявку
          </Button>
        </div>
      ) : (
        <>
          <div className="mb-6 text-left">
            <Badge variant="secondary" className="mb-3">
              Бесплатная диагностика
            </Badge>
            <h3 className="text-2xl font-bold tracking-tight">
              Оставьте заявку
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Расскажите о себе — я определю уровень, подберу программу под вашу
              цель и предложу удобное время занятий.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <FieldGroup>
              <Field data-invalid={!!errors.name || undefined}>
                <FieldLabel htmlFor="request-name">
                  Имя <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="request-name"
                  name="name"
                  placeholder="Как к вам обращаться"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    clearFieldError("name");
                  }}
                  aria-invalid={!!errors.name || undefined}
                  autoComplete="name"
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.contact || undefined}>
                <FieldLabel htmlFor="request-contact">
                  Телефон или e-mail <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="request-contact"
                  name="contact"
                  type="text"
                  inputMode="text"
                  placeholder="+7 900 000-00-00 или email@example.com"
                  value={contact}
                  onChange={(event) => {
                    setContact(event.target.value);
                    clearFieldError("contact");
                  }}
                  aria-invalid={!!errors.contact || undefined}
                  autoComplete="off"
                />
                {errors.contact && <FieldError>{errors.contact}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.language || undefined}>
                <FieldLabel htmlFor="request-language">
                  Интересующий язык <span className="text-destructive">*</span>
                </FieldLabel>
                <Select
                  items={languageOptions}
                  value={language}
                  onValueChange={(value) => {
                    setLanguage(value ?? "");
                    clearFieldError("language");
                  }}
                >
                  <SelectTrigger
                    id="request-language"
                    className="w-full"
                    aria-invalid={!!errors.language || undefined}
                  >
                    <SelectValue placeholder="Выберите язык" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {languageOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.language && <FieldError>{errors.language}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.goal || undefined}>
                <FieldLabel htmlFor="request-goal">
                  Ваша цель{" "}
                  <span className="font-normal text-muted-foreground">
                    (необязательно)
                  </span>
                </FieldLabel>
                <Textarea
                  id="request-goal"
                  name="goal"
                  placeholder="Например: собеседование, переезд, путешествия или экзамен"
                  value={goal}
                  onChange={(event) => {
                    setGoal(event.target.value);
                    clearFieldError("goal");
                  }}
                  aria-invalid={!!errors.goal || undefined}
                />
                {errors.goal && <FieldError>{errors.goal}</FieldError>}
              </Field>
            </FieldGroup>

            <Button type="submit" size="lg" className="mt-6 w-full">
              Отправить заявку
              <Send data-icon="inline-end" />
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Бесплатная диагностика · Никакого спама · Отвечаю в течение дня
            </p>
          </form>
        </>
      )}
    </Card>
  );
}
