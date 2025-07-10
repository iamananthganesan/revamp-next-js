export default async function ProductsById({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <h1>ProductsById {productId}</h1>;
}
