import { message } from "antd";
import React from "react";
import { JSX } from "react/jsx-runtime";
import { Form, Input, Button } from "antd";
const { TextArea } = Input;

const ContactMe = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-20 bg-white gap-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <div className="mx-auto mt-12 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <p>
              Feel free to reach out to me with any questions or inquiries. I'll
              get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium dark:bg-gray-800">
            <MailboxIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span id="email">sabeenpandey2@gmail.com</span>
          </div>
          <button
            className="bg-black text-white py-1 px-2 rounded-lg  text-sm hover:scale-[1.02] hover:bg-gray-800"
            onClick={() => {
              navigator.clipboard.writeText("sabenpandey2@gmail.com").then(
                function () {
                  message.success("Copied to Clipbord");
                },
                function () {
                  message.error("Could not copy text for some reason");
                }
              );
            }}
          >
            Copy Email
          </button>
        </div>

        <div className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          <p className="hidden">
            Feel free to reach out to me with any questions or inquiries. I'll
            get back to you as soon as possible.
          </p>
          <div className="mx-auto w-full max-w-sm ">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="flex flex-col w-96"
            >
              <Form.Item
                label={<span className=" font-[550]">Name</span>}
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  className="border border-gray-500"
                  placeholder="Your Name"
                />
              </Form.Item>
              <Form.Item
                label={<span className=" font-[550]">Email</span>}
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input
                  className="border border-gray-500"
                  placeholder="youremail@example.com"
                />
              </Form.Item>
              <Form.Item
                label={<span className=" font-[550]">Message</span>}
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea
                  className="border border-gray-500"
                  placeholder="Your message..."
                  rows={4}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ background: "black" }}
                  type="primary"
                  htmlType="submit"
                  className="w-full hover:scale-[1.04] duration-200 "
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;

function MailboxIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}
