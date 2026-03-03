// connected with index.html

// Job Data

const jobs = [
    {
        id: 1,
        company: "Mozilla Firefox",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$90,000 - $110,000",
        description: "Build modern mobile applications using React Native.",
        status: "all"
    },
    {
        id: 2,
        company: "Webflow Agency",
        position: "UI Designer",
        location: "Los Angeles",
        type: "Full-time",
        salary: "$80,000 - $100,000",
        description: "Design user-focused interfaces for clients.",
        status: "all"
    },
    {
        id: 3,
        company: "DataVista Solutions",
        position: "Data Engineer",
        location: "Boston",
        type: "Full-time",
        salary: "$95,000 - $120,000",
        description: "Build secure and scalable data pipelines.",
        status: "all"
    },
    {
        id: 4,
        company: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle",
        type: "Full-time",
        salary: "$85,000 - $105,000",
        description: "Develop backend systems using Node.js.",
        status: "all"
    },
    {
        id: 5,
        company: "Innovation Labs",
        position: "UX Engineer",
        location: "Austin",
        type: "Hybrid",
        salary: "$75,000 - $95,000",
        description: "Design intuitive SaaS interfaces.",
        status: "all"
    },
    {
        id: 6,
        company: "MegaCorp Solutions",
        position: "Frontend Developer",
        location: "New York",
        type: "Full-time",
        salary: "$85,000 - $110,000",
        description: "Develop React applications with Tailwind.",
        status: "all"
    },
    {
        id: 7,
        company: "StartUpXYZ",
        position: "DevOps Engineer",
        location: "Remote",
        type: "Contract",
        salary: "$100,000 - $130,000",
        description: "Maintain CI/CD pipelines.",
        status: "all"
    },
    {
        id: 8,
        company: "TechCorp Industries",
        position: "Software Engineer",
        location: "San Francisco",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        description: "Build scalable enterprise applications.",
        status: "all"
    }
];

let currentTab = "all";



// Render Jobs Function


function renderJobs() {

    const jobContainer = document.getElementById('jobContainer');
    jobContainer.innerHTML = "";

    let filteredJobs;

    if(currentTab === "all"){
        filteredJobs = jobs;
    }
    else{
        filteredJobs = jobs.filter(job => job.status === currentTab);
    }

    document.getElementById('tabCount').innerText = filteredJobs.length + " Jobs";

  