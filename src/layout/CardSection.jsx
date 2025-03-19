import TitleParagraf from "../common/TitleParagraf";
import TabsCard from "../common/TabsCard";
import CardGroup from "./CardGroup";

const CardSection = () => {
  return (
    <>
      <TitleParagraf />
      <TabsCard />
          <CardGroup CardWidth={"3"} />
    </>
  );
};

export default CardSection;
