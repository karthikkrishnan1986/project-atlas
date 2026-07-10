import { ReportEngine } from "../../core/reporting/report-engine";
import { OllamaProvider } from "../../core/ai/ollama-provider";

export class ReportingAgent {

    async execute(): Promise<void> {

        console.log("📊 Report Agent Started");

        const provider = new OllamaProvider();

        const summary = await provider.generate(`
You are a QA Automation Lead.

Summarize this execution.

Execution Status: PASS

Browser: Chromium

URL: https://playwright.dev

Screenshot: Captured

Console Errors: None

Keep the response under 100 words.
`);

        const report = new ReportEngine();

        report.generate(summary);

        console.log("✅ Reporting Complete");

    }

}