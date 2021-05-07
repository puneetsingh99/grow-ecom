import {
  IndianFlagSvg,
  USFlagSvg,
  UKFlagSvg,
  BrazilianFlagSvg,
  JapaneseFlagSvg,
  SouthKoreanFlagSvg
} from "../../assets";

export const Flag = ({ country }) => {
  switch (country) {
    case "India":
      return <IndianFlagSvg />;
    case "US":
      return <USFlagSvg />;
    case "UK":
      return <UKFlagSvg />;
    case "Japan":
      return <JapaneseFlagSvg />;
    case "South Korea":
      return <SouthKoreanFlagSvg />;
    case "Brazil":
      return <BrazilianFlagSvg />;
    default:
      return <IndianFlagSvg />;
  }
};
