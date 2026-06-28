import fs from "node:fs"

const results = JSON.parse(fs.readFileSync(".lint-results.json", "utf8"))

for (const result of results) {
  const messages = result.messages
    .filter(({ ruleId }) => ruleId === "@typescript-eslint/no-explicit-any")
    .sort((a, b) => b.line - a.line || b.column - a.column)

  if (messages.length === 0) continue

  let source = fs.readFileSync(result.filePath, "utf8")
  const lines = source.split(/(?<=\n)/)
  const offsets = []
  let offset = 0
  for (const line of lines) {
    offsets.push(offset)
    offset += line.length
  }

  for (const message of messages) {
    const lineStart = offsets[message.line - 1]
    const lineEnd = lineStart + lines[message.line - 1].length
    const expected = lineStart + message.column - 1
    const candidates = []
    for (let index = source.indexOf("unknown", lineStart); index >= 0 && index < lineEnd; index = source.indexOf("unknown", index + 1)) {
      candidates.push(index)
    }
    const start = candidates.sort((a, b) => Math.abs(a - expected) - Math.abs(b - expected))[0]
    if (start !== undefined) source = `${source.slice(0, start)}any${source.slice(start + 7)}`
  }

  fs.writeFileSync(result.filePath, source)
}
