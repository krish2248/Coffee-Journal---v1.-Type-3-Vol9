interface StarRatingProps {
  rating: number;
  max?: number;
  size?: string;
}

export default function StarRating({ rating, max = 5, size = 'text-lg' }: StarRatingProps) {
  return (
    <div className={`flex gap-0.5 ${size}`}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <span key={i} className={filled || half ? 'text-[var(--color-caramel)]' : 'text-[var(--color-coffee-700)] opacity-40'}>
            {filled ? '★' : half ? '★' : '☆'}
          </span>
        );
      })}
      <span className="text-sm ml-1 opacity-70 font-mono">{rating.toFixed(1)}</span>
    </div>
  );
}
