import { ExecutionResult } from "../../models/execution-result";
import { OllamaProvider } from "../../core/ai/ollama-provider";
import { ExecutionFailure } from "../../models/execution-failure";
import { buildFailurePrompt } from "../../prompts/analysis-prompt";
export class AnalysisAgent {

    async investigateFailure(
    failure: ExecutionFailure
): Promise<string> {

    console.log("");
    console.log("🔍 AI Failure Investigation Started");
    console.log("");

    const provider = new OllamaProvider();

const prompt = buildFailurePrompt(
    failure.errorType,
    failure.locator ?? "",
    failure.errorMessage
);
    const response = await provider.generate(prompt);

    console.log("✅ AI Investigation Complete");

    return response;
}

    async analyze(result: ExecutionResult): Promise<string> {

        console.log("");
        console.log("🤖 AI Analysis Agent Started");
        console.log("");

        const provider = new OllamaProvider();

        const prompt = `
You are a Senior QA Automation Architect.

Analyze this software test execution.

Execution Result

Status: ${result.status}

Browser: ${result.browser}

URL: ${result.url}

Duration: ${result.duration} seconds

Console Errors: ${result.consoleErrors}

Network Failures: ${result.networkFailures}

Return the response using EXACTLY these headings.

Executive Summary

Health Assessment

Risks

Recommendations

Maximum 120 words.
`;

        const response = await provider.generate(prompt);

        console.log("✅ AI Analysis Complete");

        return response;

    }

}