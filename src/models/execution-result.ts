export interface ExecutionResult {

    status: "PASS" | "FAIL";

    browser: string;

    url: string;

    duration: number;

    screenshot: string;

    consoleErrors: number;

    networkFailures: number;

}