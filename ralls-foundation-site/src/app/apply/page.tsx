"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  orgName: z.string().min(2, "Organization name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email required"),
  website: z.string().url().optional().or(z.literal("")),
  requestAmount: z.string().min(1, "Amount required"),
  programTitle: z.string().min(2, "Program title is required"),
  programSummary: z.string().min(20, "Please provide a brief summary (≥20 chars)"),
  serviceArea: z.string().min(2, "Service area required"),
});

type FormData = z.infer<typeof schema>;

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok) {
      setSubmitted(json.id as string);
      reset();
    } else {
      alert(json.error ?? "Submission failed");
    }
  };

  return (
    <div className="container py-16">
      <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">Apply for a Grant</h1>
      <p className="text-lg text-zinc-700 mb-8">
        We support programs that deliver nutrition education to children and caregivers in underserved communities.
      </p>

      {submitted && (
        <div className="mb-6 rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/40">
          <p className="text-sm">Thank you! Your application ID is <span className="font-mono font-semibold">{submitted}</span>.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
        <Field label="Organization Name" error={errors.orgName?.message}>
          <input {...register("orgName")} className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
        </Field>
        <Field label="Primary Contact" error={errors.contactName?.message}>
          <input {...register("contactName")} className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" {...register("email")} className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
        </Field>
        <Field label="Website" error={errors.website?.message}>
          <input {...register("website")} placeholder="https://" className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
        </Field>
        <Field label="Requested Amount (USD)" error={errors.requestAmount?.message}>
          <input {...register("requestAmount")} placeholder="e.g., 10,000" className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
        </Field>
        <Field label="Service Area" error={errors.serviceArea?.message}>
          <input {...register("serviceArea")} placeholder="City/region and populations served" className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
        </Field>
        <div className="md:col-span-2">
          <Field label="Program Title" error={errors.programTitle?.message}>
            <input {...register("programTitle")} className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="Program Summary" error={errors.programSummary?.message}>
            <textarea rows={6} {...register("programSummary")} className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
          </Field>
        </div>
        <div className="md:col-span-2">
          <button className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}


