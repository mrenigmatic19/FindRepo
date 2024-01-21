const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs').promises;

const getIndex = async (req, res) => {
    res.render('index');
};


const saveToJsonFile = async (filename, data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2); // Indent with 2 spaces for readability
        await fs.writeFile(filename, jsonData);
        console.log(`Data saved to ${filename}`);
    } catch (error) {
        console.error(`Error saving data to ${filename}: ${error.message}`);
    }
};


const postIndex = async (req, res) => {
    try {
        const username = req.body.username;
        const owner = await fetch(`https://api.github.com/users/${username}`);

        if (owner.status == 200) {
            const Detail = await owner.json(); 
            const ownerData = {
                username: Detail.login,
                name: Detail.name,
                twitter: Detail.twitter_username,
                company: Detail.company,
                type: Detail.type,
                url: Detail.html_url,
                email:Detail.email,
                location:Detail.location,
                profile: Detail.avatar_url,
            };

            const apiData = [];
            apiData.push(ownerData)
            const repos = await fetch(`https://api.github.com/users/${username}/repos`);
            if (repos.status == 200) {
                const userData = await repos.json();
                const reposData = [];
            
                for (const element of userData) {
                    const lang = await fetch(element.languages_url);
                    const pro = await lang.json();
                    const language = Object.keys(pro);
                    const data = {
                        description: element.description,
                        language: language,
                        name: element.name,
                        url:element.html_url
                    };
                    reposData.push(data);
                }
            
                // Log the data to console
                apiData.push(reposData);
                await saveToJsonFile('result.json', apiData);
                res.redirect('/result');
            }  else {
                req.flash('msg', 'Use Limit Exceed');
                res.redirect('/');
            }
        } else {
            req.flash('msg', 'Enter Correct Username');
            res.redirect('/');
        }
    } catch (error) {
        // Log error and send an error response
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getIndex, postIndex };
