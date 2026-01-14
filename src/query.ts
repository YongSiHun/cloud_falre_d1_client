import cp from "child_process";

interface IQueryResult {
  query: string;
  result: string;
}

export default class D1Query {
  private wranglerCommand: string;

  constructor() {
    this.wranglerCommand = `wrangler d1 execute wip --remote --json --command "sql"`;
  }

  public executeQueries(queries: string[]): IQueryResult[] {
    this.validate(queries);

    const results: IQueryResult[] = [];

    for (let i = 0; i < queries.length; i += 1) {
      const query = queries[i];

      const commandResult = this.executeQuery(query);

      results.push({ query, result: commandResult });
    }

    return results;
  }

  public executeQuery(query: string) {
    const queryCommand = this.wranglerCommand.replace("sql", query);

    const commandResult = cp.execSync(queryCommand, {
      encoding: "utf8",
      stdio: "inherit",
    });

    return commandResult;
  }

  private validate(queries: string[]) {
    if (!queries?.length) {
      throw new Error("queries.json is empty");
    }
  }
}
