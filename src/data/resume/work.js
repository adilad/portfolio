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
  },
  {
    name: 'SOFI/ Galileo Financial Technologies',
    position: 'Senior Software Engineer',
    url: 'https://www.sofi.com/',
    startDate: '2021-08-01',
    endDate: '2022-07-10',
  },
  {
    name: 'AMD',
    position: 'Software Engineer',
    url: 'https://www.amd.com/en.html',
    startDate: '2018-09-24',
    endDate: '2021-08-30',
  },
  {
    name: 'CapWIN',
    position: 'Software Intern/ Faculty Assistant',
    url: 'http://www.capwin.org/',
    startDate: '2017-03-27',
    endDate: '2018-09-16',
  },
];

export default work;
