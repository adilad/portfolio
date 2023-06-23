/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'JP Morgan Chase & Co',
    position: 'Lead Software Engineer/VP',
    url: 'https://www.jpmorgan.com/global',
    startDate: '2022-10-24',
    summary: 'Part of the Payments Team at WePay',
    highlights: [
      'Maintain a strong understanding of industry trends, emerging technologies, the best practices within software engineering and apply this knowledge to develop innovative inhouse solutions',
    ],
  },
  {
    name: 'Galileo Financial Technologies',
    position: 'Senior Software Engineer',
    url: '',
    startDate: '2021-08-01',
    endDate: '2022-07-10',
    highlights: [
      'Part of the Credit Squad, demonstrated end-to-end ownership of the envisioned credit products and processes from concepts into completion.',
      'Collaborated with cross-functional development team members on all stages of the software development life cycle, from requirement gathering, design, implementation to production releases',
    ],
  },
  {
    name: 'AMD',
    position: 'Software Engineer',
    url: '',
    startDate: '2018-09-24',
    endDate: '2021-08-30',
    highlights: [
      'Worked on reducing the overall build time and test times by 85%',
      'AMD ROCm: https://github.com/RadeonOpenCompute/ROCm',
    ],
  },
  {
    name: 'CapWIN',
    position: 'Software Intern/ Faculty Assistant',
    url: '',
    startDate: '2017-03-27',
    endDate: '2018-09-16',
    highlights: [
      'Configured, administered and supported the network, storage, operating systems and load balancers on the CapWIN’s production environment and minimized risk to infrastructure by migrating bare-metal production servers to VMware EXSI.',
      'Administered, supported and monitored databases by proactively resolving database issues and maintaining servers.',
    ],
  },
];

export default work;
