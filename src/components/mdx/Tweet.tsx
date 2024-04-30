import type { FC } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet: FC<{ tweetId: number }> = ({ tweetId }) => {
  return <TwitterTweetEmbed tweetId={`${tweetId}`} />;
};

export default Tweet;