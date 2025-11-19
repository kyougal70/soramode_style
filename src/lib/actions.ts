// "use server";

import { z } from "zod";
import {baseUrl} from "@/config";

const contactSchema = z.object({
    name: z.string().min(2, "名前は2文字以上で入力してください。"),
    email: z.string().email("有効なメールアドレスを入力してください。"),
    message: z.string().min(10, "メッセージは10文字以上で入力してください。"),
});

// This is a placeholder for a client-side submission handler.
// In a real application, you would replace this with an API call.
export async function submitContactForm(data: z.infer<typeof contactSchema>) {
    console.log("Contact form submitted with:", data);
    await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return {
        message: "メッセージありがとうございます！近日中に返信いたします。",
        success: true,
    };
}


// This is a placeholder for a client-side submission handler.
export async function submitNewsletter(email: string) {
    if(!email || !z.string().email().safeParse(email).success) {
        return { success: false, message: '有効なメールアドレスを入力してください。' };
    }

    console.log(`ニュースレター登録: ${email}`);
    await new Promise(res => setTimeout(res, 1000));

    return { success: true, message: "ご登録ありがとうございます！" };
}
