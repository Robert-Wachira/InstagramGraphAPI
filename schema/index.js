const { gql } = require('apollo-server-express')

const UserProfile = gql`
type UserProfile {
  account_type: [String]
  id: String!
  media_count: Int
  username: String
  name: String
  last_name: String
}`;

const MediaData = gql`
type MediaData {
  caption: String
  comments_count: Int
  id: Int!
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
  timestamp: Int
  username: String
  video_title: String
}`;

const Insights = gql`
type Insights {
  profile_views: Int
  period: Boolean
  impressions: String
}`;

const HashtaggedMedia = gql`
type HashtaggedMedia{
  caption: String!
  children: [String]
  comment_count: Int
  id: Int
  like_count: Int
  media_type: String
  media_url: String
  permalink: String
  timestamp: Int
}`;

const Query = gql`
  type Query{
    getUserProfile: UserProfile
    getMediaData: MediaData
    getInsights: Insights
    getHashtaggedMedia: HashtaggedMedia
  }
`;



module.exports = [
  Query,
  UserProfile,
  MediaData,
  Insights,
  HashtaggedMedia
];
