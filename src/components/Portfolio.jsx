import Ship1 from "../assets/Ship_1.jpg";
import Ship2 from "../assets/Ship_2.jpg";
import Ship3 from "../assets/Ship_3.jpg";
import Ship4 from "../assets/Ship_4.jpg";
import Ship5 from "../assets/Ship_5.jpg";
import Ship6 from "../assets/Ship_6.jpg";
function Portfolio() {
  const projects = [
    {
      title: "Project1",
      description: "A note taker for the busy work person.",
      img: Ship1,
      deployedLink:
        "https://note-taker-quotes-24a247755264.herokuapp.com/notes",
      repoLink: "https://github.com/JoelGetzke/NoteTaker",
    },
    {
      title: "Project2",
      description: "Calendar app for scheduling your day.",
      img: Ship2,
      deployedLink: "https://joelgetzke.github.io/WorkScheduler/",
      repoLink: "https://github.com/JoelGetzke/WorkScheduler",
    },
    {
      title: "Project3",
      description: "A PWA text editor.",
      img: Ship3,
      deployedLink: "https://jate-text-editor23-0453618ed693.herokuapp.com//",
      repoLink: "https://github.com/Glansburg/TextEditor",
    },
    {
      title: "Project4",
      description: "Content management system, business organizer.",
      img: Ship4,
      deployedLink: "https://www.youtube.com/watch?v=9MCIQTeVRaE",
      repoLink: "https://github.com/JoelGetzke/BussinessOrganize",
    },
    {
      title: "Project5",
      description: "NoSQL Routing, back-end development.",
      img: Ship5,
      deployedLink:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/117139285/267488956-dff6d288-651f-49be-8771-615d1138fee4.webm",
      repoLink: "https://github.com/JoelGetzke/socialMedia",
    },
    {
      title: "Project6",
      description: "SQL ORM e-commerce back-end.",
      img: Ship6,
      deployedLink: "https://www.youtube.com/watch?v=w_HECJINbyw",
      repoLink: "https://github.com/JoelGetzke/e-Commerce-Database",
    },
  ];
  return (
    <div className="row">
      <div className="custom-height text-center mt-3">Portfolio Page </div>

      {projects.map((project) => (
        <div className="col-md-4 col-sm-12" key={project.title}>
          <div className="card">
            <img src={project.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a
                href={project.deployedLink}
                target="_blank"
                className="btn btn-primary custom-margin custom-margin-bottom"
              >
                Deployed project
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                className="btn btn-primary custom-margin-bottom"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
