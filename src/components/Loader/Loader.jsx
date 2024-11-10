import { ColorRing } from "react-loader-spinner";

const Loader = ({ w, h }) => {
  return (
    <ColorRing
      visible={true}
      ariaLabel="color-ring-loading"
      width={w}
      height={h}
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#5b9ee1", "#6cc4f4", "#6abdf8", "#81bbd9", "#87a4b8"]}
    />
  );
};

export default Loader;
