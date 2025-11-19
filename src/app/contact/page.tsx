"use client";

import { useFormStatus } from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { useState, useTransition } from "react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "名前は2文字以上で入力してください。"),
  email: z.string().email("有効なメールアドレスを入力してください。"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください。"),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
        メッセージを送信
      </Button>
  )
}

export default function ContactPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const processForm: SubmitHandler<ContactFormInputs> = (data) => {
    startTransition(async () => {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: "メッセージが送信されました！",
          description: result.message,
        });
        reset();
      } else {
        toast({
          title: "エラー",
          description: result.message || "フォームの送信中にエラーが発生しました。",
          variant: "destructive",
        });
      }
    });
  }

  return (
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <Card className="mx-auto max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl sm:text-4xl">お問い合わせ</CardTitle>
            <CardDescription className="text-lg">
              ご質問やコメントがありますか？お気軽にお問い合わせください。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(processForm)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">お名前</Label>
                <Input id="name" {...register("name")} disabled={isPending} />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" type="email" {...register("email")} disabled={isPending} />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">メッセージ</Label>
                <Textarea id="message" {...register("message")} rows={6} disabled={isPending}/>
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>
              <div>
                <SubmitButton isPending={isPending} />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
  );
}
