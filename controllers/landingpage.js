import { book } from '../models/book.js'
import { author } from '../models/author.js'
import asyncHandler from 'express-async-handler';

const getBestBook = asyncHandler(async (req, res) =>{
    const bestBook = book.find({}).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
    });
})

const getBestAuthor = asyncHandler(async (req, res) =>{
    const bestAuthor = author.find({}).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
    });
})