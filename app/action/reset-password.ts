"use server";

import { getUserByEmail } from "@/lib/password-reset-token";
import { generatePasswordResetToken } from "@/lib/tokens";
import * as z from "zod";
import { DomainFor } from "@/config/api-endpoint";
import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site-config";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const ResetSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
});

export const resetPassword = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  try {
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return { error: "Email not found!" };
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    const resetLink = `${DomainFor}/new-password?token=${passwordResetToken.token}`;
    await transporter.sendMail({
      from: `${siteConfig.siteName} <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Reset Your Password",
      html: `
        <p>Hello,</p>
        <p>We received a request to reset your password. Click the link below to reset your password:</p>
        <a href="${resetLink}" target="_blank">Reset Password</a>
        <p>If you didn&apos;t request a password reset, you can safely ignore this email.</p>
        <p>For your security, the link will expire in 24 hours.</p>

        <p>Thank you,</p>
        <p>Your App Team</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return { error: "Failed to send reset email. Please try again later." };
  }
};
