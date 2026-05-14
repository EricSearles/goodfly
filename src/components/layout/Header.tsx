"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import { mainNavigation, siteConfig } from "@/lib/site";

const serviceMenuItems = services.filter(
  (service) => service.slug !== "agregue-sua-aeronave"
);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <div className="glass-panel rounded-full border border-white/70 px-4 py-3 shadow-lg shadow-brand-950/5">
          <div className="flex items-center justify-between gap-4">
            <Logo compact />

            <nav className="hidden items-center gap-7 lg:flex">
              {mainNavigation.map((item) =>
                item.type === "services" ? (
                  <div key={item.label} className="group relative">
                    <button className="text-sm font-medium text-brand-950 transition hover:text-brand-900">
                      {item.label}
                    </button>
                    <div className="pointer-events-none absolute left-1/2 top-full z-20 w-[680px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="rounded-[28px] border border-line/80 bg-white p-6 shadow-xl">
                        <div className="mb-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-900">
                            Soluções aéreas
                          </p>
                          <p className="mt-2 text-sm leading-7 text-muted-600">
                            Selecione o serviço mais próximo da sua missão.
                          </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {serviceMenuItems.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/${service.slug}`}
                              className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-brand-950 transition hover:border-line hover:bg-muted-50"
                            >
                              {service.navTitle}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-brand-950 transition hover:text-brand-900"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:block">
              <Button href={siteConfig.whatsappHref} variant="whatsapp" className="px-4">
                <Phone className="h-4 w-4" />
                WhatsApp 24h
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand-950 lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Abrir menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {menuOpen && (
            <div className="mt-4 border-t border-line/80 pt-4 lg:hidden">
              <div className="space-y-3">
                {mainNavigation.map((item) =>
                  item.type === "services" ? (
                    <div key={item.label} className="rounded-3xl border border-line/70 p-3">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-left text-sm font-semibold text-brand-950"
                        onClick={() => setServicesOpen((value) => !value)}
                      >
                        {item.label}
                        <span>{servicesOpen ? "−" : "+"}</span>
                      </button>
                      {servicesOpen && (
                        <div className="mt-3 space-y-2">
                          {serviceMenuItems.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/${service.slug}`}
                              className="block rounded-2xl bg-muted-50 px-4 py-3 text-sm text-brand-950"
                              onClick={() => setMenuOpen(false)}
                            >
                              {service.navTitle}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-2xl border border-line/70 px-4 py-3 text-sm font-medium text-brand-950"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Button href={siteConfig.whatsappHref} variant="whatsapp" className="w-full">
                  WhatsApp 24h
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
