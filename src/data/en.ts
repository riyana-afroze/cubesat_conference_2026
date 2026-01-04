export const homePageContent = {
  heroTitle: "CANADIAN CUBESAT CONFERENCE 2026",
  heroButtons: {
    tickets: "Buy Tickets",
    booth: "Reserve a Booth",
    abstract: "Submit Abstract"
  },
  aboutCCC: {
    title: "About the Canadian CubeSat Conference",
    description: "The Canadian CubeSat Conference is a technical conference offered under the Canadian CubeSat Network initiative of SEDS-Canada, the country's largest student-led non-profit organisation in the space sector. This 2-day in-person event aims to bring together CubeSat enthusiasts, students, alumni, and industry experts to share knowledge, showcase research and projects, and foster meaningful connections to strengthen the rapidly growing CubeSat ecosystem across Canada."
  },
  aboutCCN: {
    title: "About the Canadian CubeSat Network",
    description1: "The Canadian CubeSat Network is a new initiative of SEDS-Canada in collaboration with MDA Space. The goal of CCN is to create a vibrant community of CubeSat, CanSat and SmallSat students, alumni, researchers and enthusiasts across Canada to enable the sharing of resources to build the next generation of space engineers in Canada.",
    description2: "If you are a part of a CubeSat/CanSat/SmallSat student design team that is registered as a CCN Associate, you are eligible for discounts for the Canadian CubeSat Conference 2026. Reach out to your team leads for your discount code or ask them to sign your team up as a CCN Associate today!",
    buttonText: "Become a CCN Associate"
  },
  funding: {
    title: "Funding Opportunity",
    subtitle: "CSA Funding to Attend CCC 2026",
    description1: "The Canadian Space Agency (CSA) is pleased to offer grants to Canadian postsecondary students to attend the 2026 Canadian CubeSat Conference under their Announcement of Opportunity (AO) to support Canadian Student Participation in Space Conferences and Training Events. Successful applicants will be awarded a grant to cover their accommodations and meal allowances, registration fees, and travel expenses.",
    eligibilityIntro: "To be eligible for a grant under this AO, applicants must meet the following eligibility criteria:",
    eligibilityItems: [
      "be a Canadian citizen or permanent resident;",
      "be enrolled in a Canadian post-secondary institution at the college, undergraduate, master's or doctoral levels at the time of the event."
    ],
    description2: "Although not an eligibility requirement, priority may be given to students who have been selected by the organizing committee to give a presentation (oral or poster) during the event. Priority may also be given to applicants from underrepresented populations. The CSA therefore encourages applicants to indicate, on a voluntary basis, if they belong to one or more of the four following groups: women, Indigenous Peoples, persons with disabilities and members of visible minorities.",
    description3: 'Instructions on how to submit an application can be found in <a href="https://www.asc-csa.gc.ca/eng/funding-programs/funding-opportunities/ao/2023-canadian-student-participation-in-space-conferences-and-training-events.asp#4" class="highlight-link" target="_blank" rel="noopener noreferrer">Section 4</a> of the AO. Please read these instructions carefully and submit your application to the CSA no later than January 13, 2026 at 1:00 PM (EST).',
    buttonText: "Apply Now"
  },
  aboutSEDS: {
    title: "About SEDS-Canada",
    description1: "SEDS-Canada (Students for the Exploration and Development of Space Canada) is Canada's largest student-led non-profit organization dedicated to empowering the next generation of Canadian space leaders. Re-established in 2014, SEDS-Canada connects post-secondary students and early-career professionals with meaningful opportunities in Canada's growing space sector.",
    description2: "Through national projects, professional development initiatives, and industry-leading events, SEDS-Canada builds bridges between academia, government, and industry helping students turn their passion for space into tangible experience and career growth.",
    buttonText: "Visit SEDS-Canada"
  },
  aboutSpaceConcordia: {
    title: "About SpaceConcordia",
    description1: "SpaceConcordia is a student-run multidisciplinary association at Concordia University that designs and builds advanced space-related projects while promoting education, outreach, and innovation in aerospace and space sciences.",
    description2: "SpaceConcordia has 5 primary divisions: Spacecraft, Rocketry, Solid Rocketry, Robotics and Space Health, each working towards the common mission to inspire the next generation of space professionals through providing opportunities to work on technically challenging projects that push the boundaries of what is possible for a university team.",
    buttonText: "Visit SpaceConcordia"
  },
  footer: "© 2026 Canadian CubeSat Conference"
};

export const teamPageContent = {
  title: "The Canadian CubeSat Conference Team",
  intro: "Meet the dedicated team of students working hard to make this conference a reality.",
  readMore: "read more"
};

export const contactPageContent = {
  title: "Contact Us",
  intro: 'Have questions? Fill out the form below or email us directly at <a href="mailto:cubesat@seds.ca" class="link-highlight">cubesat@seds.ca</a>.',
  emailText: "cubesat@seds.ca",
  form: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Send Message"
  },
  placeholders: {
    name: "Your Name",
    email: "your.email@example.com",
    subject: "Subject of your message",
    message: "Your message here..."
  }
};

export const teamMembers = [
  {
    name: "Riyana Afroze",
    role: "Conference Lead, Web Developer<br>Deputy Projects Chair",
    image: "/people/riyana.png",
    bio: `Riyana is a 4th-year Mechatronics Engineering student studying at Memorial University of Newfoundland. As the Deputy Projects Chair at SEDS-Canada, Riyana plays an instrumental role in overseeing coordination between the Project Managers and Coordinators of the four national projects (CAN-RGX, CAN-SBX, YSpacE, and the Canadian CubeSat Network) and the organization's Board of Directors. She has been a member of the SEDS-Canada Board of Directors since January 2025 during which she re-launched YSpacE (Young Space Entrepreneurs Competition) and pioneered the Canadian CubeSat Network. Riyana is also a Co-Founder and Co-Chair of Women of SEDS (wSEDS) and was instrumental in delivering the first-ever conference celebrating women in the space sector in Canada, last July.

Outside of her role at SEDS-Canada, Riyana is focused on the development and launch of Newfoundland's first high-power rocket for Launch Canada 2026 as the Founder and Team Captain of Horizon Aerospace - the first rocketry team at Memorial University and the only amateur rocketry club in the province of NL. She is also the Attitude Determination and Control System (ADCS) Lead for MUNStar-1 CubeSat to be launched under the Canadian Space Agency's CUBICS initiative.

Through her work across engineering, leadership, and entrepreneurship, Riyana is focused on building ambitious, student-led initiatives that strengthen Canada's space ecosystem and expand access to hands-on space projects.`
  },
  ...Array.from({ length: 7 }).map((_, i) => ({
    name: `Team Member ${i + 2}`,
    role: "Position",
    bio: `This is the biography for Team Member ${i + 2}. They are an integral part of the Canadian CubeSat Conference team, bringing expertise and passion to the organization. Their work ensures the success of the event.`
  }))
];
