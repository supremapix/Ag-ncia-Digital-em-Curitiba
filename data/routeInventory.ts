import {cities,scCities,rsCities,neighborhoods,slugify} from './locations';
import {cityData} from './cityData';
// Existing published sitemap routes omitted by the legacy location arrays.
export const supplementalRegions:Record<string,string>={'fazenda-rio-grande':'PR','guarapuava':'PR','passo-fundo':'RS','bage':'RS','farroupilha':'RS','erechim':'RS'};
export const supplementalNames:Record<string,string>={'fazenda-rio-grande':'Fazenda Rio Grande','guarapuava':'Guarapuava','passo-fundo':'Passo Fundo','bage':'Bagé','farroupilha':'Farroupilha','erechim':'Erechim'};
export const localitySlugs=[...new Set([...cities,...scCities,...rsCities,...neighborhoods].map(slugify).concat(Object.keys(cityData),Object.keys(supplementalRegions)))];
export const knownLocality=(slug:string)=>localitySlugs.includes(slug);
export const staticRoutes=['/','/presenca-local','/servicos','/portfolio','/sobre','/blog','/contato','/mapa-do-site','/privacidade','/sites-em-parana','/sites-em-santa-catarina','/sites-em-rio-grande-do-sul','/bairros-curitiba','/agencia-seo-curitiba','/agencia-marketing-digital-curitiba','/google-ads-curitiba','/seo-local-curitiba','/ia-marketing-curitiba','/criacao-de-sites','/criacao-de-sites/capitais','/criacao-de-sites/como-escolher'];
