# Top 50 AI CLI Tools for Linux

A practical reference guide covering the most popular AI-powered command-line tools as of 2026. Each entry includes a short summary, Linux installation steps, and where the tool produces the best results.

> **Note:** Most tools require an API key or a local model server (like Ollama). Always review a tool's permission model before letting it run shell commands on production systems.

---

## Table of Contents

1. [Coding Agents (Full-Stack)](#coding-agents-full-stack)
2. [Vendor-Specific Agents](#vendor-specific-agents)
3. [Git-Native & Pair Programming](#git-native--pair-programming)
4. [Autonomous & CI/CD Agents](#autonomous--cicd-agents)
5. [Shell & Productivity Assistants](#shell--productivity-assistants)
6. [Local Model Runtimes & Backends](#local-model-runtimes--backends)
7. [Prompt Frameworks & Lightweight Tools](#prompt-frameworks--lightweight-tools)
8. [Multi-Agent & Automation Frameworks](#multi-agent--automation-frameworks)
9. [Quick Comparison Table](#quick-comparison-table)

---

## Coding Agents (Full-Stack)

### 1. OpenCode  => Approved

**Summary:** The most popular open-source terminal coding agent (~165k GitHub stars). Provider-agnostic TUI with `build` and `plan` agents, LSP support for 20+ languages, and MCP integration.

**Linux Install:**
```bash
# Recommended — official install script
curl -fsSL https://opencode.ai/install | bash

# Alternative — npm
npm install -g opencode-ai
```

**Best Results:** General-purpose coding, multi-provider workflows, local models via Ollama, and teams that want an open-source default without vendor lock-in.

---

### 2. OpenAI Codex CLI  => Approved

**Summary:** OpenAI's official Apache-2.0 coding agent rewritten in Rust. Runs shell commands in a sandboxed container by default and supports local OSS models via the `--oss` flag.

**Linux Install:**
```bash
npm install -g @openai/codex

# Or download the binary from GitHub releases (openai/codex)
```

**Best Results:** OpenAI/ChatGPT users, safe unattended automation, sandboxed execution on shared machines, and CI pipelines where command isolation matters.

---

### 3. Claude Code  => Approved

**Summary:** Anthropic's official terminal agent for deep multi-file coding. Uses Claude Opus/Sonnet models with strong repo understanding, tool use, and git integration.

**Linux Install:**
```bash
# Recommended — native binary
curl -fsSL https://claude.ai/install.sh | bash

# Alternative — npm (requires Node.js 18+)
npm install -g @anthropic-ai/claude-code
```

**Best Results:** Complex refactors, large codebases, architecture decisions, and teams already on Claude Pro/Max or Anthropic API.

---

### 4. Cline  => Approved

**Summary:** Model-agnostic coding agent available as VS Code extension, standalone CLI, and SDK. Supports 30+ providers, parallel agents, and Kanban task boards.

**Linux Install:**
```bash
npm install -g cline
```

**Best Results:** Teams wanting one agent across IDE + CLI + SDK, parallel multi-agent workflows, and integrations with Slack/Linear.

---

### 5. Pi

**Summary:** Minimal, hackable coding harness from Armin Ronacher (Flask/Jinja2 author) and Mario Zechner. Uses a sub-1,000-token system prompt with "lazy skills" for token efficiency.

**Linux Install:**
```bash
npm install -g @mariozechner/pi-coding-agent
```

**Best Results:** Developers building custom agents, token-cost-sensitive workflows, and anyone who wants a small, readable codebase to fork and extend.

---

### 6. Crush  => Approved

**Summary:** Charm's gorgeous Bubble Tea TUI coding agent. Multi-model with mid-session switching, LSP support, and MCP integration. Runs on Linux, BSD, and even Android.

**Linux Install:**
```bash
# Debian/Ubuntu (Charm APT repo)
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://repo.charm.sh/apt/gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/charm.gpg
echo "deb [signed-by=/etc/apt/keyrings/charm.gpg] https://repo.charm.sh/apt/ * *" | sudo tee /etc/apt/sources.list.d/charm.list
sudo apt update && sudo apt install crush

# npm
npm install -g @charmland/crush

# Go
go install github.com/charmbracelet/crush@latest
```

**Best Results:** Terminal-first developers who care about UI polish, mid-session model switching, and cross-platform use (including mobile/BSD).

---

### 7. Kilo Code  => Approved

**Summary:** Active fork of the archived Roo Code project, built on OpenCode. Offers a large free model selection and polished CLI experience.

**Linux Install:**
```bash
npm install -g @kilocode/cli
```

**Best Results:** Former Roo Code users, budget-conscious developers, and multi-model experimentation without heavy setup.

---

### 8. Qwen Code

**Summary:** Alibaba's terminal coding agent — an open fork of Google's Gemini CLI, tuned for Qwen-Coder open-weight models.

**Linux Install:**
```bash
npm install -g @qwen-code/qwen-code@latest
```

**Best Results:** Open-weight model users, Qwen-Coder workflows, and teams migrating away from the retiring Gemini CLI.

---

### 9. Hawk => Approved

**Summary:** Model-agnostic Go coding agent with 40+ built-in tools, zero CGO (single static binary), MCP support, and SSH/container-friendly design.

**Linux Install:**
```bash
curl -fsSL https://raw.githubusercontent.com/GrayCodeAI/hawk/main/install.sh | sh

# Or via Go
go install github.com/GrayCodeAI/hawk@latest
```

**Best Results:** Remote servers over SSH, containerized environments, minimal binary deployments, and multi-model setups via Eyrie.

---

### 10. Claurst

**Summary:** Open-source, multi-provider Rust TUI coding agent with 30+ AI providers, plugin system, chat forking, and memory consolidation.

**Linux Install:**
```bash
# Download latest release (x86_64 or aarch64)
curl -LO https://github.com/kuberwastaken/claurst/releases/latest/download/claurst-linux-x86_64.tar.gz
tar -xzf claurst-linux-x86_64.tar.gz
sudo mv claurst /usr/local/bin/

# Or build from source (requires Rust)
cargo install --git https://github.com/kuberwastaken/claurst
```

**Best Results:** Rust enthusiasts, multi-provider flexibility, and developers wanting a feature-rich TUI pair programmer.

---

### 11. Forge

**Summary:** Independent Rust harness with three specialized agents: `forge` (implements), `sage` (read-only research), and `muse` (plans). Supports 300+ models.

**Linux Install:**
```bash
curl -fsSL https://forgecode.dev/cli | sh
```

**Best Results:** Bring-your-own-key workflows, role-separated agent tasks, and developers who want clean agent specialization.

---

### 12. Cursor CLI

**Summary:** Cursor's official terminal agent. Access frontier models (Claude, GPT, Gemini, Grok), push sessions to Cloud Agents, and integrate with GitHub Actions.

**Linux Install:**
```bash
curl https://cursor.com/install -fsS | bash

# Verify
cursor-agent --version
```

**Best Results:** Cursor ecosystem users, cloud handoff workflows, CI/CD automation, and teams already paying for Cursor subscriptions.

---

## Vendor-Specific Agents

### 13. Gemini CLI

**Summary:** Google's open-source terminal agent for Gemini models. Offers a generous free tier (1,000 req/day). **Note:** Being retired June 2026 in favor of closed-source Antigravity CLI.

**Linux Install:**
```bash
npm install -g @google/gemini-cli

# Or via Homebrew on Linux
brew install gemini-cli
```

**Best Results:** Google AI Pro/Ultra subscribers, Gemini-native workflows, and MCP-heavy integrations (migrate to Qwen Code for open-source continuity).

---

### 14. GitHub Copilot CLI

**Summary:** GitHub's official terminal agent. Integrates with GitHub accounts, offers inline suggestions, and supports agentic coding with premium request limits on free tier.

**Linux Install:**
```bash
# npm (requires Node.js 22+)
npm install -g @github/copilot

# Or install script
curl -fsSL https://gh.io/copilot-install | bash

# Or Homebrew
brew install copilot-cli
```

**Best Results:** GitHub-centric workflows, open-source maintainers with Copilot subscriptions, and PR/issue-aware coding tasks.

---

### 15. Amazon Q Developer CLI

**Summary:** AWS-native terminal agent (`q` command) with Claude models on Bedrock, AWS CLI integration, ghost-text autocompletion, and MCP support.

**Linux Install:**
```bash
# Debian/Ubuntu
curl --proto '=https' --tlsv1.2 -sSf \
  https://desktop-release.q.us-east-1.amazonaws.com/latest/amazon-q.deb -o /tmp/amazon-q.deb
sudo apt install -y /tmp/amazon-q.deb

# Fedora/RHEL — download .rpm from AWS release URL
```

**Best Results:** AWS infrastructure work, IAM/CloudWatch/Lambda debugging, and teams deep in the AWS ecosystem.

---

### 16. Kimi CLI (Kimi Code)

**Summary:** Moonshot AI's terminal coding agent for reading/editing code, running commands, and understanding large projects with Kimi models.

**Linux Install:**
```bash
# Check latest install method at https://kimi.com/code
curl -fsSL https://code.kimi.com/install.sh | bash
```

**Best Results:** Long-context tasks, Chinese/English bilingual projects, and Kimi K2 model users.

---

### 17. Sourcegraph Amp

**Summary:** Sourcegraph's terminal coding agent with "Deep mode" for thorough codebase analysis and strong enterprise search integration.

**Linux Install:**
```bash
curl -fsSL https://ampcode.com/install.sh | bash
```

**Best Results:** Large monorepos, enterprise code search, and teams already using Sourcegraph for navigation.

---

### 18. Sourcegraph Cody CLI

**Summary:** Sourcegraph's AI coding assistant as a CLI tool. Leverages codebase context and Sourcegraph's indexing for accurate answers.

**Linux Install:**
```bash
npm install -g @sourcegraph/cody
```

**Best Results:** Sourcegraph-hosted codebases, enterprise repos with rich indexing, and context-heavy Q&A about existing code.

---

## Git-Native & Pair Programming

### 19. Aider

**Summary:** The original AI pair programmer. Builds tree-sitter repomaps, applies coordinated multi-file edits, and auto-commits each change with sensible messages.

**Linux Install:**
```bash
pipx install aider-chat

# Or with pip in a venv
python3 -m venv ~/.aider-venv && source ~/.aider-venv/bin/activate
pip install aider-chat
```

**Best Results:** Git-centric workflows, surgical multi-file edits, large existing codebases (100+ languages), and developers who want clean commit history.

---

### 20. Continue (`cn`)

**Summary:** Open-source terminal agent from the Continue team. Runs as TUI or headless (`cn -p "prompt"`) with strong local model support and CI check workflows.

**Linux Install:**
```bash
npm install -g @continuedev/cli

# Run as
cn
```

**Best Results:** CI/CD PR checks (`.continue/checks/`), headless automation in git hooks, and per-role model configuration.

---

### 21. Plandex

**Summary:** Agent for very large multi-step tasks with up to 2M tokens of context and diff-review sandbox. **Note:** Maintenance mode since late 2025 — self-host only.

**Linux Install:**
```bash
curl -sL https://plandex.ai/install.sh | bash
```

**Best Results:** Massive refactors needing 1M+ token context, planning-heavy tasks, and self-hosted enterprise setups (avoid for new projects).

---

## Autonomous & CI/CD Agents

### 22. OpenHands

**Summary:** Formerly OpenDevin. The most autonomous option — runs agents in sandboxed runtimes that browse the web, execute code, and edit files end-to-end. Strong headless/CI story.

**Linux Install:**
```bash
# Requires Python 3.12 and uv
curl -LsSf https://astral.sh/uv/install.sh | sh
uvx openhands

# Or pip
pip install openhands
```

**Best Results:** Fully autonomous bug fixing, CI/CD pipelines (`openhands -t "fix tests"`), sandboxed multi-step runs, and 100+ providers via LiteLLM.

---

### 23. Goose

**Summary:** Linux Foundation-governed general-purpose agent (not just code). Rust single binary with 70+ MCP extensions for Jira, Slack, databases, and more.

**Linux Install:**
```bash
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash
```

**Best Results:** Cross-tool automation (code + ops + research), MCP-heavy workflows, and teams wanting vendor-neutral foundation governance.

---

### 24. AISH (AI Shell)

**Summary:** AI-native interactive shell with full PTY support. Runs interactive programs (vim, ssh, top) while embedding AI command generation and risk-graded confirmation flows.

**Linux Install:**
```bash
curl -fsSL https://www.aishell.ai/repo/install.sh | bash
```

**Best Results:** DevOps/system administration, interactive terminal workflows, and users who want AI embedded directly in their shell (not a separate agent).

---

### 25. Warp Terminal

**Summary:** Agentic terminal (not a single CLI agent). Open-sourced client (AGPL-3.0) that runs Claude Code, Codex, and other agents in a unified terminal UI.

**Linux Install:**
```bash
# Download .deb or .rpm from https://www.warp.dev/download
# Debian/Ubuntu
wget -O /tmp/warp.deb "https://app.warp.dev/download?package=deb"
sudo apt install /tmp/warp.deb
```

**Best Results:** Developers wanting a modern terminal UI with built-in AI blocks, workflow sharing, and multi-agent switching in one interface.

---

## Shell & Productivity Assistants

### 26. Shell-GPT (`sgpt`)

**Summary:** Lightweight CLI for generating shell commands, code snippets, and documentation from natural language. Supports OpenAI, Azure, and local Ollama models.

**Linux Install:**
```bash
pip install shell-gpt
# Or
pipx install shell-gpt

# Enable shell integration (Ctrl+L hotkey)
sgpt --install-integration
```

**Best Results:** Quick one-off shell commands, explaining CLI flags, generating scripts, and daily terminal productivity (not full repo editing).

---

### 27. LLM (Simon Willison)

**Summary:** Versatile CLI and Python library for chatting with  dozens of LLMs via plugins. Supports embeddings, conversation logging, and local models.

**Linux Install:**
```bash
pip install llm
# Or isolated install
pipx install llm

# Add Ollama support
llm install llm-ollama
```

**Best Results:** Prompt experimentation, scripting LLM calls, embeddings/search, and plugin-based multi-model access from the terminal.

---

### 28. Fabric

**Summary:** Crowdsourced AI prompt framework with 200+ reusable patterns ("stitches") for summarization, analysis, threat modeling, and content creation.

**Linux Install:**
```bash
curl -fsSL https://raw.githubusercontent.com/danielmiessler/fabric/main/scripts/installer/install.sh | bash

# Configure
fabric --setup

# Or via Go
go install github.com/danielmiessler/fabric/cmd/fabric@latest
```

**Best Results:** Structured AI workflows (summarize, extract, analyze), content creation pipelines, and reusable prompt patterns — not coding-specific.

---

### 29. Open Interpreter

**Summary:** Natural-language interface that lets LLMs run code, control your computer, and execute shell commands locally. LiteLLM-backed for multi-provider support.

**Linux Install:**
```bash
pip install open-interpreter

# Run
interpreter
```

**Best Results:** Local automation, data analysis scripts, file manipulation, and experimental "AI controls my machine" workflows (use with caution).

---

### 30. gptme

**Summary:** Minimal Python CLI agent that uses the shell, runs Python, and edits files. Lightweight and scriptable with local model support.

**Linux Install:**
```bash
pipx install gptme
```

**Best Results:** Simple scripting, local model workflows, and developers who want a small Python-based agent without heavy dependencies.

---

### 31. Mentat

**Summary:** CLI coding assistant that makes coordinated changes across a git repository based on natural language instructions.

**Linux Install:**
```bash
python3 -m venv .venv && source .venv/bin/activate
pip install mentat

# Set API key
export OPENAI_API_KEY=your-key-here
mentat
```

**Best Results:** Straightforward repo editing tasks, quick prototypes, and teams comfortable with Python virtualenv workflows.

---

### 32. Bernstein

**Summary:** Multi-agent orchestrator that coordinates coding agents (Aider, OpenHands, etc.) with policy enforcement and audit trails.

**Linux Install:**
```bash
curl -fsSL https://bernstein.run/install.sh | sh

# Or
pipx install bernstein
```

**Best Results:** Enterprise agent governance, orchestrating multiple CLI agents, and compliance-heavy environments needing audit logs.

---

## Local Model Runtimes & Backends

### 33. Ollama

**Summary:** The standard local LLM runtime for Linux. Pull and run open-weight models (Llama, Qwen, DeepSeek, Mistral) with a simple CLI. Powers most local-model agent setups.

**Linux Install:**
```bash
curl -fsSL https://ollama.com/install.sh | sh

# Pull a coding model
ollama pull qwen2.5-coder:7b

# Verify
ollama -v
```

**Best Results:** Private/offline coding, air-gapped environments, pairing with Aider/OpenCode/Goose for zero API cost, and GPU-accelerated local inference.

---

### 34. llama.cpp (`llama-cli`)

**Summary:** C/C++ inference engine for running LLMs locally with minimal dependencies. High performance on CPU and GPU.

**Linux Install:**
```bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp && cmake -B build && cmake --build build --config Release

# Binary at ./build/bin/llama-cli
sudo cp build/bin/llama-cli /usr/local/bin/
```

**Best Results:** Maximum performance local inference, embedded/edge devices, and custom model deployment without a server.

---

### 35. vLLM

**Summary:** High-throughput LLM serving engine with OpenAI-compatible API. Ideal as a backend for CLI agents needing fast local inference.

**Linux Install:**
```bash
pip install vllm

# Start OpenAI-compatible server
python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen2.5-Coder-7B-Instruct
```

**Best Results:** Team/local server setups, high-concurrency agent workloads, and OpenAI-compatible endpoints for any CLI agent.

---

### 36. LM Studio CLI (`lms`)

**Summary:** Desktop app with CLI for downloading and serving local models via an OpenAI-compatible API on localhost.

**Linux Install:**
```bash
# Download AppImage from https://lmstudio.ai
chmod +x LM-Studio-*.AppImage
./LM-Studio-*.AppImage

# CLI available after install
lms server start
```

**Best Results:** GUI-first users who want local models, easy model browsing/downloading, and OpenAI-compatible endpoints for CLI agents.

---

## Prompt Frameworks & Lightweight Tools

### 37. LiteLLM Proxy CLI

**Summary:** Unified API gateway for 100+ LLM providers. Route any CLI agent through one endpoint with cost tracking, rate limits, and fallbacks.

**Linux Install:**
```bash
pip install litellm

# Start proxy
litellm --model gpt-4o
```

**Best Results:** Multi-provider routing, cost control across agents, enterprise key management, and standardizing LLM access for teams.

---

### 38. LangChain CLI

**Summary:** CLI for scaffolding, deploying, and managing LangChain applications and agent templates.

**Linux Install:**
```bash
pip install langchain-cli

langchain --help
```

**Best Results:** Building LangChain-based agent apps, template scaffolding, and LangServe deployments — more framework than daily coding agent.

---

### 39. Tabby (Self-Hosted Copilot)

**Summary:** Self-hosted AI coding assistant with a CLI/server component. Full control over models and data — no code leaves your infrastructure.

**Linux Install:**
```bash
# Docker (recommended)
docker run -d --name tabby -p 8080:8080 -v ~/.tabby:/data tabbyml/tabby

# Or native binary from GitHub releases (TabbyML/tabby)
curl -LO https://github.com/TabbyML/tabby/releases/latest/download/tabby_x86_64-unknown-linux-gnu
chmod +x tabby_x86_64-unknown-linux-gnu
sudo mv tabby_x86_64-unknown-linux-gnu /usr/local/bin/tabby
```

**Best Results:** Self-hosted enterprise copilot, air-gapped teams, and organizations needing full data sovereignty.

---

### 40. Bloop

**Summary:** AI-powered natural language search for code repositories. Ask questions about your codebase in plain English with semantic + regex hybrid search.

**Linux Install:**
```bash
# Download from GitHub releases (BloopAI/bloop)
curl -LO https://github.com/BloopAI/bloop/releases/latest/download/bloop-x86_64-unknown-linux-gnu.tar.gz
tar -xzf bloop-x86_64-unknown-linux-gnu.tar.gz
sudo mv bloop /usr/local/bin/
```

**Best Results:** Codebase exploration, "where is X implemented?" queries, onboarding to unfamiliar repos, and semantic code search.

---

### 41. Butterfish

**Summary:** Embeds ChatGPT directly in your shell for quick access. Simple agentic capabilities for command generation and explanation.

**Linux Install:**
```bash
pip install butterfish

# Or follow instructions at https://butterfi.sh
```

**Best Results:** Quick shell Q&A, lightweight command help, and developers wanting ChatGPT in-terminal without a full coding agent.

---

### 42. Shell-AI

**Summary:** LangChain-powered CLI that generates and optionally runs shell commands from natural language descriptions.

**Linux Install:**
```bash
pip install shell-ai

# Or from GitHub
pip install git+https://github.com/ricklamers/shell-ai.git
```

**Best Results:** Natural-language-to-bash translation, learning shell syntax, and safe command drafting before execution.

---

### 43. Codeium CLI (Windsurf)

**Summary:** Free AI coding assistant CLI from the Codeium/Windsurf team. Offers autocomplete and chat for terminal-based coding.

**Linux Install:**
```bash
curl -fsSL https://codeium.com/install | sh

# Or via npm if available
npm install -g @codeium/cli
```

**Best Results:** Free-tier coding assistance, Windsurf ecosystem users, and lightweight autocomplete in the terminal.

---

### 44. Tabnine CLI

**Summary:** AI code completion and chat tool with enterprise privacy options and on-prem deployment support.

**Linux Install:**
```bash
# Install Tabnine extension binary — check https://www.tabnine.com/install
curl -fsSL https://update.tabnine.com/latest/linux-x64/tabnine -o /usr/local/bin/tabnine
chmod +x /usr/local/bin/tabnine
```

**Best Results:** Enterprise teams with privacy requirements, on-prem AI deployments, and IDE/CLI completion workflows.

---

### 45. AgentTrace

**Summary:** Observability tool that traces and compares AI coding agent sessions across Claude Code, Codex, Gemini CLI, and Cursor — tracking cost, latency, and cache usage.

**Linux Install:**
```bash
pip install agenttrace

# Or
pipx install agenttrace
```

**Best Results:** Comparing agent performance, cost optimization, debugging agent behavior, and teams running multiple CLI agents.

---

## Multi-Agent & Automation Frameworks

### 46. MetaGPT

**Summary:** Multi-agent framework that simulates a software company (PM, architect, engineer) to generate full projects from a one-line requirement.

**Linux Install:**
```bash
pip install metagpt

# Initialize
metagpt --init-config
```

**Best Results:** Greenfield project generation, prototyping entire apps from specs, and research into multi-agent software engineering.

---

### 47. CrewAI

**Summary:** Framework for orchestrating role-playing AI agents that collaborate on tasks. CLI tools for running and managing agent crews.

**Linux Install:**
```bash
pip install crewai crewai-tools

# Verify
crewai --help
```

**Best Results:** Multi-agent task pipelines, research automation, content workflows, and custom agent team orchestration.

---

### 48. Auto-GPT

**Summary:** Pioneer autonomous AI agent that breaks goals into sub-tasks and executes them iteratively. Includes CLI interface for running agents.

**Linux Install:**
```bash
git clone https://github.com/Significant-Gravitas/Auto-GPT.git
cd Auto-GPT
pip install -r requirements.txt

# Run
python -m autogpt
```

**Best Results:** Experimental autonomous workflows, research tasks, and learning how agent loops work (less suited for production coding).

---

### 49. GPT Engineer

**Summary:** CLI tool that generates entire codebases from a prompt. Focuses on bootstrapping new projects rather than editing existing repos.

**Linux Install:**
```bash
pip install gpt-engineer

# Run in a new directory
gpt-engineer
```

**Best Results:** Starting new projects from scratch, rapid prototyping, and generating boilerplate applications from descriptions.

---

### 50. Sweep AI

**Summary:** CLI/GitHub bot that turns GitHub issues into pull requests. Runs as a CLI for local issue-to-PR workflows.

**Linux Install:**
```bash
pip install sweepai

# Configure with GitHub token
export GITHUB_TOKEN=your-token
sweep
```

**Best Results:** GitHub issue automation, turning bug reports into PRs, and open-source maintainers wanting automated contributions.

---

## Quick Comparison Table

| # | Tool | Type | License | Local Models | Best For |
|---|------|------|---------|--------------|----------|
| 1 | OpenCode | Coding Agent | MIT | Yes (Ollama) | Default open-source pick |
| 2 | Codex CLI | Coding Agent | Apache-2.0 | Yes (`--oss`) | OpenAI + sandboxed runs |
| 3 | Claude Code | Coding Agent | Proprietary | No | Deep multi-file refactors |
| 4 | Cline | Coding Agent | Apache-2.0 | Yes | IDE + CLI + SDK unified |
| 5 | Pi | Coding Harness | MIT | Yes | Hackable, token-efficient |
| 6 | Crush | Coding Agent | FSL→MIT | Yes | Best terminal UI |
| 7 | Kilo Code | Coding Agent | MIT | Yes | Roo Code migration |
| 8 | Qwen Code | Coding Agent | Apache-2.0 | Yes | Open-weight Qwen models |
| 9 | Hawk | Coding Agent | Open | Yes | SSH/remote servers |
| 10 | Claurst | Coding Agent | GPL | Yes | Multi-provider Rust TUI |
| 11 | Forge | Coding Agent | Apache-2.0 | Yes | 3-agent specialization |
| 12 | Cursor CLI | Coding Agent | Proprietary | Limited | Cursor cloud ecosystem |
| 13 | Gemini CLI | Coding Agent | Apache-2.0 | Limited | Google Gemini (retiring) |
| 14 | Copilot CLI | Coding Agent | Proprietary | No | GitHub-native workflows |
| 15 | Amazon Q CLI | Coding Agent | Proprietary | No | AWS infrastructure |
| 16 | Kimi CLI | Coding Agent | Proprietary | No | Long-context Kimi models |
| 17 | Sourcegraph Amp | Coding Agent | Proprietary | No | Enterprise monorepos |
| 18 | Cody CLI | Coding Agent | Proprietary | No | Sourcegraph indexing |
| 19 | Aider | Pair Programming | Apache-2.0 | Yes | Git-native edits |
| 20 | Continue (`cn`) | Coding Agent | Apache-2.0 | Yes | CI PR checks |
| 21 | Plandex | Coding Agent | MIT | Yes | 2M token context (legacy) |
| 22 | OpenHands | Autonomous Agent | MIT | Yes | CI/CD autonomous runs |
| 23 | Goose | General Agent | Apache-2.0 | Yes | MCP automation |
| 24 | AISH | AI Shell | Open | Yes | DevOps/system admin |
| 25 | Warp | Terminal + Agents | AGPL-3.0 | Via agents | Modern terminal UI |
| 26 | Shell-GPT | Shell Assistant | MIT | Yes (Ollama) | Quick shell commands |
| 27 | LLM | LLM CLI | Apache-2.0 | Yes (plugins) | Prompt scripting |
| 28 | Fabric | Prompt Framework | MIT | Yes | Reusable AI patterns |
| 29 | Open Interpreter | Automation | Open | Yes | Local computer control |
| 30 | gptme | Lightweight Agent | MIT | Yes | Simple Python agent |
| 31 | Mentat | Coding Assistant | Apache-2.0 | Yes | Basic repo editing |
| 32 | Bernstein | Orchestrator | Open | Via agents | Multi-agent governance |
| 33 | Ollama | Model Runtime | MIT | N/A (is the backend) | Local/private inference |
| 34 | llama.cpp | Inference Engine | MIT | N/A | High-perf local inference |
| 35 | vLLM | Model Server | Apache-2.0 | N/A | Team model serving |
| 36 | LM Studio | Model Server | Proprietary | N/A | GUI + local API |
| 37 | LiteLLM | API Gateway | MIT | Yes | Multi-provider routing |
| 38 | LangChain CLI | Framework | MIT | Yes | LangChain app scaffolding |
| 39 | Tabby | Self-Hosted Copilot | Apache-2.0 | Yes | On-prem code assistant |
| 40 | Bloop | Code Search | Open | Yes | Semantic codebase search |
| 41 | Butterfish | Shell Assistant | Open | No | Quick ChatGPT in shell |
| 42 | Shell-AI | Shell Assistant | Open | Yes | NL → bash commands |
| 43 | Codeium CLI | Code Assistant | Proprietary | No | Free-tier completion |
| 44 | Tabnine CLI | Code Assistant | Proprietary | On-prem option | Enterprise privacy |
| 45 | AgentTrace | Observability | Open | N/A | Agent cost/perf tracking |
| 46 | MetaGPT | Multi-Agent | MIT | Yes | Full project generation |
| 47 | CrewAI | Multi-Agent | MIT | Yes | Agent team orchestration |
| 48 | Auto-GPT | Autonomous Agent | MIT | Yes | Experimental autonomy |
| 49 | GPT Engineer | Code Generator | MIT | No | New project bootstrapping |
| 50 | Sweep AI | Issue → PR | Open | No | GitHub issue automation |

---

## How to Choose

| Your Goal | Recommended Tools |
|-----------|-------------------|
| Best all-around open-source agent | **OpenCode**, **Pi**, **Crush** |
| Best for deep coding quality | **Claude Code**, **Codex CLI**, **Aider** |
| Best for Git workflows | **Aider**, **Continue** |
| Best for CI/CD automation | **OpenHands**, **Continue**, **Codex CLI** |
| Best for AWS/cloud infra | **Amazon Q CLI**, **Goose** (with MCP) |
| Best for local/private models | **Ollama** + **OpenCode** / **Aider** / **Goose** |
| Best for shell productivity | **Shell-GPT**, **Fabric**, **LLM** |
| Best for quick commands | **Shell-GPT**, **Shell-AI**, **AISH** |
| Best for enterprise/search | **Sourcegraph Amp**, **Cody CLI**, **Tabby** |
| Best for multi-agent orchestration | **CrewAI**, **Bernstein**, **MetaGPT** |

---

## Prerequisites (Common Across Tools)

Most tools need one or more of the following on Linux:

```bash
# Node.js 18+ (for npm-based tools)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Python 3.10+ with pipx (for Python-based tools)
sudo apt install python3-pip python3-venv
pip install pipx && pipx ensurepath

# Go 1.21+ (for Go-based tools)
sudo apt install golang-go

# Rust (for Rust-based tools)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# uv (for OpenHands and modern Python tools)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

---

*Last updated: May 2026. Tool availability, pricing, and install methods change frequently — always check official documentation before installing.*
