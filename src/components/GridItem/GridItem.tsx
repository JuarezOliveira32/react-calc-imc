import { Level } from "@/helpers/imc";
import upImage from "@/assets/up.png";
import downImage from "@/assets/down.png";
import Image from "next/image";

type Props = {
    item: Level;
};

export const GridItem = ({item}: Props) => {
    return (
        <div 
            style={{backgroundColor: item.color}}
            className="text-white flex-1 flex flex-col justify-center items-center rounded-md p-5"
        >
            <div className="w-16 h-16 bg-black/10 rounded-full flex justify-center items-center">
                <Image src={item.icon === 'up' ? upImage : downImage} width={30} height={30} alt=""/>
            </div>
            <div className="text-2xl font-bold mt-1">
                {item.title}
            </div>

            {item.yourImc &&
                <div className="text-lg mx-0 mt-2.5 mb-12">Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className="text-sm my-3.5">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}