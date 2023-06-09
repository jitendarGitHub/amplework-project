import { ClientAppreciation, CustomWelcomeBlock } from "../../../components";
import {
  AppDevelopment,
  Contentdevelopment,
  EcommerceDevelopment,
  EnterpriseWebDevelopmentBG,
  HourlyPlan,
  Masterpiece,
  Paymentdevelopment,
  Portaldevelopment,
  Softwaredevelopment,
  Uidevelopment,
} from "../../../assets";

import {
  AmpleQuestion,
  CompanyOverview,
  Developer,
  Digitalize,
  FormSection,
} from "../applicationmaintenance/section";

import {
  WebDevelopment,
  TechnologyStacks,
  BenifitsOfBussiness,
  ReasonAmple,
  EnterpriseWebService,
  CoreCapability,
} from "./section";
import "./enterpriseweb.css";

const EnterpriseWebDevelopment = () => {
  return (
    <div className="page-content">
      <CustomWelcomeBlock
        image={EnterpriseWebDevelopmentBG}
        title="ENTERPRISES WEB DEVELOPMENT"
        description="Elevate Your Web Presence With Enterprise Website Development"
      />

      <section className="bg-light">
        <EnterpriseWebService />
      </section>

      <WebDevelopment
        title="Enterprise Web Development Services"
        desc="Enterprise web development services effectively involve building and maintaining web-based applications for large-scale organizations. Our developers incorporate 7+ years of experience in working towards the latest technologies - such as: Java, .NET, Ruby on Rails, React, Node.js and many more. We also provide consultancy services to you for suggesting new enterprise IT strategies and enterprise web design solutions."
        about="Your Website, Our Masterpiece"
        image={Masterpiece}
        listimg={HourlyPlan}
        list1="Customized solutions to meet specific business needs."
        list2="Increased efficiency and productivity."
        list3="Improved communication and collaboration."
        list4=" Enhanced security and data protection."
        list5="Scalable solutions that can grow with the business."
      />
      <WebDevelopment
        title="Enterprise Software Development"
        desc="The market of enterprise software development is projected to grow at an astonishing growth rate of 7.12% CAGR. Thus, we encourage our clients to scale up their operations with our reliable enterprise software development services. Through our solutions, businesses can handle complex processes as well as adopt to-scale solution approaches in an effective manner."
        about="Our Superpower: Enterprise Solutions"
        image={Softwaredevelopment}
        listimg={HourlyPlan}
        list1="  Better customer experiences and engagement."
        list2="Increased revenue and profitability."
        list3="Access to the latest technologies and trends."
        list4="Integration with other systems and applications."
        list5="Reduced development time and costs."
        className="columnreverse"
        columnreverse="row-reverse"
        bgcolor="rgb(248 249 250)"
      />
      <WebDevelopment
        title="Enterprise Portal Development"
        desc="Now, create in-house portals for your employees so that they can access all the operations through central location-enabled functions. Our project managers develop innovative portal solutions for your organization by integrating them with existing system practices. It can facilitate the exchange of information and ideas that allows businesses to communicate more effectively."
        about="Digital Magic For Enterprises"
        image={Portaldevelopment}
        listimg={HourlyPlan}
        list5="Streamlined workflows and processes. "
        list1="Centralized access to applications, data and resources."
        list2="Customized portals for unique business needs."
        list3="Better data analysis and reporting."
        list4="Secure access to confidential information."
      />
      <WebDevelopment
        title="Enterprise UI/UX Web Design"
        desc="We create aesthetically pleasing user-friendly interfaces for fascinating your targeted audiences. We incorporate a rich UI library that helps businesses to empower their business values in an effective way. Although, we create an interface for improving the experience and enhancing productivity. From the customer’s perspective, a rich UI/UX enable them to interact with your website in a better way."
        about="Designs that Delight Users"
        image={Uidevelopment}
        listimg={HourlyPlan}
        list5="Integration with other systems."
        list1="Improved user experiences and engagement."
        list2="Increased productivity and time savings."
        list3="Easier Navigation."
        list4="Higher User-friendliness."
        columnreverse="row-reverse"
        bgcolor="rgb(248 249 250)"
      />
      <WebDevelopment
        title="Hybrid Enterprise Web App Development"
        desc="Hybrid enterprise web app development service combines the best of native and web-based applications. These applications are built using web technologies such as HTML5, CSS, and JavaScript and are wrapped in a native container for distribution on app stores. This approach provides the flexibility of web apps with the performance and functionality of native apps, making them ideal for enterprise use."
        about="Boost Business With Hybrid Solutions"
        image={AppDevelopment}
        listimg={HourlyPlan}
        list5="Cross-platform compatibility"
        list1="Offline functionality and access to data"
        list2="Increased security and data protection."
        list3="Seamless integration with existing systems. "
        list4="Greater flexibility and scalability."
      />
      <WebDevelopment
        title="Enterprise E-Commerce Development"
        desc="Enterprise e-commerce development enables large organizations to build and manage online stores. It involves creating a custom e-commerce platform that integrates with existing business systems and supports a range of features, such as: multiple payment gateways, shipping options and customer management. This service helps businesses to streamline their sales processes, expand their reach and increase revenue through online sales."
        about="Elevating Enterprise E-Commerce"
        image={EcommerceDevelopment}
        listimg={HourlyPlan}
        list5="Competitive advantage through digital innovation."
        list1="Personalized and engaging shopping experiences. "
        list2="Data-driven business insights."
        list3="Multichannel capabilities for audiences.  "
        list4="Empower your business growth."
        columnreverse="row-reverse"
        bgcolor="rgb(248 249 250)"
      />
      <WebDevelopment
        title="Payment Gateway Integrations"
        desc="If your websites involve the activities of financial transactions then utilize the payment gateway to facilitate secure online payments. It enables customers to complete transactions using credit/debit cards, bank transfers or digital wallets. We effectively configure the payment gateway, testing the functionality, and ensuring that it meets industry standards. We believe that secure payment gateway integration is essential for the success of any online business that accepts payments."
        about="Seamless Secure Transactions"
        image={Paymentdevelopment}
        listimg={HourlyPlan}
        list5="Secure and reliable payment for customers."
        list1="Integration with multiple payment methods and gateways."
        list2="Simplified checkout process for customers."
        list3="Reduced risk of fraud and chargebacks. "
        list4="Compliance with industry standards."
      />
      <WebDevelopment
        title="Content Management Solutions"
        desc="Integrate our content management business solutions for your corporation to store and manage digital content - such as: images, videos and documents. Now, you can empower your business’s SEO practices with the profound utilization of our expert solutions. Moreover, it will also be going to scale your business’s content marketing practices so that you can attract audiences in an effective manner."
        about="Simplifying Content Creation"
        image={Contentdevelopment}
        listimg={HourlyPlan}
        list1="Effective content management. "
        list2="Improved user experience. "
        list3="Secure management of information."
        list4=" Integration with other systems. "
        list5="Streamlined Workflows."
        columnreverse="row-reverse"
        bgcolor="rgb(248 249 250)"
      />
      <section>
        <CoreCapability />
      </section>

      <section className="bg-light">
        <TechnologyStacks
          heading="Technology Stacks"
          para="  If your websites involve the activities of financial transactions then
          utilize the payment gateway to facilitate secure online payments. It
          enables customers to complete transactions using credit/debit cards,"
        />
      </section>
      <BenifitsOfBussiness />
      <ReasonAmple />
      <Developer />
      <ClientAppreciation />
      <AmpleQuestion />
      <Digitalize />
      <section style={{ backgroundColor: "rgb(243 246 255)" }} className="p-0">
        <div className="container">
          <div className="row justify-content-around">
            <FormSection />
            <CompanyOverview />
          </div>
        </div>
      </section>
    </div>
  );
};
export default EnterpriseWebDevelopment;
