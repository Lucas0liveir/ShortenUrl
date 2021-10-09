"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const Url_1 = require("../database/Model/Url");
const shortid_1 = __importDefault(require("shortid"));
const Constants_1 = require("../config/Constants");
class URLController {
    async Shorten(req, response) {
        const { originURL } = req.body;
        const url = await Url_1.URLModel.findOne({ originURL });
        if (url) {
            response.json(url.shortURL);
            return;
        }
        const hash = shortid_1.default.generate();
        const shortURL = `${Constants_1.config.API_URL}/${hash}`;
        const newUrl = await Url_1.URLModel.create({ hash, shortURL, originURL });
        response.json(newUrl);
    }
    async Redirect(req, response) {
        const { hash } = req.params;
        const url = await Url_1.URLModel.findOne({ hash });
        if (url) {
            response.redirect(url.originURL);
            return;
        }
        response.status(400).json({ error: "Url not Found" });
    }
}
exports.URLController = URLController;
//# sourceMappingURL=URLController.js.map