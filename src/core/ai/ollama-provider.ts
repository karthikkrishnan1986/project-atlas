import axios from "axios";
import { AIProvider } from "./ai-provider";

export class OllamaProvider implements AIProvider {

    async generate(prompt: string): Promise<string> {

        const response = await axios.post(
            "http://localhost:11434/api/generate",
            {
                model: "qwen2.5:3b",
                prompt,
                stream: false
            }
        );

        console.log("======================");
        console.log("OLLAMA RAW RESPONSE");
        console.log("======================");
        console.log(response.data);

        return response.data.response;
    }

}