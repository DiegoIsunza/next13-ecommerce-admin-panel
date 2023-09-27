import prismadb from "@/lib/prismadb";

import { BillboardClient } from "./components/client";

const Billboards = async() => {

  const billboards = await prismadb.billboard.findMany();
  return (
    <div className="flex-col">
       <div className="flex-1 space-y-4 p-8 pt-6">
         <BillboardClient />
       </div>
    </div>
  );
};

export default Billboards;