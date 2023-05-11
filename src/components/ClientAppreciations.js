import Carousel from "react-bootstrap/Carousel";
import { ClientAppreciationMock } from "../mockup/ClientAppreciationmock";
import { PrimaryText } from "./text";
import { CustomCarousel } from "./carousel/index";

function ClientAppreciation() {
  const indicatorsStyle = {
    backgroundColor: "red",
  };
  return (
    <div className="">
      <PrimaryText
        heading="We Proudly Showcase - Our Client Appreciations"
        className="text-center fw-bold fs-3"
      />
      <Carousel indicatorsStyle={indicatorsStyle} variant="dark">
        {ClientAppreciationMock.map((items) => {
          return (
            <Carousel.Item>
              <CustomCarousel
                image={items.image}
                head={items.head}
                about={items.about}
                name={items.name}
                position={items.position}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ClientAppreciation;
