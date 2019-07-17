// Movies API
const Data = [
  {
    id: "cs01",
    name: "The Albrecht Group",
    type: "Career site",
    url: "https://www.agroupnc.com/",
    logo: "The-Albrecht-Group.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs02",
    name: "ProSource Wholesale",
    type: "Career site",
    url: "https://prosourcewholesale.jobs.net/",
    logo: "ProSource-Wholesale.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs03",
    name: "Spin Master",
    type: "Career site",
    url: "https://www.spinmastercareers.com/",
    logo: "Spin-Master.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs04",
    name: "Teleperformance Greece",
    type: "Career site",
    url: "https://careers.teleperformance.gr/",
    logo: "Teleperformance-Greece.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs05",
    name: "Meador Staffing Services",
    type: "Career site",
    url: "https://meadorstaffing-cms-preprod.cbtalentnetwork.com/",
    logo: "Meador-Staffing-Services.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs06",
    name: "Acadia Healthcare",
    type: "Career site",
    url: "https://www.acadiahealthcarecareers.com/",
    logo: "Acadia-Healthcare.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs07",
    name: "Installed Building Products",
    type: "Career site",
    url: "https://installedbuildingproducts-cms-preprod.cbtalentnetwork.com/",
    logo: "Installed-Building-Products.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs08",
    name: "MasTec Network Solutions",
    type: "Career site",
    url: "https://mnscareers.mastec.com/",
    logo: "MasTec-Network-Solutions.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs09",
    name: "Nando's",
    type: "Career site",
    url: "https://nandos-cms-preprod.cbtalentnetwork.com/",
    logo: "Nandos.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs10",
    name: "CareerBuilder Careers",
    type: "Career site",
    url: "https://www.careerbuildercareers.com/",
    logo: "CareerBuilder-Careers.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs11",
    name: "LeasePlan USA",
    type: "Career site",
    url: "https://leaseplan.jobs.net/",
    logo: "LeasePlan-USA.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs12",
    name: "The Goodman Group",
    type: "Career site",
    url: "https://thegoodmangroup-cms-preprod.cbtalentnetwork.com/",
    logo: "The-Goodman-Group.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs13",
    name: "Securitas Canada",
    type: "Career site",
    url: "https://www.securitasjobs.ca/",
    logo: "Securitas-Canada.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs14",
    name: "Naurex Group",
    type: "Career site",
    url: "https://naurexgroup.jobs.net/",
    logo: "Naurex-Group.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs15",
    name: "Holman Enterprises",
    type: "Career site",
    url: "https://www.holmancareers.com/",
    logo: "Holman-Enterprises.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs16",
    name: "CALIBRE",
    type: "Career site",
    url: "https://careers.calibresys.com/",
    logo: "CALIBRE.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs17",
    name: "Mogel",
    type: "Career site",
    url: "https://careers.mogelrpo.com/",
    logo: "Mogel.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs18",
    name: "Shoe Carnival",
    type: "Career site",
    url: "https://careers.shoecarnival.com/",
    logo: "Shoe-Carnival.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs19",
    name: "ITW",
    type: "Career site",
    url: "https://careers.itw.com/",
    logo: "ITW.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs20",
    name: "LSG Group",
    type: "Career site",
    url: "https://lsgskychefs.jobs.net/",
    logo: "LSG-Group.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs21",
    name: "Clayton Home Building Group",
    type: "Career site",
    url: "https://careers.claytonhbg.com/",
    logo: "Clayton-Home-Building-Group.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs22",
    name: "CBIZ",
    type: "Career site",
    url: "https://careers.cbiz.com/",
    logo: "CBIZ.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs23",
    name: "TruGreen",
    type: "Career site",
    url: "https://jobs.trugreen.com/",
    logo: "TruGreen.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs24",
    name: "Bespoke Hotels",
    type: "Career site",
    url: "https://careers.bespokehotels.com/",
    logo: "Bespoke-Hotels.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs25",
    name: "Butterball",
    type: "Career site",
    url: "https://careers.butterball.com/",
    logo: "Butterball.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs26",
    name: "TechBrands",
    type: "Career site",
    url: "https://careers.tech-brands.com/",
    logo: "TechBrands.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs27",
    name: "KeyBank",
    type: "Career site",
    url: "https://careers.key.com/",
    logo: "KeyBank.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs28",
    name: "ConsultNet",
    type: "Career site",
    url: "https://careers.consultnet.com/",
    logo: "ConsultNet.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs29",
    name: "Sears Holdings Management Corporation - Seasonal Hiring",
    type: "Career site",
    url: "https://jobs.sears.com/page/seasonalhiring",
    logo: "Sears-Holdings-Management-Corporation-Seasonal-Hiring.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  },
  {
    id: "cs30",
    name: "Hilton",
    type: "Career site",
    url: "https://hilton-cms-preprod.cbtalentnetwork.com/",
    logo: "Hilton.png",
    stacks: ["HTML5", "CSS3", "Bootstrap", "Sass", "Photoshop"]
  }
];

export default Data;
