import express from 'express'
import {generateUrl,getUrl} from '../Controller/urlController.js';
const urlRoute=express.Router();
urlRoute.post('/add',generateUrl);
urlRoute.get('/:shortId',getUrl);
export default urlRoute;