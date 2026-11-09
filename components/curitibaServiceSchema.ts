import pages from '../data/curitibaServices.json';
export type CuritibaPage = typeof pages[number];
export const siteOrigin = 'https://www.supremasite.com.br';
export function curitibaServiceSchema(page: CuritibaPage) {
 const url = siteOrigin + page.path;
 return {'@context':'https://schema.org','@graph':[
  {'@type':'Organization','@id':siteOrigin+'/#organization',name:'Suprema Sites Express',alternateName:'Suprema Mídia',url:siteOrigin+'/',telephone:'+5541992721004'},
  {'@type':'WebPage','@id':url+'#webpage',url,name:page.title,description:page.description,inLanguage:'pt-BR',dateModified:'2026-11-09',primaryImageOfPage:{'@type':'ImageObject',url:siteOrigin+'/images/curitiba/'+page.image+'.webp',caption:'Ilustração conceitual criada com IA.'},mainEntity:{'@id':url+'#service'},breadcrumb:{'@id':url+'#breadcrumb'}},
  {'@type':'Service','@id':url+'#service',name:page.label,serviceType:page.label,description:page.intro,url,provider:{'@id':siteOrigin+'/#organization'},areaServed:{'@type':'City',name:'Curitiba'}},
  {'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:siteOrigin+'/'},{'@type':'ListItem',position:2,name:'Serviços',item:siteOrigin+'/servicos'},{'@type':'ListItem',position:3,name:page.label,item:url}]}
 ]};
}
