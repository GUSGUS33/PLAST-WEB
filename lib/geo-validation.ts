import { GeoLocationData, geoLocations } from '@/data/geo';

export interface ContaminationIssue {
  slug: string;
  forbiddenToponym: string;
  foundIn: string;
}

export type GeoPublishValidationStatus = 'PASS' | 'REVIEW' | 'FAIL';

export interface GeoValidationCheckList {
  seo: GeoPublishValidationStatus;
  content: GeoPublishValidationStatus;
  safety: GeoPublishValidationStatus;
  hierarchy: GeoPublishValidationStatus;
  intent: GeoPublishValidationStatus;
  differentiation: GeoPublishValidationStatus;
  interlinking: GeoPublishValidationStatus;
}

export interface GeoPublishValidationResult {
  status: GeoPublishValidationStatus;
  reasons: string[];
  internalWarnings?: string[];
  checks: GeoValidationCheckList;
}

export interface RenderedGeoValidationResult {
  status: GeoPublishValidationStatus;
  reasons: string[];
  checks: {
    canonical: GeoPublishValidationStatus;
    metaTitle: GeoPublishValidationStatus;
    metaDescription: GeoPublishValidationStatus;
    h1: GeoPublishValidationStatus;
    faqSchema: GeoPublishValidationStatus;
    cleanContent: GeoPublishValidationStatus;
    indexable: GeoPublishValidationStatus;
    cta: GeoPublishValidationStatus;
  };
}

/**
  * AUDIT TRACEABILITY OF PUBLIC TECHNICAL SPECIFICATIONS
  *
  * Taxonomy:
  * - CLIENT_CONFIRMED: Dato comunicado explícitamente por PLASTEM / cliente.
  * - DOCUMENT_VERIFIED: Existe documento técnico primario real disponible y localizable en el proyecto.
  * - PROJECT_LEGACY: Dato existente en código heredado (data/products.ts, data/guides.ts), sin documento adjunto.
  * - UNVERIFIED: Afirmación todavía no confirmada por cliente ni documento.
  * - CONFLICTING: Existen valores contradictorios entre fuentes.
  * - MISSING_SOURCE: Afirmación técnica que requeriría respaldo documental, pero no existe fuente conocida.
  *
  * Specification                          | Source / Reference             | Real Source               | Status
  * ------------------------------------------------------------------------------------------------------------------
  * Nombre: Disco Soporte PLASTEM            | data/products.ts, data/site.ts | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Altura: 12 mm                            | data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Junta / Aleta: 5 mm                      | data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Diámetro: 146 mm                         | data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Material: Polipropileno                  | data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Material reciclable                      | data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Colores: Negro y Gris                    | data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Baldosones compatibles (30x30 a 60x60)   | data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Colocación (membrana, geotextil, carpeta)| data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Armado en seco / Apilables / Livianos    | data/products.ts              | Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Alta resistencia para tránsito peatonal  | data/products.ts, app/page.tsx| Comunicado por PLASTEM    | CLIENT_CONFIRMED
  * Protección UV de impermeabilización (somba)| data/solutions.ts          | Beneficio del sistema     | CLIENT_CONFIRMED
  * Protección UV del polipropileno          | data/products.ts              | Código heredado           | PROJECT_LEGACY
  * Granizo (protección de membrana x baldosón)| data/solutions.ts          | Beneficio del sistema     | CLIENT_CONFIRMED
  * Granizo (ensayo de impacto en disco)     | data/products.ts              | Sin documento             | MISSING_SOURCE
  * Carga máxima / resistencia (1000 kg)     | data/guides.ts                | Sin documento             | MISSING_SOURCE
  * Certificados de ensayo / Norma IRAM      | app/nosotros/page.tsx         | Sin documento             | MISSING_SOURCE
  */

/**
 * Validates whether a technical claim is authorized for use in Geo Pages.
 * Rejects numerical load values (e.g. "1000 kg", "1000kg", "1 tonelada"),
 * lab test claims ("ensayo de laboratorio", "certificación iram"),
 * or unverified structural metrics without CLIENT_CONFIRMED or DOCUMENT_VERIFIED status.
 */
