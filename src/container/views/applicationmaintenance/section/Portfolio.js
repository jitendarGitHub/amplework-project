import { Carousel } from "react-bootstrap";
import { PortfolioCarousel } from "../../../../components";
import { PortfolioMock } from "../../../../mockup/Portfoliomock";
import { PrimaryText } from "../../../../components/text";
const PortFolio = () => {
  return (
    <section>
      <PrimaryText
        className="text-center"
        heading="Portfolio of Our Accomplishments"
      />
      <Carousel>
        {PortfolioMock.map((items, index) => {
          return (
            <Carousel.Item>
              <PortfolioCarousel
                headerimage={items.headerimage}
                index={index}
                icon={items.icon}
                header={items.header}
                bgimage={items.bgimage}
                image={items.image}
                para={items.para}
                download={items.download}
                rating={items.rating}
                funding={items.funding}
                reward={items.reward}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};
export default PortFolio;
