"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitQuoteLead } from "@/lib/future-integrations";
import { siteConfig } from "@/lib/site";

type QuoteFormState = {
  nome: string;
  whatsapp: string;
  email: string;
  origem: string;
  destino: string;
  data: string;
  horario: string;
  passageiros: string;
  tipoMissao: string;
  observacoes: string;
};

const initialState: QuoteFormState = {
  nome: "",
  whatsapp: "",
  email: "",
  origem: "",
  destino: "",
  data: "",
  horario: "",
  passageiros: "",
  tipoMissao: "Voo executivo",
  observacoes: ""
};

const requiredFields: Array<keyof QuoteFormState> = [
  "nome",
  "whatsapp",
  "origem",
  "destino",
  "data",
  "passageiros",
  "tipoMissao"
];

export function QuoteForm() {
  const [formData, setFormData] = useState(initialState);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    tone: "success" | "error";
    message: string;
  } | null>(null);

  const hasErrors = useMemo(
    () => requiredFields.some((field) => formData[field].trim().length === 0),
    [formData]
  );

  function updateField(field: keyof QuoteFormState, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);
    setFeedback(null);

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitQuoteLead({
        name: formData.nome.trim(),
        whatsapp: formData.whatsapp.trim(),
        email: formData.email.trim(),
        origin: formData.origem.trim(),
        destination: formData.destino.trim(),
        flightDate: formData.data,
        preferredTime: formData.horario.trim(),
        passengers: Number(formData.passageiros),
        missionType: formData.tipoMissao.trim(),
        notes: formData.observacoes.trim()
      });

      setFormData(initialState);
      setAttemptedSubmit(false);
      setFeedback({
        tone: "success",
        message: "Solicitação enviada por e-mail com sucesso. Nossa equipe retorna em breve."
      });
    } catch (error) {
      setFeedback({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível enviar sua solicitação agora."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-line/80 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Nome"
          value={formData.nome}
          onChange={(value) => updateField("nome", value)}
          error={attemptedSubmit && !formData.nome}
        />
        <Field
          label="WhatsApp"
          value={formData.whatsapp}
          onChange={(value) => updateField("whatsapp", value)}
          error={attemptedSubmit && !formData.whatsapp}
        />
        <Field
          label="E-mail"
          type="email"
          value={formData.email}
          onChange={(value) => updateField("email", value)}
        />
        <Field
          label="Origem"
          value={formData.origem}
          onChange={(value) => updateField("origem", value)}
          error={attemptedSubmit && !formData.origem}
        />
        <Field
          label="Destino"
          value={formData.destino}
          onChange={(value) => updateField("destino", value)}
          error={attemptedSubmit && !formData.destino}
        />
        <Field
          label="Data do voo"
          type="date"
          value={formData.data}
          onChange={(value) => updateField("data", value)}
          error={attemptedSubmit && !formData.data}
        />
        <Field
          label="Horário desejado"
          type="time"
          value={formData.horario}
          onChange={(value) => updateField("horario", value)}
        />
        <Field
          label="Número de passageiros"
          type="number"
          value={formData.passageiros}
          onChange={(value) => updateField("passageiros", value)}
          error={attemptedSubmit && !formData.passageiros}
        />
        <label className="grid gap-2 text-sm font-medium text-brand-950 md:col-span-2">
          Tipo de missão
          <select
            value={formData.tipoMissao}
            onChange={(event) => updateField("tipoMissao", event.target.value)}
            className="h-12 rounded-2xl border border-line bg-white px-4 text-sm text-muted-600 outline-none transition focus:border-gold-500"
          >
            <option>Voo executivo</option>
            <option>Helicóptero</option>
            <option>UTI aérea</option>
            <option>Transporte de órgãos</option>
            <option>Translado funerário aéreo</option>
            <option>Aviação agrícola</option>
            <option>Logística aérea</option>
            <option>Compra e venda de aeronaves</option>
            <option>Gestão de aeronaves</option>
            <option>Agregamento de aeronave</option>
            <option>Voos compartilhados</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand-950 md:col-span-2">
          Observações
          <textarea
            value={formData.observacoes}
            onChange={(event) => updateField("observacoes", event.target.value)}
            rows={5}
            className="rounded-3xl border border-line bg-white px-4 py-3 text-sm text-muted-600 outline-none transition focus:border-gold-500"
            placeholder="Informações adicionais, urgência, bagagens, trecho especial ou exigências da missão."
          />
        </label>
      </div>
      {attemptedSubmit && hasErrors && (
        <p className="mt-4 text-sm text-red-600">
          Preencha os campos obrigatórios para enviar a solicitação por e-mail.
        </p>
      )}
      {feedback && (
        <p
          className={`mt-4 text-sm ${
            feedback.tone === "success" ? "text-emerald-700" : "text-red-600"
          }`}
        >
          {feedback.message}
        </p>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar solicitação por e-mail"}
        </Button>
        <Button href={siteConfig.whatsappHref} variant="whatsapp">
          Falar no WhatsApp
        </Button>
        <Button
          type="button"
          variant="secondary"
          disabled={isSubmitting}
          onClick={() => {
            setFormData(initialState);
            setAttemptedSubmit(false);
            setFeedback(null);
          }}
        >
          Limpar campos
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: boolean;
};

function Field({ label, value, onChange, type = "text", error = false }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-brand-950">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`h-12 rounded-2xl border bg-white px-4 text-sm text-muted-600 outline-none transition ${
          error ? "border-red-300 focus:border-red-500" : "border-line focus:border-gold-500"
        }`}
      />
    </label>
  );
}
