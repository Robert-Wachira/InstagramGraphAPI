const {
    getUserProfile,
    getMediaData,
    getInsights,
    getHashtaggedMedia
} = require("./instagram");

const Query = {
    Query: {
        getUserProfile: () => getUserProfile(),
        getMediaData: () => getMediaData(),
        getInsights: () => getInsights(),
        getHashtaggedMedia: () => getHashtaggedMedia()
    }
}

module.exports = Query;
