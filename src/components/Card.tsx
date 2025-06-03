import { IonButton as Button } from "@ionic/react";
import { MoreVertical } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen  max-w-sm mx-auto font-sans">
      {/* Main White Card */}
      <div className="mx-4 mb-6 bg-white rounded-2xl overflow-hidden shadow-sm">
        {/* Top Half - Hero Image Section */}
        <div className="relative bg-[#ccc9c6] h-80">
          {/* Checkered pattern background */}
          <div
            className="w-full h-full opacity-50"
            style={{
              backgroundImage: `
linear-gradient(45deg, #dfddd9 25%, transparent 25%),
linear-gradient(-45deg, #dfddd9 25%, transparent 25%),
linear-gradient(45deg, transparent 75%, #dfddd9 75%),
linear-gradient(-45deg, transparent 75%, #dfddd9 75%)
`,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          />

          {/* Menu dots */}
          <div className="absolute top-4 left-4">
            <MoreVertical className="w-6 h-6 text-[#2c2b2c]" />
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-6 left-6">
            <h1 className="text-white text-2xl font-semibold">
              Title of Article
            </h1>
          </div>
        </div>

        {/* Bottom Half - Content Section */}
        <div className="p-6">
          <h2 className="text-[#2c2b2c] text-xl font-semibold mb-6">
            Why Should I Care?
          </h2>

          {/* Article Items */}
          <div className="space-y-6">
            <div>
              <Button className="bg-[#666566] hover:bg-[#7d7b7b] text-white rounded-full px-4 py-2 text-sm mb-3">
                Interest
              </Button>
              <p className="text-[#2c2b2c] text-lg">Prices rise in Spain</p>
              <div className="h-px bg-[#dfddd9] mt-4"></div>
            </div>

            <div>
              <Button className="bg-[#666566] hover:bg-[#7d7b7b] text-white rounded-full px-4 py-2 text-sm mb-3">
                Interest
              </Button>
              <p className="text-[#2c2b2c] text-lg">
                Your clothes are more expensive
              </p>
              <div className="h-px bg-[#dfddd9] mt-4"></div>
            </div>

            <div>
              <Button className="bg-[#666566] hover:bg-[#7d7b7b] text-white rounded-full px-4 py-2 text-sm mb-3">
                Interest
              </Button>
              <p className="text-[#2c2b2c] text-lg">New innovation research</p>
            </div>
          </div>

          {/* Pagination Dashes - Inside the card at the bottom with proper padding */}
          <div className="flex justify-center space-x-2 mt-8 mb-4">
            <div className="w-6 h-1 bg-[#666566] rounded-sm"></div>
            <div className="w-6 h-1 bg-[#ccc9c6] rounded-sm"></div>
            <div className="w-6 h-1 bg-[#ccc9c6] rounded-sm"></div>
            <div className="w-6 h-1 bg-[#ccc9c6] rounded-sm"></div>
            <div className="w-6 h-1 bg-[#ccc9c6] rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
