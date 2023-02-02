const { UserInputError } = require("apollo-server-express");
const { get } = require("axios").default;
const { post } = require("request");
const { promisify } = require("util");
require("dotenv").config();


// getting user profile
async function getUserProfile()
{
    let response;

    // send request to the API
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
        // Catch an error and return it.
        return new UserInputError(error);
    }

    // If no error, return the response.
    response = response["data"];
    return response;
}

// getting media data
async function getMediaData()
{
    let response;

    // Send request to the API
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
        // Catch an error and return it.
        return new UserInputError(error);
    }

    // If no error, return the response.
    response = response["data"];
    return response.data;
}

// getting Insights
async function getInsights()
{
    let response;

    // send request to the API
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
    } catch (error)
    {
        // Catch an error, and return it
        return new UserInputError(error);
    }

    // If no error, return the response
    response = response["data"];
    return response;
}



module.exports = {
    getUserProfile,
    getMediaData,
    getInsights
};
