import "./index.css";
import { useState } from "react";
import phoneIcon from "./img/phone.svg";
import emailIcon from "./img/email.svg";
import locationIcon from "./img/location.svg";

const tabs = [
  {
    title: "GitHub",
    img: "./img/mdi_github.svg",
    text: "Link to my GitHub repositories, where I've uploaded my projects.",
    link: [
      {
        alias: "GitHub",
        url: "https://github.com/igawoz?tab=repositories",
      },
    ],
  },
  {
    title: "Netlify projects",
    img: "./img/devicon_netlify.svg",
    text: "My projects uploaded using Netlify, to show the results of coding.",
    link: [
      {
        alias: "Weatherity - Weather app",
        url: "https://weatherity-igawoz.netlify.app/",
      },
    ],
  },
  {
    title: "Figma projects",
    img: "./img/logos_figma.svg",
    text: "My app ideas and drafts created in Figma.",
    link: [
      {
        alias: "Skateboards Shop",
        url: "https://www.figma.com/file/CezGH8xaeYAoeE7RZ3ELqG/Ecom-Project-Skate?type=design&node-id=55-32&mode=design",
      },
    ],
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <Accordion data={tabs} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Iga Woziwoda</h1>

      <ul className="info-list">
        <li>
          <img src={phoneIcon} alt="p" />
          +48 798-628-311
        </li>
        <li>
          <img src={emailIcon} alt="e" />
          iga.wozi@o2.pl
        </li>
        <li>
          <img src={locationIcon} alt="l" />
          Cracow, Poland
        </li>
        {/* <li>
          <img src="img/pressure.png" />
          LinkedIn
        </li> */}
      </ul>
      <h3>Links</h3>
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          img={el.img}
          text={el.text}
          link={el.link}
          key={el.title}
        ></AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, img, text, link }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <img src={require(`${img}`)} alt={title} className="logo-img" onClick={handleToggle} />
      <p className="title" onClick={handleToggle}>
        {title}
      </p>
      <p className="arrow" onClick={handleToggle}>
        ⌵{/* {isOpen ? "︿" : "﹀"} */}
      </p>
      {isOpen && (
        <div className="content-box">
          <p className="content-box-text">{text}</p>
          <div className="content-box-link">
            {link.length > 1 ? (
              <ul>
                {link.map((link, i) => (
                  <li key={i}>
                    <a href={link.url}>{link.alias}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="content-box-link">
                <a href={link[0].url}>{link[0].alias}</a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
