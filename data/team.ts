export interface TeamMember {
  id: string
  name: string
  jobTitle: string
  category: 'board' | 'advisory' | 'technical'
  image: string
  shortBio: string
  fullBio: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'lon-taranaki',
    name: 'Lon Taranaki',
    jobTitle: 'Managing Director',
    category: 'board',
    image: '/team/lon-taranaki.png',
    shortBio:
      'Process Engineer with over 31 years\u2019 mining experience across multiple jurisdictions and a Southeast Asia focus.',
    fullBio:
      'Process Engineer with over 31 years\u2019 mining experience across multiple jurisdictions. Strong background in executive leadership, engineering, mining operations, and project delivery, with a Southeast Asia focus across coal, nickel, gold, and copper.',
  },
  {
    id: 'jeremy-ayre',
    name: 'Jeremy Ayre',
    jobTitle: 'Senior Advisor - Strategy',
    category: 'advisory',
    image: '/team/jeremy-ayre.png',
    shortBio:
      'Over 35 years\u2019 experience spanning mining, consulting, investment, and entrepreneurship. Co-founder of AWR Lloyd.',
    fullBio:
      'Jeremy Ayre brings over 35 years\u2019 experience spanning mining, consulting, investment, and entrepreneurship. He is a co-founder of AWR Lloyd, a boutique strategic consulting and M&A advisory firm operating across South-East Asia, with a strong focus on the energy and mining sectors. He has co-founded a London-listed private equity fund and, more recently, established a remote power generation business. Jeremy\u2019s work centres on strategic advisory, capital structuring, and the development of resilient, long-term businesses.',
  },
  {
    id: 'scott-williamson',
    name: 'Scott Williamson',
    jobTitle: 'Senior Advisor \u2013 Capital Markets',
    category: 'advisory',
    image: '/team/scott-williamson.png',
    shortBio:
      'Over 20 years of experience in mining exploration, development, and operations. Managing Director and CEO of Horizon Gold (ASX:HRN).',
    fullBio:
      'With over 20 years of experience in mining exploration, development, and operations, Scott Williamson is a seasoned leader in the resources sector. Scott is currently the Managing Director and CEO of Horizon Gold (ASX:HRN). Scott\u2019s career spans a diverse range of commodities, including gold, nickel, and base metals, with a proven track record of delivering value for shareholders. Prior to joining Horizon Gold, he served as Managing Director at Blackstone Minerals (ASX:BSX), where he successfully led the company\u2019s efforts in advancing critical battery and base metal projects across Southeast Asia. A mining engineer with a commerce degree from the Western Australian School of Mines and Curtin University, Scott has successfully raised over A$150M on the capital markets to fund and advance listed exploration and mining development companies.',
  },
  {
    id: 'will-coverdale',
    name: 'Will Coverdale',
    jobTitle: 'Senior Technical Advisor \u2013 JORC & NI43-101 Reserves',
    category: 'technical',
    image: '/team/will-coverdale.png',
    shortBio:
      'Qualified Mining Engineer with an MBA and over 19 years\u2019 experience across the mining and metals sector.',
    fullBio:
      'Qualified Mining Engineer with an MBA and over 19 years\u2019 experience across the mining and metals sector, spanning open pit and underground operations. Extensive background in project evaluation, due diligence, M&A, project planning and development, technical and strategic consulting, and founder of a mining-related IT start-up. Recognised Competent Person for JORC & NI43-101 Reserve reporting.',
  },
  {
    id: 'chris-ramsay',
    name: 'Chris Ramsay',
    jobTitle: 'Senior Technical Advisor \u2013 JORC & NI43-101 Resources',
    category: 'technical',
    image: '/team/chris-ramsay.png',
    shortBio:
      'Senior geologist and resource estimation specialist with extensive experience in JORC and NI43-101 resource reporting across Southeast Asia.',
    fullBio:
      'Chris Ramsay is a senior geologist and resource estimation specialist with deep expertise in JORC and NI43-101 resource reporting. With extensive experience across Southeast Asia, Chris provides critical technical advisory on resource classification, geological modelling, and compliance reporting for DMA Holdings\u2019 portfolio of mining assets.',
  },
]
