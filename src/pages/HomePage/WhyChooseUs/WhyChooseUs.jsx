import H2Title from "../../../components/Titles/H2Title";
import H3Title from "../../../components/Titles/H3Title";
import FirstCard from "./WCUComponets/FirstCard";
import FourthCard from "./WCUComponets/FourthCard";
import SecondCard from "./WCUComponets/SecondCard";
import ThirdCard from "./WCUComponets/ThirdCard";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-10 max-w-7xl mx-auto">
      <H3Title text="Benefits"></H3Title>
      <H2Title baseText="Enhance" coloredText="Digital Journey" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 p-3">
        <FirstCard parentDivClass={parentDivClass} />
        <SecondCard parentDivClass={parentDivClass} />
        <ThirdCard parentDivClass={parentDivClass}/>
        <FourthCard parentDivClass={parentDivClass}/>
      </section>
    </section>
  );
};
const parentDivClass = "h-72 w-64 p-3 flex flex-col justify-center items-start gap-3 rounded-lg"
export default WhyChooseUs;
