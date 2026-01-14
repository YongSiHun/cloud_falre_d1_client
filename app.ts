import { d1QueryInstance } from "./src";
import queries from "./queries.json";

/**
 * test
 */
function main() {
  d1QueryInstance.executeQueries(queries);
}

main();
