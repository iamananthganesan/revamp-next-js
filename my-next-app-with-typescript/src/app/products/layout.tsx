export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Featured Products </h2>
      {children}
    </div>
  );
}
