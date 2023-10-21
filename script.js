
// this is for interactive menu
const hamburger = document.querySelector(".hamburger");
const container = document.querySelectorAll(".menu-container");
const a = document.querySelectorAll('.menu a');

hamburger.addEventListener("click", () => {

    const span = document.querySelectorAll(".not-clicked");
    const span2 = document.querySelectorAll(".clicked");
    const body = document.querySelector("body");

    if (span.length !== 0) {
        var count = 0;
        console.log(container);
        container[0].classList.add("show");
        body.classList.add("overflow-remove");
        span.forEach(element => {
            count = count + 1;
            element.classList.remove("not-clicked");
            element.classList.add("clicked");
            if (count === 2) {
                element.classList.add("clicked-second");
            }
            return;
        });
    }

    else if (span2.length !== 0) {
        var count = 0;
        container[0].classList.remove("show");
        body.classList.remove("overflow-remove");
        console.log(container[0]);
        span2.forEach(element => {
            count = count + 1;
            element.classList.remove("clicked");
            element.classList.add("not-clicked");

            if (count === 2) {
                element.classList.remove("clicked-second");
            }
            return;
        });
    }
})


a.forEach(element => {
    element.addEventListener("click", () => {
        const body = document.querySelector("body");
        const span2 = document.querySelectorAll(".clicked");
        if (span2.length !== 0) {
            var count = 0;
            container[0].classList.remove("show");
            body.classList.remove("overflow-remove");
            span2.forEach(element => {
                count = count + 1;
                element.classList.remove("clicked");
                element.classList.add("not-clicked");

                if (count === 2) {
                    element.classList.remove("clicked-second");
                }
                return;
            });
        }
    })
})

//for changing project categories

const category = document.querySelectorAll(".cate");

const projects = [{
    title: "Brewtopia",
    desc: "Cafe Management Site, where customers can login and order coffees and snacks.",
    techStack: ["Mongodb","Express","React","Node","CSS","Razorpay"],
    img : "/projectsimages/brewtopia.webp",
    live : "https://cafemanagementsystem.netlify.app/",
    github : "https://github.com/Varinder-Dhillon0/Cafe-Management-System/tree/master",
    category : "Full Stack",
    warning : "⚠️Responsive for desktop only"
},
{
    title: "InSight",
    desc: "A News App which utilizes api to get the news.",
    techStack: ["React","CSS","News Api"],
    img : "/projectsimages/insightnewsapp.webp",
    live : "https://insightnewsapp.vercel.app/",
    github : "https://github.com/Varinder-Dhillon0/News-App",
    category : "Full Stack",
    warning : "⚠️Responsive for desktop only"
},
{
    title: "Creative Minds",
    desc: "Social Media App where users can post there thoughts.",
    techStack: ["Next.js", "React", "Firebase","CSS"],
    img : "/projectsimages/creativeminds.webp",
    live : "https://creativeminds.vercel.app/",
    github : "https://github.com/Varinder-Dhillon0/Creative-Minds",
    category : "Full Stack"
},
{
    title: "Eduvi",
    desc: "An Educational site , where users can login, buy courses and learn.",
    techStack: ["Mongodb", "React", "Express", "Node"],
    img : "/projectsimages/eduvi.webp",
    live : "https://eduvi-alpha.vercel.app/",
    github : "https://github.com/Varinder-Dhillon0/Eduvi",
    category : "Full Stack",
    warning : "⚠️Responsive for desktop only"
},
{
    title: "BackStage Talks",
    desc: "Backstage talks magazine frontend design.",
    techStack: ["Html" , "CSS"],
    img : "https://user-images.githubusercontent.com/98728916/245228769-caccf9af-591a-42dc-a2c7-3912b8e3de2e.png",
    live : "",
    github : "https://github.com/Varinder-Dhillon0/Designs/tree/main/Backstage%20talks",
    category : "Frontend",
    warning : ""
},
{
    title: "Morse Converter",
    desc: "Application that can convert morse code to english and vice versa.",
    techStack: ["Python", "Tkinter"],
    img : "https://user-images.githubusercontent.com/98728916/276130604-7436e27d-41d6-4630-939e-f84326869e02.png",
    live : "",
    github : "https://github.com/Varinder-Dhillon0/Morse-Code-Converter",
    category : "Python",
    warning : ""
},
{
    title: "Flappy Bird",
    desc: "Flappy bird game clone which features user scores , high scores and login.",
    techStack: ["Python" , "Pygame", "MySql"],
    img : "https://user-images.githubusercontent.com/98728916/207881856-891728ea-181c-4c47-901f-7d6dd982d2db.png",
    live : "",
    github : "https://github.com/Varinder-Dhillon0/flappy-bird",
    category : "Python",
    warning : ""
},
{
    title: "RPS",
    desc: "simple gui featuring rock paper scissors game.",
    techStack: ["Python" , "Tkinter"],
    img : "https://github.com/Varinder-Dhillon0/Tkinter-GUI-Projects/assets/98728916/1a608e0d-8423-4670-9df0-add6bc81d2f2",
    live : "",
    github : "https://github.com/Varinder-Dhillon0/Tkinter-GUI-Projects/blob/main/rock%20paper%20scissors.py",
    category : "Python",
    warning : ""
},
{
    title: "Student Management",
    desc: "Student Management System with ability to add records, remove and update.",
    techStack: ["PHP", "MySql"],
    img : "/projectsimages/studentmanagement.webp",
    live : "",
    github : "https://github.com/Varinder-Dhillon0/Student-Management-System/tree/main",
    category : "Other",
    warning : ""
},
{
    title: "",
    desc: "",
    techStack: [],
    img : "",
    live : "",
    github : "",
    category : "",
    warning : ""
}
]

const generateProjectHTML = (project) => {
    return `
        <div class="project">
            <div class="project-img">
                <img src="${project.img}" alt="${project.title}">
            </div>
            <div class="project-languages">
                ${project.techStack.map(tech => `<p>${tech}</p>`).join('')}
            </div>
            <div class="project-details">
                <h2>${project.title}</h2>
                <p>${project.desc + (project.warning&& "<br/>" + project.warning)}</p>
                <div class="project-links">
                    ${project.live&& `<a rel="noopener" target="_blank" style="width: 72px;" href="${project.live}">
                    <img src="/assets/link.svg" alt="live-link">Live
                    </a>`}
                    <a rel="noopener" target="_blank" href="${project.github}">
                        Github <img src="/assets/github.svg" alt="github-link">
                    </a>
                </div>
            </div>
        </div>`;
};

const changeProjects = (cate) => {
    const filteredProjects = projects.filter(project => project.category === cate);
    const projectsHTML = filteredProjects.map(generateProjectHTML).join('');

    category.forEach(cat => {cat.innerHTML === cate ? cat.classList.add("selected") :  cat.classList.remove("selected")});

    const projectContainer = document.querySelector(".projects-container");
    
    if (projectContainer) {
        projectContainer.innerHTML = projectsHTML;
    }


};

category.forEach((cate) =>{
    cate.addEventListener("click" , () =>{
        changeProjects(cate.innerHTML);
    })
})