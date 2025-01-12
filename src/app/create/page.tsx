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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  prompt: z
    .string()
    .min(7, { message: "Prompt must be atleast 7 characters long" }),
});

const Page = () => {
  const [outputImg, setOutputImg] = useState<string | null>(null);
  const [inputPrompt, setInputPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
          <div className=" w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-3 w-2/3 justify-between"
              >
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="w-full flex flex-wrap">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="a child playing football near river"
                          className=""
                          {...field}
                        />
                      </FormControl>
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
