import React, { Fragment } from "react";

// Components
import Banner from "../sharedComponents/Banner";

const Resources = () => {
  return (
    <Fragment>
      <Banner
        img={"resources-banner.jpg"}
        title={"Insights & Resources"}
        text={`Sharing knowledge and best practices helps us create lasting results together.`}
      />
    </Fragment>
  );
};

export default Resources;
