import { URLModel } from "../database/Model/Url"
import { Request, Response } from "express"
import shortId from 'shortid'
import { config } from "../config/Constants"
export class URLController {

    public async Shorten(req: Request, response: Response): Promise<void> {
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if (url) {
            response.json(url.shortURL)
            return
        }
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newUrl = await URLModel.create({ hash, shortURL, originURL })

        response.json(newUrl.shortURL)
    }

    public async Redirect(req: Request, response: Response): Promise<void> {
        const { hash } = req.params
        const url = await URLModel.findOne({hash})
        if(url){
            response.redirect(url.originURL)
            return
        }

        response.status(400).json({error: "Url not Found"})
    }
}