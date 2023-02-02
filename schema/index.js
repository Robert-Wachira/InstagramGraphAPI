// const { buildSchema } = require('graphql');

const { buildSchema } = require("type-graphql")

const UserProfile = buildSchema`
type UserProfile {
  account_type: [String]
  id: Int!
  media_count: Int
  username: String
}`
  ;

const MediaData = buildSchema`
type MediaData {
  caption: String
  comments_count: Int
  id: Int
  ig_id: Int
  is_comment_enabled: Boolean
  is_shared_to_feed: Boolean
  like_count: Int
  media_type: String
  media_url: String
  owner: Float
  permalink: String
  shortcode: Float
  thumbnail_url: String
  timestamp: Date
  username: String
  video_title: String
}
`;

const Insights = buildSchema`
{
  profile_views: Int
  period: Boolean
  impressions: String
}
`


module.exports = {
  UserProfile,
  MediaData,
  Insights
}
