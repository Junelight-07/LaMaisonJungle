import sun from "../../../assets/sun.svg";
import water from "../../../assets/water.svg";

function CareScale(props) {
  const { scaleValue, careType } = props;
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? sun : water;

  return (
    <div>
      {range.map(
        (rangeElem) =>
          scaleValue >= rangeElem && (
            <span key={rangeElem.toString()}>
              <img src={scaleType} alt="{scaleType}" />
            </span>
          )
      )}
    </div>
  );
}

export default CareScale;
