// Only unambiguous corrections verified against the official IBGE municipality API.
// Ambiguous legacy slugs remain outside this table pending editorial review.
export const verifiedMunicipalities: Record<string, { name: string; state: string; uf: string; ibgeId: number; source: string }> = {
  botucatu: {
    name: 'Botucatu', state: 'São Paulo', uf: 'SP', ibgeId: 3507506,
    source: 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3507506',
  },
};
