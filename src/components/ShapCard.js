import { useState } from "react";
import { Card } from "react-bootstrap";

const Shapcard = (props) => {
  const [state, setstate] = useState({
    image: "",
    title: "",
    para: "",
  });
  return (
    <>
      <div className="card text-center p-4 mt-3  border-4 border-dashed ">
        <Card className="card-content">
          <Card.Body>
            <img src={props.image} width={"10%"} />
            <Card.Title
              className="card-title"
              style={{ color: `${props.color}` }}
            >
              {props.title}
            </Card.Title>
            <Card.Text>{props.para}</Card.Text>
            <Card.Text className=" ample-footers text-primary">
              {props.footer}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Shapcard;

<div class="fc-items-wrapper">
  <div
    class="fc-item js-track-click position-relative"
    data-track-element="card"
    data-track-text="1"
  >
    <div>
      <div class="fc-item-title">
        <div class="fc-item-title-image">
          <img
            src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
            width="80"
            alt="Issue target"
            class="fc-item-title-image-issue-target entered lazyloaded"
            data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
            data-ll-status="loaded"
          />
          <noscript>
            <img
              src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
              width="80"
              alt="Issue target"
              class="fc-item-title-image-issue-target"
            />
          </noscript>

          <img
            src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
            width="25"
            alt="Target arrow"
            class="fc-item-title-image-target-arrow entered lazyloaded"
            data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
            data-ll-status="loaded"
          />
          <noscript>
            <img
              src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
              width="25"
              alt="Target arrow"
              class="fc-item-title-image-target-arrow"
            />
          </noscript>
        </div>

        <div class="fc-item-title-text text-center mt-2">
          <p>OBSTACLE</p>
          <p>RESOLVED</p>
        </div>
      </div>

      <div class="fc-item-description">
        <div class="fc-item-description">
          <div class="fc-item-description-issue-text">
            <p style="text-align:center">
              Suffering from the high cost of software maintenance?
            </p>
          </div>

          <div class="fc-item-description-fixed-text">
            <p class="text-center">
              Our in-house support matrix and best-in-industry prices will
              resultant in cost reduction by 30% to 40%.
            </p>
          </div>

          <div class="fc-item-link fc-item-description-issue-text d-flex justify-content-center">
            <p class="text-blue">Amplework’s Solution</p>

            <img
              src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
              height="21"
              alt="Cursor image"
              class="fc-item-link-cursor-image mt-1 entered lazyloaded"
              data-lazy-src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
              data-ll-status="loaded"
            />
            <noscript>
              <img
                src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
                height="21"
                alt="Cursor image"
                class="fc-item-link-cursor-image mt-1"
              />
            </noscript>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="fc-item js-track-click position-relative"
    data-track-element="card"
    data-track-text="1"
  >
    <div>
      <div class="fc-item-title">
        <div class="fc-item-title-image">
          <img
            src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
            width="80"
            alt="Issue target"
            class="fc-item-title-image-issue-target entered lazyloaded"
            data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
            data-ll-status="loaded"
          />
          <noscript>
            <img
              src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
              width="80"
              alt="Issue target"
              class="fc-item-title-image-issue-target"
            />
          </noscript>

          <img
            src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
            width="25"
            alt="Target arrow"
            class="fc-item-title-image-target-arrow entered lazyloaded"
            data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
            data-ll-status="loaded"
          />
          <noscript>
            <img
              src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
              width="25"
              alt="Target arrow"
              class="fc-item-title-image-target-arrow"
            />
          </noscript>
        </div>

        <div class="fc-item-title-text text-center mt-2">
          <p>OBSTACLE</p>

          <p>RESOLVED</p>
        </div>
      </div>

      <div class="fc-item-description">
        <div class="fc-item-description">
          <div class="fc-item-description-issue-text">
            <p style="text-align:center">
              Suffering from slow and glitchy software updates?
            </p>
          </div>

          <div class="fc-item-description-fixed-text">
            <p class="text-center">
              For enhance UX by 4x, we roll out updates at a regular interval of
              3-5 weeks as a part of CI/CD implementation.
            </p>
          </div>

          <div class="fc-item-link fc-item-description-issue-text d-flex justify-content-center">
            <p class="text-blue">Amplework’s Solution</p>

            <img
              src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
              height="21"
              alt="Cursor image"
              class="fc-item-link-cursor-image mt-1 entered lazyloaded"
              data-lazy-src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
              data-ll-status="loaded"
            />
            <noscript>
              <img
                src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
                height="21"
                alt="Cursor image"
                class="fc-item-link-cursor-image mt-1"
              />
            </noscript>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="fc-item js-track-click position-relative"
    data-track-element="card"
    data-track-text="1"
  >
    <div>
      <div class="fc-item-title">
        <div class="fc-item-title-image">
          <img
            src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
            width="80"
            alt="Issue target"
            class="fc-item-title-image-issue-target entered lazyloaded"
            data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
            data-ll-status="loaded"
          />
          <noscript>
            <img
              src="https://www.amplework.com/wp-content/uploads/2023/03/arrow_icon.png"
              width="80"
              alt="Issue target"
              class="fc-item-title-image-issue-target"
            />
          </noscript>

          <img
            src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
            width="25"
            alt="Target arrow"
            class="fc-item-title-image-target-arrow entered lazyloaded"
            data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
            data-ll-status="loaded"
          />
          <noscript>
            <img
              src="https://www.amplework.com/wp-content/uploads/2023/03/Target.png"
              width="25"
              alt="Target arrow"
              class="fc-item-title-image-target-arrow"
            />
          </noscript>
        </div>

        <div class="fc-item-title-text text-center mt-2">
          <p>OBSTACLE</p>

          <p>RESOLVED</p>
        </div>
      </div>

      <div class="fc-item-description">
        <div class="fc-item-description">
          <div class="fc-item-description-issue-text">
            <p style="text-align:center">
              Need profound resources for program visibility?
            </p>
          </div>

          <div class="fc-item-description-fixed-text">
            <p class="text-center">
              We incorporate in-house KPIs for improving software visibility and
              maintaining clarity at all levels.
            </p>
          </div>

          <div class="fc-item-link fc-item-description-issue-text d-flex justify-content-center">
            <p class="text-blue">Amplework’s Solution</p>
            <img
              src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
              height="21"
              alt="Cursor image"
              class="fc-item-link-cursor-image mt-1 entered lazyloaded"
              data-lazy-src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
              data-ll-status="loaded"
            />{" "}
            <img
              src="https://www.scnsoft.com/bundles/app/img/areas/flipping-cards/arrow-right.svg"
              height="21"
              alt="Cursor image"
              class="fc-item-link-cursor-image mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
