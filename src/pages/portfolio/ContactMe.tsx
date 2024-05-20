import { useState } from "react";
import { message, Form, Input, Button } from "antd";
const { TextArea } = Input;

const ContactMe = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // State to manage loading state of the button

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true); // Set loading state to true while sending message

      // Make a POST request to the Formspree endpoint
      const response = await fetch("https://formspree.io/f/xjvndvba", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        message.success("Message Sent");
      } else {
        message.error("Failed sending Message");
      }
    } catch (error) {
      console.error("Error:", error);
      // Show error message if there's an exception
      message.error("Failed sending Message");
    } finally {
      setLoading(false); // Set loading state to false when request is completed
    }
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
        <div className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
                  className="w-full hover:scale-[1.04] duration-200"
                  loading={loading} // Set loading state of the button
                >
                  {loading ? "Sending..." : "Send Message"}
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
