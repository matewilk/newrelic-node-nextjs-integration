const getNRBrowserAgent = () => {
  let browserTimingHeader;

  const newrelic = require("newrelic");
  browserTimingHeader = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
  });

  return browserTimingHeader;
};

export const NewRelicSnippet = () => {
  return <script dangerouslySetInnerHTML={{ __html: getNRBrowserAgent() }} />;
};
