import TitleParagraf from "../common/TitleParagraf";
import TabsCard from "../common/TabsCard";
import CardGroup from "./CardGroup";
import useLessons from "../hooks/uselesson";
import CardGroupHome from "./CardGroupHome";

const CardSection = () => {
  const [lessons,setLessons] = useLessons();

  return (
    <>
      <TitleParagraf />
      <TabsCard />
          <CardGroupHome lessons={lessons} CardWidth={"3"} />
    </>
  );
};

export default CardSection;
