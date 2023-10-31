
import Ship1 from "../assets/Ship_1.jpg";
import Ship2 from "../assets/Ship_2.jpg";
import Ship3 from "../assets/Ship_3.jpg";
import Ship4 from "../assets/Ship_4.jpg";
import Ship5 from "../assets/Ship_5.jpg";
import Ship6 from "../assets/Ship_6.jpg";
function Portfolio() {
    const projects = [
        {
            title:"Project1",
            description:"description of project1",
            img: Ship1,
            deployedLink: "https://text-editorjg-76d429acee63.herokuapp.com/",
            repoLink: "https://github.com/Glansburg/TextEditor" 

        },
        {
            title:"Project2",
            description:"description of project2",
            img: Ship2,
            deployedLink: "https://joelgetzke.github.io/WorkScheduler/",
            repoLink: "https://github.com/JoelGetzke/WorkScheduler" 

        },
        {
            title:"Project3",
            description:"description of project3",
            img: Ship3,
            deployedLink: "https://herokunotetaker2023-5b0d4d397a0a.herokuapp.com/notes",
            repoLink: "https://github.com/JoelGetzke/NoteTaker" 

        },
        {
            title:"Project4",
            description:"description of project4",
            img: Ship4,
            deployedLink: "https://www.youtube.com/watch?v=9MCIQTeVRaE",
            repoLink: "https://github.com/JoelGetzke/BussinessOrganize" 

        },
        {
            title:"Project5",
            description:"description of project5",
            img: Ship5,
            deployedLink: "https://github-production-user-asset-6210df.s3.amazonaws.com/117139285/267488956-dff6d288-651f-49be-8771-615d1138fee4.webm",
            repoLink: "https://github.com/JoelGetzke/socialMedia" 

        },
        {
            title:"Project6",
            description:"description of project6",
            img: Ship6,
            deployedLink: "https://www.youtube.com/watch?v=w_HECJINbyw",
            repoLink: "https://github.com/JoelGetzke/e-Commerce-Database" 

        },
    ]
    return (
        <div className="row">
            <div>Portfolio Page </div>

            {projects.map(project => ( <div className="col-md-4 col-sm-12" key={project.title}>

               <div className="card">
                
               <img src={project.img} className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">{project.title}</h5>
                 <p className="card-text">{project.description}</p>
                 <a href={project.deployedLink} className="btn btn-primary">Deployed project</a>
                 <a href={project.repoLink} className="btn btn-primary">Github Repo</a>
               </div>
             </div> 
             </div>
            ))}
        </div>

    )
}

export default Portfolio