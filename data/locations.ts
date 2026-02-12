
export const cities = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", 
  "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", 
  "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", 
  "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", 
  "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const neighborhoods = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", 
  "Vila Hauer", "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", 
  "Vila Guaíra", "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", 
  "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", "Augusta", 
  "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", 
  "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", 
  "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia", 
  "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", 
  "Cidade Industrial de Curitiba", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", 
  "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", 
  "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", 
  "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", 
  "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", 
  "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", 
  "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", 
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", 
  "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", 
  "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", "Cidade Industrial", "Vila Verde", 
  "Vila Barigui", "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho", 
  "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro", 
  "Vila Osternack", "Conjunto Caiuá", "Conjunto Parigot de Souza", "Vila Reno", 
  "Vila Audi", "Jardim Gabineto", "Belo Ar", "Colina Verde", "Gralha Azul", 
  "Barro Preto", "Vila Vitória Régia", "Vila Santa Helena", "Vila Conquista", 
  "Vila Osvaldo Cruz I", "Vila Osvaldo Cruz II", "Vila Itatiaia", "Vila Atenas",
  "Vila Sandra", "Vila Vitória", "Jardim Gabineto", "Neo Ville", "Vila Formosa"
];

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const getNameFromSlug = (slug: string) => {
  const allLocations = [...cities, ...neighborhoods];
  const found = allLocations.find(loc => slugify(loc) === slug);
  if (found) return found;
  
  // Fallback para slugs não encontrados na lista
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
