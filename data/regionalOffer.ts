export const offer = { sitePrice: 1680, localityMonthlyPrice: 20, discountPrice: 10, hostingMonths: 60, minimumNeighborhoods: 11 };
export const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
// Confirmed: 30 or more neighborhoods receive the lower unit price for all.
export function regionalSubtotal(count: number): number | null {
  if (!Number.isInteger(count) || count < 0 || count > 75) throw new RangeError('Invalid neighborhood count');
  if (count < offer.minimumNeighborhoods) return null;
  return count * (count < 30 ? offer.localityMonthlyPrice : offer.discountPrice);
}
export const regionalFaq = [
  { q: 'Quanto custa criar meu site?', a: 'A criação do site custa R$ 1.680 em pagamento único, com 60 meses de hospedagem incluídos. O plano regional tem cobrança mensal separada.' },
  { q: 'Qual é o mínimo para iniciar o plano regional?', a: 'O plano regional começa com no mínimo 11 bairros: R$ 220 por mês. De 11 a 29 bairros, cada bairro custa R$ 20 por mês. A partir de 30 bairros, todos os bairros contratados custam R$ 10 cada por mês, sem cálculo progressivo: 30 bairros = R$ 300/mês; 31 bairros = R$ 310/mês. Seleções abaixo de 11 não formam um plano válido. A criação do site é cobrada separadamente. Cidades, capitais inteiras e regiões administrativas têm proposta sob consulta.' },
  { q: 'O que o plano regional oferece?', a: 'Trabalho de presença e visibilidade local nas localidades contratadas. A proposta detalhará as atividades e entregas do serviço. A renovação anual do domínio é paga pela Suprema enquanto o plano regional mensal estiver ativo.' },
  { q: 'O que acontece com a hospedagem após 60 meses?', a: 'Após os 60 meses iniciais, a hospedagem continua incluída, sem cobrança adicional, enquanto o plano regional mensal estiver ativo. A mensalidade das localidades contratadas continua sendo paga. Sem plano ativo, consulte as condições de renovação.' },
  { q: 'Como as localidades são contadas?', a: 'Nesta simulação, cada bairro oficial de Curitiba conta como uma localidade. Curitiba não é somada novamente como município. Vilas e subdivisões não geram cobrança adicional. Para planos com municípios ou combinação de cidades e bairros, consulte uma proposta. A calculadora considera apenas bairros de Curitiba.' },
  { q: 'Existe garantia de posição no Google ou de vendas?', a: 'O trabalho busca ampliar a presença e a visibilidade local. Não há garantia de posição ou indexação no Google, prazo de ranking ou volume de vendas.' }
];
