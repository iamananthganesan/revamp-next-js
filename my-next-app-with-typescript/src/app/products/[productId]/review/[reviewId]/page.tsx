export default async function ReviewById({
  params,
}: {
  params: Promise<{ productId: string, reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Product id {productId} review with {reviewId}
    </h1>
  );
}
