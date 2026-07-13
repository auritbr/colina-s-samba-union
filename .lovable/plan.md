# Revisão do site União da Colina

Objetivo: ajustar a escala visual (títulos, cards, banners, botões, espaçamentos) para um padrão institucional equilibrado, criar um sistema de grafismos ornamentais inspirado no brasão, e expandir o conteúdo editorial de todas as páginas — sem refazer o projeto do zero, mantendo rotas, componentes e paleta verde/branco com Montserrat.

## 1. Sistema base (tokens e utilitários)

Em `src/styles.css`:
- Escala tipográfica reduzida com clamp() para hero (52–64 desktop), títulos de seção (34–42), subtítulos (20–24), cards (18–22), body (16–18), auxiliares (14–16).
- Container `.container-uc` com max-width 1240px e paddings responsivos (24 / 20 / 16).
- Tokens de espaçamento de seção: `--section-y` (72–96 desktop, 56 tablet, 40 mobile).
- Ajuste de radius, altura de botão (46px), padding e sombras discretas.

## 2. Componente ornamental (grafismo do brasão)

Novo componente `src/components/site/BrandPattern.tsx` — SVG reutilizável com curvas simétricas, moldura circular, faixas e folhas inspiradas no brasão, em variantes:
- `header` (denso nas laterais, centro limpo)
- `hero` (moldura orgânica)
- `divider` (linha curva entre seções)
- `footer` (marca d'água discreta)

Usado em `SiteHeader`, `PageHero`, transições e `SiteFooter`.

## 3. Header e Hero

- `SiteHeader`: altura 84px desktop / 72px mobile, brasão 68px / 54px, fundo com `BrandPattern variant="header"` sobre verde profundo, centro limpo atrás do menu, dropdowns com z-index alto.
- `PageHero`: altura 460–520px desktop / 380px mobile, título proporcional, breadcrumb discreto, grafismos laterais, transição curva para o próximo bloco.

## 4. Cards, botões e seções

Redução global via componentes já existentes (`SectionTitle`, cards inline nas rotas): padding 24–32, radius 12, ícones 32, títulos 18–20. Grades 3–4 col no desktop, alturas naturais.

## 5. Template editorial de segmento

Novo componente `src/components/site/SegmentPage.tsx` (ou blocos reutilizáveis `SegmentSection`, `TimelineBlock`, `MembersGrid`, `TestimonialsBlock`, `GalleryBlock`, `RelatedLinks`) para padronizar as 10 seções descritas:
1. Banner  2. Sobre  3. Trajetória  4. Função e importância (cards)
5. Integrantes (estado vazio elegante)  6. Linha do tempo  7. Depoimentos
8. Galeria  9. Vídeo (ocultável)  10. Conheça também

Textos institucionais genéricos e placeholders honestos ("Os registros históricos e as informações detalhadas deste segmento estão em processo de organização…"). Sem inventar nomes, datas ou fatos.

## 6. Páginas atualizadas

Aplicar o template e conteúdos específicos solicitados:
- `diretoria.tsx` — papel, estrutura, cargos editáveis (sem nomes), gestões, mensagem.
- `velha-guarda.tsx` — significado, transmissão, homenagens sóbrias, título "Guardadores da memória da Colina".
- `bateria.tsx` — mestres, ritmistas, instrumentos compactos (surdo 1/2/3, caixa, repique, tamborim, chocalho, cuíca, agogô, reco-reco).
- `ala-das-baianas.tsx` — ancestralidade, tradição, sem estereótipos, título "Ancestralidade que gira na avenida".
- `comissao-de-frente.tsx` — função, coreógrafos, figurinos, título "A primeira apresentação da escola".
- `mestre-sala-e-porta-bandeiras.tsx` — pavilhão, bailado, casais, título "Elegância e respeito ao pavilhão".
- `interpretes.tsx` — papel, direção musical, compositores, player placeholder, título "As vozes da União da Colina".
- `a-escola.tsx` — expandir para 18 blocos solicitados (fundação 1947, contexto, primeiros desfiles, importância, evolução, retomadas, timeline, segmentos, memória oral, acervo, preservação).
- `titulos.tsx` — cards compactos 3–4 por linha, filtros por década/categoria (sem inventar títulos).
- `carnaval-2026.tsx` — reorganizar em seções completas com estado vazio discreto.
- `contato.tsx` — reduzir tamanho de campos e formulário (max 680px), coluna lateral com contato.
- `index.tsx` — ajustar escala do home mantendo composição.

## 7. Footer

`SiteFooter` com `BrandPattern variant="footer"` (moldura curva superior, marca d'água discreta), 4 colunas (marca, A Escola, Carnaval, Contato+Redes), altura equilibrada.

## 8. Responsividade

Ajustes específicos nos breakpoints 1440 / 1280 / 1024 / 768 / 430 / 390 / 360 usando as classes responsivas do Tailwind e o container-uc, garantindo sem scroll horizontal e grafismos que não sobrepõem texto.

## Regras respeitadas

- Paleta verde/branco preservada; Montserrat mantido.
- Rotas e nomes de arquivos inalterados.
- Sem dados históricos, integrantes ou depoimentos inventados — apenas placeholders honestos.
- Grafismos reinterpretados a partir do brasão (círculo, faixas, estrelas, folhas), sem copiar a referência Beija-Flor.

## Detalhes técnicos

- Todas as alterações em CSS/JSX; sem novas dependências.
- `BrandPattern` como SVG inline (leve, escalável, acessível com `aria-hidden`).
- Estados vazios via `PlaceholderNote` já existente + novos componentes discretos.
- Verificação: build automático + revisão visual nas rotas principais.
