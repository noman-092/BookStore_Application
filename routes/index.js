var express = require('express');
var router = express.Router();
const  bookSchema= require("../models/bookModel");
const bookCollection = require('../models/bookModel');
require("dotenv").config({path: "./.env"});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'HOME || ABC' });
});

// important DB class 3
router.get('/E-book', async function(req, res, next) {
  const allBooks= await bookCollection.find();
  console.log(allBooks)
  res.render("E-book", {allBooks})
});

router.get('/About', function(req, res, next) {
  res.render('about');
});

// important DbClass-3
router.get('/explore/:id', async function(req, res, next) {
  // bookId find 
  const BookId = req.params.id;
  const book = await bookCollection.findById(BookId);
  console.log(book)
  res.render('explore', {book});
});


router.get('/create-book', function(req, res, next) {
  res.render('create-book')
 });


router.post('/create-book', async function(req, res, next) {
  try {
  // const newBook= await new bookCollection(req.body);
  // res.json(newBook);
  // console.log(req.body);
  const newBook= await new bookCollection(req.body);
  await newBook.save();
  res.redirect("/E-book");
  } catch (err) {
    res.send(err.message)
  }
});
router.get('/update-book/:id', async function(req, res, next) {
  const BookId = req.params.id;
  const book = await bookCollection.findById(BookId);
  res.render('update-book',{book});
});

router.post('/update-book/:id', async function(req, res, next) {
  const BookID= req.params.id;
  const update= await bookCollection.findByIdAndUpdate(BookID,req.body)
  res.redirect(`/explore/${BookID}`);
});

router.get('/delete-book/:id', async (req,res,next)=>{
  const BookID= req.params.id;
  const update= await bookCollection.findByIdAndDelete(BookID,req.body)
  res.redirect('/E-book')

})

router.get('/about', function(req, res, next) {
  res.render('about');
});




module.exports = router;
