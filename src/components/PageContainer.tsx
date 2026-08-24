type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({ children, className }: Props) {
  return (
    <main
      className={`flex-1 bg-white rounded-2xl px-8 py-16 ${className ?? ''}`}
    >
      {children}
    </main>
  );
}
