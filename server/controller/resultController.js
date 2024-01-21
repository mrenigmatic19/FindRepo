const express =require('express')
const path=require('path')
const fs=require('fs')



const postResult = async (req,res)=>{
    //search url
}

const getResult = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const filePath = path.join(__dirname, '../result.json');
        const rawData = fs.readFileSync(filePath);
        const jsonData = JSON.parse(rawData);

        const dataToPaginate = jsonData[1]; 
        const owner = jsonData[0];

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedData = dataToPaginate.slice(startIndex, endIndex);

        const totalPages = Math.ceil(dataToPaginate.length / limit);

        const results = {
            owner,
            paginatedData,
            currentPage: page,
            totalPages,
            limit,
            previous: page > 1 ?   page - 1  : null,
            next: page < totalPages ?   page + 1  : null,
        };

        console.log(results);
        res.render('github', { results }); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = {postResult,getResult}
