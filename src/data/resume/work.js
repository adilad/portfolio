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
    summary: 'Payments Team',
    highlights: [
      'Stay up-to-date with the latest industry trends, emerging technologies, and best practices in software engineering, leveraging this knowledge to drive the development of cutting-edge in-house solutions.',
      'Demonstrate exceptional mentorship skills, guiding and nurturing junior engineers, which ultimately cultivates a highly skilled and diverse team of engineers capable of delivering outstanding performance. ',
    ],
  },
  {
    name: 'SOFI/ Galileo Financial Technologies',
    position: 'Senior Software Engineer',
    url: 'https://www.sofi.com/',
    startDate: '2021-08-01',
    endDate: '2022-07-10',
    highlights: [
      'Developed and implemented highly scalable credit APIs, catering to critical functionalities such as single-use virtual card creation, credit limit settings, and credit summary retrieval. These APIs are currently utilized a staggering 56 million times daily, generating an impressive annual revenue of $1M for the company.',
      'As a vital member of the Credit Squad, exhibited end-to-end ownership of credit products and processes, effectively translating concepts into successful completion.',
      'Enhanced the quality of testing by implementing the test pyramidal model, resulting in early bug detection and prevention. Additionally, achieved a remarkable 23% increase in the efficiency of deploying binaries within the client validation environment.',
      'Collaborated seamlessly with cross-functional development team members throughout the software development life cycle, actively participating in requirement gathering, design, implementation, and production releases.',
      'Effectively managed and mentored a team of three interns, ensuring their growth, mentorship, and conducting performance evaluations with a high level of responsibility.',
    ],
  },
  {
    name: 'AMD',
    position: 'Software Engineer',
    url: 'https://www.amd.com/en.html',
    startDate: '2018-09-24',
    endDate: '2021-08-30',
    highlights: [
      'Improved product releases by conducting extensive research, designing, and successfully implementing scalable microservice-based solutions.',
      'Revitalized legacy enterprise software by thoroughly analyzing it and incorporating industry best practices, resulting in an automated software development lifecycle (SDLC) and a remarkable 85% reduction in build and test times.',
      'Introduced uniformity across multiple operating systems by implementing CI/CD pipelines for automated builds, enabling seamless scalability and efficient support.',
      'Enhanced infrastructure management by setting up monitoring services internally, effectively tracking availability, latency, error logging, and overall system performance.',
      'AMD ROCm: https://github.com/RadeonOpenCompute/ROCm',
    ],
  },
  {
    name: 'CapWIN',
    position: 'Software Intern/ Faculty Assistant',
    url: 'http://www.capwin.org/',
    startDate: '2017-03-27',
    endDate: '2018-09-16',
    highlights: [
      'Developed and maintained a robust and scalable distributed systems architecture, ensuring the high availability of the website and internal applications.',
      'To guarantee optimal performance and reliability, configured, administered, and provided support for the network, storage, operating systems, and load balancers within CapWINs production environment. Successfully mitigated infrastructure risks by migrating bare-metal production servers to VMware EXSI.',
      'Exercised proficient administration, support, and monitoring of databases, proactively resolving issues and ensuring the smooth operation of servers.',
      'Implemented methodologies and adhered to best security practices to meet federal requirements, ensuring compliance and safeguarding sensitive data.',
      'Demonstrated a comprehensive understanding of backend networking and excelled in functional programming techniques.',
    ],
  },
];

export default work;
