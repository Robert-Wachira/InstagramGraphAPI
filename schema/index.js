const { buildSchema } = require('graphql');

const UserPages = buildSchema`
type UserPages {

}
`;

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
`


module.exports = {
  UserPages,
  MediaData
}
