export default function ConsultingBenefitCard({ header, img, alt, description }) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold text-white mb-4">{header}</h3>
      <div className="flex justify-center mb-4">
        <img className="w-32 h-32 object-cover rounded-full" src={img} alt={alt} />
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
