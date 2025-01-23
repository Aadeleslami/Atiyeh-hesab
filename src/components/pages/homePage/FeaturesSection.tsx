import { ItemListType, ItemType } from "@/Constants/FeatureList";

function FeaturesSection() {
  return (
    <section className="p-4 space-y-4">
      <h2 className="  font-extrabold text-2xl"> خدمات کاوشگران کاردان آتی نگر</h2>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ItemListType.map((item: ItemType) => (
          <div
            key={item.id}
            className="justify-self-center max-w-sm bg-gradient-to-t from-slate-50 to-slate-200 p-4 rounded-md"
          >
            <div className="flex justify-start items-center gap-x-4 mb-8">
              <item.icon color={item.colorIcon} />
              <span className="font-bold">{item.title}</span>
            </div>
            <span className="font-light">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
