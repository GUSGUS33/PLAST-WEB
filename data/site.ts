export interface PhysicalLocation {
  address: string | null;
  locality: string;
  municipality: string;
  region: string;
  province: string;
  pickupAvailable: boolean;
  businessHours: string | null;
}

export interface GlobalLogisticsOption {
  carrierName: string;
  enabled: boolean;
  status: 'consult';
  verification: 'CLIENT_CONFIRMED';
  standardDisclaimer: string;
}

export interface CompanySiteData {
  companyName: string;
  brandName: string;
  physicalLocation: PhysicalLocation;
  nationalShippingCoverage: boolean;
  verificationStatus: 'unverified' | 'verified' | 'missing';
  internalNotes: string[];
  globalLogisticsOptions?: Record<string, GlobalLogisticsOption>;
}

export const siteConfig: CompanySiteData = {
  companyName: 'PLASTEM',
  brandName: 'PLASTEM',
  physicalLocation: {
    address: null, // [DATO_FALTA: Dirección exacta sin confirmar]
    locality: 'Turdera / Temperley',
    municipality: 'Lomas de Zamora',
    region: 'GBA Sur',
    province: 'Buenos Aires',
    pickupAvailable: true,
    businessHours: null, // [DATO_FALTA: Horario comercial de retiro]
  },
  nationalShippingCoverage: true,
  verificationStatus: 'unverified',
  internalNotes: [
    'Plant location exact boundary (Turdera vs Temperley) requires confirmation from PLASTEM client.',
    'Street address and pickup hours pending confirmation from PLASTEM.'
  ],
  globalLogisticsOptions: {
    viaCargo: {
      carrierName: 'Vía Cargo',
      enabled: true,
      status: 'consult',
      verification: 'CLIENT_CONFIRMED',
      standardDisclaimer: 'Vía Cargo puede consultarse como posible alternativa de transporte, sujeta a disponibilidad y acuerdo previo entre PLASTEM y el cliente.'
    }
  }
};

export function getViaCargoOption(): GlobalLogisticsOption | null {
  const option = siteConfig.globalLogisticsOptions?.viaCargo;
  if (!option || !option.enabled) return null;
  return option;
}

export function getViaCargoDisclaimer(): string | null {
  const option = getViaCargoOption();
  return option ? option.standardDisclaimer : null;
}

