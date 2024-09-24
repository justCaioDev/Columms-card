import CardColumm from "./CardColumm";
import PreviewCardContainer from "./style";
import SedanImage from '/src/assets/icon-sedans.svg'
import SUVImage from '/src/assets/icon-suvs.svg'
import LuxuryImage from '/src/assets/icon-luxury.svg'


export default function PreviewCard() {
    return (
        <>
            <PreviewCardContainer>
                <CardColumm title='Sedans teste'
                 content='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' 
                 image={ SedanImage } 
                 bgcolor=' hsl(31, 77%, 52%)' />

                <CardColumm title='SUVs'
                 content='Take an SUV for its spacious interior power, and versatility. Perfect for your next family vacation and off-road adventures.' 
                 image={ SUVImage } 
                 bgcolor='hsl(184, 100%, 22%)' />

                <CardColumm title='Luxury'
                 content='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.' 
                 image={ LuxuryImage } 
                 bgcolor='hsl(179, 100%, 13%)' />
            </PreviewCardContainer>
        </>
    )
}