"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const roles = ["Builder", "Founder", "Sponsor", "Venue", "Other"] as const;

export function InterestForm() {
  const [role, setRole] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      role,
      message: String(formData.get("message") ?? ""),
    };

    // Placeholder handler for MVP launch.
    console.log("Builders NYC interest:", payload);

    setSubmitted(true);
    form.reset();
    setRole("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FieldGroup className="gap-4">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <FieldContent>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="rounded-2xl border-[#fc8c03]/40 bg-[#fff9f2]/95 shadow-[0_10px_20px_-18px_rgba(252,140,3,0.85)] transition-shadow focus-visible:shadow-[0_14px_26px_-18px_rgba(252,140,3,0.95)]"
            />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldContent>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="rounded-2xl border-[#0404d4]/35 bg-[#f3f7ff]/95 shadow-[0_10px_20px_-18px_rgba(4,4,212,0.9)] transition-shadow focus-visible:shadow-[0_14px_26px_-18px_rgba(4,4,212,0.95)]"
            />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="role">I am a</FieldLabel>
          <FieldContent>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger
                id="role"
                className="h-11 w-full rounded-2xl border-[#fcdf03]/75 bg-[#fffdf1]/95 shadow-[0_10px_20px_-18px_rgba(252,223,3,0.9)] transition-shadow focus-visible:shadow-[0_14px_26px_-18px_rgba(252,140,3,0.95)]"
              >
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border border-[#fc8c03]/40 bg-white/98 p-2 shadow-[0_22px_36px_-22px_rgba(0,0,0,0.6)]">
                {roles.map((item) => (
                  <SelectItem
                    key={item}
                    value={item}
                    className="my-1 mx-auto w-[calc(100%-0.5rem)] rounded-xl border border-transparent px-3 py-2.5 text-slate-800 focus:border-[#fc8c03]/40 focus:bg-[#fff4e8] focus:text-slate-900"
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <FieldContent>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us what you're interested in."
              className="min-h-28 rounded-2xl border-[#0404d4]/35 bg-[#f5f8ff]/95"
            />
            <FieldDescription>
              Share whether you want to attend, sponsor, host, or demo a tool.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          className="cursor-pointer rounded-full bg-[#fc8c03] text-white shadow-[0_16px_28px_-18px_rgba(252,140,3,0.9)] hover:bg-[#f58a13]"
        >
          Send Interest
        </Button>
        {submitted && (
          <p className="text-sm text-slate-700">
            Thanks! We received your interest.
          </p>
        )}
      </div>
    </form>
  );
}
