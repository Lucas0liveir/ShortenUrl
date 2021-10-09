"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLController_1 = require("./controller/URLController");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const MongoConnection_1 = require("./database/MongoConnection");
const corsOptions = {
    origin: '*'
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const UrlController = new URLController_1.URLController();
const DataBase = new MongoConnection_1.MongoConnection();
DataBase.Connect();
app.post('/shorten', UrlController.Shorten);
app.get('/:hash', UrlController.Redirect);
app.listen(process.env.PORT || 80, () => console.log('running'));
//# sourceMappingURL=index.js.map