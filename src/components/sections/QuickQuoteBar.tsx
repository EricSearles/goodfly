"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildQuoteMessage, buildWhatsAppUrl } from "@/lib/utils";

const missionOptions = [
  "Voo executivo",
  "Helicóptero",
  "UTI aérea",
  "Transporte de órgãos",
  "Logística aérea",
  "Outro"
];

export function QuickQuoteBar() {
  const [formData, setFormData] = useState({
    origem: "",
    destino: "",
    data: "",
    passageiros: "",
    missao: missionOptions[0]
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = buildQuoteMessage({
      "Origem:": formData.origem,
      "Destino:": formData.destino,
      "Data:": formData.data,
      "Passageiros:": formData.passageiros,
      "Tipo de missão:": formData.missao
    });

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="-mt-10 relative z-20 pb-8">
      <Container>
        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-line/80 bg-white p-5 shadow-xl shadow-brand-950/6 sm:p-6"
        >
          <div className="grid gap-4 xl:grid-cols-[1fr_1fr_0.9fr_0.7fr_1fr_auto]">
            <Input
              label="Origem"
              value={formData.origem}
              onChange={(value) => setFormData((current) => ({ ...current, origem: value }))}
            />
            <Input
              label="Destino"
              value={formData.destino}
              onChange={(value) => setFormData((current) => ({ ...current, destino: value }))}
            />
            <Input
              label="Data"
              type="date"
              value={formData.data}
              onChange={(value) => setFormData((current) => ({ ...current, data: value }))}
            />
            <Input
              label="Passageiros"
              type="number"
              value={formData.passageiros}
              onChange={(value) => setFormData((current) => ({ ...current, passageiros: value }))}
            />
            <label className="grid gap-2 text-sm font-medium text-brand-950">
              Tipo de missão
              <select
                value={formData.missao}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, missao: event.target.value }))
                }
                className="h-12 rounded-2xl border border-line bg-white px-4 text-sm text-muted-600 outline-none transition focus:border-gold-500"
              >
                {missionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex items-end">
              <Button type="submit" className="w-full xl:w-auto">
                Solicitar cotação
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

function Input({ label, value, onChange, type = "text" }: InputProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-brand-950">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-2xl border border-line bg-white px-4 text-sm text-muted-600 outline-none transition focus:border-gold-500"
      />
    </label>
  );
}
