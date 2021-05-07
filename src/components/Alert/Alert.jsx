import { InfoSvg, WarningSvg, CheckCircleSvg, ErrorSvg } from "../../assets/";
import { useLocalization } from "../../customHooks";
import { translate } from "../../functions";

export const Alert = ({ type, message }) => {
  const { language } = useLocalization();

  let svg;
  switch (type) {
    case "success":
      svg = <CheckCircleSvg />;
      break;
    case "warning":
      svg = <WarningSvg />;
      break;
    case "error":
      svg = <ErrorSvg />;
      break;
    case "info":
      svg = <InfoSvg />;
      break;
    default:
      break;
  }

  console.log("type  of alert ", type);
  console.log(message);
  let alert = (
    <div className={`alert alert-quote alert-${type} alert--float`}>
      <p className="flex items-center">
        <span className="mr-3">{svg}</span>
        <span className="text-white">{translate(message, language)}</span>
      </p>
    </div>
  );

  return alert;
};
