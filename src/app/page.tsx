import Image from "next/image";
import Homesection from "@/components/home";
import { ProductData } from "@/components/productdata";
import Promotions from "@/components/promotions";
import Productpage from "@/components/productpage";
import Newsletter from "@/components/newsletter";
import Jewellery from "@/components/jewellery";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col content-around justify-center items-center w-full gap-10 space-y-8">

<Homesection/>
<Promotions/>
<Productpage/>
 <Jewellery/>
 <Newsletter/>


    </main>
  );
}
