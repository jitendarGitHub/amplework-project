import { Button } from "react-bootstrap";
import "../Pagecontent2.css";
const TechnologyStacks = () => {
  return (
    <section className="bg-light">
      <div className="container text-center">
        <h2>Technology Stacks</h2>
        <p className="p-2">
          If your websites involve the activities of financial transactions then
          utilize the payment gateway to facilitate secure online payments. It
          enables customers to complete transactions using credit/debit cards,
        </p>
        <div className="tables">
          <div className="row">
            <div className="col-lg-6 p-4 first technology-stack pb-5">
              <h3>Front-end frameworks and libraries</h3>
              <Button>React</Button> <Button>Angular</Button>{" "}
              <Button>Vue.js</Button> <Button>jQuery</Button>
            </div>
            <div className="col-lg-6 p-4 four technology-stack pb-5">
              <h3>Development tools and libraries</h3>
              <Button>Git</Button> <Button>Docker</Button>{" "}
              <Button>Jenkins</Button> <Button> Apache Maven </Button>{" "}
              <Button>Grunt</Button> <Button>Gulp </Button>{" "}
              <Button> NPM</Button>{" "}
            </div>
            <div className="col-lg-3 p-4 third technology-stack pb-5">
              <h3>Back-end frameworks</h3>
              <Button>Spring</Button> <Button>Express</Button>{" "}
              <Button>Laravel</Button> <Button>Ruby on Rails</Button>{" "}
            </div>
            <div className="col-lg-3 p-4 four technology-stack pb-5">
              <h3>MEAN stack</h3>
              <Button>MongoDB</Button> <Button>Express</Button>{" "}
              <Button>AngularJS</Button> <Button>Node.js</Button>{" "}
            </div>
            <div className="col-lg-3 p-4 five technology-stack pb-5">
              <h3>LAMP stack</h3>
              <Button>Linux</Button> <Button>Apache</Button>{" "}
              <Button>MySQL</Button> <Button>PHP</Button>{" "}
            </div>
            <div className="col-lg-3 p-4 third technology-stack pb-5">
              <h3>Ruby on Rails</h3>
              <Button>Ruby</Button> <Button>Rails</Button>{" "}
              <Button>PostgreSQL</Button>
            </div>
            <div className="col-lg-6 five technology-stack pb-5 p-4 ">
              <h3>Front-end frameworks and libraries</h3>
              <Button>React</Button> <Button>Angular</Button>{" "}
              <Button> Vue.js</Button> <Button>jQuery</Button>{" "}
            </div>
            <div className="col-lg-6 four technology-stack pb-5 p-4 ">
              <h3>Django stack</h3>
              <Button>Python</Button> <Button>Django</Button>{" "}
              <Button>PostgreSQL</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechnologyStacks;
