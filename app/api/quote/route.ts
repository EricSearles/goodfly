import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type QuoteLeadRequest = {
  name?: unknown;
  whatsapp?: unknown;
  email?: unknown;
  origin?: unknown;
  destination?: unknown;
  flightDate?: unknown;
  preferredTime?: unknown;
  passengers?: unknown;
  missionType?: unknown;
  notes?: unknown;
};

type QuoteLeadPayload = {
  name: string;
  whatsapp: string;
  email: string;
  origin: string;
  destination: string;
  flightDate: string;
  preferredTime: string;
  passengers: number;
  missionType: string;
  notes: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clientErrors = new Set([
  "Preencha os campos obrigatórios do formulário.",
  "Informe um e-mail válido."
]);

export const runtime = "nodejs";

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Variável de ambiente ausente: ${name}`);
  }

  return value;
}

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(body: QuoteLeadRequest): QuoteLeadPayload {
  const payload = {
    name: normalizeText(body.name),
    whatsapp: normalizeText(body.whatsapp),
    email: normalizeText(body.email),
    origin: normalizeText(body.origin),
    destination: normalizeText(body.destination),
    flightDate: normalizeText(body.flightDate),
    preferredTime: normalizeText(body.preferredTime),
    passengers:
      typeof body.passengers === "number"
        ? body.passengers
        : Number(normalizeText(body.passengers)),
    missionType: normalizeText(body.missionType),
    notes: normalizeText(body.notes)
  };

  if (
    !payload.name ||
    !payload.whatsapp ||
    !payload.origin ||
    !payload.destination ||
    !payload.flightDate ||
    !payload.missionType ||
    !Number.isFinite(payload.passengers) ||
    payload.passengers <= 0
  ) {
    throw new Error("Preencha os campos obrigatórios do formulário.");
  }

  if (payload.email && !emailPattern.test(payload.email)) {
    throw new Error("Informe um e-mail válido.");
  }

  return payload;
}

function formatEmailBody(payload: QuoteLeadPayload) {
  const lines = [
    "Nova solicitação de cotação recebida pelo site Good Fly.",
    "",
    `Nome: ${payload.name}`,
    `WhatsApp: ${payload.whatsapp}`,
    `E-mail: ${payload.email || "Não informado"}`,
    `Origem: ${payload.origin}`,
    `Destino: ${payload.destination}`,
    `Data do voo: ${payload.flightDate}`,
    `Horário desejado: ${payload.preferredTime || "Não informado"}`,
    `Passageiros: ${payload.passengers}`,
    `Tipo de missão: ${payload.missionType}`,
    `Observações: ${payload.notes || "Não informado"}`
  ];

  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteLeadRequest;
    const payload = parsePayload(body);

    const host = getRequiredEnv("GOODFLY_SMTP_HOST");
    const port = Number(getRequiredEnv("GOODFLY_SMTP_PORT"));
    const user = getRequiredEnv("GOODFLY_SMTP_USER");
    const pass = getRequiredEnv("GOODFLY_SMTP_PASS");
    const from = getRequiredEnv("GOODFLY_SMTP_FROM");
    const to = process.env.GOODFLY_CONTACT_RECIPIENT?.trim() || siteConfig.email;
    const secure = process.env.GOODFLY_SMTP_SECURE === "true";

    if (!Number.isFinite(port)) {
      throw new Error("Variável de ambiente inválida: GOODFLY_SMTP_PORT");
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass
      }
    });

    await transporter.sendMail({
      from,
      to,
      subject: `Nova solicitação de cotação - ${payload.missionType}`,
      replyTo: payload.email || undefined,
      text: formatEmailBody(payload)
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Não foi possível enviar a solicitação agora.";

    const status = clientErrors.has(message) ? 400 : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
