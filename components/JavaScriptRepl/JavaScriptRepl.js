import React, {useState, useEffect, useCallback} from "react"
import Repl from "./JavaScriptRepl.view"
import prettyFormat from "pretty-format"

// Forked from https://github.com/seveibar/react-repl
function generateREPL() {
  function replEval(script) {
    const parsedScript = script
      .trim()
      .replace(/^var /, "")
      .replace(/^let /, "")
      .replace(/^const /, "")
    return new Function(`return (${parsedScript})`)()
  }

  function execAndGetLine(execLine) {
    if (!execLine.trim()) {
      return {type: "output", value: 'Nothing to process. Empty command received.'}
    }
    try {
      const evalOutput = replEval(execLine)
      return {type: "output", value: prettyFormat(evalOutput)}
    } catch (e) {
      return {type: "error", value: e instanceof Error ? e.toString() : `Unknown error: ${e}`}
    }
  }

  function loadScope(expressions) {
    expressions.map(replEval)
  }

  function generateLinesFromStrings(expressions) {
    const lines = []
    for (const execLine of expressions) {
      lines.push({type: 'input', value: execLine})
      lines.push(execAndGetLine(execLine))
    }
    return lines
  }

  return {
    execAndGetLine,
    generateLinesFromStrings,
    loadScope
  }
}

export const JavaScriptRepl = ({
 title = 'REPL',
 loadToScope = [],
 init = []
}) => {
  const repl = generateREPL()
  const initializeLines = useCallback(() => {
    repl.loadScope(loadToScope)
    return repl.generateLinesFromStrings(init)
  }, [loadToScope, init, repl])
  const [lines, setLines] = useState(initializeLines())
  const onClear = () => setLines(initializeLines())
  const onSubmit = async (execLine) => {
    if (execLine.trim()) {
      repl.generateLinesFromStrings(loadToScope)
      setLines(
        lines
          .concat([{type: "input", value: execLine}])
          .concat([repl.execAndGetLine(execLine)])
      )
    }
  }

  useEffect(() => {
    (initializeLines)()
  }, [initializeLines])
  return (
    <Repl
      title={title}
      onSubmit={onSubmit}
      lines={lines}
      onClear={onClear}
    />
  )
}

export default JavaScriptRepl
