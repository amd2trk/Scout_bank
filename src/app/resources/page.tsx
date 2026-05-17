"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import React from 'react'
import { SearchIcon } from "lucide-react"
import ContentCard from '../_components/ContentCard/ContentCard';
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function Resources() {
  const topic = {
    name: "Knots",
    date: "24/12/2026",
    tags: "gold"
  }
  return (
    <>
      <section className=' flex flex-col'>
        <div className='grid grid-cols-2 mb-6 container mx-auto w-[80%]'>
          <div>
            <h1 className='text-4xl text-blue-950 font-bold  mt-6 mb-6 '>The Scout Bank</h1>
            <span className='text-gray-400 text-sm'>Your source for all of the scouting information you will ever need</span>
            <div className='mt-4'>
              <Field className="max-w-sm shadow-xl">
                <InputGroup className='border-blue-950 rounded-full'>
                  <InputGroupInput className='placeholder:text-blue-950' id="inline-start-input" placeholder="Search..." />
                  <InputGroupAddon align="inline-start">
                    <SearchIcon className="text-muted-foreground text-navy" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
          </div>
        </div>
        <div className='flex border-t-2 border-t-gray-300'>
          <div className='p-5'>
            <h3 className='text-2xl text-blue-950 font-bold text-center mt-6 mb-6'> Filters:</h3>
            <div>
              <hr />
              <div>
                <h4 className='text-2xl text-blue-950 font-bold text-center mt-6 mb-6'>Leadership Topics:</h4>
                <FieldGroup className="max-w-sm">
                  <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                    <Label htmlFor="terms-checkbox">SWOT Analysis</Label>
                  </Field>
                  <Field orientation="horizontal">
                    <Checkbox
                      id="terms-checkbox-2"
                      name="terms-checkbox-2"
                      defaultChecked
                    />
                    <FieldContent>
                      <FieldLabel htmlFor="terms-checkbox-2">
                        Accept terms and conditions
                      </FieldLabel>
                    </FieldContent>
                  </Field>
                  <FieldLabel>
                  </FieldLabel>
                </FieldGroup>
              </div>
            </div>
          </div>
          <div className='  border-s-4 border-gray-300 w-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mb-10 mt-10'>
              <ContentCard title={topic.name} date={topic.date} tags={topic.tags}></ContentCard>
              <ContentCard title={topic.name} date={topic.date} tags={topic.tags}></ContentCard>
              <ContentCard title={topic.name} date={topic.date} tags={topic.tags}></ContentCard>
              <ContentCard title={topic.name} date={topic.date} tags={topic.tags}></ContentCard>
              <ContentCard title={topic.name} date={topic.date} tags={topic.tags}></ContentCard>
              <ContentCard title={topic.name} date={topic.date} tags={topic.tags}></ContentCard>
              <ContentCard title={topic.name} date={topic.date} tags={topic.tags}></ContentCard>
              <ContentCard title={topic.name} date={topic.date} tags={topic.tags}></ContentCard>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
