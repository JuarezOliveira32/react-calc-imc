import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Container = ({children}: Props) => {

    return (
       <div className="w-full h-screen text-black bg-white font-arial">
        <div className="container pb-5 mx-auto px-5 lg:px-0">
            {children}
        </div>
       </div> 
    );
}