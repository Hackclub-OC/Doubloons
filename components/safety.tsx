import { CardContent, Card } from "./ui/card";
import * as motion from "motion/react-client";

export default function Safety() {
  return (
    <>
      <Card className="p-5">
        <CardContent>
          <p className="pt-5 text-sm text-slate-500">
            It does not necessarily mean that more hours means more doubloons.
          </p>
          <motion.p initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1 }} className="text-4xl font-bold py-3 tracking-tight">
            More Hours != More Doubloons 
          </motion.p>
          <p className="text-sm text-slate-500">
            
          </p>
        </CardContent>
      </Card>
    </>
  );
}
