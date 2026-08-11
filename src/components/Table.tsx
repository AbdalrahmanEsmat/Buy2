import type { ReactNode } from 'react';

type TableProps = {
  children: ReactNode;
  className?: string;
  colSpan?: number;
};

function Table({ children, className }: TableProps) {
  return (
    <div className={className}>
      <table className="w-full">{children}</table>
    </div>
  );
}

function Header({ children, className }: TableProps) {
  return <thead className={className}>{children}</thead>;
}

function Column({ children, className }: TableProps) {
  return <th className={className}>{children}</th>;
}

function Body({ children, className }: TableProps) {
  return <tbody className={className}>{children}</tbody>;
}

function Row({ children, className }: TableProps) {
  return <tr className={className}>{children}</tr>;
}

function Cell({ children, className, colSpan }: TableProps) {
  return (
    <td className={className} colSpan={colSpan ?? 1}>
      {children}
    </td>
  );
}

function Footer({ children, className }: TableProps) {
  return <tfoot className={className}>{children}</tfoot>;
}

Table.Header = Header;
Table.Column = Column;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.Footer = Footer;

export default Table;
