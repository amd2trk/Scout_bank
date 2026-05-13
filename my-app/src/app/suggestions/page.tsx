import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'


export default function Suggestions() {
  return (
    <>
      <div className='container w-[80%] mx-auto p-6 '>
        <h1 className='text-2xl text-blue-950 font-bold text-center mt-6 mb-6'>Suggestion Box</h1>
        <div className='flex items-center  justify-center'>
          <Card className="w-full max-w-sm">
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="text">Name</Label>
                    <Input
                      id="name"
                      type="name"
                      placeholder="Example"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="text">Suggestion</Label>
                    </div>
                    <Textarea id="suggestion" placeholder="Type your message here."  required />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full bg-navy font-semibold ">
                Submit Suggestion
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
