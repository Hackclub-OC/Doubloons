import { CardContent, Card } from "./ui/card";
import * as motion from "motion/react-client";

export default function Allergies() {
  return (
    <>
      <Card className="p-5">
        <CardContent>
          <p className="pt-5 text-sm text-slate-500">
            More votes definitely means more doubloons.
          </p>
          <motion.p initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8 }} className="text-4xl font-bold py-3 tracking-tight">
            More votes = More Doubloons!
          </motion.p>
          <p className="text-sm text-slate-500">
            So try to earn more votes instead!
          </p>
        </CardContent>
      </Card>
    </>
  );
}
