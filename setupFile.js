require('dotenv').config();
const AsyncAirtable = require('./lib/asyncAirtable');
const asyncAirtable = new AsyncAirtable(
  process.env.AIRTABLE_KEY,
  process.env.AIRTABLE_BASE,
);

global.AsyncAirtable = AsyncAirtable;
global.asyncAirtable = asyncAirtable;
