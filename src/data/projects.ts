export type Tag = 'Education' | 'Research & Data' | 'Social Impact';
export type FilterTag = 'all' | Tag;
export type SpiceColor = 'saffron' | 'haldi' | 'gulabi';

export interface Project {
  id: string;
  title: string;
  description: string;
  body: string[];
  bullets?: string[];
  note?: string;
  tags: Tag[];
  color: SpiceColor;
  externalLink?: string;
  githubLink?: string;
}

export const FILTERS: FilterTag[] = ['all', 'Education', 'Research & Data', 'Social Impact'];

export const projects: Project[] = [
  {
    id: 'india-education-dashboard',
    title: 'India Education Dashboard',
    description:
      "An interactive, multi-source dashboard placing India's education data in global context — combining World Bank, UDISE+, OECD, NAS, ASER, and PGI in one place.",
    body: [
      "India runs the largest school system in the world, with over 250 million children enrolled, and yet the data needed to understand how that system is performing is scattered across sources that are incomplete, sometimes biased, and do not work together. The World Bank provides global comparisons, while UDISE+ covers administrative data from India's states and districts. OECD, NAS, and ASER track learning outcomes through different methods, while PGI measures school quality.",
      "This project builds an interactive dashboard organized around three geographic levels — World, India, and States. The World level places India in the global distribution across indicators such as enrollment, completion, learning poverty, teacher ratios, and education spending, and overlays India's own UDISE figures with World Bank estimates for the same indicators. The dual-source overlay surfaces discrepancies between domestic and international data, which are themselves informative.",
      'The goal is neutral, transparent coverage of education data that is currently presented only by the Indian government.',
    ],
    tags: ['Education', 'Research & Data'],
    color: 'saffron',
    externalLink: 'https://rheamendiratta.github.io/india-edu-site.github.io/world/',
  },
  {
    id: 'data-analysis-r',
    title: 'Data Analysis in R',
    description:
      'R evaluation of a Cook County recidivism-reduction program — cleaning administrative data, engineering indicators, testing baseline balance, and estimating treatment effects.',
    body: [
      "I was given simulated administrative data from the Cook County State's Attorney's Office to evaluate a one-year recidivism-reduction program in Chicago with randomized assignment to treatment and control.",
    ],
    bullets: [
      'Recoded race/ethnicity and summarized sample composition',
      'Merged arrests with crime records and restricted to Chicago arrests',
      'Created flexible charge indicators (e.g., homicide, weapons)',
      'Reconstructed and validated the post-assignment re-arrest outcome',
      'Tested baseline balance and produced a partner-ready visualization',
      'Estimated the relationship between treatment assignment and re-arrest using statistical models',
    ],
    note: 'Data were generated/manipulated for assessment purposes and are not intended for real-world inference.',
    tags: ['Research & Data'],
    color: 'haldi',
    githubLink: 'https://github.com/rheamendiratta/R-data-analysis-sample',
  },
  {
    id: 'up-close-and-personal',
    title: 'Up Close & Personal',
    description:
      "Host of ShikshaLokam's flagship video podcast — 20 candid conversations with senior bureaucrats, philanthropists, and educators shaping India's school system.",
    body: [
      "Up Close & Personal is ShikshaLokam's flagship video podcast, featuring in-depth conversations with the people shaping India's education landscape — senior government officials, philanthropists, education entrepreneurs, and classroom innovators.",
      "As host, I led 20 episodes of candid dialogue exploring how India's massive school system can be made more effective, equitable, and responsive to children's needs. Guests included Anita Karwal, former Secretary of the Department of School Education and Literacy, Ministry of Education, and Chetan Kapoor, CEO of Tech Mahindra Foundation.",
    ],
    tags: ['Education', 'Social Impact'],
    color: 'gulabi',
  },
  {
    id: 'social-impact-strategy',
    title: 'Social Impact Strategy',
    description:
      'Synthesis of a Coursera/Penn course exploring how social enterprises balance mission and money — tools for innovation, impact, scale, and financial sustainability.',
    body: [
      'Notes and synthesis from the Social Impact Strategy course on Coursera, offered by the University of Pennsylvania (2022). The course explores the tools available to entrepreneurs and innovators building organizations that balance mission and profit.',
      'A social enterprise sits at the intersection of mission and money — it must balance innovation, measurable impact, and scale without losing sight of the people it serves. This synthesis captures the frameworks and tradeoffs that course covered.',
    ],
    tags: ['Social Impact'],
    color: 'gulabi',
  },
];
