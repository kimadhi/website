import Text from '@components/Text';
import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

type TableCellProps = PropsWithChildren<{
  className?: string;
}>;

const TableCell = ({ children, className }: TableCellProps) => (
  <div
    className={clsx(
      className,
      'flex min-h-52 items-center border-1 border-ui-dark-grey bg-ui-black p-12',
    )}
  >
    <Text style="m">{children}</Text>
  </div>
);

export default TableCell;
