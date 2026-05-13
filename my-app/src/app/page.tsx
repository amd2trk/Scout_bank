import { SearchIcon } from "lucide-react"
import WideContentCard from './_components/WideContentCard/WideContentCard';
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function Home() {
  const topic = {name : "Knots",
               date:"24/12/2026", 
               tags:"gold"}
  return (
    <>
      <div className=" container mx-auto min-h-full flex justify-around items-center p-3 flex-col">
        <div className="flex flex-col searchBar ">
          <h1 className="text-navy font-bold text-3xl text-center p-2">Explore</h1>
          <div>
            <Field className="max-w-sm">
              <FieldLabel htmlFor="inline-start-input"></FieldLabel>
              <InputGroup className="bg-gray-300 rounded-full">
                <InputGroupInput className="placeholder:text-neutral-600" id="inline-start-input" placeholder="Search..." />
                <InputGroupAddon align="inline-start">
                  <SearchIcon className="text-neutral-600" />
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription></FieldDescription>
            </Field>
          </div>
        </div>
        <div className="pt-10 flex gap-8 flex-row flex-wrap justify-center items-center ">
          <WideContentCard title={topic.name} date={topic.date} tags={topic.tags} />
          <WideContentCard title={topic.name} date={topic.date} tags={topic.tags} />
          <WideContentCard title={topic.name} date={topic.date} tags={topic.tags} />
        </div>
      </div>
    </>
  );
}
