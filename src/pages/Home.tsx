import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Card from "../components/Card";
import { VolumeX, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="bg-[#FAFAFA]">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GNO</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Header - Outside the card, in background */}
        <div className="flex justify-between items-center p-4 pt-6">
          <div className="w-12 h-12 bg-[#2c2b2c] rounded-full flex items-center justify-center">
            <VolumeX className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-[#2c2b2c] rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
