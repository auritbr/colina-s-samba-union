export type NavChild = { label: string; to: string };
export type NavItem = {
  label: string;
  to?: string;
  children?: NavChild[];
};

export const NAV: NavItem[] = [
  { label: "Início", to: "/" },
  {
    label: "A Escola",
    to: "/a-escola",
    children: [
      { label: "A Escola", to: "/a-escola" },
      { label: "Diretoria", to: "/diretoria" },
      { label: "Velha Guarda", to: "/velha-guarda" },
      { label: "Bateria", to: "/bateria" },
      { label: "Ala das Baianas", to: "/ala-das-baianas" },
      { label: "Comissão de Frente", to: "/comissao-de-frente" },
      { label: "Mestre-Sala e Porta-Bandeiras", to: "/mestre-sala-e-porta-bandeiras" },
      { label: "Intérpretes", to: "/interpretes" },
    ],
  },
  {
    label: "Carnaval",
    children: [
      { label: "Títulos", to: "/titulos" },
      { label: "Carnaval 2026", to: "/carnaval-2026" },
    ],
  },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
];