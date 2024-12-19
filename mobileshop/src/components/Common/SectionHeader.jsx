import cn from "classnames";
import Heading from "../ui/heading";
import Text from "../ui/text";

const SectionHeader = ({
  sectionHeading = "text-section-title",
  sectionSubHeading,
  className = "mb-8",
  headingPosition = "left",
}) => {
  return (
    <div
      className={cn(` ${className}`, {
        "text-[16px]": headingPosition === "hotdeal",
        "text-center": headingPosition === "center",
      })}
    >
      <Heading
        variant="mediumHeading"
        className={cn({
          "text-[16px] text-red-600": headingPosition === "hotdeal",
          "font-semibold sm:mb-1.5 sm:text-[24px]":
            headingPosition === "center",
        })}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: sectionHeading,
          }}
        ></div>
      </Heading>
      {sectionSubHeading && (
        <Text variant="medium" className="">
          {sectionSubHeading}
        </Text>
      )}
    </div>
  );
};

export default SectionHeader;
