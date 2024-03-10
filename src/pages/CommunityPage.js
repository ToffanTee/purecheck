import { Fragment } from "react";
import CommunityDashboard from "../components/CommunityComponents/CommunityDashboard";
import Replies from "../components/CommunityComponents/Replies";
import Likes from "../components/CommunityComponents/Likes";
import Comments from "../components/CommunityComponents/Comments";

const CommunityPage = () => {
  return (
    <Fragment>
      <CommunityDashboard />
      <Replies />
      <Likes />
      <Comments />
    </Fragment>
  );
};

export default CommunityPage;
