import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Code, Wallet, CheckCircle2 } from "lucide-react";
import {
  BackgroundGrid,
  BackgroundDots,
} from "@/components/ui/background-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative  overflow-hidden bg-white">
        {/* Aceternity Grid Background */}
        <BackgroundGrid className="opacity-50" />

        {/* Sparkles Effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-br from-zinc-200 via-zinc-100 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-zinc-200 via-zinc-100 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-36 relative z-10">
          <div className="text-center">
            {/* <Badge
              variant="secondary"
              className="mb-6 text-xs font-medium backdrop-blur-sm"
            >
              R402 Protocol
            </Badge> */}
            <h1 className="text-6xl font-bold tracking-tight text-black sm:text-8xl leading-[1.1] mb-8">
              Agent APIs
              <br />
              <span className="bg-linear-to-r from-black via-zinc-800 to-zinc-600 bg-clip-text text-transparent">
                Built-in Payments
              </span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-zinc-600 max-w-2xl mx-auto font-light">
              Build production agents on GPT, Claude, and DeepSeek with
              automatic R402 payments. Tool calling, streaming, and usage
              metering included.
            </p>
            <div className="mt-12 flex items-center justify-center gap-4">
              <code className="rounded-xl bg-black px-6 py-4 text-sm font-mono text-white shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm">
                npm install r402
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              {/* <Zap className="h-10 w-10 mb-2 text-black" /> */}
              <CardTitle>Models + Tool Calling</CardTitle>
              <CardDescription>
                Unified chat + tools for GPT, Claude, and DeepSeek
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Streaming chat/completions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Function calling (tools)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  JSON/structured outputs
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              {/* <Wallet className="h-10 w-10 mb-2 text-black" /> */}
              <CardTitle>R402 Payments</CardTitle>
              <CardDescription>
                Automatic pay‑per‑request with receipts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Usage metering per call
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Solana devnet & mainnet
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Transparent costs & receipts
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              {/* <Code className="h-10 w-10 mb-2 text-black" /> */}
              <CardTitle>Agent Primitives</CardTitle>
              <CardDescription>
                Typed SDK for chat, tools, and webhooks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Tool helpers + retries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Streaming & abortable requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  402 negotiation built‑in
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Start */}
      <div className="relative border-t border-zinc-200/60 bg-zinc-50/50 overflow-hidden">
        {/* Aceternity Dots Background */}
        <BackgroundDots className="opacity-30" />
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 relative">
          <h2 className="text-4xl font-bold tracking-tight text-black mb-12">
            Quick Start
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white font-semibold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Install Dependencies
                </h3>
                <pre className="rounded-xl bg-white border border-zinc-200/60 p-4 overflow-x-auto shadow-sm">
                  <code className="text-sm font-mono text-black">
                    npm install r402 axios dotenv
                  </code>
                </pre>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white font-semibold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Set Up Your Private Key
                </h3>
                <p className="text-sm text-zinc-600 mb-3">
                  Create a{" "}
                  <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-black">
                    .env
                  </code>{" "}
                  file with your Solana private key:
                </p>
                <pre className="rounded-xl bg-white border border-zinc-200/60 p-4 overflow-x-auto shadow-sm">
                  <code className="text-sm font-mono text-black">
                    PRIVATE_KEY=your_solana_private_key_here
                  </code>
                </pre>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white font-semibold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Create the SDK Client
                </h3>
                <pre className="rounded-xl bg-white border border-zinc-200/60 p-4 overflow-x-auto shadow-sm">
                  <code className="text-sm font-mono text-black">{`import { createSigner, r402 } from "r-402";

const signer = await createSigner("solana-devnet", privateKey);
const ai = new r402(signer);`}</code>
                </pre>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white font-semibold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Make Your First Request
                </h3>
                <pre className="rounded-xl bg-white border border-zinc-200/60 p-4 overflow-x-auto shadow-sm">
                  <code className="text-sm font-mono text-black">{`// Chat with tools
const response = await ai.chat({
  model: "claude-sonnet-4-0",
  messages: [{ role: "user", content: "Find coffee near Palo Alto" }],
  tools: [
    {
      name: "searchPlaces",
      description: "Local search",
      schema: {
        type: "object",
        properties: { q: { type: "string" } },
        required: ["q"]
      },
      handler: async ({ q }) => {
        return [{ name: "Coupa Cafe" }];
      }
    }
  ]
});

console.log(response.content);
console.log(response.usage);
console.log(response.payment);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Models */}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="text-4xl font-bold tracking-tight text-black mb-12">
          Available Models
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Unified Endpoint</CardTitle>
              <CardDescription>
                Use any model with a single interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="rounded-xl bg-zinc-50 p-4 overflow-x-auto border border-zinc-200/60">
                <code className="text-sm font-mono text-black">{`await ai.chat({
  model: "gpt-4o",
  messages: [...],
  tools: [...]
});

// Supported models:
// - gpt-4o, gpt-4-turbo
// - claude-sonnet-4-0
// - deepseek-chat`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Direct Endpoints</CardTitle>
              <CardDescription>Or use model-specific methods</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="rounded-xl bg-zinc-50 p-4 overflow-x-auto border border-zinc-200/60">
                <code className="text-sm font-mono text-black">{`// Direct access
await ai.gpt([...]);
await ai.claude([...]);
await ai.deepseek([...]);

// Convenience method
await ai.prompt(
  "model-name",
  "your prompt"
);`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How 402 Works */}
      <div className="relative border-t border-zinc-200/60 bg-zinc-50/50 overflow-hidden">
        {/* Aceternity Dots Background */}
        <BackgroundDots className="opacity-30" />
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 relative">
          <h2 className="text-4xl font-bold tracking-tight text-black mb-6">
            How R402 Payments Work
          </h2>
          <p className="text-lg text-zinc-600 mb-8 max-w-3xl">
            The SDK automatically handles payment negotiations using the R402
            protocol (HTTP 402 status code). Each request includes cryptographic
            payment proofs verified on the Solana blockchain.
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white font-bold text-lg mb-3">
                1
              </div>
              <h3 className="font-semibold text-black mb-2">Request</h3>
              <p className="text-sm text-zinc-600">
                Client sends AI request to server
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white font-bold text-lg mb-3">
                2
              </div>
              <h3 className="font-semibold text-black mb-2">402 Response</h3>
              <p className="text-sm text-zinc-600">
                Server returns payment details and cost
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white font-bold text-lg mb-3">
                3
              </div>
              <h3 className="font-semibold text-black mb-2">Sign Payment</h3>
              <p className="text-sm text-zinc-600">
                SDK signs transaction with your key
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white font-bold text-lg mb-3">
                4
              </div>
              <h3 className="font-semibold text-black mb-2">Get Response</h3>
              <p className="text-sm text-zinc-600">
                Server verifies and returns AI result
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-200/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm text-zinc-500 font-light">
            Built with R402 Protocol (HTTP 402 Payment Required) • Powered by
            Solana
          </p>
        </div>
      </div>
    </div>
  );
}
