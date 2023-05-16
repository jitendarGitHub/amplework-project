import { DreamModalCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { DreamMock } from "../../../../mockup/DreammodalMock";

const Dream = () => {
  return (
    <>
      <div className="container">
        <PrimaryText
          className="text-center"
          heading="Dream it, We'll Build it"
        />
        <SecondaryText
          className="text-center ps-lg-5 pe-lg-5"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,"
        />
        <div className="row">
          {DreamMock.map((items) => {
            return (
              <div className="col-lg-4">
                <DreamModalCard
                  img={items.img}
                  title={items.title}
                  para={items.para}
                  list1={items.list1}
                  list2={items.list2}
                  list3={items.list3}
                  list4={items.list4}
                  borderbottom="3px solid blue"
                  boxshadow="0px 0px 2px 0px"
                  style="none"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Dream;
