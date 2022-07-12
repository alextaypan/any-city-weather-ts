import { FC } from "react";
import { Circles } from "react-loader-spinner";

const Loader: FC = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Circles width="100" color="#6495ED" ariaLabel="loading-indicator" />
    </div>
  );
};

export default Loader;
