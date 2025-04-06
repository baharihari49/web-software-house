import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    position: string;
    quote: string;
    image: string;
    rating: number;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    return stars;
  };

  return (
    <Card className="testimonial-card bg-gray-50 shadow-md h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {renderStars(testimonial.rating)}
          </div>
          <span className="text-gray-600">{testimonial.rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-600 mb-6 italic">
         {`"${testimonial.quote}"`}
        </p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              // Fallback untuk dummy image jika file tidak tersedia
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/48x48?text=${testimonial.name.charAt(0)}`;
              }}
            />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}