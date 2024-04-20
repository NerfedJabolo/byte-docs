const snippets={"tree/node/static":"<code class='hljs'><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Node</span> {\n    <span class=\"hljs-comment\">// The common prefix of child nodes</span>\n    part;\n\n    <span class=\"hljs-comment\">// The value of the node to return on match</span>\n    store;\n\n    <span class=\"hljs-comment\">// Children nodes</span>\n    inert;\n\n    <span class=\"hljs-comment\">// A node to hold the URL parameter info</span>\n    params;\n\n    <span class=\"hljs-comment\">// The value to return on wildcard matches</span>\n    wildcardStore;\n}\n\n<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">ParamNode</span> {\n    <span class=\"hljs-comment\">// The value of the parametric node to return on match</span>\n    store;\n\n    <span class=\"hljs-comment\">// The next static node</span>\n    inert;\n\n    <span class=\"hljs-comment\">// The parameter name</span>\n    name;\n}\n</code>","tree/node/match-order":"<code class='hljs'>current -&gt; inerts -&gt; params -&gt; wildcard\n</code>"};for(const e of document.querySelectorAll('pre[data-snippet]'))e.innerHTML=snippets[e.dataset.snippet];