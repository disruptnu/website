export default function ConsultingBenefitCard({ header, img, alt, description }) {
  return (
    <div className="border border-gray-200 rounded-card p-6 text-center">
      <h3 className="text-xl font-bold text-text-primary mb-4">{header}</h3>
      <div className="flex justify-center mb-4">
        <img className="w-32 h-32 object-cover rounded-full" src={img} alt={alt} loading="lazy" />
      </div>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}
