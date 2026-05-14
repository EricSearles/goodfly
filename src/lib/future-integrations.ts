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
// Nesta primeira versão, o site permanece estático e a conversão ocorre via WhatsApp.
export async function submitQuoteLead(_payload: QuoteLeadPayload) {
  throw new Error("Integração com Laravel API ainda não implementada.");
}
