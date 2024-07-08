import { useState } from "react";
import { message, Form, Input, Button } from "antd";
const { TextArea } = Input;
import { MailOutlined } from "@ant-design/icons";

const ContactMe = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  /**
   * Handles the form submission.
   *
   * @param {Record<string, string>} values - The form values.
   * @returns {Promise<void>}
   */
  const handleSubmit = async (
    values: Record<string, string>
  ): Promise<void> => {
    try {
      setLoading(true);

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
        form.resetFields();
      } else {
        message.error("Failed sending Message");
      }
    } catch (error: any) {
      console.error("Error:", error);
      message.error("Failed sending Message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <section className="flex flex-col items-center justify-center gap-4 py-16 bg-white gap-y-8 mx-4">
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center space-x-2 rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium dark:bg-gray-800">
            <MailOutlined className=" sm:text-2xl text-lg text-gray-500 dark:text-gray-400" />
            <span className="sm:text-xl text-lg font-light">
              sabeenpandey2@gmail.com
            </span>
          </div>
          <button
            onClick={() =>
              navigator.clipboard.writeText("sabeenpandey2@gmail.com").then(
                function () {
                  message.success("Copied to the clipboard!");
                },
                function (err) {
                  message.error(" Could not copy email: ", err);
                }
              )
            }
            className=" text-sm md:text-md  border border-gray-400 md:px-2 px-1 py-1 rounded-lg bg-black text-white hover:bg-gray-800 hover:scale-[1.03] "
          >
            Copy Email
          </button>
        </div>
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
                  loading={loading}
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
