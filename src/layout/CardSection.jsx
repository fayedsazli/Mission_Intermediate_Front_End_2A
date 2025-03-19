import TitleParagraf from "../common/TitleParagraf";
import TabsCard from "../common/TabsCard";
import CardGroup from "./CardGroup";

const CardSection = () => {
  return (
    <>
      <TitleParagraf />
      <TabsCard />
      <div className="container m-0 text-center">
        <div className="row row-cols-1 row-cols-lg-3 row-gap-2">
          <CardGroup />
        </div>
      </div>
    </>
  );
};

export default CardSection;