export function canUseTechnicalClaim(text: string): { allowed: boolean; reason?: string } {
  const lower = text.toLowerCase();

  if (/1000\s*kg|1000kg|\btonelada\b|ensayo\s+de\s+laboratorio|certificado\s+iram|norma\s+iram|certificación\s+oficial/i.test(lower)) {
    return {
      allowed: false,
      reason: `Claim técnico no verificado o carente de fuente primaria (MISSING_SOURCE / UNVERIFIED): "${text}"`,
    };
  }

  return { allowed: true };
}

/**
 * Validates that a geo location data object does not contain unauthorized
 * mentions of distinct provinces/cities (cross-contamination check).
 * Covers all public-facing fields in GeoLocationData.
 */
export function checkGeoContamination(geo: GeoLocationData): ContaminationIssue[] {
  const issues: ContaminationIssue[] = [];

  const parentGeo = geo.parentProvinceSlug
    ? geoLocations.find(g => g.slug === geo.parentProvinceSlug)
    : null;

  const otherGeos = geoLocations.filter(g => {
    if (g.slug === geo.slug) return false;
    if (geo.parentProvinceSlug && g.slug === geo.parentProvinceSlug) return false;
    if (g.parentProvinceSlug && g.parentProvinceSlug === geo.slug) return false;
    if (geo.nearbyGeos?.includes(g.slug)) return false;
    return true;
  });

  const fieldsToScan: { name: string; text: string | null | undefined }[] = [
    { name: 'seo.h1', text: geo.seo.h1 },
    { name: 'seo.metaTitle', text: geo.seo.metaTitle },
    { name: 'seo.metaDescription', text: geo.seo.metaDescription },
    { name: 'intro', text: geo.intro },
    { name: 'primaryLocations', text: geo.primaryLocations?.join(' ') },
    { name: 'parentProvinceName', text: geo.parentProvinceName },
    { name: 'logistics.deliveryType', text: geo.logistics?.deliveryType },
    { name: 'logistics.dispatchOrigin', text: geo.logistics?.dispatchOrigin },
    { name: 'logistics.pickupLocation', text: geo.logistics?.pickupLocation },
    { name: 'logistics.notes', text: geo.logistics?.notes },
    { name: 'images.hero.alt', text: geo.images?.hero?.alt },
    { name: 'images.product.alt', text: geo.images?.product?.alt },
    { name: 'images.installation.alt', text: geo.images?.installation?.alt },
    { name: 'images.logistics.alt', text: geo.images?.logistics?.alt },
    { name: 'relatedProducts', text: geo.relatedProducts?.join(' ') },
    { name: 'relatedSolutions', text: geo.relatedSolutions?.join(' ') },
    { name: 'relatedGuides', text: geo.relatedGuides?.join(' ') },
    { name: 'relatedSegments', text: geo.relatedSegments?.join(' ') },
    ...geo.faq.flatMap((f, idx) => [
      { name: `faq[${idx}].question`, text: f.question },
      { name: `faq[${idx}].answer`, text: f.answer },
    ]),
  ];

  for (const other of otherGeos) {
    if (!other.name || other.name.length < 4) continue;

    const regex = new RegExp(`\\b${other.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');

    for (const field of fieldsToScan) {
      if (!field.text) continue;

      // Exception Rule A: Manufacturing / Despatch Origin or Autonomous City Official Name
      if (
        (other.slug === 'buenos-aires' || other.slug === 'caba') &&
        (/fábrica|base|despacho|depósito|deposito|expreso|transporte|terminal|planta|viajo a buenos aires|retirar en|gba sur|gran buenos aires|ciudad autónoma de buenos aires/i.test(
          field.text
        ))
      ) {
        continue;
      }

      // Exception Rule B: City mentioning its parent province (e.g. Rosario mentioning Santa Fe)
      if (
        geo.geoType === 'city' &&
        parentGeo &&
        other.slug === parentGeo.slug &&
        field.name !== 'seo.h1'
      ) {
        continue;
      }

      // Exception Rule C: Parent province mentioning its child cities (e.g. Santa Fe mentioning Rosario or La Plata mentioning Buenos Aires)
      if (
        geo.geoType === 'province' &&
        other.geoType === 'city' &&
        other.parentProvinceSlug === geo.slug
      ) {
        continue;
      }

      if (regex.test(field.text)) {
        issues.push({
          slug: geo.slug,
          forbiddenToponym: other.name,
          foundIn: field.name,
        });
      }
    }
  }

  return issues;
}

/**
 * Validates that the geo page primary intent is commercial coverage / logistics / supply.
 */
export function validateGeoIntent(geo: GeoLocationData): { valid: boolean; reason?: string } {
  const h1Lower = (geo.seo.h1 || '').toLowerCase();
  const introLower = (geo.intro || '').toLowerCase();

  const geoKeywords = [
    'envío',
    'envios',
    'cobertura',
    'despacho',
    'despachamos',
    'provincia',
    'ciudad',
    'obras',
    'proyectos',
    'logística',
    'logistica',
    'atención',
    'comprar',
    'venta',
    'provisión',
    'provision',
    'suministro',
    'abastecemos',
    'abastecer',
    'abastecimiento',
    'insumos',
    'presupuesto',
    'distribución',
    'distribucion',
    'transporte',
  ];

  const hasGeoIntentKeyword = geoKeywords.some(
    kw => h1Lower.includes(kw) || introLower.includes(kw)
  );

  if (!hasGeoIntentKeyword) {
    return {
      valid: false,
      reason: 'El contenido principal o H1 carece de foco geocomercial (envíos, cobertura, proyectos o despacho).',
    };
  }

  return { valid: true };
}

/**
 * Checks semantic differentiation between geo pages.
 * Ignores universal corporate/technical product facts.
 * Detects mechanical substitution of toponyms across locations.
 */
export function validateGeoDifferentiation(geo: GeoLocationData): {
  status: GeoPublishValidationStatus;
  reasons: string[];
} {
  const reasons: string[] = [];
  const publishedGeos = geoLocations.filter(g => g.slug !== geo.slug && g.status === 'published');

  if (publishedGeos.length === 0) {
    return { status: 'PASS', reasons: [] };
  }

  const normalizeForDiff = (text: string, geoName: string) => {
    return text
      .toLowerCase()
      .replace(new RegExp(geoName.toLowerCase(), 'g'), '')
      .replace(/discos soporte|baldosones|polipropileno|junta de 5mm|plastem|fábrica|provincia de|ciudad de/g, '')
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const getNGrams = (text: string, n = 3): Set<string> => {
    const words = text.split(' ');
    const grams = new Set<string>();
    for (let i = 0; i <= words.length - n; i++) {
      grams.add(words.slice(i, i + n).join(' '));
    }
    return grams;
  };

  const currentNormalized = normalizeForDiff(geo.intro || '', geo.name);
  const currentGrams = getNGrams(currentNormalized);

  for (const other of publishedGeos) {
    const otherNormalized = normalizeForDiff(other.intro || '', other.name);
    if (currentNormalized.length > 30 && currentNormalized === otherNormalized) {
      reasons.push(
        `Introducción idéntica a la página publicada de ${other.name} (sustitución mecánica de topónimo).`
      );
      continue;
    }

    const otherGrams = getNGrams(otherNormalized);
    if (currentGrams.size > 5 && otherGrams.size > 5) {
      let intersection = 0;
      for (const gram of currentGrams) {
        if (otherGrams.has(gram)) intersection++;
      }
      const similarity = intersection / Math.min(currentGrams.size, otherGrams.size);
      if (similarity > 0.85) {
        reasons.push(
          `Alta similitud semántica (${Math.round(similarity * 100)}%) por plantilla clonada con ${other.name}.`
        );
      }
    }
  }

  if (reasons.length > 0) {
    return { status: 'FAIL', reasons };
  }

  return { status: 'PASS', reasons: [] };
}

/**
 * SECURITY & QUALITY GATE FOR DATA MODEL:
 * Validates whether a geo entity satisfies all mandatory SEO, logistics, content,
 * anti-contamination, and data integrity requirements before it can be published.
 */
export function canPublishGeoPage(geo: GeoLocationData): GeoPublishValidationResult {
  const failReasons: string[] = [];
  const reviewReasons: string[] = [];
  const internalWarnings: string[] = [];

  const checks: GeoValidationCheckList = {
    seo: 'PASS',
    content: 'PASS',
    safety: 'PASS',
    hierarchy: 'PASS',
    intent: 'PASS',
    differentiation: 'PASS',
    interlinking: 'PASS',
  };

  // 1. Mandatory SEO Metadata
  if (!geo.seo.h1 || geo.seo.h1.trim().length === 0) {
    failReasons.push('Falta H1 propio para la página geográfica');
    checks.seo = 'FAIL';
  }

  if (!geo.seo.metaTitle || geo.seo.metaTitle.trim().length === 0) {
    failReasons.push('Falta meta title propio');
    checks.seo = 'FAIL';
  } else if (geo.seo.metaTitle.length < 15 || geo.seo.metaTitle.length > 70) {
    internalWarnings.push(`Meta title tiene longitud no estándar (${geo.seo.metaTitle.length} chars)`);
  }

  if (!geo.seo.metaDescription || geo.seo.metaDescription.trim().length === 0) {
    failReasons.push('Falta meta description propia');
    checks.seo = 'FAIL';
  } else if (geo.seo.metaDescription.length < 50 || geo.seo.metaDescription.length > 180) {
    internalWarnings.push(`Meta description tiene longitud no estándar (${geo.seo.metaDescription.length} chars)`);
  }

  if (!geo.slug || geo.slug.trim().length === 0) {
    failReasons.push('Falta slug válido para canonical');
    checks.seo = 'FAIL';
  }

  // 2. Intro & Sufficient Content
  if (!geo.intro || geo.intro.trim().length < 40) {
    failReasons.push('Falta contenido de introducción suficiente (mínimo 40 caracteres)');
    checks.content = 'FAIL';
  }

  // 3. SEPARATION: PUBLIC CONTENT SCAN vs INTERNAL DATA SCAN
  const publicContentScan = JSON.stringify([
    geo.seo,
    geo.intro,
    geo.faq,
    geo.logistics,
    geo.primaryLocations,
    geo.images,
    geo.relatedProducts,
    geo.relatedSolutions,
    geo.relatedGuides,
    geo.relatedSegments,
  ]);

  const internalNotesScan = JSON.stringify([geo.internalNotes]);

  // Public scan
  if (publicContentScan.includes('[DATO_FALTA:')) {
    failReasons.push('Contiene marcadores de datos pendientes en contenido público [DATO_FALTA]');
    checks.content = 'FAIL';
  }

  // Internal scan -> internalWarnings ONLY (does not alter public SEO pass/fail result)
  if (internalNotesScan.includes('[DATO_FALTA:')) {
    internalWarnings.push('Contiene notas internas de gobernanza pendientes [DATO_FALTA]');
  }

  if (geo.verification.logistics !== 'verified') {
    reviewReasons.push('Logística no verificada completamente (verification.logistics != "verified")');
    if (checks.safety === 'PASS') checks.safety = 'REVIEW';
  }
  if (geo.verification.seoContent !== 'verified') {
    reviewReasons.push('Contenido SEO no verificado completamente (verification.seoContent != "verified")');
    if (checks.content === 'PASS') checks.content = 'REVIEW';
  }

  // 4. Forbidden Logistics Claims Check (Commercial Safety)
  const forbiddenClaims = [
    'envío gratis',
    'envio gratis',
    'flete gratis',
    'entrega garantizada',
    'entrega en 24',
    'entrega en 48',
    'entrega en 72',
    'stock local',
    'depósito local',
    'deposito local',
    'sucursal local',
    'transporte propio nacional',
    'tarifa fija de transporte',
  ];

  const lowerPublicScan = publicContentScan.toLowerCase();
  for (const claim of forbiddenClaims) {
    if (lowerPublicScan.includes(claim)) {
      failReasons.push(`Contiene afirmación logística no verificada o prohibida en contenido público: "${claim}"`);
      checks.safety = 'FAIL';
    }
  }

  // 4b. Technical Claims Governance Check
  const techClaimCheck = canUseTechnicalClaim(publicContentScan);
  if (!techClaimCheck.allowed) {
    failReasons.push(techClaimCheck.reason || 'Contiene afirmación técnica no verificada en contenido público');
    checks.safety = 'FAIL';
  }

  // 5. FAQ Policy Validation
  if (!geo.faq || geo.faq.length === 0) {
    failReasons.push('Falta bloque de FAQ para la provincia/ciudad');
    checks.content = 'FAIL';
  } else {
    if (geo.faq.length > 9) {
      reviewReasons.push(`Tiene ${geo.faq.length} preguntas FAQ (máximo recomendado: 8-9)`);
      if (checks.content === 'PASS') checks.content = 'REVIEW';
    }

    const questions = geo.faq.map(f => f.question.toLowerCase().trim());
    if (new Set(questions).size < questions.length) {
      failReasons.push('Contiene preguntas FAQ duplicadas');
      checks.content = 'FAIL';
    }

    const unverifiedFaqs = geo.faq.filter(f => !f.verified);
    if (unverifiedFaqs.length > 0) {
      reviewReasons.push(`Tiene ${unverifiedFaqs.length} preguntas FAQ no verificadas`);
      if (checks.content === 'PASS') checks.content = 'REVIEW';
    }
  }

  // 6. Interlinking
  if (
    (!geo.relatedProducts || geo.relatedProducts.length === 0) &&
    (!geo.relatedSolutions || geo.relatedSolutions.length === 0)
  ) {
    failReasons.push('Falta interlinking con productos o soluciones');
    checks.interlinking = 'FAIL';
  }

  // 7. Anti-Contamination Check
  const contaminationIssues = checkGeoContamination(geo);
  if (contaminationIssues.length > 0) {
    for (const issue of contaminationIssues) {
      failReasons.push(
        `Contaminación geográfica detectada: mención no autorizada a "${issue.forbiddenToponym}" en ${issue.foundIn}`
      );
    }
    checks.safety = 'FAIL';
  }

  // 8. Hierarchy Check
  if (geo.geoType === 'city' && !geo.parentProvinceSlug) {
    failReasons.push('La entidad es de tipo "city" pero no define parentProvinceSlug');
    checks.hierarchy = 'FAIL';
  }

  // 9. Intent Check
  const intentRes = validateGeoIntent(geo);
  if (!intentRes.valid) {
    failReasons.push(intentRes.reason || 'Falta foco de intención geocomercial');
    checks.intent = 'FAIL';
  }

  // 10. Semantic Differentiation Check
  const diffRes = validateGeoDifferentiation(geo);
  if (diffRes.status === 'FAIL') {
    failReasons.push(...diffRes.reasons);
    checks.differentiation = 'FAIL';
  } else if (diffRes.status === 'REVIEW') {
    reviewReasons.push(...diffRes.reasons);
    if (checks.differentiation === 'PASS') checks.differentiation = 'REVIEW';
  }

  // Final Overall Status
  if (failReasons.length > 0) {
    return {
      status: 'FAIL',
      reasons: [...failReasons, ...reviewReasons],
      internalWarnings,
      checks,
    };
  }

  if (reviewReasons.length > 0 || geo.status === 'needs-review') {
    return {
      status: 'REVIEW',
      reasons: reviewReasons,
      internalWarnings,
      checks,
    };
  }

  return {
    status: 'PASS',
    reasons: [],
    internalWarnings,
    checks,
  };
}

/**
 * VALIDATE RENDERED OUTPUT ON HTML EXPORT (/dist/envios/[ciudad]/index.html)
 * Strictly separates DATA validation from RENDERED OUTPUT validation.
 */
export function validateRenderedGeoOutput(
  htmlContent: string,
  expectedGeo: GeoLocationData
): RenderedGeoValidationResult {
  const reasons: string[] = [];
  const checks = {
    canonical: 'PASS' as GeoPublishValidationStatus,
    metaTitle: 'PASS' as GeoPublishValidationStatus,
    metaDescription: 'PASS' as GeoPublishValidationStatus,
    h1: 'PASS' as GeoPublishValidationStatus,
    faqSchema: 'PASS' as GeoPublishValidationStatus,
    cleanContent: 'PASS' as GeoPublishValidationStatus,
    indexable: 'PASS' as GeoPublishValidationStatus,
    cta: 'PASS' as GeoPublishValidationStatus,
  };

  // 1. Canonical Check
  const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i;
  const canonicalMatch = htmlContent.match(canonicalRegex);
  const expectedCanonical = `/envios/${expectedGeo.slug}`;
  if (!canonicalMatch) {
    reasons.push('Falta etiqueta <link rel="canonical"> en el HTML renderizado');
    checks.canonical = 'FAIL';
  } else if (
    !canonicalMatch[1].endsWith(expectedCanonical) &&
    !canonicalMatch[1].endsWith(`${expectedCanonical}/`)
  ) {
    reasons.push(`Canonical en HTML (${canonicalMatch[1]}) no coincide con ${expectedCanonical}`);
    checks.canonical = 'FAIL';
  }

  // 2. Meta Title Check
  const titleRegex = /<title[^>]*>([^<]+)<\/title>/i;
  const titleMatch = htmlContent.match(titleRegex);
  if (!titleMatch) {
    reasons.push('Falta etiqueta <title> en el HTML renderizado');
    checks.metaTitle = 'FAIL';
  } else if (expectedGeo.seo.metaTitle && !titleMatch[1].includes(expectedGeo.seo.metaTitle)) {
    reasons.push(`El <title> renderizado ("${titleMatch[1]}") no contiene el metaTitle esperado`);
    checks.metaTitle = 'FAIL';
  }

  // 3. Meta Description Check
  const descRegex = /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i;
  const descMatch = htmlContent.match(descRegex);
  if (!descMatch) {
    reasons.push('Falta <meta name="description"> en el HTML renderizado');
    checks.metaDescription = 'FAIL';
  } else if (expectedGeo.seo.metaDescription && descMatch[1] !== expectedGeo.seo.metaDescription) {
    reasons.push('Meta description renderizada no coincide exactamente con el modelo DATA');
    checks.metaDescription = 'FAIL';
  }

  // 4. H1 Tag Check
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/i;
  const h1Match = htmlContent.match(h1Regex);
  if (!h1Match) {
    reasons.push('Falta etiqueta <h1> en el HTML renderizado');
    checks.h1 = 'FAIL';
  } else {
    const cleanH1 = h1Match[1].replace(/<[^>]+>/g, '').trim();
    if (expectedGeo.seo.h1 && !cleanH1.includes(expectedGeo.seo.h1)) {
      reasons.push(`H1 renderizado ("${cleanH1}") no coincide con el H1 de DATA ("${expectedGeo.seo.h1}")`);
      checks.h1 = 'FAIL';
    }
  }

  // 5. FAQ Schema Check
  if (!htmlContent.includes('"@type":"FAQPage"') && !htmlContent.includes('"@type": "FAQPage"')) {
    reasons.push('Falta JSON-LD @type FAQPage en el HTML renderizado');
    checks.faqSchema = 'FAIL';
  }

  // 6. Clean Content (No [DATO_FALTA:])
  if (htmlContent.includes('[DATO_FALTA:')) {
    reasons.push('El HTML renderizado contiene marcadores visibles [DATO_FALTA]');
    checks.cleanContent = 'FAIL';
  }

  // 7. Robots Indexable Check
  if (expectedGeo.indexable && htmlContent.includes('<meta name="robots" content="noindex"')) {
    reasons.push('Página indexable contiene etiqueta noindex en HTML');
    checks.indexable = 'FAIL';
  }

  // 8. Structural CTA Check
  if (!htmlContent.includes('wa.me/') && !htmlContent.includes('#calculadora')) {
    reasons.push('El HTML renderizado no incluye botones de CTA estructurales (WhatsApp / Calculadora)');
    checks.cta = 'FAIL';
  }

  const overallStatus: GeoPublishValidationStatus = reasons.length > 0 ? 'FAIL' : 'PASS';

  return { status: overallStatus, reasons, checks };
}



