export const ProductPrice = ({ price }: { price: number }) => {
  return (
    <span className="text-primary font-bold text-lg leading-8">
      {price} تومان
    </span>
  );
};
