const express = require("express");
const mongoose = require("mongoose");

const ElementSchema = new mongoose.Schema({
  nom: String,
  description: String,
});

const Exemple = mongoose.model("Exemple", exempleSchema);
