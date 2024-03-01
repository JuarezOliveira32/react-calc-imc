"use client"

import Image from "next/image";
import poweredImage from "@/assets/powered.png";
import leftArrowImage from "@/assets/leftarrow.png"
import { Container } from "@/components/Container";
import { useState } from "react";
import { levels, calculateImc, Level } from "@/helpers/imc";
import { GridItem } from "@/components/GridItem/GridItem";


const Page = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Preencha todos os campos");
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <Container>
      <div className="text-black">
        <header className="">
          <div className="mt-10">
            <Image
              src={poweredImage}
              width={150}
              height={150}
              alt=""
            />
          </div>
        </header>
        <div className="flex flex-col mt-10 lg:flex-row">

          <div className="flex-1 sm:mr-0 lg:mr-10">
            <h1 className="text-4xl font-bold text-gray-700 mb-5">Calcule o seu IMC</h1>
            <p className="text-lg mb-10 text-gray-400">
              IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado 
              pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>
            <input 
              type="number" 
              placeholder="Digite a sua altura. EX: 1.5 (em métros)"
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}
              className="w-full border border-t-0 border-x-0 border-b-2 outline-none 
              border-gray-600/25 py-2.5 px-0.5 mb-5 text-sm disabled:opacity-50"
              disabled={toShow ? true : false}
            />
             <input 
              type="number" 
              placeholder="Digite o seu peso. EX: 75.3 (em kg)"
              value={weightField > 0 ? weightField : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
              className="w-full border border-t-0 border-x-0 border-b-2 outline-none
               border-gray-600/25 py-2.5 px-0.5 mb-5 text-sm disabled:opacity-50"
              disabled={toShow ? true : false}
            />

            <button 
              onClick={handleCalculateButton}
              className="bg-cyan-700 text-white text-base rounded-md py-4 px-0 w-full mt-10 
              hover:opacity-90 transition-all ease-linear disabled:opacity-50"
              disabled={toShow ? true : false}
            >Calcular</button>
          </div>

          {!toShow &&
            <div className="flex-1 flex my-12 sm:ml-0 sm:mt-12 lg:ml-10 lg:mt-0">
              <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                {levels.map((item, key) => (
                  <GridItem key={key} item={item} />
                ))}
              </div>
            </div>
          }
          {toShow && 
            <div className="flex-1 flex my-12 sm:mt-12">
              <div 
                className="absolute bg-cyan-500 w-16 h-16 flex justify-center 
                items-center cursor-pointer rounded-md transition-all ease-linear hover:opacity-80
                sm:ml-0 lg:-ml-7 lg:mt-36 lg:rounded-full"
                onClick={handleBackButton}
              >
                <Image src={leftArrowImage} height={25} width={25} alt="" />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </Container>
  );
}

export default Page;