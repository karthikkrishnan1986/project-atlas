import { PlaywrightEngine } from "../../core/playwright/playwright-engine";

export class ExecutionAgent {

    async execute(): Promise<void> {

        console.log("🎭 Playwright Execution Agent Started");

        const engine = new PlaywrightEngine();

        await engine.execute();

        console.log("✅ Playwright execution completed");

    }

}