const { UserInputError } = require("apollo-server-express")
const { get } = require("axios").default;
require("dotenv").config();

async function getUserProfile()
{
    let response;

    try
    {
        response = await get("https://graph.instagram.com/me", {
            params: {
                fields: "id,username,media_count,account_type",
                access_token: process.env.ACCESS_TOKEN,
            },
            headers: {
                host: "graph.instagram.com",
            },
        });
    } catch (error)
    {
        return new UserInputError(error);
    }
    response = response["data"];
    return response;
}

async function getMediaData()
{
    let response;

    try
    {
        response = await get("https://graph.instagram.com/me/media", {
            params: {
                fields:
                    "id, caption, media_url, media_type, permalink, thumbnail_url, timestamp, username, comments_count, ig_id, is_comment_enabled, is_shared_to_feed, like_count, owner, shortcode, video_title",
                access_token: process.env.ACCESS_TOKEN,
            },
            headers: {
                host: "graph.instagram.com",
            },
        });
    } catch (error)
    {
        return new UserInputError(error);
    }

    response = response["data"];
    return response.data;
}

async function getInsights()
{
    let response;
    try
    {
        response = await get(`https://graph.instagram.com/${media_id}`, {
            params: {
                fields:
                    "profile_views, period, impressions",
                access_token: process.env.ACCESS_TOKEN,
            },
            headers: {
                host: "graph.instagram.com",
            },
        });
    }
    catch (error)
    {
        return new UserInputError(error);
    }

    response = response["data"];
    return response;
}

async function getHashtaggedMedia()
{
    let response;
    try
    {
        response = await get(`https://graph.instagram.com/${media_id}`, {
            params: {
                fields:
                    "profile_views, period, impressions",
                access_token: process.env.ACCESS_TOKEN,
            },
            headers: {
                host: "graph.instagram.com",
            },
        })
    }
    catch (error)
    {
        return new UserInputError(error);
    }
    response = response["data"];
    return response;
}

module.exports = {
    getUserProfile,
    getMediaData,
    getInsights,
    getHashtaggedMedia
};
