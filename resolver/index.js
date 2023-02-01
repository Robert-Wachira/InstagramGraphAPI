const {
    getUserProfile,
    getMediaData,
    getInsights
} = require("./instagram");

const Query = {
    Query: {
        getUserProfile: () => getUserProfile(),
        getMediaData: () => getMediaData(),
        getInsights: () => getInsights()
    }
}

module.exports = Query;
