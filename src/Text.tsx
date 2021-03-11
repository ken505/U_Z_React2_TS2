import { VFC } from "react";
// VC は Children を暗黙的に受け取る。 VFC は React18 になるまでの暫定対応らしい。

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>Text</p>;
};
