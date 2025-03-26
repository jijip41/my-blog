import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export function Code({ children }: Props) {
  return (
    <section className="code-block gap-0 rounded-lg border border-amber-950 pb-6 text-gray-800">
      <div className="flex items-center justify-between rounded-t-lg bg-amber-900 px-4 py-2 text-white">
        <span>Code</span>
      </div>
      <pre className="overflow-auto rounded-b-lg p-4">
        <code>{children}</code>
      </pre>
    </section>
  );
}

export default Code;
