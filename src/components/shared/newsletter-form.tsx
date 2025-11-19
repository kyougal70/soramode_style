"use client";

import { useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitNewsletter } from "@/lib/actions";
import { Loader2 } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email({ message: "有効なメールアドレスを入力してください。" }),
});

type NewsletterFormInputs = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit: SubmitHandler<NewsletterFormInputs> = (data) => {
    setResult(null);
    startTransition(async () => {
      const res = await submitNewsletter(data.email);
      setResult(res);
      if (res.success) {
        reset();
      }
    });
  };

  if (result?.success) {
    return (
        <div className="mt-6 text-center text-green-700">
            <p>{result.message}</p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="flex w-full max-w-md mx-auto items-start space-x-2">
        <div className="flex-1">
          <Input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className="w-full"
            aria-invalid={errors.email ? "true" : "false"}
            disabled={isPending}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-destructive text-left" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={isPending}>
            {isPending ? <Loader2 className="animate-spin" /> : "購読する"}
        </Button>
      </div>
      {result && !result.success && (
        <p className="mt-2 text-sm text-destructive" role="alert">
          {result.message}
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        プライバシーを尊重します。スパムはありません。
      </p>
    </form>
  );
}
