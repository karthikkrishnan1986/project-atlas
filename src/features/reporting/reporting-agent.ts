import { ReportEngine } from "../../core/reporting/report-engine";
import { AnalysisAgent } from "../analysis/analysis-agent";
import { ExecutionResult } from "../../models/execution-result";

export class ReportingAgent {

    async execute(): Promise<void> {

        console.log("");
        console.log("📊 Report Agent Started");
        console.log("");

        const result: ExecutionResult = {

            status: "PASS",

            browser: "Chromium",

            url: "https://playwright.dev",

            duration: 3.6,

            screenshot: "homepage.png",

            consoleErrors: 0,

            networkFailures: 0

        };

        const analysis = new AnalysisAgent();
const summary = await analysis.analyze(result);

// -------------------------
// Simulated Failure Analysis
// -------------------------

const investigation = await analysis.investigateFailure({

    errorType: "LocatorTimeout",

    locator: "#login-button",

    errorMessage:
        "Timeout 30000ms exceeded. Locator '#login-button' not found.",

    pageUrl: "https://playwright.dev"

});

console.log("");
console.log("========== AI FAILURE INVESTIGATION ==========");
console.log(investigation);
console.log("==============================================");

// -------------------------

const report = new ReportEngine();

report.generate(summary);


        console.log("");

        console.log("✅ Reporting Complete");

    }

}