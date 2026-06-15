export type QuoteLeadPayload = {
  name: string;
  whatsapp: string;
  email?: string;
  origin: string;
  destination: string;
  flightDate: string;
  preferredTime?: string;
  passengers: number;
  missionType: string;
  notes?: string;
};

export type ClientPortalUser = {
  id: string;
  name: string;
  email: string;
  role: "client" | "owner" | "admin";
};

export type QuoteHistoryItem = {
  id: string;
  status: "pending" | "in_review" | "quoted" | "closed";
  createdAt: string;
  missionSummary: string;
};

export type AircraftRegistrationLead = {
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  aircraftModel: string;
  aircraftBase: string;
  availabilityNotes?: string;
};

export type AircraftDocument = {
  id: string;
  label: string;
  fileUrl: string;
  expiresAt?: string;
};

// Estrutura reservada para futura integração com API Laravel.
// Enquanto isso, o site usa uma rota interna do Next.js para encaminhar o lead por e-mail.
export async function submitQuoteLead(payload: QuoteLeadPayload) {
  const response = await fetch("/api/quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = (await response.json().catch(() => null)) as
    | { error?: string; success?: boolean }
    | null;

  if (!response.ok) {
    throw new Error(result?.error ?? "Nao foi possivel enviar sua solicitacao agora.");
  }

  return result;
}
