import { CliArguments } from "./interfaces";
import { ADTClient, createSSLConfig } from "abap-adt-api";
import dotenv from "dotenv";
dotenv.config();

export class Runner {
    client: ADTClient
    public constructor(args){
        const url = process.env.ADT_URL || args.ADT_URL
        const user = process.env.ADT_USER || args.ADT_USER
        const passwd = process.env.ADT_PASS || args.ADT_PASS
        if (!url) {
            throw "ADT_URL not found"
        } 
        else if (!user){
            throw "ADT_USER not found"

        } 
        else if (!passwd) {
            throw "ADT_PASS not found"

        }
        this.client = new ADTClient(
            url,
            user,
            passwd,
            args.ADT_CLIENT || "",
            args.ADT_LANG || "EN",
            createSSLConfig(!url.match(/^http:/i))
        );
        
    }
    public async run_test(args: CliArguments) {
        await this.client.login();
        try {

            const url = args.abap_package ? `/sap/bc/adt/repository/informationsystem/virtualfolders?selection=package%3a${encodeURIComponent(args.abap_package)}` : `/sap/bc/adt/oo/classes/${args.abap_class}`
            const resUnit = await this.client.runUnitTest(url)
            return resUnit;
        } catch (e) {
            return e.message;
        }
    }
}
