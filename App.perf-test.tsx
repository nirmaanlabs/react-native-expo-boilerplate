// ComponentUnderTest.perf-test.tsx
import { measurePerformance } from "reassure";

import { App } from "./App";

test("Simple test", async () => {
  await measurePerformance(<App />);
});
