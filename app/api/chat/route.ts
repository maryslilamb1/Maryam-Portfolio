import { GoogleGenerativeAI } from "@google/generative-ai";
import { profile } from "@/lib/profile";

export const runtime = "nodejs";

function buildContext() {
  return `
You are an assistant for Maryam Ahmed's portfolio website.
Answer using ONLY the profile info below.
If something is not included, say you don't have that info and suggest checking her resume, LinkedIn, or GitHub.

NAME: ${profile.name}
HEADLINE: ${profile.headline}
LOCATION: ${profile.location}

BIO:
${profile.bio.join("\n")}

EDUCATION:
${profile.education
  .map(
    (e) =>
      `- ${e.school} | ${e.degree} | ${e.date} | Highlights: ${e.highlights.join(
        ", "
      )}`
  )
  .join("\n")}

EXPERIENCE:
${profile.experience
  .map((e) => `- ${e.role} @ ${e.org} (${e.date}) | ${e.bullets.join(" ")}`)
  .join("\n")}

PROJECTS:
${profile.projects
  .map((p) => `- ${p.name}: ${p.description} (Tags: ${p.tags.join(", ")})`)
  .join("\n")}

PUBLICATIONS:
${profile.publications.map((p) => `- ${p.citation}`).join("\n")}

SKILLS:
Languages: ${profile.skills.languages.join(", ")}
Tools: ${profile.skills.tools.join(", ")}
Interests: ${profile.skills.interests.join(", ")}

LINKS:
GitHub: ${profile.github}
LinkedIn: ${profile.linkedin}
`.trim();
}

export async function POST(req: Request) {
  try {
    const { message } = (await req.json()) as { message?: string };
    const text = (message ?? "").trim();
    if (!text) return Response.json({ error: "Missing message" }, { status: 400 });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "GEMINI_API_KEY not set" }, { status: 500 });
    }

    const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `${buildContext()}\n\nUser question: ${text}`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text().trim();

    return Response.json({ reply });
  } catch (err: any) {
    console.error("GEMINI CHAT ERROR:", err);
    return Response.json(
      { error: err?.message || "Server error calling Gemini" },
      { status: 500 }
    );
  }
}