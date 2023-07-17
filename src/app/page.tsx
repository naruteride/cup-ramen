import { cupRamenData } from "./component/cupRamenData";
import RamenCard from "./component/RamenCard";

export default function Home() {
  return (
    <main className="flex flex-wrap gap-10">
      {
        cupRamenData.filter(item => {

          return 1;
        }).map(value => {
          return (
            <RamenCard value={value} />
          )
        })
      }
    </main>
  )
}