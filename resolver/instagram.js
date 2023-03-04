const { UserInputError } = require("apollo-server-express")
const { get } = require("axios").default;
require("dotenv").config();

async function getUserProfile()
{
    let response;

    try
    {
        response = await get("https://graph.facebook.com/v16.0/me", {
            params: {
                fields: "id,name,last_name",
                access_token: "EAAOrLsMibvABAAWHeAzmXh5uzgEF11Ho1dNbqlEbtq8DnZCYMMEa6cpPSxqYG1yvdWdMc7NZA6loqRn49YA2MfNEfg5PCvQZCseqtxsXtaQZB0mbbHV7xDs25iA1IPTDJG3JBnkc1rYOgbVjktZARUrkgbtpQKjkZCR8SXYVCyR2KLfYLaFoRZATdzxIXSSbE3jYnAQoBVuiAZDZD",
            },
            headers: {
                host: "graph.facebook.com",
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
