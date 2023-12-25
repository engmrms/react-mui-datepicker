import React, { PropsWithChildren, ReactElement } from "react";

const Choose = ({ children }: { children: ReactElement[] }) => {
  let conditionComp: ReactElement | null = null;
  let defualtComp: ReactElement | null = null;

  React.Children.forEach(children, child => {
    if (!conditionComp && child.type === When) {
      const { condition } = child.props;
      const conditionResult = Boolean(condition);

      if (conditionResult) {
        conditionComp = child;
      }
    }
    if (!defualtComp && child.type === Default) {
      defualtComp = child;
    }
  });

  return conditionComp ?? defualtComp ?? null;
};

const When = ({ children }: PropsWithChildren<{ condition: boolean }>) => children;
const Default = ({ children }: PropsWithChildren) => children;

Choose.When = When;
Choose.Default = Default;

export default Choose;
