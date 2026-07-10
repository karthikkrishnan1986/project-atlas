import { OllamaProvider } from "../../core/ai/ollama-provider";

export class PlanningAgent {

    async execute(): Promise<void> {

        console.log("📋 Planning Agent Started");
        console.log("");

        const provider = new OllamaProvider();

        const plan = await provider.generate(`
You are an expert QA Automation Architect.

Generate a concise execution plan for the following task.

Task:

Open https://playwright.dev

Capture homepage screenshot

Return only numbered steps.
`);

        console.log(plan);

        console.log("");
        console.log("✅ Planning Complete");

    }

}