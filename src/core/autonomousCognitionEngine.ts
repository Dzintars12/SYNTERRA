import { runCreationAssistant } from "./creationAssistantEngine";
import { listSemanticEvolutionEvents } from "./semanticEvolutionEngine";

export type AutonomousCognitionMode =
  | "semantic_observation"
  | "memory_synthesis"
  | "project_insight"
  | "civilization_analysis";

export interface AutonomousCognitionTask {
  id: string;
  mode: AutonomousCognitionMode;
  objective: string;
  status: "queued" | "running" | "completed" | "failed";
  createdAt: string;
  completedAt?: string;
}

export interface AutonomousCognitionResult {
  taskId: string;
  mode: AutonomousCognitionMode;
  insight: string;
  relatedSignals: number;
  generatedAt: string;
}

const cognitionTasks = new Map<string, AutonomousCognitionTask>();
const cognitionResults = new Map<string, AutonomousCognitionResult>();

export async function queueAutonomousCognitionTask(
  task: AutonomousCognitionTask
): Promise<void> {
  cognitionTasks.set(task.id, task);
}

export async function runAutonomousCognitionTask(
  task: AutonomousCognitionTask
): Promise<AutonomousCognitionResult> {
  const evolutionEvents = await listSemanticEvolutionEvents();

  const assistantResult = await runCreationAssistant({
    userId: "system",
    language: "en",
    mode: "semantic_summary",
    prompt: [
      "Analyze SYNTERRA civilization memory autonomously.",
      `Cognition mode: ${task.mode}`,
      `Objective: ${task.objective}`,
      `Available evolution events: ${evolutionEvents.length}`,
    ].join("\n"),
  });

  const result: AutonomousCognitionResult = {
    taskId: task.id,
    mode: task.mode,
    insight: assistantResult.response,
    relatedSignals: evolutionEvents.length,
    generatedAt: new Date().toISOString(),
  };

  cognitionResults.set(task.id, result);

  cognitionTasks.set(task.id, {
    ...task,
    status: "completed",
    completedAt: result.generatedAt,
  });

  return result;
}

export async function listAutonomousCognitionTasks(): Promise<
  AutonomousCognitionTask[]
> {
  return Array.from(cognitionTasks.values());
}

export async function listAutonomousCognitionResults(): Promise<
  AutonomousCognitionResult[]
> {
  return Array.from(cognitionResults.values());
}
