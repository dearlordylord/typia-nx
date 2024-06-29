// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import typia, { tags } from "typia";

interface IMember {
  id: string & tags.Format<"uuid">;
  name: string;
  age: number &
    tags.Type<"uint32"> &
    tags.Minimum<20> &
    tags.ExclusiveMaximum<100>;
}

const member: IMember = typia.random<IMember>();
const check: boolean = typia.is(member);
const json: string = typia.json.stringify(member);
const binary: Uint8Array = typia.protobuf.encode(member);

console.log({
  member,
  check,
  json,
  binary,
});

export function App() {
  return (
    <div>
      {json}
    </div>
  );
}

export default App;
