import { PlanningAgent } from "../features/planning/planning-agent";
import { ExecutionAgent } from "../features/execution/execution-agent";
import { HealingAgent } from "../features/healing/healing-agent";
import { ReportingAgent } from "../features/reporting/reporting-agent";

async function main() {

    console.clear();

    console.log("====================================");
    console.log("🚀 Project Atlas v1.0");
    console.log("Enterprise AI Test Platform");
    console.log("====================================");
    console.log("");

    const planning = new PlanningAgent();
    const execution = new ExecutionAgent();
    const healing = new HealingAgent();
    const reporting = new ReportingAgent();

    await planning.execute();

    console.log("");

    await execution.execute();

    console.log("");

    await healing.execute();

    console.log("");

    await reporting.execute();

    console.log("");

    console.log("🎉 Project Completed Successfully");

}

main();