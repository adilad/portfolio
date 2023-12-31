const skills = [
  {
    title: 'Leadership',
    competency: 5,
    category: ['People Skills', 'Management'],
  },
  {
    title: 'Communication',
    competency: 5,
    category: ['People Skills', 'Management'],
  },
  {
    title: 'Problem-Solving',
    competency: 5,
    category: ['People Skills', 'Management'],
  },
  {
    title: 'Team-Player',
    competency: 5,
    category: ['People Skills', 'Management'],
  },
  {
    title: 'Adaptability',
    competency: 5,
    category: ['People Skills', 'Management'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'JAVA',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools', 'Cloud'],
  },
  {
    title: 'Terraform',
    competency: 3,
    category: ['Devops', 'Automation', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 4,
    category: ['Tools', 'Web Development', 'Cloud'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Devops'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development', 'Cloud'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Ansible',
    competency: 3,
    category: ['Devops', 'Automation'],
  },
  {
    title: 'DataDog',
    competency: 3,
    category: ['Monitoring', 'Devops'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Python'],
  },

  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Languages'],
  },

  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Groovy',
    competency: 2,
    category: ['Devops', 'Automation'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Debian',
    competency: 3,
    category: ['Operating Systems'],
  },
  {
    title: 'Redhat',
    competency: 4,
    category: ['Operating Systems'],
  },
  {
    title: 'SUSE',
    competency: 3,
    category: ['Operating Systems'],
  },
  {
    title: 'MacOS',
    competency: 4,
    category: ['Operating Systems'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['Devops'],
  },
  {
    title: 'TCP/IP',
    competency: 4,
    category: ['Network'],
  },
  {
    title: 'OSPF',
    competency: 3,
    category: ['Network'],
  },
  {
    title: 'BGP',
    competency: 2,
    category: ['Network'],
  },
  {
    title: 'SSL',
    competency: 2,
    category: ['Network'],
  },
  {
    title: 'HTTP',
    competency: 3,
    category: ['Network'],
  },
  {
    title: 'Teamcity',
    competency: 4,
    category: ['Devops'],
  },
  {
    title: 'Microservies',
    competency: 4,
    category: ['Devops'],
  },
  {
    title: 'Vmware Exsi',
    competency: 4,
    category: ['Devops'],
  },
  {
    title: 'Mypy',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Pylint',
    competency: 4,
    category: [ 'Python'],
  },
  {
    title: 'Artifactory',
    competency: 4,
    category: ['Devops'],
  },
  {
    title: 'Prometheus',
    competency: 4,
    category: ['Devops', 'Monitoring'],
  },
  {
    title: 'Grafana',
    competency: 4,
    category: ['Devops', 'Monitoring'],
  },
  {
    title: 'Splunk',
    competency: 3,
    category: ['Devops', 'Monitoring'],
  },
  {
    title: 'RabbitMQ',
    competency: 3,
    category: ['Devops', 'Messaging'],
  },
  {
    title: 'Apache Kafka',
    competency: 3,
    category: ['Devops', 'Messaging'],
  },
  {
    title: 'Wireshark',
    competency: 3,
    category: ['Devops', 'Network'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
