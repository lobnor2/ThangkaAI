"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  prompt: z.string().min(5),
});

const Page = () => {
  const [outputImg, setOutputImg] = useState<string | null>(null);
  const [inputPrompt, setInputPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "a child playing football near river",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className=" w-full h-[calc(100vh-4rem-2.5rem)] flex flex-col">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl">Create</h1>
        <p className="text-gray-500 text-lg">
          Generate Stunning Images from Text
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 px-5 h-full">
        <div className="lg:flex-[2] border border-green-500 flex flex-col items-start justify-center">
          <p className="mb-4">
            Type your prompt below to create any image you can imagine
          </p>
          <div className="flex gap-3 w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="a child playing football near river"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Generate</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="lg:flex-[1] border border-green-500 flex items-center justify-center">
          right less space
        </div>
      </div>
    </div>
  );
};

export default Page;
